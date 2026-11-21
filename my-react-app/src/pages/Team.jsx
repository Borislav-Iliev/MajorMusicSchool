import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CLOUDINARY = 'https://res.cloudinary.com/s4o4wqaq/image/upload'
const team1Img = `${CLOUDINARY}/v1788891551/IMG_8311.jpg`
const team2Img = `${CLOUDINARY}/v1788891553/IMG_8319.jpg`
const team3Img = `${CLOUDINARY}/v1788891553/IMG_8315.jpg`
const team4Img = `${CLOUDINARY}/v1788891552/IMG_8312.jpg`
const team5Img = `${CLOUDINARY}/v1788891553/IMG_8313.jpg`
const team6Img = `${CLOUDINARY}/v1788891553/IMG_8314.jpg`
const team7Img = `${CLOUDINARY}/v1788891553/IMG_8316.jpg`

const members = [
    {
        img: team1Img,
        name: 'Людмил Харизанов',
        role: 'Преподавател по пеене',
        about: 'Людмил Харизанов е преподавател по поп и джаз пеене, тонрежисьор и основател на Major Music School. Вече повече от пет години работи с деца и възрастни, съчетавайки съвременни методи на обучение, индивидуален подход и богат практически опит.',
        info: [
            { label: 'Специалност', value: 'Поп и джаз пеене' },
            { label: 'Опит', value: 'Над 5 години' },
            { label: 'Образование', value: 'НУМТИ „Добрин Петков" · АМТИИ „Проф. Асен Диамандиев"' },
            { label: 'Допълнително', value: 'Sound Ninja Academy — Music Production, Mixing & Mastering' },
        ],
    },
    {
        img: team2Img,
        name: 'Зара Илиева',
        role: 'Преподавател по цигулка',
        about: 'Зара Илиева е преподавател по цигулка и основател на Major Music School. Носител е на множество отличия от национални и международни конкурси. Работи с деца повече от три години, съчетавайки професионална подготовка, индивидуален подход и отдаденост към всеки свой ученик.',
        info: [
            { label: 'Специалност', value: 'Цигулка' },
            { label: 'Опит', value: 'Над 3 години' },
            { label: 'Образование', value: 'НУМТИ „Добрин Петков" · АМТИИ „Проф. Асен Диамандиев"' },
            { label: 'Допълнително', value: 'Магистратура по изпълнителско изкуство — цигулка' },
        ],
    },
    {
        img: team4Img,
        name: 'Николай Бобчев',
        role: 'Преподавател по китара, бас китара и саксофон',
        about: 'Преподавател по китара, бас китара и саксофон в Major Music School. С богат опит в различни музикални жанрове и индивидуален подход, той помага на учениците да развият техника, музикалност и любов към инструмента.',
        info: [
            { label: 'Специалности', value: 'Китара, бас китара и саксофон' },
            { label: 'Жанрове', value: 'Поп, рок, джаз, класика' },
            { label: 'Подход', value: 'Индивидуален, съобразен с нивото и целите на ученика' },
        ],
    },
    {
        img: team3Img,
        name: 'Веселина Йозова',
        role: 'Преподавател по народно пеене',
        about: 'Веселина Йозова е преподавател по народно пеене в Major Music School. С любов към българския фолклор и индивидуален подход към всеки ученик, тя вдъхновява децата да развиват своя глас и да открият красотата на народната музика.',
        info: [
            { label: 'Специалност', value: 'Народно пеене' },
            { label: 'Образование', value: 'СУ „Любен Каравелов" · АМТИИ „Проф. Асен Диамандиев"' },
            { label: 'Специализация', value: 'Педагогика на обучението по музика с народно пеене' },
            { label: 'Подход', value: 'Вокално развитие и любов към българския фолклор' },
        ],
    },
    {
        img: team5Img,
        name: 'Йоан Хубенов',
        role: 'Преподавател по пиано',
        about: 'Йоан Хубенов завършва НУМТИ „Добрин Петков" – Пловдив с отличие, а след това продължава образованието си в НМА „Проф. Панчо Владигеров" – София, където завършва двойна магистратура – хорово дирижиране и хармония и пиано. В Major Music School преподава пиано, като съчетава сериозната си музикална подготовка с индивидуален подход към всеки ученик.',
        info: [
            { label: 'Специалност', value: 'Пиано' },
            { label: 'Образование', value: 'НУМТИ „Добрин Петков" · НМА „Проф. Панчо Владигеров"' },
            { label: 'Квалификация', value: 'Двойна магистратура – хорово дирижиране и хармония и пиано' },
            { label: 'Опит', value: 'Преподава от 23-годишна възраст в НУМТИ „Добрин Петков" и НМУ „Любомир Пипков"' },
        ],
    },
    {
        img: team6Img,
        name: 'Михаела Сярова',
        role: 'Преподавател по арфа',
        about: 'Михаела Сярова свири на арфа от 7-годишна възраст. Завършва НУМТИ „Добрин Петков" – Пловдив, а след това продължава образованието си в АМТИИ „Проф. Асен Диамандиев" със специалност педагогика на обучението по музика. От една година преподава на деца и им помага да направят своите първи стъпки в света на арфата, като съчетава професионалната подготовка с индивидуален подход и внимание към всеки ученик.',
        info: [
            { label: 'Специалност', value: 'Арфа' },
            { label: 'Опит', value: 'Свири на арфа от 7-годишна възраст · Над 1 година като преподавател' },
            { label: 'Образование', value: 'НУМТИ „Добрин Петков" · АМТИИ „Проф. Асен Диамандиев" – Педагогика на обучението по музика' },
            { label: 'Подход', value: 'Индивидуален подход и внимание към всеки ученик' },
        ],
    },
    {
        img: team7Img,
        name: 'Шукрю Ахмедов',
        role: 'Преподавател по тромпет',
        about: 'Шукрю Ахмедов завършва Музикалното училище в Бургас със специалност тромпет, а след това продължава образованието си в АМТИИ „Проф. Асен Диамандиев" – Пловдив, със специалност Изпълнителско изкуство с тромпет. Преподава на деца и възрастни, като съчетава професионалната си подготовка с богат сценичен опит.',
        info: [
            { label: 'Специалност', value: 'Тромпет' },
            { label: 'Образование', value: 'Музикално училище – Бургас · АМТИИ „Проф. Асен Диамандиев" – Изпълнителско изкуство с тромпет' },
            { label: 'Опит', value: 'Богат сценичен опит – свири в различни оркестри и бендове' },
            { label: 'Интереси', value: 'Джаз и джаз тромпет' },
        ],
    }
]

