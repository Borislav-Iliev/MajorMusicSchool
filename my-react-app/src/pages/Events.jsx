import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import event1Img from '../assets/images/Event1.PNG'
import event2Img from '../assets/images/Event2.PNG'
import event3Img from '../assets/images/Event3.PNG'
import eventsHeroImg from '../assets/images/AboutUsLeft.PNG'

const events = [
    {
        img: event1Img,
        category: 'Творчество и музика',
        day: '19',
        month: 'СЕПТЕМВРИ',
        year: '2026',
        time: '19:00 ч.',
        title: '3D пано с релефнa техника',
        desc: 'На 19 септември ви каним на творческа вечер в Major Music School, посветена на изработката на 3D релефно пано. \
        Ще създадете собствено пано стъпка по стъпка, дори да нямате предишен опит в рисуването или релефното изкуство. \
        Местата са ограничени. Запишете се предварително и бъдете част от нашата следваща арт вечер.',
    },
    {
        img: event2Img,
        category: 'Творчество и музика',
        day: '25',
        month: 'СЕПТЕМВРИ',
        year: '2026',
        time: '19:00 ч.',
        title: 'Изработване на тефтери',
        desc: 'Каним ви на творческа вечер, в която ще превърнете обикновения тефтер в нещо лично и създадено изцяло от вас. \
        Ще имате възможност да изберете своя дизайн, да експериментирате с различни материали и да създадете тефтер, който носи вашия почерк — за идеи, планове, записки или просто за вдъхновение. \
        Не е необходим предишен опит. Само желание да творите. \
        Местата са ограничени. Запазете своето участие предварително.',
    },
    {
        img: event3Img,
        category: 'Творчество и музика',
        day: '26',
        month: 'СЕПТЕМВРИ',
        year: '2026',
        time: '19:00 ч.',
        title: 'Декупаж и рисуване',
        desc: 'Каним ви на уютна творческа вечер, посветена на декупажа — време да създадете нещо красиво със собствените си ръце и да се откъснете от ежедневието. \
        Ще работим с различни декоративни елементи и техники, с които всеки ще може да създаде свой уникален предмет, независимо дали има предишен опит. \
        А към творческата част ще добавим и чаша вино, добра компания и музика. \
        Не е необходим предишен опит. Всички материали са осигурени. \
        Местата са ограничени, затова е необходимо предварително записване.',
    }
]

