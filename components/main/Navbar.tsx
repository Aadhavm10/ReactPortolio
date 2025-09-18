"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About me", href: "#about-me" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [blobX, setBlobX] = useState<number>(0);
  const [blobVisible, setBlobVisible] = useState<boolean>(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const computeBlobXFromEl = (el: HTMLAnchorElement) => {
    const containerEl = navContainerRef.current;
    if (!el || !containerEl) return;
    const linkRect = el.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();
    const centerWithinContainer = linkRect.left - containerRect.left + linkRect.width / 2;
    const blobSize = 32; // w-8 h-8
    setBlobX(centerWithinContainer - blobSize / 2);
  };

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

      <div className="w-full h-full flex items-center m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center flex-1"
        >
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Aadhav Manimurugan
          </span>
        </a>

        {/* Gooey Nav - Centered */}
        <div className="relative w-full max-w-[500px] h-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          {/* Gooey blobs */}
          <div
            className="absolute w-full h-full left-0 top-0 pointer-events-none z-0 flex items-center gooey"
            style={{ filter: "url('#gooey-effect')" }}
            aria-hidden
          >
            {/* Main blob */}
            <motion.span
              className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-500 ${
                blobVisible ? "opacity-100" : "opacity-0"
              }`}
              animate={{ x: blobX, scale: blobVisible ? 1 : 0.8 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              style={{ left: 0 }}
            />
            {/* Satellites to enhance gooey effect */}
            <motion.span
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 ${
                blobVisible ? "opacity-90" : "opacity-0"
              }`}
              animate={{ x: blobX - 16, scale: blobVisible ? 1 : 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              style={{ left: 0 }}
            />
            <motion.span
              className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-400 ${
                blobVisible ? "opacity-90" : "opacity-0"
              }`}
              animate={{ x: blobX + 24, scale: blobVisible ? 1 : 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              style={{ left: 0 }}
            />
          </div>

          <div
            ref={navContainerRef}
            className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] px-[12px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-full text-gray-200 relative z-10"
            onMouseLeave={() => {
              setActiveIndex(null);
              setBlobVisible(false);
            }}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="cursor-pointer px-2 sm:px-4 relative z-20 text-sm sm:text-base"
                onMouseEnter={(e) => {
                  setActiveIndex(index);
                  setBlobVisible(true);
                  computeBlobXFromEl(e.currentTarget);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right spacer to balance the layout */}
        <div className="flex-1"></div>

      </div>
    </div>
  );
};

export default Navbar;
