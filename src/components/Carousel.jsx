import React, { useState, useEffect } from 'react';
import Glow from "./../assets/Glow.png";
import Haircut from "./../assets/Haircut.png";
import Nourish from "./../assets/Nourish.png";

export function Carousel() {
    const slides = [
        { src: Glow, alt: "Glow - Professional Makeup & Glow Services" },
        { src: Haircut, alt: "Haircut - Expert Styling and Colors" },
        { src: Nourish, alt: "Nourish - Premium Hair & Skin Care nourishment" },
        { src: Glow, alt: "Glow - Professional Makeup & Glow Services" },
        { src: Haircut, alt: "Haircut - Expert Styling and Colors" },
        { src: Nourish, alt: "Nourish - Premium Hair & Skin Care nourishment" }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // changes slide every 4 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className='w-full relative group'>
            <div className="w-full aspect-[12/5] relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-gray-50">

                {/* Slides Wrapper */}
                <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-cover select-none"
                            />
                            {/* Optional dark gradient overlay for premium aesthetics */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                        </div>
                      ))}
                </div>

                {/* Indicators at the bottom */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === activeIndex
                                    ? 'bg-white scale-125 shadow-md'
                                     : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
