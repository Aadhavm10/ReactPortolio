"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const navLinks = [
  { name: "About me", href: "#about-me" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      {/* Gooey Filter */}
      <svg id="gooey-svg" className="absolute w-0 h-0 z-[-1]">
        <defs>
          <filter id="gooey-effect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Aadhav Manimurugan
          </span>
        </a>

        {/* Gooey Nav */}
        <div className="relative w-[500px] h-full flex items-center justify-center md:mr-20">
          <div
            className="absolute w-full h-full left-0 top-0 pointer-events-none z-0 flex justify-around items-center gooey"
            style={{ filter: "url('#gooey-effect')" }}
          >
            {navLinks.map((_, i) => (
              <span
                key={i}
                className={`transition-all duration-500 w-8 h-8 rounded-full bg-purple-500 ${
                  activeIndex === i ? "scale-150" : "scale-0"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 relative z-10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="cursor-pointer px-4 relative z-20"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
