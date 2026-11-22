import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaInstagram, FaFacebookF, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'

const SERVICE_ID = 'service_waopbve'
const TEMPLATE_ID = 'template_llnk4f7'
const PUBLIC_KEY = 'ami9Z-8NS63Y7aPAJ'

const inputClass =
    'w-full bg-white border border-[#3f0008]/12 rounded-lg px-4 py-3 text-[14px] text-[#3f0008] placeholder-[#3f0008]/35 outline-none focus:border-[#3f0008]/40 transition-colors duration-200'

function ContactUs() {
    const [form, setForm] = useState({ email: '', phone: '', name: '', message: '' })
    const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
    const formRef = useRef(null)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus('success')
                setForm({ email: '', phone: '', name: '', message: '' })
            })
            .catch(() => setStatus('error'))
    }

    return (
        <div className="overflow-x-hidden">
            <Seo title="Контакти" description="Свържете се с Major Music School – ул. Захари Стоянов №69, Пловдив. Телефон, имейл и форма за запитване за пробен урок." />

            <Navbar />

            {/* ══ HERO ══ */}
            <section className="bg-[#fff5e9] py-16 md:py-24 text-center px-6 relative overflow-hidden">
                <h1 className="font-display font-bold text-[#3f0008] text-[clamp(3rem,9vw,6rem)] leading-none mb-4">
                    Контакти
                </h1>
                
                <p className="text-[#3f0008]/60 font-light text-[17px] leading-[1.8] max-w-md mx-auto">
                    Имате въпроси или искате да запишете пробен урок?<br />Свържете се с нас.
                </p>
            </section>

            {/* ══ FORM + INFO ══ */}
            <section className="bg-[#fff5e9] py-16 md:py-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">

                    {/* Contact form */}
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#3f0008]/6">
                        <h2 className="font-display text-2xl font-medium text-[#3f0008] mb-6">Изпратете съобщение</h2>
                        <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="email" name="email" placeholder="Имейл" required
                                    value={form.email} onChange={handleChange}
                                    className={inputClass}
                                />
                                <input
                                    type="tel" name="phone" placeholder="Телефон"
                                    value={form.phone} onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                            <input
                                type="text" name="name" placeholder="Вашето име" required
                                value={form.name} onChange={handleChange}
                                className={inputClass}
                            />
                            <textarea
                                name="message" placeholder="Съобщение" rows={5} required
                                value={form.message} onChange={handleChange}
                                className={`${inputClass} resize-none`}
                            />
                            {status === 'success' && (
                                <p className="text-sm text-green-700 font-light">Съобщението е изпратено успешно! Ще се свържем с вас скоро.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-sm text-red-700 font-light">Нещо се обърка. Моля, опитайте отново.</p>
                            )}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="self-start text-[11px] uppercase tracking-[2px] px-8 py-3 bg-[#3f0008] text-[#ffdfc0] border border-[#3f0008] hover:bg-[#ffdfc0] hover:text-[#3f0008] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Изпраща се...' : 'Изпрати'}
                            </button>
                        </form>
                    </div>

                    {/* Info card */}
                    <div className="bg-[#3f0008] rounded-2xl p-8 md:p-10 flex flex-col gap-6">
                        <h2 className="font-display text-2xl font-medium text-[#ffdfc0]">Намерете ни</h2>
                        <p className="text-[#ffdfc0]/65 font-light text-[14px] leading-[1.8]">
                            Major Music School, Пловдив. Свържете се с нас директно или ни последвайте в социалните мрежи.
                        </p>

                        <div className="flex flex-col gap-4 flex-1">
                            {[
                                { icon: <FaPhone className="text-[13px]" />, label: ' 0893641786 | 0893632193' },
                                { icon: <FaEnvelope className="text-[13px]" />, label: 'majormusicschool03@gmail.com' },
                                { icon: <FaMapMarkerAlt className="text-[13px]" />, label: 'ул.Захари Стоянов №69, Пловдив, България' },
                            ].map(({ icon, label }) => (
                                <div key={label} className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full border border-[#ffdfc0]/20 flex items-center justify-center text-[#ffdfc0]/60 shrink-0">
                                        {icon}
                                    </span>
                                    <span className="text-[#ffdfc0]/75 text-[13px] font-light">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <p className="text-[10px] uppercase tracking-[2px] text-[#ffdfc0]/40 mb-3">Социални мрежи</p>
                            <div className="flex gap-3">
                                {[
                                    { href: 'https://www.instagram.com/majormusicschool/', icon: <FaInstagram />, label: 'Instagram' },
                                    { href: 'https://www.facebook.com/profile.php?id=61577444978726', icon: <FaFacebookF />, label: 'Facebook' },
                                    { href: 'https://www.tiktok.com/@major.music.schoo', icon: <FaTiktok />, label: 'TikTok' },
                                ].map(({ href, icon, label }) => (
                                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                                        className="text-[#ffdfc0] text-lg w-9 h-9 flex items-center justify-center border border-[#ffdfc0]/20 rounded-full hover:bg-[#ffdfc0] hover:text-[#3f0008] transition-all duration-300 no-underline">
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CONTACT INFO CARDS ══ */}
            <section className="bg-[#fff5e9] pb-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        {
                            icon: <FaPhone className="text-xl" />,
                            title: '0893632193 | 0893641786',
                            desc: 'За контакти и повече информация.',
                        },
                        {
                            icon: <FaEnvelope className="text-xl" />,
                            title: 'majormusicschool03@gmail.com',
                            desc: 'Пишете ни по имейл — отговаряме в рамките на 24 часа.',
                        },
                        {
                            icon: <FaMapMarkerAlt className="text-xl" />,
                            title: 'Пловдив, България',
                            desc: 'ул.Захари Стоянов №69',
                        },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} className="bg-white rounded-2xl p-7 flex gap-4 items-start shadow-sm border border-[#3f0008]/6">
                            <span className="w-11 h-11 rounded-full bg-[#fff5e9] flex items-center justify-center text-[#3f0008] shrink-0 mt-0.5">
                                {icon}
                            </span>
                            <div>
                                <h3 className="font-display text-base font-medium text-[#3f0008] mb-1">{title}</h3>
                                <p className="text-[#3f0008]/55 font-light text-[13px] leading-[1.7]">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══ MAP ══ */}
            <section className="bg-[#fff5e9] px-6 md:px-16 pb-16">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.42804285809!2d24.73397647617978!3d42.141126248905096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1bed8af63b9%3A0x3b30220afa5d4548!2sMajor%20Music%20School!5e0!3m2!1sbg!2sbg!4v1782935316731!5m2!1sbg!2sbg"
                    width="100%" height="420"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="rounded-2xl"
                />
            </section>

            <Footer />

        </div>
    )
}

export default ContactUs
