import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import PlayableStrings from '../components/PlayableStrings'
import { STRINGS } from '../data/violinStrings'
import prices from '../data/prices.json'

const CLOUDINARY = 'https://res.cloudinary.com/s4o4wqaq/image/upload/f_auto,q_auto'
const zaraImg = `${CLOUDINARY}/w_900/v1788891553/IMG_8319.jpg`
const PHONE = '+359893641786'

// Each skill belongs to one string – thicker string, longer-grown skill.
const skills = [
  { string: 0, title: 'Слух', text: 'Цигулката няма клавиши и прагчета: всяка нота се намира със слух. Затова слухът се изостря още от първите уроци.' },
  { string: 1, title: 'Концентрация', text: 'Докато свириш, следиш едновременно нотите, лъка и положението на ръката.' },
  { string: 2, title: 'Координация', text: 'Лявата ръка намира нотите, дясната води лъка. Две ръце с различни задачи, които работят като едно.' },
  { string: 3, title: 'Дисциплина', text: 'Редовното упражняване на малки стъпки изгражда стабилна основа за дългосрочно развитие.' },
]

const btnPrimary =
  'inline-flex items-center justify-center gap-3 rounded-full bg-[#ffdfc0] px-7 py-3.5 text-[15px] font-medium text-[#3f0008] no-underline ' +
  'transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffdfc0]'
const btnGhost =
  'inline-flex items-center justify-center gap-3 rounded-full border border-[#ffdfc0]/50 px-7 py-3.5 text-[15px] font-medium text-[#ffdfc0] no-underline ' +
  'transition-colors duration-300 hover:bg-[#ffdfc0]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffdfc0]'

