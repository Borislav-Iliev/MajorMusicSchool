import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGuitar, FaMicrophone, FaMusic, FaArrowRight, FaPhoneAlt } from 'react-icons/fa'
import { GiViolin, GiGrandPiano, GiSaxophone, GiHarp, GiTrumpet } from 'react-icons/gi'
import Seo from './components/Seo'
import Footer from './components/Footer'
import './App.css'

const CLOUDINARY = 'https://res.cloudinary.com/s4o4wqaq/image/upload/f_auto,q_auto'
const flipImg = `${CLOUDINARY}/v1788891548/Flip.jpg`
const zaraImg = `${CLOUDINARY}/w_800/v1788891553/IMG_8319.jpg`
const card1Img = `${CLOUDINARY}/w_800/v1788891551/IMG_8311.jpg`
const card3Img = `${CLOUDINARY}/w_800/v1788891553/IMG_8315.jpg`
const card4Img = `${CLOUDINARY}/w_800/v1788891552/IMG_8312.jpg`
const card5Img = `${CLOUDINARY}/w_800/v1788891553/IMG_8313.jpg`
const card6Img = `${CLOUDINARY}/w_800/v1788891553/IMG_8314.jpg`
const card7Img = `${CLOUDINARY}/w_800/v1788891553/IMG_8316.jpg`
const event1Img = `${CLOUDINARY}/w_800/v1788891550/Event1.png`
const event2Img = `${CLOUDINARY}/w_800/v1788891550/Event2.png`
const event3Img = `${CLOUDINARY}/w_800/v1788891551/Event3.png`
const phylosophyImg = `${CLOUDINARY}/w_1000/v1788891550/IMG_3172.jpg`
const foundersHeroImg = `${CLOUDINARY}/w_1600/v1788891554/MEET_THE_FOUNDERS.jpg`
const heroSectionImg = `${CLOUDINARY}/w_1000/v1788892537/%D0%A3%D0%A0%D0%9E%D0%A6%D0%98.jpg`

const PHONE = '+359893641786'

const links = [
  { label: 'За нас', href: '/about-us' },
  { label: 'Цени', href: '/prices' },
  { label: 'Събития', href: '/events' },
  { label: 'Екип', href: '/team' },
  { label: 'Контакти', href: '/contacts' },
]

const lessons = [
  { title: 'Пиано', desc: 'За всички нива — от първите стъпки до напреднали, които развиват техниката и музикалните си умения.', icon: <GiGrandPiano /> },
  { title: 'Китара', desc: 'Техника, ритъм, музикален слух и творчество, независимо дали започваш от нулата или вече имаш опит.', icon: <FaGuitar /> },
  { title: 'Цигулка', href: '/courses/violin', desc: 'Развива слух, концентрация, координация и дисциплина и изгражда основа за дългосрочно развитие.', icon: <GiViolin /> },
  { title: 'Пеене', desc: 'Дишане, интонация, вокална техника и контрол върху гласа — според твоето ниво, глас и цели.', icon: <FaMicrophone /> },
  { title: 'Саксофон', desc: 'Правилно дишане, техника, интонация и ритъм — от първите ноти към свободното изпълнение.', icon: <GiSaxophone /> },
  { title: 'Народно пеене', desc: 'Богатството на българския фолклор, вокална техника, слух и собствен почерк.', icon: <FaMusic /> },
  { title: 'Арфа', desc: 'Първите стъпки в света на арфата, с индивидуален подход и внимание към всеки ученик.', icon: <GiHarp /> },
  { title: 'Тромпет', desc: 'За деца и възрастни — от първите звуци до свободно изпълнение, с обич към джаза.', icon: <GiTrumpet /> },
]

const btnPrimary =
  'inline-flex items-center justify-center gap-3 rounded-full bg-[#ffdfc0] px-7 py-3.5 text-[15px] font-medium text-[#3f0008] no-underline ' +
  'transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffdfc0]'
