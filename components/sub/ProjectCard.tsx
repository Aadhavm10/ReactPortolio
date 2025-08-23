"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  projectUrl?: string;
}

const ProjectCard = ({ src, title, description, projectUrl }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.02)
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setIsHovered(false);
    cardRef.current.style.transform = `
      rotateX(0deg) 
      rotateY(0deg) 
      scale(1)
    `;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      ref={cardRef}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-all duration-300 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
              style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          height: 520,
        }}
    >
        {/* Gradient overlay that appears on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 transition-opacity duration-300 pointer-events-none z-10 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        <div className="w-full" style={{ height: 300 }}>
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            priority={false}
          />
        </div>

        <div className="relative p-4 flex flex-col gap-3" style={{ position: 'relative', minHeight: 180 }}>
          <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
          <p className="text-gray-300">{description}</p>
          
          {projectUrl && (
            <Link 
              href={projectUrl}
              className={`
                inline-flex items-center px-4 py-2 rounded-md text-sm font-medium
                bg-gradient-to-r from-purple-600 to-blue-600 text-white
                hover:from-purple-700 hover:to-blue-700
                transition-all duration-200 ease-out
                shadow-md hover:shadow-lg
                hover:scale-105
                relative
                ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-90'} mt-auto
              `}
              target={projectUrl?.startsWith('http') ? "_blank" : "_self"}
              rel={projectUrl?.startsWith('http') ? "noopener noreferrer" : undefined}
              style={{ position: 'relative', pointerEvents: 'auto' }}
            >
              View Project
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Subtle shine effect */}
        <div 
          className={`
            absolute inset-0 transition-opacity duration-300 pointer-events-none z-10
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}
        />
      </div>
    );
};

export default ProjectCard;