function Events() {
    return (
        <div className="overflow-x-hidden">

            <Navbar />

            {/* ══ HERO BANNER ══ */}
            <section className="relative h-[420px] md:h-[520px] overflow-hidden flex items-end">
                <img
                    src={eventsHeroImg}
                    alt="Събития"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#3f0008] via-[#3f0008]/65 to-[#3f0008]/10" />

                <div className="relative z-10 w-full px-6 md:px-16 pb-10 md:pb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-[#ffdfc0]/40" />
                        <span className="text-[#ffdfc0]/60 text-[10px] tracking-[5px] uppercase">
                            Major Music School
                        </span>
                        <span className="h-px w-8 bg-[#ffdfc0]/40" />
                    </div>
                    <h1
                        className="font-display font-bold text-[#ffdfc0] leading-none mb-4"
                        style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)' }}
                    >
                        Събития
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[#ffdfc0]/70 text-[13px]">
                        <span>{events.length} предстоящи събития</span>
                        <span className="hidden md:inline w-1 h-1 rounded-full bg-[#ffdfc0]/40" />
                        <span>Следващо: {events[0].day} {events[0].month} {events[0].year}</span>
                    </div>
                </div>
            </section>

            {/* ══ EVENTS LIST ══ */}
            <section className="bg-[#fff5e9] px-6 md:px-16 py-16 md:py-24">

                {/* Section header */}
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <div>
                        <p className="text-[10px] uppercase tracking-[4px] text-[#3f0008]/50 mb-1">Всички</p>
                        <h2 className="font-display text-2xl md:text-3xl font-medium text-[#3f0008]">
                            Предстоящи Събития
                        </h2>
                    </div>
                    <span className="font-display text-[#3f0008]/20 font-bold text-5xl md:text-7xl leading-none select-none">
                        {events.length}
                    </span>
                </div>

                {/* Event rows — image left, text right on desktop */}
                <div className="space-y-0">
                    {events.map(({ img, category, day, month, year, time, title, desc }, i) => (
                        <article key={title}>
                            {/* Top divider */}
                            <div className="h-px bg-[#3f0008]/12" />

                            <div className="grid grid-cols-1 md:grid-cols-[72px_auto_1fr] gap-0 py-10 md:py-12 md:gap-x-10 items-start">

                                {/* Date column */}
                                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0 mb-6 md:mb-0 pt-1">
                                    <div className="md:hidden text-[10px] uppercase tracking-[3px] text-[#3f0008]/45">{month} {year}</div>
                                    <div className="hidden md:block text-[10px] uppercase tracking-[3px] text-[#3f0008]/45 mb-1">{month}</div>
                                    <div
                                        className="font-display font-bold text-[#3f0008] leading-none"
                                        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}
                                    >
                                        {day}
                                    </div>
                                    <div className="hidden md:block h-px w-full bg-[#3f0008]/20 mt-3" />
                                </div>

                                {/* Image column — full width on mobile, shrinks to image natural size on desktop */}
                                <div className="rounded-2xl overflow-hidden mb-6 md:mb-0 md:w-fit">
                                    <img
                                        src={img}
                                        alt={title}
                                        className="block w-full h-auto md:w-auto md:h-80 transition-transform duration-700 hover:scale-[1.02]"
                                    />
                                </div>

                                {/* Text column */}
                                <div className="flex flex-col justify-between h-full md:pl-2">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[4px] text-[#3f0008]/50 mb-3 block">
                                            {category}
                                        </span>
                                        <h3
                                            className="font-display font-medium text-[#3f0008] leading-tight mb-4"
                                            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
                                        >
                                            {title}
                                        </h3>
                                        <p className="text-[#3f0008]/55 text-[12px] uppercase tracking-[2px] mb-5">
                                            {day} {month} {year} &nbsp;·&nbsp; {time}
                                        </p>
                                        <p className="text-[#3f0008] text-[15px] leading-relaxed mb-8">
                                            {desc}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="h-px bg-[#3f0008]/12 mb-5" />
                                        <Link
                                            to="/contacts"
                                            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2.5px] text-[#3f0008] no-underline group"
                                        >
                                            <span className="border-b border-[#3f0008]/40 pb-px group-hover:border-[#3f0008] transition-colors duration-200">
                                                Запази своето място
                                            </span>
                                            <FaArrowRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}

                    {/* Bottom divider */}
                    <div className="h-px bg-[#3f0008]/12" />
                </div>
            </section>

            {/* ══ CTA BANNER ══ */}
            <section className="bg-[#3f0008] border-b border-[#ffdfc0]/15 px-6 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <p className="text-[#ffdfc0]/50 text-[10px] uppercase tracking-[4px] mb-3">Дайте своето предложение</p>
                    <h2
                        className="font-display font-medium text-[#ffdfc0] leading-tight"
                        style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
                    >
                        Предложете събитие което<br />желаете да организираме
                    </h2>
                </div>
                <Link
                    to="/contacts"
                    className="shrink-0 inline-flex items-center gap-3 px-8 py-4 border border-[#ffdfc0]/50 text-[#ffdfc0] text-[11px] uppercase tracking-[2.5px] no-underline hover:bg-[#ffdfc0] hover:text-[#3f0008] transition-all duration-300"
                >
                    Предложете събитие
                    <FaArrowRight className="text-[10px]" />
                </Link>
            </section>

            <Footer />

        </div>
    )
}

export default Events
