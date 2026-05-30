import React, { useState } from 'react';

/**
 * A beautiful, highly-reusable Card component built to match the premium design exactly,
 * now enhanced with interactive 3D flipping logic to reveal detailed bullet services.
 * 
 * Props:
 * @param {string} image - The source URL or imported asset for the card's illustration/image.
 * @param {string} title - The heading text (e.g., "HAIR TREATMENT"). Will be rendered in uppercase.
 * @param {string} description - The card's description/body text.
 * @param {Array<string>} bullets - Array of bullet points to display on the flipped card side.
 * @param {string} className - Optional extra Tailwind CSS classes for the card container.
 */
const Card = ({ 
  image, 
  title, 
  description, 
  bullets = [], 
  className = '' 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`w-full max-w-[350px] min-h-[420px] select-none cursor-pointer group ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full min-h-[420px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* FRONT SIDE OF THE CARD */}
        <div 
          className="absolute inset-0 w-full h-full flex flex-col items-center bg-white rounded-[48px] pt-12 pb-10 px-8 text-center border border-neutral-100/50 shadow-[0_16px_48px_rgba(0,0,0,0.06)] group-hover:shadow-[0_24px_64px_rgba(0,0,0,0.1)] transition-shadow duration-500"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Circular Image Container */}
          <div className="w-42 h-42 rounded-lg flex items-center justify-center mb-7 overflow-hidden transition-transform duration-500 group-hover:scale-105">
            {image ? (
              <img 
                src={image} 
                alt={title} 
                className="w-70 h-70 object-contain select-none pointer-events-none"
              />
            ) : (
              <div className="w-10 h-10 border-2 border-neutral-400/30 rounded-full" />
            )}
          </div>

          {/* Uppercase Header */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-[0.1em] text-neutral-900 uppercase px-2 leading-tight">
            {title}
          </h3>

          {/* Elegant Divider Accent Line */}
          <div 
            className="w-14 h-[4px] rounded-full bg-gradient-to-r from-transparent via-[#FF8A7A] to-transparent mt-3.5 mb-5.5"
          />

          {/* Description Text */}
          <p className="text-[15px] sm:text-base text-neutral-500 font-normal leading-[1.7] px-2 mb-6">
            {description}
          </p>

          {/* Subtle helper hint */}
          <span className="absolute bottom-6 text-[10px] uppercase tracking-[0.2em] font-bold text-[#C59B73] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            Click to view services
          </span>
        </div>

        {/* BACK SIDE OF THE CARD (Flipped view) */}
        <div 
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-between bg-gradient-to-b from-[#FAF7F2] to-white rounded-[48px] pt-12 pb-10 px-8 text-center border border-[#C59B73]/20 shadow-[0_16px_48px_rgba(197,155,115,0.04)]"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)' 
          }}
        >
          <div className="flex flex-col items-center w-full">
            {/* Header */}
            <h3 className="text-lg font-bold tracking-[0.15em] text-[#3C2A21] uppercase leading-tight mb-2">
              {title}
            </h3>
            
            {/* Soft divider */}
            <div className="w-10 h-[3px] rounded-full bg-[#FF8A7A] mb-8" />

            {/* Flipped bullet lists */}
            <ul className="space-y-4 w-full text-left px-2">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 group/item">
                  {/* Luxury Bullet Check Frame */}
                  <span className="w-5 h-5 rounded-full bg-[#FAF6F0] border border-[#C59B73]/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:border-[#FF8A7A] transition-colors duration-300">
                    <svg className="w-2.5 h-2.5 text-[#FF8A7A]" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-medium text-neutral-700 leading-tight">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Click to return hint */}
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FF8A7A] opacity-80 mt-6">
            Click to return
          </span>
        </div>

      </div>
    </div>
  );
};

export default Card;