function ViolinCourse() {
  const packages = prices.filter((p) => p.id.startsWith('individual'))

  return (
    <div className="overflow-x-hidden bg-[#fff5e9]">
      <Seo
        title="Уроци по цигулка в Пловдив"
        description="Индивидуални уроци по цигулка в Пловдив при Зара Илиева – слух, лък, техника и увереност. Запишете пробен урок в Major Music School."
      />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Уроци по цигулка',
        description: 'Индивидуални уроци по цигулка в Пловдив.',
        provider: { '@type': 'Organization', name: 'Major Music School', sameAs: 'https://majormusicschool.com' },
      })}</script>

      <Navbar />

      {/* Hero */}
      <section className="bg-[#240005] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h1 className="hero-rise m-0 font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-medium leading-[1.04] text-[#ffdfc0]">
              Уроци по цигулка в Пловдив
            </h1>
            <p className="hero-rise mt-6 mb-9 max-w-md text-[17px] font-light leading-[1.7] text-[#ffdfc0]/85" style={{ animationDelay: '120ms' }}>
              Индивидуални уроци с Зара Илиева. Първо се учиш да слушаш, после да свириш, и така изграждаш стабилна основа за дълги години с инструмента.
            </p>
            <div className="hero-rise flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
              <Link to="/contacts" className={btnPrimary}>Запиши пробен урок</Link>
              <a href="#prices" className={btnGhost}>Виж цените</a>
            </div>
          </div>
          <PlayableStrings />
        </div>
      </section>

      {/* What the violin trains – one skill per string */}
      <section className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="m-0 max-w-2xl font-display text-4xl font-medium leading-[1.1] text-[#3f0008] md:text-5xl">
            Какво развива цигулката
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ string, title, text }) => (
              <div key={title} className="flex gap-5">
                <span
                  className="shrink-0 rounded-full bg-[#3f0008]"
                  style={{ width: `${STRINGS[string].width}px` }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="m-0 mb-3 font-display text-2xl font-medium text-[#3f0008]">{title}</h3>
                  <p className="m-0 text-[16px] font-light leading-[1.75] text-[#3f0008]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher */}
      <section className="bg-[#3f0008] px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-md md:max-w-none" style={{ aspectRatio: '4 / 5' }}>
            <img src={zaraImg} alt="Зара Илиева с цигулка" loading="lazy" className="h-full w-full object-cover object-[50%_20%]" />
          </div>
          <div>
            <h2 className="m-0 font-display text-4xl font-medium leading-[1.1] text-[#fff5e9] md:text-5xl">Преподавател: Зара Илиева</h2>
            <p className="mt-6 max-w-xl text-[17px] font-light leading-[1.8] text-[#ffdfc0]/85">
              Основател на Major Music School и носител на множество отличия от национални и международни конкурси. Работи с деца повече от три години и съчетава професионална подготовка с индивидуален подход към всеки ученик.
            </p>
            <dl className="mt-10 mb-0 max-w-xl border-t border-[#ffdfc0]/20">
              {[
                ['Средно образование', 'НУМТИ „Добрин Петков“'],
                ['Бакалавър', 'АМТИИ „Проф. Асен Диамандиев“'],
                ['Магистратура', 'Изпълнителско изкуство – цигулка и методика на обучението'],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-[#ffdfc0]/20 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="text-[15px] text-[#ffdfc0]/60">{k}</dt>
                  <dd className="m-0 text-[16px] text-[#ffdfc0]">{v}</dd>
                </div>
              ))}
            </dl>
            <Link to="/team" className="mt-8 inline-block border-b border-[#ffdfc0] pb-1 text-[15px] font-medium text-[#ffdfc0] no-underline transition-colors duration-300 hover:border-white hover:text-white">
              Виж целия екип
            </Link>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="scroll-mt-4 px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="m-0 font-display text-4xl font-medium leading-[1.1] text-[#3f0008] md:text-5xl">Цени на уроците</h2>
          <p className="mt-5 max-w-xl text-[17px] font-light leading-[1.7] text-[#3f0008]">
            Уроците по цигулка са индивидуални. Започни с един урок или избери пакет за редовни занимания.
          </p>
          <ul className="m-0 mt-12 list-none border-t border-[#3f0008]/20 p-0">
            {packages.map((p) => (
              <li key={p.id} className="grid items-baseline gap-x-8 gap-y-2 border-b border-[#3f0008]/20 py-7 md:grid-cols-[1fr_1.4fr_11rem]">
                <h3 className="m-0 flex flex-wrap items-center gap-3 font-display text-2xl font-medium text-[#3f0008]">
                  {p.title}
                  {p.badge && <span className="rounded-full bg-[#3f0008] px-3 py-1 font-sans text-[13px] font-normal text-[#ffdfc0]">{p.badge}</span>}
                </h3>
                <p className="m-0 max-w-md text-[16px] font-light leading-[1.7] text-[#3f0008]">{p.subtitle}</p>
                <p className="m-0 font-display text-3xl font-medium text-[#3f0008] md:text-right">
                  {p.monthlyPrice ?? p.lessonPrice} {p.currency}
                  <span className="ml-2 font-sans text-[15px] font-light text-[#3f0008]/70">{p.monthlyPrice ? 'на месец' : 'на урок'}</span>
                </p>
              </li>
            ))}
          </ul>
          <Link to="/prices" className="mt-8 inline-block border-b border-[#3f0008] pb-1 text-[15px] font-medium text-[#3f0008] no-underline transition-colors duration-300 hover:border-[#7a1020] hover:text-[#7a1020]">
            Всички цени, включително групови
          </Link>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#3f0008] px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="m-0 max-w-2xl font-display text-4xl font-medium leading-[1.1] text-[#fff5e9] md:text-6xl">Готов ли си за първия урок?</h2>
          <p className="mt-6 mb-9 max-w-md text-[17px] font-light leading-[1.7] text-[#ffdfc0]/85">
            Пиши ни или се обади. Ще уточним ниво, възраст и удобен час за пробен урок по цигулка.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contacts" className={btnPrimary}>Запиши пробен урок</Link>
            <a href={`tel:${PHONE}`} className={btnGhost}><FaPhoneAlt aria-hidden="true" /> 0893 641 786</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ViolinCourse
