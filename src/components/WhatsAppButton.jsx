import React from 'react';

const WhatsAppButton = () => {
  // Opening link with customized pre-filled message
  const whatsappUrl = "https://wa.me/919559808482?text=Hello!%20I%20have%20a%20query%20about%20your%20salon%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group select-none cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      {/* Help Bubble Box */}
      <div className="bg-white px-3.5 py-1.5 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-neutral-100 text-[11px] sm:text-xs font-sans font-medium text-neutral-800 tracking-wide transition-all duration-300 transform translate-y-0.5 group-hover:-translate-x-1">
        Need Help? <span className="font-bold">Chat with us</span>
      </div>

      {/* Floating Circular Green Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
        <svg 
          className="w-7 h-7 sm:w-8 sm:h-8 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.13-1.347A9.948 9.948 0 0012.01 22c5.507 0 9.991-4.478 9.992-9.984A9.997 9.997 0 0012.012 2zm5.72 14.162c-.244.688-1.22 1.25-1.68 1.298-.456.047-.9-.124-2.884-.91-2.544-1.01-4.17-3.606-4.298-3.774-.127-.168-.962-1.28-.962-2.443 0-1.163.608-1.733.824-1.968.217-.234.47-.294.628-.294.156 0 .313.003.45.01.144.006.337-.054.528.404.197.47.674 1.644.733 1.762.059.117.098.254.02.41-.078.156-.118.254-.235.39-.117.137-.247.306-.353.41-.118.118-.242.247-.104.485.138.238.61 1.002 1.312 1.63.902.805 1.657 1.05 1.892 1.169.235.117.37.1.51-.06.136-.156.586-.684.743-.918.156-.234.312-.195.528-.117.215.078 1.363.644 1.597.76.235.118.39.176.45.274.058.098.058.566-.186 1.254z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
