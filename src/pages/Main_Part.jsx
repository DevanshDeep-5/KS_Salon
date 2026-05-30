

import design from "../assets/design.png"
import hair from "../assets/hair.png"
import Center_photo from "../assets/Center_photo.png"
import Lip_photo from "../assets/Lip_photo.png"
import Trimming from "../assets/Trimming.png"
import Hair_wash from "../assets/Hair_wash.png"
import glowskinjpg from "../assets/glowskinjpg.jpg"
import face_makeup from "../assets/face_makeup.jpg"

const Main_Part = () => {

    return (
        <>
            <section id="home-section" className="w-full min-h-screen md:h-[100vh] flex flex-col justify-between">
                <div className="flex flex-col items-center mt-[3vh] px-4">
                    <img className="w-9 h-9" src={design} alt="" />
                    <h1 className="mt-6 font-semibold text-3xl sm:text-5xl md:text-6xl text-center leading-tight">The Best Salon in Gola</h1>
                    <div className="mt-4 text-sm sm:text-base md:text-lg text-center text-neutral-600">Luxury | Affordability | Expertise - All Under One Roof</div>
                    <div className="flex justify-center w-full mt-6">
                        <a
                            href="https://wa.me/919559808482?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF8A7A] to-[#C59B73] hover:from-[#C59B73] hover:to-[#FF8A7A] text-white font-bold text-xs uppercase tracking-widest transition-all duration-500 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(255,138,122,0.25)] hover:shadow-[0_6px_24px_rgba(197,155,115,0.3)] cursor-pointer select-none text-center"
                        >
                            <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book Now
                        </a>
                    </div>
                </div>

                {/* Orange/Peach bar background highlight spacer */}
                <div className="w-full h-24 md:h-52 mt-8 md:mt-[25vh] bg-[#f5c7b0] relative"></div>

                {/* Mobile Responsive Grid for Highlight Photos */}
                <div className="grid grid-cols-2 gap-3 px-6 mt-8 md:hidden w-full">
                    <div className="col-span-2">
                        <img className="rounded-[24px] w-full h-48 sm:h-64 object-cover shadow-md" src={Center_photo} alt="Main Salon Center" />
                    </div>
                    <div>
                        <img className="rounded-xl w-full h-32 object-cover shadow-sm" src={hair} alt="Hair Styling" />
                    </div>
                    <div>
                        <img className="rounded-xl w-full h-32 object-cover shadow-sm" src={glowskinjpg} alt="Glow Skin Skincare" />
                    </div>
                    <div>
                        <img className="rounded-xl w-full h-32 object-cover shadow-sm" src={Lip_photo} alt="Makeup Lips Art" />
                    </div>
                    <div>
                        <img className="rounded-xl w-full h-32 object-cover shadow-sm" src={Hair_wash} alt="Luxury Hair Wash" />
                    </div>
                </div>

                {/* Desktop Absolute-Positioned Mosaic Collage (Pixel-Perfect Preserved) */}
                <img className="hidden md:block absolute rounded-2xl top-[121vh] left-0 w-37.5 h-86 object-cover" src={glowskinjpg} alt="" />
                <img className="hidden md:block absolute rounded-2xl top-[116vh] left-[11vw] w-66 h-66 object-cover" src={hair} alt="" />
                <img className="hidden md:block absolute rounded-2xl top-[148vh] left-[11vw] w-66 h-36 object-cover" src={face_makeup} alt="" />
                <img className="hidden md:block absolute rounded-2xl top-[124vh] left-[29.8vw] w-146 h-86 object-cover" src={Center_photo} alt="" />
                <img className="hidden md:block absolute rounded-2xl top-[97.5vh] left-[70.3vw] w-76 h-70 object-cover" src={Hair_wash} alt="" />
                <img className="hidden md:block absolute rounded-2xl top-[131vh] left-[70.3vw] w-76 h-70 object-cover" src={Lip_photo} alt="" />
                <img className="hidden md:block absolute rounded-2xl top-[114vh] left-[91.6vw] w-31 h-80 object-cover" src={Trimming} alt="" />

                {/* Statistics block stacked on mobile, row on desktop */}
                <div className="w-full md:h-[40vh] h-auto flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0 mt-16 md:mt-12 pb-16 md:pb-0">
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold">10+</span>
                        <span className="text-base sm:text-lg text-neutral-500 mt-1">Years Of Experience</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold">1500+</span>
                        <span className="text-base sm:text-lg text-neutral-500 mt-1">Happy Customers</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold">24/7</span>
                        <span className="text-base sm:text-lg text-neutral-500 mt-1">Customer Support</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main_Part