const PAGE_SIZE = 4;

// Builds a compact page list, e.g. [1, '…', 4, 5, 6, '…', 12]
function getPageItems(current, total) {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
    const items = [1]
    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)
    if (start > 2) items.push('…')
    for (let i = start; i <= end; i++) items.push(i)
    if (end < total - 1) items.push('…')
    items.push(total)
    return items
}

const navBtn = 'h-10 px-4 rounded-full border border-[#3f0008]/20 bg-white flex items-center gap-2 text-[13px] text-[#3f0008] hover:bg-[#3f0008] hover:text-[#ffdfc0] transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#3f0008]'

function Team() {
    const [searchParams, setSearchParams] = useSearchParams()
    const totalPages = Math.ceil(members.length / PAGE_SIZE)
    const requested = parseInt(searchParams.get('page'), 10)
    const page = Number.isFinite(requested) ? Math.min(Math.max(requested, 1), totalPages) : 1
    const firstIndex = (page - 1) * PAGE_SIZE
    const currentMembers = members.slice(firstIndex, firstIndex + PAGE_SIZE)
    const cardsSectionRef = useRef(null)

    const goToPage = (next) => {
        if (next < 1 || next > totalPages || next === page) return
        setSearchParams(next === 1 ? {} : { page: String(next) })
        // Scroll only on an explicit page change, never on load
        const el = cardsSectionRef.current
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <div className="overflow-x-hidden">

            <Navbar />

            {/* ══ PAGE HEADER ══ */}
            <section className="bg-[#fff5e9] px-6 md:px-16 pt-16 pb-10">
                <h1
                    className="font-display font-bold text-[#3f0008] text-center"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                >
                    Запознайте се с екипа
                </h1>
            </section>

            {/* ══ TEAM CARDS ══ */}
            <section ref={cardsSectionRef} className="bg-[#fff5e9] px-6 md:px-16 pb-20 md:pb-28">
                <div key={page} className="max-w-5xl mx-auto flex flex-col gap-6 animate-page-enter">
                    {currentMembers.map(({ img, name, role, about, info }) => (
                        <div
                            key={name}
                            className="bg-white border border-[#3f0008]/8 flex flex-col md:flex-row overflow-hidden rounded-xl"
                        >
                            {/* Left: portrait fills full card height */}
                            <div
                                className="shrink-0 md:w-55 overflow-hidden"
                                style={{ backgroundColor: '#fde8e0', minHeight: '260px' }}
                            >
                                <img
                                    src={img}
                                    alt={name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Right: info */}
                            <div className="flex-1 p-6 md:p-8">
                                {/* Name + role + socials */}
                                <div className="flex items-start justify-between gap-4 mb-5">
                                    <div>
                                        <h2 className="font-display font-bold text-[#3f0008] text-[1.4rem] leading-tight mb-1">
                                            {name}
                                        </h2>
                                        <p className="text-[#3f0008]/50 text-[13px]">{role}</p>
                                    </div>
                                    {/* Social icons */}
                                    <div className="flex gap-2 shrink-0">
                                        {[
                                            { href: 'https://www.instagram.com/majormusicschool/', icon: <FaInstagram />, label: 'Instagram' },
                                            { href: 'https://www.facebook.com/profile.php?id=61577444978726', icon: <FaFacebookF />, label: 'Facebook' },
                                            { href: 'https://www.tiktok.com/@major.music.schoo', icon: <FaTiktok />, label: 'TikTok' },
                                        ].map(({ href, icon, label }) => (
                                            <a key={label} href={href} aria-label={label}
                                                target="_blank" rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-[#3f0008] text-[#ffdfc0] flex items-center justify-center text-[13px] hover:bg-[#ffdfc0] hover:text-[#3f0008] transition-colors duration-200 no-underline">
                                                {icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-[#3f0008]/8 mb-5" />

                                {/* About */}
                                <p className="text-[10px] uppercase tracking-[3px] text-[#3f0008] mb-2 font-medium">За мен</p>
                                <p className="text-[#3f0008]/65 text-[14px] leading-relaxed mb-6">{about}</p>

                                {/* Personal info */}
                                <p className="text-[10px] uppercase tracking-[3px] text-[#3f0008] mb-3 font-medium">Информация</p>
                                <ul className="flex flex-col gap-1.5">
                                    {info.map(({ label, value }) => (
                                        <li key={label} className="flex gap-2 text-[13px] text-[#3f0008]/70">
                                            <span className="text-[#3f0008]/30">•</span>
                                            <span><span className="font-medium text-[#3f0008]/90">{label}:</span> {value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ══ PAGINATION ══ */}
                {totalPages > 1 && (
                    <nav aria-label="Страници с преподаватели" className="max-w-5xl mx-auto mt-10 flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            <button
                                onClick={() => goToPage(page - 1)}
                                disabled={page === 1}
                                className={navBtn}
                                aria-label="Предишна страница"
                            >
                                <span aria-hidden="true">&#8592;</span>
                                <span className="hidden sm:inline">Назад</span>
                            </button>

                            {getPageItems(page, totalPages).map((item, i) =>
                                item === '…' ? (
                                    <span key={`gap-${i}`} aria-hidden="true" className="w-6 text-center text-[#3f0008]/40">…</span>
                                ) : (
                                    <button
                                        key={item}
                                        onClick={() => goToPage(item)}
                                        aria-label={`Страница ${item}`}
                                        aria-current={page === item ? 'page' : undefined}
                                        className={`w-10 h-10 rounded-full border text-[14px] transition-all duration-200 ${page === item ? 'bg-[#3f0008] text-[#ffdfc0] border-[#3f0008]' : 'bg-white text-[#3f0008] border-[#3f0008]/20 hover:bg-[#3f0008]/10'}`}
                                    >
                                        {item}
                                    </button>
                                )
                            )}

                            <button
                                onClick={() => goToPage(page + 1)}
                                disabled={page === totalPages}
                                className={navBtn}
                                aria-label="Следваща страница"
                            >
                                <span className="hidden sm:inline">Напред</span>
                                <span aria-hidden="true">&#8594;</span>
                            </button>
                        </div>

                        <p className="text-[12px] text-[#3f0008]/50" aria-live="polite">
                            Показани {firstIndex + 1}–{firstIndex + currentMembers.length} от {members.length} преподаватели
                        </p>
                    </nav>
                )}
            </section>

            <Footer />

        </div>
    )
}

export default Team