const btnGhost =
  'inline-flex items-center justify-center gap-3 rounded-full border border-[#ffdfc0]/50 px-7 py-3.5 text-[15px] font-medium text-[#ffdfc0] no-underline ' +
  'transition-colors duration-300 hover:bg-[#ffdfc0]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffdfc0]'
const navLink =
  'relative pb-[3px] text-[15px] text-[#ffdfc0] no-underline ' +
  'after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-px after:bg-[#ffdfc0] ' +
  'after:transition-all after:duration-300 hover:after:left-0 hover:after:right-0'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [flippedCards, setFlippedCards] = useState({})
  const [teamIndex, setTeamIndex] = useState(0)

  const toggleCard = (title) => setFlippedCards(prev => ({ ...prev, [title]: !prev[title] }))

  return (
    <div className="overflow-x-hidden bg-[#fff5e9]">
      <Seo description="Уроци по музика за деца и възрастни в Пловдив – пиано, китара, цигулка, саксофон и пеене. Запишете пробен урок в Major Music School." />

      {/* Hero */}
      <section className="relative isolate flex min-h-svh flex-col bg-[#240005]">
        <img
          src={foundersHeroImg}
          alt="Основателите на Major Music School – Людмил с микрофон и Зара с цигулка"
          fetchPriority="high"
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-[50%_30%] lg:w-[62%] lg:object-[50%_35%]"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#240005] from-30% via-[#240005]/55 to-[#240005]/10 lg:hidden" />
        <div className="absolute inset-0 -z-10 hidden bg-linear-to-r from-[#240005] from-38% via-[#240005]/70 via-52% to-transparent lg:block" />

        <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-16">
          <Link to="/" className="flex flex-col items-center leading-tight no-underline">
            <span className="font-display text-3xl font-bold tracking-[4px] text-[#ffdfc0]">MAJOR</span>
            <span className="font-display text-[12px] font-medium tracking-[3px] text-[#ffdfc0]/80">Music School</span>
          </Link>
          <div className="hidden items-center gap-9 md:flex">
            {links.map(({ label, href }) => (
              <Link key={label} to={href} className={navLink}>{label}</Link>
            ))}
            <Link to="/contacts" className="rounded-full border border-[#ffdfc0]/50 px-5 py-2 text-[15px] text-[#ffdfc0] no-underline transition-colors duration-300 hover:bg-[#ffdfc0] hover:text-[#3f0008]">
              Пробен урок
            </Link>
          </div>
          <button
            className="z-20 flex cursor-pointer flex-col justify-center gap-1.25 border-none bg-transparent p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <span className={`block h-[1.5px] w-6 origin-center bg-[#ffdfc0] transition-all duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] w-6 bg-[#ffdfc0] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-6 origin-center bg-[#ffdfc0] transition-all duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </nav>

        {/* Mobile slide-in menu */}
        <div className={`fixed top-0 right-0 bottom-0 z-30 flex w-[70vw] max-w-75 flex-col items-end bg-[#ffdfc0] px-10 pt-22 pb-10 transition-transform duration-450 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            className="absolute top-5 right-6 cursor-pointer border-none bg-transparent text-[2rem] leading-none text-[#3f0008] transition-colors hover:text-[#7a1020]"
            onClick={() => setMenuOpen(false)}
            aria-label="Затвори менюто"
          >
            &times;
          </button>
          {links.map(({ label, href }) => (
            <Link key={label} to={href} onClick={() => setMenuOpen(false)}
              className="py-2 text-right font-display text-2xl font-medium text-[#3f0008] no-underline transition-colors duration-300 hover:text-[#7a1020]">
              {label}
            </Link>
          ))}
        </div>

        <div className="relative z-10 flex flex-1 items-end px-6 pt-24 pb-10 md:px-16 lg:items-center lg:pt-0 lg:pb-0">
          <div className="max-w-xl lg:max-w-[38rem]">
            <h1 className="hero-rise m-0 font-display text-[clamp(2.5rem,6.2vw,5.25rem)] font-medium leading-[1.05] text-[#ffdfc0]">
              Научи се да свириш и да пееш в Пловдив
            </h1>
            <p className="hero-rise mt-6 mb-9 max-w-md text-[17px] font-light leading-[1.7] text-[#ffdfc0]/85" style={{ animationDelay: '120ms' }}>
              Индивидуални уроци за деца и възрастни при преподаватели с музикално образование и сценичен опит.
            </p>
            <div className="hero-rise flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
              <Link to="/contacts" className={btnPrimary}>Запиши пробен урок</Link>
              <a href="#lessons" className={btnGhost}>Виж уроците</a>
            </div>
          </div>
        </div>

        <ul className="relative z-10 m-0 flex list-none flex-wrap gap-x-8 gap-y-2 border-t border-[#ffdfc0]/20 px-6 py-5 text-[15px] text-[#ffdfc0]/75 md:px-16">
          {['Пиано', 'Китара', 'Цигулка', 'Пеене', 'Саксофон', 'Арфа', 'Тромпет'].map(n => <li key={n}>{n}</li>)}
        </ul>
      </section>

      {/* Lessons */}
      <section id="lessons" className="scroll-mt-4 bg-[#3f0008] px-6 py-20 md:px-16 md:py-28">
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2 className="m-0 font-display text-4xl font-medium leading-[1.1] text-[#fff5e9] md:text-5xl">Какво можеш да научиш</h2>
          <p className="mt-5 text-[17px] font-light leading-[1.7] text-[#ffdfc0]/80">
            Всеки урок е индивидуален и се води според твоето ниво. Започни с пробен час и избери инструмента, който ти харесва.
          </p>
        </div>
        <ul className="m-0 list-none border-t border-[#ffdfc0]/20 p-0">
          {lessons.map(({ title, desc, icon, href = '/contacts' }) => (
            <li key={title} className="border-b border-[#ffdfc0]/20">
              <Link
                to={href}
                aria-label={href === '/contacts' ? `${title} – запиши час` : `${title} – научи повече`}
                className="group grid items-center gap-x-10 gap-y-3 px-2 py-7 text-[#ffdfc0] no-underline transition-colors duration-300 hover:bg-[#ffdfc0]/5 focus-visible:bg-[#ffdfc0]/5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto] md:px-4"
              >
                <span className="flex items-center gap-5">
                  <span className="text-3xl text-[#ffdfc0]/70" aria-hidden="true">{icon}</span>
                  <span className="font-display text-3xl font-medium text-[#fff5e9] md:text-4xl">{title}</span>
                </span>
                <span className="max-w-lg text-[16px] font-light leading-[1.7] text-[#ffdfc0]/80">{desc}</span>
                <span className="flex items-center gap-3 text-[15px] font-medium">
                  {href === '/contacts' ? 'Запиши час' : 'Научи повече'}
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section className="grid grid-cols-1 bg-[#fff5e9] lg:grid-cols-2">
        <div className="h-80 overflow-hidden sm:h-110 lg:h-auto lg:min-h-[640px]">
          <img src={heroSectionImg} alt="Учениците на Major Music School с учителката си" loading="lazy" className="h-full w-full object-cover object-[50%_30%]" />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-16">
          <h2 className="m-0 mb-6 font-display text-3xl font-medium leading-[1.15] text-[#3f0008] md:text-5xl">
            Повече от школа – място за любов към изкуството
          </h2>
          <p className="mb-5 max-w-lg text-[17px] font-light leading-[1.8] text-[#3f0008]">
            Major Music School е място, където изкуството вдъхновява, развива и събира хора с общи интереси.
          </p>
          <p className="mb-10 max-w-lg text-[17px] font-light leading-[1.8] text-[#3f0008]">
            Макар музиката да е в сърцето на всичко, което правим, вярваме, че творчеството има много форми и заслужава пространство, в което да се развива свободно.
          </p>
          <Link to="/about-us" className="w-fit border-b border-[#3f0008] pb-1 text-[15px] font-medium text-[#3f0008] no-underline transition-colors duration-300 hover:text-[#7a1020] hover:border-[#7a1020]">
            Научи повече за нас
          </Link>
        </div>
      </section>

      {/* Studio */}
      <section className="grid grid-cols-1 items-center gap-10 bg-[#ffdfc0]/45 px-6 py-16 md:px-16 md:py-24 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <h2 className="m-0 mb-6 font-display text-3xl font-medium text-[#3f0008] md:text-5xl">Звукозаписно студио</h2>
          <p className="mb-4 max-w-lg text-[17px] font-light leading-[1.8] text-[#3f0008]">
            Изготвяме професионален запис, микс и мастъринг, както и създаваме авторска музика, текст и аранжимент. Работим с всички музикални жанрове.
          </p>
          <p className="mb-8 max-w-lg text-[17px] font-light leading-[1.8] text-[#3f0008]">
            От първата идея до готовата песен – ще бъдем до теб през целия процес.
          </p>
          <Link to="/contacts" className="inline-flex items-center rounded-full bg-[#3f0008] px-7 py-3.5 text-[15px] font-medium text-[#ffdfc0] no-underline transition-colors duration-300 hover:bg-[#5a0d18] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f0008]">
            Свържи се със студиото
          </Link>
        </div>
        <div className="order-1 h-80 overflow-hidden rounded-md md:h-120 lg:order-2 lg:h-140">
          <img src={phylosophyImg} alt="Звукозаписно студио" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#fff5e9] px-6 py-16 md:px-16 md:py-24">
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2 className="m-0 font-display text-3xl font-medium text-[#3f0008] md:text-5xl">Нашият екип</h2>
          <p className="mt-4 text-[17px] font-light leading-[1.7] text-[#3f0008]">Докосни снимка, за да прочетеш повече за преподавателя.</p>
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
                <div className="absolute inset-0 rounded-md overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                  <img src={frontImg} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 rounded-md overflow-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
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
              <p className="text-[15px] text-[#7a1020]">{meta}</p>
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

      {/* Events */}
      <section className="bg-[#fff5e9] px-6 pb-16 md:px-16 md:pb-24">
        <div className="mb-12 max-w-2xl border-t border-[#3f0008]/20 pt-16 md:mb-16 md:pt-24">
          <h2 className="m-0 font-display text-3xl font-medium text-[#3f0008] md:text-5xl">Събития и работилници</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {[
            { date: '19 Септември 2026', title: '3D Пано с Релефна Техника', img: event1Img },
            { date: '25 Септември 2026', title: 'Изработване на Тефтери', img: event2Img },
            { date: '26 Септември 2026', title: 'Декупаж и Рисуване', img: event3Img },
          ].map(({ date, title, img }) => (
            <article key={title}>
              <div className="mb-5 w-full overflow-hidden rounded-md" style={{ aspectRatio: '4/5' }}>
                <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <p className="mb-1 text-[15px] text-[#7a1020]">{date}</p>
              <h3 className="m-0 font-display text-xl font-medium text-[#3f0008]">{title}</h3>
            </article>
          ))}
        </div>
        <Link to="/events" className="mt-10 inline-block border-b border-[#3f0008] pb-1 text-[15px] font-medium text-[#3f0008] no-underline transition-colors duration-300 hover:border-[#7a1020] hover:text-[#7a1020]">
          Всички събития
        </Link>
      </section>

      {/* Final call to action */}
      <section className="bg-[#3f0008] px-6 py-20 md:px-16 md:py-28">
        <div className="max-w-2xl">
          <h2 className="m-0 font-display text-4xl font-medium leading-[1.1] text-[#fff5e9] md:text-6xl">Готов ли си за първия урок?</h2>
          <p className="mt-6 mb-9 max-w-md text-[17px] font-light leading-[1.7] text-[#ffdfc0]/85">
            Пиши ни или се обади. Ще изберем заедно инструмент и удобен час за пробен урок.
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

export default App
