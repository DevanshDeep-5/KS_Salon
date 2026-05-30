import ContactMap from "../components/Contact_Map"
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import map from '../assets/arrow.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'

const Footer = () => {
    return (
        <section id="footer-section" className="relative w-full bg-[#FAF7F2] text-neutral-800 border-t border-[#C59B73]/20 flex flex-col justify-between overflow-hidden">
            {/* Soft golden & peach ambient glows for premium depth */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#FF8A7A]/3 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C59B73]/3 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-12 relative z-10 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Embed Map Container with elegant border and soft drop shadow */}
                    <div className="lg:col-span-6 w-full group">
                        <div className="relative rounded-[24px] overflow-hidden border border-[#C59B73]/20 shadow-[0_15px_40px_rgba(197,155,115,0.08)] transition-all duration-500 hover:border-[#FF8A7A]/40">
                            {/* Gold/Terracotta Accent bar top of the map container */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF8A7A] via-[#C59B73] to-[#FF8A7A] z-20 opacity-70"></div>
                            <ContactMap />
                        </div>
                    </div>

                    {/* Right Column: Title, Contact Details Cards, and Primary Luxury Actions */}
                    <div className="lg:col-span-6 w-full flex flex-col h-full justify-between space-y-8">
                        
                        {/* Heading and decorative border */}
                        <div className="text-left">
                            <span className="text-xs uppercase tracking-[0.25em] text-[#FF8A7A] font-bold mb-3 block">Get In Touch</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#3C2A21] font-serif mb-4">
                                Contact Us
                            </h2>
                            <div className="w-24 h-[2px] bg-gradient-to-r from-[#FF8A7A] to-[#C59B73]"></div>
                        </div>

                        {/* Interactive light contact details cards */}
                        <div className="space-y-4">
                            
                            {/* Call Us Option */}
                            <a 
                                href="tel:+919140655929" 
                                className="flex items-center space-x-5 p-4 rounded-[20px] bg-white/90 border border-[#C59B73]/15 hover:border-[#FF8A7A]/40 hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(197,155,115,0.06)] hover:-translate-y-0.5 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#FCFBF7] border border-[#C59B73]/30 flex items-center justify-center shadow-sm group-hover:border-[#FF8A7A] transition-all duration-300 flex-shrink-0">
                                    <img 
                                        className="w-5 h-5 opacity-90 group-hover:scale-110 transition-all duration-300" 
                                        src={phone} 
                                        alt="Phone" 
                                    />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold tracking-widest text-[#C59B73] uppercase block mb-0.5">Call Us</span>
                                    <p className="text-[17px] text-[#4E3629] font-semibold group-hover:text-[#FF8A7A] transition-colors">+91 9140655929</p>
                                </div>
                            </a>

                            {/* Email Us Option */}
                            <a 
                                href="mailto:jyotiku050@gmail.com" 
                                className="flex items-center space-x-5 p-4 rounded-[20px] bg-white/90 border border-[#C59B73]/15 hover:border-[#FF8A7A]/40 hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(197,155,115,0.06)] hover:-translate-y-0.5 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#FCFBF7] border border-[#C59B73]/30 flex items-center justify-center shadow-sm group-hover:border-[#FF8A7A] transition-all duration-300 flex-shrink-0">
                                    <img 
                                        className="w-5 h-5 opacity-90 group-hover:scale-110 transition-all duration-300" 
                                        src={mail} 
                                        alt="Email" 
                                    />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold tracking-widest text-[#C59B73] uppercase block mb-0.5">Email Us</span>
                                    <p className="text-[17px] text-[#4E3629] font-semibold group-hover:text-[#FF8A7A] transition-colors">jyotiku050@gmail.com</p>
                                </div>
                            </a>

                            {/* Visit Us Address */}
                            <div 
                                className="flex items-center space-x-5 p-4 rounded-[20px] bg-white/90 border border-[#C59B73]/15 hover:border-[#FF8A7A]/40 hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(197,155,115,0.06)] hover:-translate-y-0.5 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#FCFBF7] border border-[#C59B73]/30 flex items-center justify-center shadow-sm group-hover:border-[#FF8A7A] transition-all duration-300 flex-shrink-0">
                                    <img 
                                        className="w-5 h-5 opacity-90 group-hover:scale-110 transition-all duration-300" 
                                        src={map} 
                                        alt="Location" 
                                    />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold tracking-widest text-[#C59B73] uppercase block mb-0.5">Visit Us</span>
                                    <p className="text-[17px] text-[#4E3629] font-semibold">2nd floor, Badal Nagar ICICI Bank k upar, Lakhimpur Rd, Gola Gokaran Nath, Gola, Uttar Pradesh 262802</p>
                                </div>
                            </div>

                        </div>

                        {/* Premium call-to-action buttons (WhatsApp, Google Maps, Book Now) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                            
                            {/* Google Maps Link */}
                            <a 
                                href="https://maps.google.com/?q=KS+makeover+unisex+salon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-[#C59B73]/30 bg-white hover:bg-[#FAF6F0] text-[#7C5A43] font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 shadow-sm cursor-pointer select-none text-center"
                            >
                                <svg className="w-4 h-4 text-[#C59B73] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Google Maps
                            </a>

                            {/* WhatsApp Direct Link */}
                            <a 
                                href="https://wa.me/9140655929?text=Hello!%20I%20have%20a%20query%20about%20your%20salon%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-[#25D366]/30 bg-white hover:bg-[#F2FCF5] text-[#128C7E] font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 shadow-sm cursor-pointer select-none text-center"
                            >
                                <svg className="w-4 h-4 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.13-1.347A9.948 9.948 0 0012.01 22c5.507 0 9.991-4.478 9.992-9.984A9.997 9.997 0 0012.012 2zm5.72 14.162c-.244.688-1.22 1.25-1.68 1.298-.456.047-.9-.124-2.884-.91-2.544-1.01-4.17-3.606-4.298-3.774-.127-.168-.962-1.28-.962-2.443 0-1.163.608-1.733.824-1.968.217-.234.47-.294.628-.294.156 0 .313.003.45.01.144.006.337-.054.528.404.197.47.674 1.644.733 1.762.059.117.098.254.02.41-.078.156-.118.254-.235.39-.117.137-.247.306-.353.41-.118.118-.242.247-.104.485.138.238.61 1.002 1.312 1.63.902.805 1.657 1.05 1.892 1.169.235.117.37.1.51-.06.136-.156.586-.684.743-.918.156-.234.312-.195.528-.117.215.078 1.363.644 1.597.76.235.118.39.176.45.274.058.098.058.566-.186 1.254z" />
                                </svg>
                                WhatsApp
                            </a>

                            {/* Luxury Call-to-action Book Appointment Button */}
                            <a 
                                href="https://wa.me/9140655929?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF8A7A] to-[#C59B73] hover:from-[#C59B73] hover:to-[#FF8A7A] text-white font-bold text-xs uppercase tracking-widest transition-all duration-500 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(255,138,122,0.25)] hover:shadow-[0_6px_24px_rgba(197,155,115,0.3)] cursor-pointer select-none text-center"
                            >
                                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Book Now
                            </a>

                        </div>

                        <div className="flex items-center justify-center">
                            <div className="flex space-x-5 items-center ml-4 mt-5">
                                <a 
                                    href="https://www.instagram.com/ks_makeover_1622?igsh=YjF6OGhjeTlxdGpo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-[#C59B73]/35 hover:border-[#FF8A7A] hover:bg-[#FAF6F0] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                                    aria-label="Instagram"
                                >
                                    <img 
                                        className="w-5.5 h-5.5 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                        src={instagram}
                                        alt="Instagram"
                                    />
                                </a>
                                <a 
                                    href="https://youtube.com/@ksmakeoveruniesxsalon?si=K59uwetmjjYoOddI"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-[#C59B73]/35 hover:border-[#FF8A7A] hover:bg-[#FAF6F0] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                                    aria-label="Youtube"
                                >
                                    <img 
                                        className="w-5.5 h-5.5 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                        src={youtube}
                                        alt="Youtube"
                                    />
                                </a>
                                <a 
                                    href="https://www.facebook.com/share/18dh6aK6a7/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-[#C59B73]/35 hover:border-[#FF8A7A] hover:bg-[#FAF6F0] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
                                    aria-label="Facebook"
                                >
                                    <img 
                                        className="w-5.5 h-5.5 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                        src={facebook}
                                        alt="Facebook"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub Copyright Bar and decorative links */}
                <div className="border-t border-[#C59B73]/15 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-center text-sm text-[#8C7A76] tracking-wide font-sans">
                        Copyright © 2026 Krati Makeover | All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-[10px] text-[#8C7A76] uppercase tracking-[0.2em] font-bold">
                        <span className="hover:text-[#FF8A7A] transition-colors cursor-pointer">Luxury</span>
                        <span className="text-[#C59B73]/30 select-none">•</span>
                        <span className="hover:text-[#FF8A7A] transition-colors cursor-pointer">Affordability</span>
                        <span className="text-[#C59B73]/30 select-none">•</span>
                        <span className="hover:text-[#FF8A7A] transition-colors cursor-pointer">Expertise</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer