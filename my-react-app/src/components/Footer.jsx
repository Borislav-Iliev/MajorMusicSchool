import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'

function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-[#3f0008] py-8 flex flex-col items-center gap-3 text-center">
                <h2 className="font-display text-xl font-semibold tracking-[3px] text-[#ffdfc0] m-0">MAJOR MUSIC SCHOOL</h2>
                <p className="text-sm text-[#ffdfc0] font-light m-0">От любов към изкуство.</p>
                <div className="flex gap-4 items-center my-1">
                    {[
                        { href: 'https://www.instagram.com/majormusicschool/', icon: <FaInstagram />, label: 'Instagram' },
                        { href: 'https://www.facebook.com/profile.php?id=61577444978726', icon: <FaFacebookF />, label: 'Facebook' },
                        { href: 'https://www.tiktok.com/@major.music.schoo', icon: <FaTiktok />, label: 'TikTok' },
                    ].map(({ href, icon, label }) => (
                        <a key={label} href={href} aria-label={label}
                            target="_blank" rel="noopener noreferrer"
                            className="text-[#ffdfc0] text-xl w-10 h-10 flex items-center justify-center border border-[#4a3830] rounded-full hover:bg-[#ffdfc0] hover:text-[#2a1f18] hover:border-[#ffdfc0] transition-all duration-300 no-underline">
                            {icon}
                        </a>
                    ))}
                </div>
                <p className="text-[11px] text-[#ffdfc0] tracking-[0.5px] m-0">&copy; 2026 Major Music School. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer