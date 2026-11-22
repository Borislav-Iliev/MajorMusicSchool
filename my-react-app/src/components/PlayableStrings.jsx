import { useRef, useEffect } from 'react'
import { STRINGS } from '../data/violinStrings'

const W = 320
const H = 440

/** Four playable violin strings: click or press Enter/Space to pluck and hear the open string. */
export default function PlayableStrings({ color = '#ffdfc0', accent = '#e8a54b', labelClass = 'font-display text-xl text-[#ffdfc0]', hintClass = 'text-[15px] text-[#ffdfc0]/75', mutedClass = 'text-[#ffdfc0]/55', hint = true, labels = true, onPluck }) {
  const audioRef = useRef(null)
  const pathRefs = useRef([])
  const startVibration = useRef(() => {})

  // The vibration loop lives in an effect so it can reschedule itself and read the clock.
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const active = STRINGS.map(() => null) // start time per string, or null when at rest
    let frame = 0

    const tick = () => {
      const now = performance.now()
      let any = false
      STRINGS.forEach(({ x }, i) => {
        const el = pathRefs.current[i]
        if (!el || active[i] === null) return
        const t = (now - active[i]) / 1000
        if (t > 2.4) {
          active[i] = null
          el.setAttribute('d', `M${x} 0 L${x} ${H}`)
          el.setAttribute('stroke', color)
          return
        }
        any = true
        const amp = reduceMotion ? 0 : 14 * Math.exp(-t * 2.4) * Math.cos(t * 38)
        el.setAttribute('d', `M${x} 0 Q${x + amp} ${H / 2} ${x} ${H}`)
        el.setAttribute('stroke', accent)
      })
      frame = any ? requestAnimationFrame(tick) : 0
    }

    startVibration.current = (i) => {
      active[i] = performance.now()
      if (!frame) frame = requestAnimationFrame(tick)
    }

    return () => {
      cancelAnimationFrame(frame)
      audioRef.current?.close?.()
      audioRef.current = null
    }
  }, [color, accent])

  const pluck = (i) => {
    const w = /** @type {any} */ (window)
    const Ctx = w.AudioContext || w.webkitAudioContext
    if (Ctx) {
      if (!audioRef.current) audioRef.current = new Ctx()
      const ctx = audioRef.current
      if (ctx.state === 'suspended') ctx.resume()
      const t0 = ctx.currentTime
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(3200, t0)
      filter.frequency.exponentialRampToValueAtTime(900, t0 + 1.4)
      gain.gain.setValueAtTime(0.0001, t0)
      gain.gain.exponentialRampToValueAtTime(0.22, t0 + 0.012)
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 2.2)
      filter.connect(gain).connect(ctx.destination)
      // A bowed-string-like body: the fundamental plus a quieter octave above it.
      ;[['sawtooth', 1, 0.5], ['triangle', 2, 0.35]].forEach(([type, mult, level]) => {
        const osc = ctx.createOscillator()
        const g = ctx.createGain()
        osc.type = type
        osc.frequency.value = STRINGS[i].freq * mult
        g.gain.value = level
        osc.connect(g).connect(filter)
        osc.start(t0)
        osc.stop(t0 + 2.3)
      })
    }
    startVibration.current(i)
    onPluck?.(i)
  }

  return (
    <div className="relative mx-auto w-full max-w-90">
      <div className="relative" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          {/* nut and bridge */}
          <line x1="20" y1="0" x2="300" y2="0" stroke={color} strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
          <line x1="20" y1={H} x2="300" y2={H} stroke={color} strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
          {STRINGS.map(({ x, width }, i) => (
            <path
              key={x}
              ref={(el) => { pathRefs.current[i] = el }}
              d={`M${x} 0 L${x} ${H}`}
              stroke={color}
              strokeWidth={width}
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex">
          {STRINGS.map(({ name, note }, i) => (
            <button
              key={note}
              type="button"
              onClick={() => pluck(i)}
              aria-label={`Струна ${name} – чуй тона`}
              className="group relative flex-1 cursor-pointer border-none bg-transparent p-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
            />
          ))}
        </div>
      </div>
      {labels && <div className="mt-5 flex" aria-hidden="true">
        {STRINGS.map(({ name, note }) => (
          <div key={note} className="flex-1 text-center">
            <div className={labelClass}>{name}</div>
            <div className={`text-[13px] ${mutedClass}`}>{note}</div>
          </div>
        ))}
      </div>}
      {hint && <p className={`mt-6 text-center ${hintClass}`}>Докосни струна и чуй как звучи.</p>}
    </div>
  )
}

