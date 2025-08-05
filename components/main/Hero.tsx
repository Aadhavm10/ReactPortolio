import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section id="about-me" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-30 rotate-180"
          style={{ top: '-340px' }}
        >
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <HeroContent />
    </section>
  );
};

export default Hero;