import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGuitar, FaMicrophone, FaMusic, FaUsers } from 'react-icons/fa'
import { GiViolin, GiGrandPiano, GiSaxophone   } from 'react-icons/gi'
import Footer from './components/Footer'
import flipImg from './assets/images/Flip.JPG'
import zaraImg from './assets/images/IMG_8319.JPG'
import card1Img from './assets/images/IMG_8311.JPG'
import card3Img from './assets/images/IMG_8315.JPG'
import card4Img from './assets/images/IMG_8312.JPG'
import card5Img from './assets/images/IMG_8313.JPG'
import card6Img from './assets/images/IMG_8314.JPG'
import card7Img from './assets/images/IMG_8316.jpg'
import event1Img from './assets/images/Event1.PNG'
import event2Img from './assets/images/Event2.PNG'
import event3Img from './assets/images/Event3.PNG'
import heroSectionImg from './assets/images/УРОЦИ.PNG'
import phylosophyImg from './assets/images/IMG_3172.JPG'
import foundersHeroImg from './assets/images/MEET THE FOUNDERS.JPG'
import './App.css'

const navLink =
  'relative pb-[3px] text-[12px] uppercase tracking-[1.5px] text-[#ffdfc0] no-underline ' +
  'after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-px after:bg-[#ffdfc0] ' +
  'after:transition-all after:duration-300 hover:after:left-0 hover:after:right-0'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesVisible, setServicesVisible] = useState(false)
  const [flippedCards, setFlippedCards] = useState({})
  const [teamIndex, setTeamIndex] = useState(0)
  const servicesRef = useRef(null)

  const toggleCard = (title) => setFlippedCards(prev => ({ ...prev, [title]: !prev[title] }))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setServicesVisible(true) },
      { threshold: 0.1 }
    )
    if (servicesRef.current) observer.observe(servicesRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-x-hidden bg-aura-bg">

      {/* Hero Banner with overlaid nav */}
      <section className="relative w-full h-screen overflow-hidden bg-black">

        <nav className="flex items-center justify-between px-6 md:px-16 py-5 absolute top-0 inset-x-0 z-10 border-b border-white/12">
          <Link to="/" className="flex flex-col leading-tight items-center">
            <span className="font-display text-4xl font-bold tracking-[4px] text-[#ffdfc0]">MAJOR</span>
            <span className="font-display text-[13px] font-medium tracking-[3px] text-[#ffdfc0]/80 uppercase">Music School</span>
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {[
              { label: 'За нас', href: '/about-us' },
              { label: 'Цени', href: '/prices' },
              { label: 'Събития', href: '/events' },
              { label: 'Екип', href: '/team' },
              { label: 'Контакти', href: '/contacts' },
            ].map(({ label, href }) => (
              <Link key={label} to={href} className={navLink}>{label}</Link>
            ))}
          </div>
          <button
            className="md:hidden flex flex-col justify-center gap-1.25 bg-transparent border-none cursor-pointer p-1 z-20"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 translate-y-[-6.5px]' : ''}`} />
          </button>
        </nav>

        {/* Mobile slide-in menu */}
        <div className={`fixed top-0 right-0 bottom-0 w-[70vw] max-w-75 bg-[#ffdfc0] backdrop-blur-xl z-15 flex flex-col items-end pt-22 px-10 pb-10 transition-transform duration-450 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            className="absolute top-5 right-6 bg-transparent border-none text-[2rem] leading-none text-[#3f0008] hover:text-aura-accent transition-colors cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {[
            { label: 'За нас', href: '/about-us' },
            { label: 'Цени', href: '/prices' },
            { label: 'Събития', href: '/events' },
            { label: 'Екип', href: '/team' },
            { label: 'Контакти', href: '/contacts' },
          ].map(({ label, href }) => (
            <Link key={label} to={href} onClick={() => setMenuOpen(false)}
              className="font-display text-2xl font-medium text-[#3f0008] hover:text-aura-accent transition-colors duration-300 no-underline py-2 text-right">
              {label}
            </Link>
          ))}
        </div>

        <img
          src={foundersHeroImg}
          alt="Meet the founders"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none w-full px-4">
          <h1 className="font-display font-medium tracking-[6px] text-[#ffdfc0] mb-3 m-0 [text-shadow:0_2px_24px_rgba(0,0,0,0.18)] text-[clamp(2rem,6vw,5rem)]">
            MAJOR MUSIC SCHOOL
          </h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#fff5e9]">
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 order-2 lg:order-1">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] mb-6 text-[#3f0008]">
            ПОВЕЧЕ ОТ ШКОЛА<br />ОТ ЛЮБОВ КЪМ ИЗКУСТВО
          </h2>
          <p className="text-[#3f0008] font-light leading-[1.8] max-w-md mb-10 text-[17px]">
            Major Music School е място, където изкуството вдъхновява, развива и събира хора с общи интереси.
            Макар музиката да е в сърцето на всичко, което правим, ние вярваме, че творчеството има много форми и заслужава пространство, в което да се развива свободно.
          </p>
          <Link to="/about-us" className="text-[11px] uppercase tracking-[2px] font-medium text-[#3f0008] border-b border-[#3f0008] pb-1 w-fit hover:text-aura-accent transition-colors duration-300 no-underline">
            Научи повече
          </Link>
        </div>
        <div className="h-72 sm:h-96 md:h-120 lg:h-150 order-1 lg:order-2 overflow-hidden">
          <img src={heroSectionImg} alt="Уроци" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="grid grid-cols-1 lg:grid-cols-2 py-16 md:py-24 bg-[#fff5e9]">
        <div className="mx-6 md:mx-16 lg:ml-16 lg:mr-0 h-75 md:h-105 lg:h-125 overflow-hidden">
          <img src={phylosophyImg} alt="Философия" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-6 md:px-16 py-12 lg:py-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-8 text-[#3f0008]">Звукозаписно студио</h2>
          <p className="text-[#3f0008] font-light leading-[1.9] max-w-md mb-4 text-[17px]">
            Изготвяме професионален запис, микс и мастъринг, както и създаваме авторска музика, текст и аранжимент.
            Работим с всички музикални жанрове.
          </p>
          <p className="text-[#3f0008] font-light leading-[1.9] max-w-md">
            От първата идея до готовата песен – ще бъдем до теб през целия процес.
          </p>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="px-6 md:px-16 py-16 md:py-24 bg-[#3f0008]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[#fff5e9]">Уроци</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 bg-[#3f0008]">
          {[
            { title: 'Уроци по пиано', desc: 'Уроците по пиано са подходящи за всички нива — от начинаещи, които правят първите си стъпки, до напреднали ученици, които искат да развиват техниката и музикалните си умения.', href: '/contacts', icon: <GiGrandPiano /> },
            { title: 'Уроци по китара', desc: 'Уроците по китара съчетават техника, ритъм, музикален слух и творчество, независимо дали ученикът започва от нулата или вече има опит.', href: '/contacts', icon: <FaGuitar /> },
            { title: 'Уроци по цигулка', desc: 'Уроците по цигулка развиват музикален слух, концентрация, координация и дисциплина, като изграждат стабилна основа за дългосрочно музикално развитие.', href: '/contacts', icon: <GiViolin /> },
            { title: 'Уроци по пеене', desc: 'Развиваме дишането, интонацията, вокалната техника и контрола върху гласа, като работим с всеки ученик според неговото ниво, глас и музикални цели.', href: '/contacts', icon: <FaMicrophone /> },
            { title: 'Уроци по саксофон', desc: 'Уроците по саксофон развиват правилно дишане, техника, интонация и чувство за ритъм, като помагат на учениците уверено да преминат от първите ноти към свободното изпълнение.', href: '/contacts', icon: <GiSaxophone /> },
            { title: 'Уроци по народно пеене', desc: 'Запознаваме учениците с богатството на българския фолклор, като развиваме вокалната техника, музикалния слух и индивидуалния им почерк.', href: '/contacts', icon: <FaMusic /> },
          ].map(({ title, desc, href, icon }, i) => {
            const dir = ['animate-from-left', 'animate-from-top', 'animate-from-right'][i % 3]
            return (
              <div
                key={title}
                className={`group bg-[#fff5e9] rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 ${servicesVisible ? dir : 'opacity-0'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-[#3f0008]">{icon}</span>
                  <h3 className="font-display text-xl font-medium text-[#3f0008]">{title}</h3>
                </div>
                <p className="text-[#3f0008] font-light leading-[1.8] text-sm flex-1">{desc}</p>
                <Link to={href} className="text-[11px] uppercase tracking-[2px] font-medium text-[#3f0008] border-b border-[#3f0008] pb-0.5 w-fit hover:opacity-70 transition-opacity duration-300 no-underline">
                  Запиши своя час
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-16 py-16 md:py-24 bg-[#fff5e9]">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[3px] text-[#3f0008] mb-3">Запознайте се с екипа</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[#3f0008]">Нашият екип</h2>
        </div>

        {(() => {
          const teamMembers = [
            {
              frontImg: card1Img, title: 'Людмил Харизанов', meta: 'Учител по пеене',
              bio: [
                'Людмил Харизанов е преподавател по поп и джаз пеене, тонрежисьор и основател на Major Music School. Вече повече от пет години работи с деца и възрастни, като съчетава съвременни методи на обучение, индивидуален подход и богат практически опит.',
                'Завършва Национално училище за музикално и танцово изкуство „Добрин Петков" със специалност поп и джаз пеене, а след това придобива бакалавърска степен в Академия за музикално, танцово и изобразително изкуство „Проф. Асен Диамандиев" със специалност поп и джаз пеене и методика на преподаване на пеенето.',
                'Допълнително развива уменията си в сферата на музикалната продукция, като завършва Sound Ninja Academy, където изучава Music Production, Mixing & Mastering. Освен преподавател, Людмил е композитор, аранжор и текстописец, а през 2023 г. е участник в Гласът на България в отбора на Мария Илиева.',
              ]
            },
            {
              frontImg: zaraImg, title: 'Зара Илиева', meta: 'Учител по цигулка',
              bio: [
                'Зара Илиева е преподавател по цигулка и основател на Major Music School. Носител е на множество отличия от национални и международни конкурси и вече повече от три години работи с деца, като съчетава професионална подготовка, индивидуален подход и отдаденост към всеки свой ученик.',
                'Завършва Национално училище за музикално и танцово изкуство „Добрин Петков" със специалност цигулка, а след това придобива бакалавърска степен в Академия за музикално, танцово и изобразително изкуство „Проф. Асен Диамандиев". В момента продължава образованието си в магистърска програма по изпълнителско изкуство – цигулка и методика на обучението.',
              ]
            },
            {
              frontImg: card4Img, title: 'Николай Бобчев', meta: 'Учител по китара, бас и саксофон',
              bio: [
                'Николай Бобчев е професионален музикант с богат сценичен опит и преподавател в Major Music School. Завършил е Академията за музикално, танцово и изобразително изкуство „Проф. Асен Диамандиев“ – Пловдив, със специалност поп и джаз китара. Владее няколко инструмента, сред които китара, бас китара, саксофон и контрабас, което му позволява да предава на учениците си цялостен поглед върху музиката и ансамбловото музициране.',
                'Освен като преподавател, Николай развива активна концертна дейност като музикант в една от най-успешните български групи – „Керана и космонавтите“, с която участва в концерти, фестивали и телевизионни продукции в цялата страна. Паралелно с това работи и по свои авторски музикални проекти.'
              ]
            },
            {
              frontImg: card5Img, title: 'Йоан Хубенов', meta: 'Учител по пиано',
              bio: [
                'Йоан Хубенов завършва НУМТИ „Добрин Петков“ – Пловдив с отличие, а след това продължава образованието си в НМА „Проф. Панчо Владигеров“ – София, където завършва двойна магистратура – хорово дирижиране и хармония и пиано.',
                'На 23 години вече преподава в НУМТИ „Добрин Петков“ – Пловдив и е преподавател по хармония в НМУ „Любомир Пипков“ – София.',
                'В Major Music School Йоан преподава пиано, като съчетава сериозната си музикална подготовка с индивидуален подход към всеки ученик.'
              ]
            },
            {
              frontImg: card3Img, title: 'Веселина Йозова', meta: 'Учител по народно пеене',
              bio: [
                'Веселина Йозова е преподавател по народно пеене в Major Music School. С любов към българския фолклор и индивидуален подход към всеки ученик, тя вдъхновява децата да развиват своя глас и да откриват красотата на народната музика.',
                'Завършва Средно училище „Любен Каравелов" със специалност народно пеене, а след това придобива бакалавърска степен в Академия за музикално, танцово и изобразително изкуство „Проф. Асен Диамандиев" със специалност педагогика на обучението по музика с народно пеене и методика на преподаването.',
                'В своите уроци Веселина съчетава правилното вокално развитие с богатството на българския фолклор, като насърчава учениците да изграждат увереност, музикален слух и любов към народната музика.',
              ]
            },
            {
              frontImg: card6Img, title: 'Михаела Сярова', meta: 'Учител по арфа',
              bio: [
                'Михаела Сярова свири на арфа от 7-годишна възраст. Завършва НУМТИ „Добрин Петков“ – Пловдив, а след това продължава образованието си в АМТИИ „Проф. Асен Диамандиев“ със специалност "Педагогика на обучението по музика".',
                'От една година преподава на деца и им помага да направят своите първи стъпки в света на арфата, като съчетава професионалната подготовка с индивидуален подход и внимание към всеки ученик.'
              ]
            },
            {
              frontImg: card7Img, title: 'Шукрю Ахмедов', meta: 'Учител по тромпет',
              bio: [
                'Шукрю Ахмедов завършва Музикалното училище в Бургас със специалност тромпет, а след това продължава образованието си в АМТИИ „Проф. Асен Диамандиев“ – Пловдив, със специалност Изпълнителско изкуство с тромпет.',
                'Преподава на деца и възрастни, като съчетава професионалната си подготовка с богат сценичен опит. Свири в различни оркестри и бендове, а сред най-големите му музикални интереси е джазът и джаз тромпетът.'
              ]
            },
          ]
          const pageSize = 4
          const totalPages = Math.ceil(teamMembers.length / pageSize)
          const canBack = teamIndex > 0
          const canForward = teamIndex < totalPages - 1
          const teamPages = Array.from({ length: totalPages }, (_, p) => teamMembers.slice(p * pageSize, p * pageSize + pageSize))

          // Shared card renderer — used in both mobile grid and desktop carousel
          const renderCard = ({ frontImg, title, meta, bio }) => (
            <div className="cursor-pointer" style={{ perspective: '1000px' }} onClick={() => toggleCard(title)}>
              <div
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transform: flippedCards[title] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  position: 'relative',
                  aspectRatio: '9/16',
                }}
              >
                <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                  <img src={frontImg} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <div className="w-full h-full bg-[#3f0008] flex flex-col items-start px-8 py-8 overflow-y-auto">
                    <div className="relative w-full h-28 shrink-0 overflow-hidden mb-2">
                      <img src={flipImg} alt="logo" className="absolute top-0 left-0 w-full" />
                    </div>
                    {bio.map((para, idx) => (
                      <p key={idx} className={`text-[#ffdfc0] font-light leading-[1.9] text-sm text-center px-3 ${idx < bio.length - 1 ? 'mb-4' : ''}`}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl font-medium mb-1 mt-5 text-[#3f0008]">{title}</h3>
              <p className="text-[11px] uppercase tracking-[1px] text-[#3f0008]">{meta}</p>
            </div>
          )

          return (
            <>
              {/* ── Mobile / tablet: responsive grid, all 4 cards, no arrows ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:hidden">
                {teamMembers.map(m => (
                  <div key={m.title}>{renderCard(m)}</div>
                ))}
              </div>

              {/* ── Desktop (lg+): 3-per-page carousel with slide arrows ── */}
              <div className="hidden lg:flex items-center gap-4">
                <button
                  onClick={() => setTeamIndex(i => i - 1)}
                  disabled={!canBack}
                  className="shrink-0 w-10 h-10 rounded-full border border-[#3f0008]/20 bg-white flex items-center justify-center text-[#3f0008] hover:bg-[#3f0008] hover:text-[#ffdfc0] transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
                  aria-label="Предишен"
                >&#8592;</button>

                <div className="flex-1 overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${teamIndex * (100 / totalPages)}%)`, width: `${totalPages * 100}%` }}
                  >
                    {teamPages.map((page, pageIdx) => (
                      <div key={pageIdx} style={{ width: `${100 / totalPages}%` }} className="grid grid-cols-4 gap-8 px-4">
                        {page.map(m => (
                          <div key={m.title}>{renderCard(m)}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setTeamIndex(i => i + 1)}
                  disabled={!canForward}
                  className="shrink-0 w-10 h-10 rounded-full border border-[#3f0008]/20 bg-white flex items-center justify-center text-[#3f0008] hover:bg-[#3f0008] hover:text-[#ffdfc0] transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
                  aria-label="Следващ"
                >&#8594;</button>
              </div>
            </>
          )
        })()}
      </section>
      <div className="h-px bg-[#3f0008] mx-6 md:mx-16" />

      {/* Events */}
      <section className="px-6 md:px-16 py-16 md:py-24 bg-[#fff5e9]">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[3px] text-aura-accent mb-3">Събития</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-aura-text">Предстоящи Събития</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { date: '19 Септември 2026', title: '3D Пано с Релефна Техника', img: event1Img },
            { date: '25 Септември 2026', title: 'Изработване на Тефтери', img: event2Img },
            { date: '26 Септември 2026', title: 'Декупаж и Рисуване', img: event3Img },
          ].map(({ date, title, img }) => (
            <article key={title} className="group cursor-pointer">
              <div className="w-full rounded-2xl overflow-hidden mb-5 transition-transform duration-500 group-hover:scale-[0.98]" style={{ aspectRatio: '4/5' }}>
                {img ? <img src={img} alt={title} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-aura-journal" />}
              </div>
              <p className="text-[10px] uppercase tracking-[2px] text-aura-accent mb-2">{date}</p>
              <h3 className="font-display text-xl font-medium text-aura-text">{title}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App