"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

// Decrypted Text Component
const DecryptedText = ({ text, className = '' }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [isComplete, setIsComplete] = React.useState(false);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  React.useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() => 
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        setIsComplete(true);
        clearInterval(interval);
      }
      
      iteration += 1;
    }, 15);
    
    return () => clearInterval(interval);
  }, [text]);
  
  return (
    <p className={`font-mono ${className} ${isComplete ? 'opacity-100' : 'opacity-90'}`}>
      {displayText}
    </p>
  );
};

// Card Rotate Component
interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: any, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

// Stack Component
interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
}

function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 250, height: 300 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: "/react-logo.png" },
          { id: 2, img: "/nextjs-logo.png" },
          { id: 3, img: "/typescript-logo.png" },
          { id: 4, img: "/nodejs-logo.png" }
        ]
  );

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5
          : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-xl overflow-hidden shadow-2xl bg-slate-800/80 backdrop-blur-sm border border-slate-700/50"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/${cardDimensions.width}x${cardDimensions.height}/1e293b/ffffff?text=Tech+Stack`;
                }}
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

const HeroContent = () => {
  // Your tech stack images - replace these paths with your actual image paths
  const techStackCards = [
    { id: 1, img: "/images/react-logo.png" },
    { id: 2, img: "/images/nextjs-logo.png" },
    { id: 3, img: "/images/typescript-logo.png" },
    { id: 4, img: "/images/nodejs-logo.png" },
    { id: 5, img: "/images/python-logo.png" }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Name{" "}
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px]"
        >
          <DecryptedText 
            text="I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills."
            className="text-lg text-gray-400"
          />
        </motion.div>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Stack 
          cardsData={techStackCards}
          randomRotation={true}
          sensitivity={150}
          sendToBackOnClick={true}
          cardDimensions={{ width: 250, height: 300 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;