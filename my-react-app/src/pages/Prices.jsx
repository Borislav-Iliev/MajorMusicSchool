import { useState } from 'react'
import { FaMusic, FaUsers, FaCheck } from 'react-icons/fa'
import { GiGClef } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
const pricesHeroImg = 'https://res.cloudinary.com/s4o4wqaq/image/upload/v1788891553/PricesBackground.png'
import prices from '../data/prices.json'

const ICONS = {
    music: <FaMusic />,
    users: <FaUsers />,
}

function Prices() {
    const [activeCategory, setActiveCategory] = useState('Индивидуални')

    return (
        <div className="overflow-x-hidden">
            <Seo title="Цени" description="Цени на индивидуални и групови уроци по музика в Major Music School, Пловдив. Прозрачни цени и абонаменти." />

            <Navbar />

            {/* ══ HERO BANNER ══ */}
            <section className="relative h-[380px] md:h-[480px] lg:h-[560px] overflow-hidden">
                {/* Background photo */}
                <img
                    src={pricesHeroImg}
                    alt="Цени"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10" />

                {/* Curved dark left panel */}
                <div
                    className="absolute inset-y-0 left-0 w-[65%] flex flex-col justify-center pl-16 md:pl-24"
                    style={{ background: 'linear-gradient(to right, #3f0008 45%, #3f0008cc 60%, transparent 100%)' }}
                >

                    {/* Text content */}
                    <div className="relative z-10 pr-6 md:pr-10">
                        <h1
                            className="font-display font-bold text-[#ffdfc0] leading-none mb-3"
                            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
                        >
                            ЦЕНИ
                        </h1>
                        <p className="text-[#ffdfc0]/70 font-light text-[13px] md:text-[15px] mb-4">
                            Инвестирай в таланта си!
                        </p>
                        <span className="block w-8 h-px bg-[#ffdfc0]/40" />
                    </div>
                </div>
            </section>

            {/* ══ CARDS ══ */}
            <section className="bg-[#fff5e9] py-20 md:py-28 px-6 md:px-16">
                {/* Filter buttons */}
                <div className="flex justify-center gap-3 mb-14">
                    {[
                        { label: 'Уроци', value: 'Индивидуални' },
                        { label: 'Групови уроци', value: 'Групови' },
                        { label: 'Звукозаписно Студио', value: 'Звукозаписно студио' },
                    ].map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => setActiveCategory(value)}
                            className={`text-[11px] uppercase tracking-[2px] px-7 py-3 rounded-full border transition-all duration-300 cursor-pointer ${activeCategory === value
                                    ? 'bg-[#3f0008] text-[#ffdfc0] border-[#3f0008]'
                                    : 'bg-transparent text-[#3f0008] border-[#3f0008]/30 hover:bg-[#3f0008] hover:text-[#ffdfc0] hover:border-[#3f0008]'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prices.filter(s => s.category === activeCategory).map(({ id, icon, title, monthlyPrice, lessonPrice, duration, priceUnit, subtitle, currency = '€', priceNote, features, featured, badge }) => (
                        <div
                            key={id}
                            className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-shadow duration-300 hover:shadow-xl ${featured
                                ? 'bg-[#3f0008] shadow-lg ring-0'
                                : 'bg-white shadow-sm border border-[#3f0008]/6'
                                }`}
                        >
                            {/* Badge */}
                            {badge && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ffdfc0] text-[#3f0008] text-[10px] uppercase tracking-[2px] px-4 py-1 rounded-full font-medium whitespace-nowrap">
                                    {badge}
                                </span>
                            )}

                            {/* Icon + title */}
                            <div className="flex items-center gap-3 pt-1">
                                <span className={`text-3xl ${featured ? 'text-[#ffdfc0]' : 'text-[#3f0008]'}`}>{ICONS[icon]}</span>
                                <h3 className={`font-display text-xl font-medium ${featured ? 'text-[#ffdfc0]' : 'text-[#3f0008]'}`}>
                                    {title}
                                </h3>
                            </div>

                            {/* Price */}
                            <div className={`border-t ${featured ? 'border-[#ffdfc0]/15' : 'border-[#3f0008]/8'} pt-5`}>
                                {monthlyPrice ? (
                                    <>
                                        <div className="flex items-end gap-1 mb-1">
                                            <span className={`font-display text-[3.2rem] font-bold leading-none ${featured ? 'text-[#ffdfc0]' : 'text-[#3f0008]'}`}>
                                                {monthlyPrice}
                                            </span>
                                            <span className={`text-sm font-light mb-2 ${featured ? 'text-[#ffdfc0]/60' : 'text-[#3f0008]/50'}`}>
                                                {priceUnit === '' ? currency : `${currency} / ${priceUnit ?? 'месец'}`}
                                            </span>
                                        </div>
                                        {!lessonPrice && duration && (
                                            <p className={`text-[12px] ${featured ? 'text-[#ffdfc0]/45' : 'text-[#3f0008]/40'}`}>
                                                {duration}
                                            </p>
                                        )}
                                    </>
                                ) : lessonPrice ? (
                                    <div className="flex items-end gap-1 mb-1">
                                        <span className={`font-display text-[3.2rem] font-bold leading-none ${featured ? 'text-[#ffdfc0]' : 'text-[#3f0008]'}`}>
                                            {lessonPrice}
                                        </span>
                                        <span className={`text-sm font-light mb-2 ${featured ? 'text-[#ffdfc0]/60' : 'text-[#3f0008]/50'}`}>
                                            {currency} / {duration}
                                        </span>
                                    </div>
                                ) : (
                                    <p className={`text-[13px] leading-[1.6] ${featured ? 'text-[#ffdfc0]/60' : 'text-[#3f0008]/50'}`}>
                                        {priceNote || 'Очаквайте информация за цена'}
                                    </p>
                                )}
                                {subtitle && (
                                    <p className={`mt-3 text-[12px] leading-[1.6] ${featured ? 'text-[#ffdfc0]/50' : 'text-[#3f0008]/45'}`}>
                                        {subtitle}
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="flex flex-col gap-3 flex-1">
                                {features.map((f) => (
                                    <li key={f} className="flex items-start gap-3">
                                        <FaCheck className={`shrink-0 mt-0.5 text-[11px] ${featured ? 'text-[#ffdfc0]/70' : 'text-[#3f0008]/50'}`} />
                                        <span className={`text-[13px] font-light leading-[1.6] ${featured ? 'text-[#ffdfc0]/80' : 'text-[#3f0008]/70'}`}>
                                            {f}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                to="/contacts"
                                className={`mt-2 text-center text-[11px] uppercase tracking-[2px] py-3 border rounded transition-all duration-300 no-underline block ${featured
                                    ? 'border-[#ffdfc0]/50 text-[#ffdfc0] hover:bg-[#ffdfc0] hover:text-[#3f0008]'
                                    : 'border-[#3f0008]/30 text-[#3f0008] hover:bg-[#3f0008] hover:text-[#ffdfc0]'
                                    }`}
                            >
                                Запиши се
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══ NOTE ══ */}
            <section className="bg-[#3f0008] py-16 px-6 md:px-16 border-b border-[#ffdfc0]/15">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-[#ffdfc0]/10">
                    {[
                        { title: 'Пробен урок', desc: 'Първият урок е безплатен, за да се запознаете с инструмента, преподавателя и начина на работа.' },
                        { title: 'Гъвкав график', desc: 'Уроците се планират спрямо вашата заетост - в удобно време за Вас ' },
                        { title: 'Свържете се с нас', desc: 'За повече информация, свържете се с нас на лично съобщение в Instagram.' },
                    ].map(({ title, desc }) => (
                        <div key={title} className="text-center md:px-10">
                            <h3 className="font-display text-lg font-medium text-[#ffdfc0] mb-3">{title}</h3>
                            <p className="text-[#ffdfc0]/55 font-light text-[13px] leading-[1.8]">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Prices
