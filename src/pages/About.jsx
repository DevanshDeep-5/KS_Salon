

import design from "../assets/design.png"

const About = () => {
  return (
    <section id="about-section" className="relative w-full min-h-screen bg-[#FDFBF8] py-20 px-6 md:px-12 lg:px-20 flex items-center justify-center overflow-hidden">


      {/* Main Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left-hand Column: Brand Philosophy & Story */}
        <div className="flex flex-col text-left pr-0 lg:pr-4">

          {/* Top Pill / Badge */}
          <div className="inline-flex items-center text-xs uppercase tracking-[0.25em] text-[#C59B73] font-bold mb-5">
            {/* Elegant 4-Petal Flower Logo */}
            <img className="w-9 h-9 mr-2" src={design} alt="" />
            Why Choose Us
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-[1.2] mb-1 font-sans">
            About KS Salon in Gola that Everybody will Love
          </h2>
          <span className="text-sm font-medium text-[#C59B73] tracking-wide mb-3 ml-[50vw]">- Krati Gupta</span>
          {/* Paragraphs */}
          <div className="space-y-6 text-[#595959] text-[15px] sm:text-base leading-[1.7] font-normal">
            <p>
              We think that beauty is not only the issue of looks but of confidence and
              comfort. The salon is constructed to provide you these two things. As soon
              as you walk in you are invited in a place that combines fashion and
              tranquility. All the services including hairstyling, skincare, and makeup are
              performed accurately and carefully.
            </p>
            <p>
              The products we use in KS Salon are Best Salon in Gola Gokaran Nath of
              a high quality and we apply modern practices and international trends in
              order to offer our clients the best. Such commitment makes us the obvious
              choice to those looking out to find a reliable beauty salon in Gola Gokaran Nath.
            </p>
            <p>
              Being beautiful is genderless and therefore KS Salon is truly an No.1
              Unisex – Women & Men salon in Gola Gokaran Nath. We have experienced
              professionals that treat the individual needs of men and women, which
              include haircuts, styles, colouring, facials, beard treatments, spa
              treatments and many more. We are a one-stop-shop built to cater every
              age, every style.
            </p>
          </div>
        </div>

        {/* Right-hand Column: 2x2 Elegant Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

          {/* Card 1: Professional Team */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#FF8A7A]/25 rounded-[24px] p-8 text-center shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:border-[#FF8A7A]/50 hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            {/* Custom Makeup Brush SVG Icon */}
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="28" y="28" width="8" height="8" rx="1.5" transform="rotate(-45 32 32)" fill="#FCE7A6" />
                <path d="M29 41 L14 56 C12.5 57.5, 10 57.5, 8.5 56 C7 54.5, 7 52, 8.5 50.5 L23.5 35.5" />
                <circle cx="11" cy="53" r="1" fill="currentColor" />
                <path d="M34 26 C31 22, 32 15, 38 9 C43.5 4, 49 6.5, 52.5 12 C56 17.5, 54 23.5, 50 26.5 L34 26" fill="#FF8A7A" fillOpacity="0.25" />
                <path d="M38 20 Q44 14, 47 9" />
                <path d="M42 22 Q47 17, 51 13" />
                <path d="M36 15 Q40 10, 43 7" />
              </svg>
            </div>
            <h3 className="text-[19px] font-bold text-neutral-900 mb-3">Professional Team</h3>
            <p className="text-[13px] text-neutral-500 font-normal leading-[1.6]">
              Our certified stylists, makeup artists, and beauty experts bring skill, creativity, and care to every service — ensuring you always leave looking and feeling your best.
            </p>
          </div>

          {/* Card 2: Top-Quality Products */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#FF8A7A]/25 rounded-[24px] p-8 text-center shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:border-[#FF8A7A]/50 hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            {/* Custom Beauty Bottles SVG Icon */}
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="18" y="24" width="13" height="28" rx="3" fill="#FCE7A6" fillOpacity="0.25" />
                <rect x="21" y="18" width="7" height="6" rx="1" fill="#FF8A7A" fillOpacity="0.3" />
                <line x1="24.5" y1="18" x2="24.5" y2="24" />
                <rect x="35" y="16" width="12" height="36" rx="3" fill="#FF8A7A" fillOpacity="0.15" />
                <rect x="38" y="10" width="6" height="6" rx="1" fill="#FCE7A6" />
                <path d="M44 10 H47 V12" />
                <rect x="21" y="32" width="7" height="12" rx="1" strokeWidth="1" stroke="#FF8A7A" />
                <line x1="23" y1="36" x2="26" y2="36" strokeWidth="1" />
                <line x1="23" y1="40" x2="26" y2="40" strokeWidth="1" />
                <rect x="38" y="24" width="6" height="14" rx="1" strokeWidth="1" stroke="#4A3E3D" />
              </svg>
            </div>
            <h3 className="text-[19px] font-bold text-neutral-900 mb-3">Top-Quality Products</h3>
            <p className="text-[13px] text-neutral-500 font-normal leading-[1.6]">
              We use only trusted, salon-grade products from leading brands like <span className="font-bold italic text-neutral-800">L'Oréal</span>, <span className="font-bold italic text-neutral-800">MAC</span>, <span className="font-bold italic text-neutral-800">O3+</span>, and <span className="font-bold italic text-neutral-800">Schwarzkopf</span> to ensure safe, effective, and long-lasting results for your hair and skin.
            </p>
          </div>

          {/* Card 3: Welcoming Atmosphere */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#FF8A7A]/25 rounded-[24px] p-8 text-center shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:border-[#FF8A7A]/50 hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            {/* Custom Face Cream Tub SVG Icon */}
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 32 C18 32, 16 48, 20 50 C24 52, 40 52, 44 50 C48 48, 46 32, 46 32" fill="#FCE7A6" fillOpacity="0.2" />
                <rect x="20" y="28" width="24" height="4" fill="#FF8A7A" fillOpacity="0.35" />
                <rect x="17" y="22" width="30" height="6" rx="1.5" fill="#4A3E3D" fillOpacity="0.1" />
                <ellipse cx="32" cy="41" rx="7" ry="4.5" strokeWidth="1" stroke="#FF8A7A" />
                <path d="M11 23 L13 25 M13 23 L11 25" strokeWidth="1" />
                <path d="M51 35 L53 37 M53 35 L51 37" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-[19px] font-bold text-neutral-900 mb-3">Welcoming Atmosphere</h3>
            <p className="text-[13px] text-neutral-500 font-normal leading-[1.6]">
              Step into a clean, calming, and friendly space designed to make you feel relaxed and pampered from the moment you arrive.
            </p>
          </div>

          {/* Card 4: Personalized Experience */}
          <div className="bg-white/90 backdrop-blur-sm border border-[#FF8A7A]/25 rounded-[24px] p-8 text-center shadow-[0_12px_36px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:border-[#FF8A7A]/50 hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            {/* Custom Compact Mirror SVG Icon */}
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="32" cy="24" r="16" fill="#FCE7A6" fillOpacity="0.25" />
                <circle cx="32" cy="24" r="12" fill="#FF8A7A" fillOpacity="0.15" />
                <path d="M32 40 L32 54 C32 56, 30 58, 28 58" strokeWidth="1.8" />
                <path d="M29 46 H35" />
                <path d="M26 20 L38 20" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M28 26 L36 26" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-[19px] font-bold text-neutral-900 mb-3">Personalized Experience</h3>
            <p className="text-[13px] text-neutral-500 font-normal leading-[1.6]">
              We tailor every service to your unique style, skin, and hair needs — ensuring results that truly reflect you.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;