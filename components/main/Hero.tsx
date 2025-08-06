import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Background video - FIXED: removed pointer blocking */}
      
      {/* Content with explicit z-index and pointer events */}
      <div className="relative z-[20]" style={{ pointerEvents: 'auto' }}>
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;



/*{ id: 1, img: "/images/IMG_4152.JPG" },
    { id: 2, img: "/images/HASA.JPG" },
    { id: 3, img: "/images/Image 8-5-25 at 4.02O PM.JPG" },
    { id: 4, img: "/images/IMG_3158.JPG" },
    { id: 5, img: "/images/NAV05745.JPG" }*/