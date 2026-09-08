import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLink =
    'relative pb-[3px] text-[12px] uppercase tracking-[1.5px] text-[#ffdfc0] no-underline ' +
    'after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:h-px after:bg-[#ffdfc0] ' +
    'after:transition-all after:duration-300 hover:after:left-0 hover:after:right-0'

const navItems = [
    { label: 'За нас', href: '/about-us' },
    { label: 'Цени', href: '/prices' },
    { label: 'Събития', href: '/events' },
    { label: 'Екип', href: '/team' },
    { label: 'Контакти', href: '/contacts' },
]

function Navbar({ transparent = false }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {/* ══ NAV ══ */}
            <div className={transparent ? 'absolute top-0 inset-x-0 z-10' : 'bg-[#3f0008]'}>
                <nav className={`flex items-center justify-between px-6 md:px-16 py-5 border-b ${transparent ? 'border-white/12' : 'border-[#ffdfc0]/10'}`}>
                    <Link to="/" className="flex flex-col leading-tight items-center no-underline">
                        <span className="font-display text-4xl font-bold tracking-[4px] text-[#ffdfc0]">MAJOR</span>
                        <span className="font-display text-[13px] font-medium tracking-[3px] text-[#ffdfc0]/80 uppercase">Music School</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-7">
                        {navItems.map(({ label, href }) => (
                            <Link key={label} to={href} className={navLink}>{label}</Link>
                        ))}
                    </div>
                    <button
                        className="md:hidden flex flex-col justify-center gap-1.5 bg-transparent border-none cursor-pointer p-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-[1.5px] bg-[#ffdfc0] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                        <span className={`block w-6 h-[1.5px] bg-[#ffdfc0] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-[1.5px] bg-[#ffdfc0] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 translate-y-[-6.5px]' : ''}`} />
                    </button>
                </nav>
            </div>

            {/* Mobile menu */}
            <div className={`fixed top-0 right-0 bottom-0 w-[70vw] max-w-xs bg-[#ffdfc0] z-20 flex flex-col items-end pt-20 px-10 pb-10 transition-transform duration-450 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    className="absolute top-5 right-6 bg-transparent border-none text-[2rem] leading-none text-[#3f0008] cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >&times;</button>
                {navItems.map(({ label, href }) => (
                    <Link key={label} to={href} onClick={() => setMenuOpen(false)}
                        className="font-display text-2xl font-medium text-[#3f0008] no-underline py-2 text-right">
                        {label}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Navbar
