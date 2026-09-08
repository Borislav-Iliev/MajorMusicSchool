import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImg from '../assets/images/MEET THE FOUNDERS.JPG'
import contentImg from '../assets/images/AboutUsLeft.PNG'
import team1Img from '../assets/images/IMG_2418.JPG'

function AboutUs() {
    return (
        <div className="overflow-x-hidden">

            <Navbar />

            {/* ══ HERO — full-height, portrait bg, text + button overlay ══ */}
            <section className="relative h-screen min-h-150 bg-[#3f0008] flex flex-col items-center justify-end pb-20 overflow-hidden">
                {/* Background portrait */}
                <img
                    src={heroImg}
                    alt="За нас"
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                />

                {/* Text + CTA */}
                <div className="relative z-10 text-center px-6">
                    <h1
                        className="font-display font-bold text-[#ffdfc0] leading-tight mb-8"
                        style={{ fontSize: 'clamp(1.4rem, 5vw, 3.5rem)', letterSpacing: '0.02em' }}
                    >
                        МЯСТОТО КЪДЕТО ТАЛАНТЪТ<br />НАМИРА СВОЯТА ПОСОКА
                    </h1>
                    <Link
                        to="/contacts"
                        className="inline-block px-10 py-3.5 bg-[#ffdfc0] text-[#3f0008] text-[11px] rounded uppercase tracking-[3px] font-medium no-underline hover:bg-white transition-colors duration-300"
                    >
                        СВЪРЖИ СЕ С НАС
                    </Link>
                </div>
            </section>

            {/* ══ ABOUT / SERVICES — image left, text right ══ */}
            <section className="bg-[#fff5e9] py-20 md:py-28 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-24 items-center">

                    {/* Left: image */}
                    <div className="overflow-hidden">
                        <img
                            src={contentImg}
                            alt="За нас"
                            className="w-full object-cover rounded-xl"
                            style={{ aspectRatio: '3 / 4', objectPosition: 'center' }}
                        />
                    </div>

                    {/* Right: text */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[4px] text-[#3f0008]/50 mb-5">Major Music School</p>
                        <h2
                            className="font-display font-bold text-[#3f0008] leading-tight mb-7"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                        >
                            Как се роди Major Music School
                        </h2>
                        <p className="text-[#3f0008]/70 text-[15px] leading-relaxed mb-4">
                            Major Music School се роди от една обща идея – да създадем място, в което музиката не е просто урок, а преживяване.
                            Място, където хората идват с желание, развиват своя талант, изграждат увереност и намират вдъхновение.
                        </p>
                        <p className="text-[#3f0008]/70 text-[15px] leading-relaxed mb-10">
                            Като професионални музиканти знаем колко важен е първият досег с изкуството.
                            Именно затова създадохме школа, в която обучението съчетава професионален подход,
                            индивидуално отношение и приятелска среда. За нас всеки ученик има свой собствен път и заслужава внимание,
                            подкрепа и възможност да се развива със собствено темпо.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══ SECOND TEXT SECTION — dark bg ══ */}
            <section className="bg-[#3f0008] py-20 md:py-28 px-6 md:px-16">
                <div className="max-w-3xl mx-auto">
                    <p className="text-[10px] uppercase tracking-[4px] text-[#ffdfc0]/50 mb-5">Major Music School</p>
                    <h2
                        className="font-display font-bold text-[#ffdfc0] leading-tight mb-8"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        Нашата мисия
                    </h2>
                    <p className="text-[#ffdfc0]/70 text-[15px] leading-relaxed mb-6">
                        Вярваме, че изкуството има силата да променя хора.
                        Нашата мисия е да изграждаме среда, в която деца и възрастни откриват своя потенциал,
                        развиват увереност и изразяват себе си чрез музиката.
                    </p>
                    <p className="text-[#ffdfc0]/70 text-[15px] leading-relaxed">
                        За нас обучението не се измерва само с научените произведения.
                        То е процес, който изгражда дисциплина, постоянство, креативност
                        и смелост да излезеш на сцената и да покажеш това, което можеш.
                    </p>
                </div>
            </section>

            {/* ══ THIRD SECTION — text left, image right ══ */}
            <section className="bg-[#fff5e9] py-20 md:py-28 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-24 items-center">

                    {/* Left: text */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[4px] text-[#3f0008]/50 mb-5">Major Music School</p>
                        <h2
                            className="font-display font-bold text-[#3f0008] leading-tight mb-7"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                        >
                            Какво прави Major Music School различно?
                        </h2>
                        <p className="text-[#3f0008]/70 text-[15px] leading-relaxed mb-4">
                            За нас музикалното образование не приключва с края на урока.
                            Стремим се да изградим творческа общност, в която ученици, преподаватели
                            и любители на изкуството се срещат, вдъхновяват се и създават заедно.
                        </p>
                        <p className="text-[#3f0008]/70 text-[15px] leading-relaxed mb-4">
                            Освен индивидуалните и груповите уроци, организираме концерти, творчески събития
                            и различни арт инициативи,които дават възможност на нашите ученици
                            да трупат сценичен опит,увереност и незабравими спомени.
                        </p>
                        <p className="text-[#3f0008]/70 text-[15px] leading-relaxed mb-10">
                            Нашата визия е Major Music School да бъде място, което обединява хората
                            чрез изкуството и допринася за развитието на културния живот в Пловдив.
                        </p>
                        <Link
                            to="/contacts"
                            className="text-[11px] uppercase tracking-[3px] text-[#3f0008] no-underline border-b border-[#3f0008] pb-0.5 hover:opacity-60 transition-opacity duration-200"
                        >
                            СВЪРЖИ СЕ С НАС
                        </Link>
                    </div>

                    {/* Right: image */}
                    <div className="overflow-hidden">
                        <img
                            src={team1Img}
                            alt="Нашият екип"
                            className="w-full object-cover object-top rounded-xl"
                            style={{ aspectRatio: '3 / 4', objectPosition: 'top' }}
                        />
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default AboutUs
