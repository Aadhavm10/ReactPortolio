"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

// Decrypted Text Component
const DecryptedText = ({ text, className = '' }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  useEffect(() => {
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

// CardRotate Component
interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleDragEnd(_: any, info: { offset: { x: number; y: number } }) {
    const dragDistance = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    
    if (dragDistance > sensitivity) {
      onSendToBack();
    }

    animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
  }

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, zIndex: 1000 }}
      drag
      dragElastic={0.2}
      dragMomentum={false}
      dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
      className="absolute cursor-grab select-none"
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
  sensitivity = 100,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
        { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
        { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
        { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
        { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
      ]
  );

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      if (index !== -1) {
        const [card] = newCards.splice(index, 1);
        newCards.unshift(card);
      }
      return newCards;
    });
  };

  return (
    <div
      className="relative select-none"
      style={{
        width: cardDimensions.width + 100,
        height: cardDimensions.height + 100,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        const isTopCard = index === cards.length - 1;

        return (
          <div key={card.id} className="absolute inset-0 flex items-center justify-center">
            {isTopCard ? (
              <CardRotate
                onSendToBack={() => sendToBack(card.id)}
                sensitivity={sensitivity}
              >
                <motion.div
                  className="rounded-[20px] border-[5px] border-white overflow-hidden shadow-2xl select-none"
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
                    className="pointer-events-none w-full h-full object-cover select-none"
                    draggable={false}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/${cardDimensions.width}x${cardDimensions.height}/1e293b/ffffff?text=Tech+${card.id}`;
                    }}
                  />
                </motion.div>
              </CardRotate>
            ) : (
              <motion.div
                className="rounded-[20px] border-[5px] border-white overflow-hidden shadow-2xl select-none pointer-events-none"
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
                  className="pointer-events-none w-full h-full object-cover select-none"
                  draggable={false}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/${cardDimensions.width}x${cardDimensions.height}/1e293b/ffffff?text=Tech+${card.id}`;
                  }}
                />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const HeroContent = () => {
  const techStackCards = [
    { id: 1, img: "/images/IMG_3158.JPG" },
    { id: 2, img: "/images/HASA.JPG" },
    { id: 3, img: "/images/Soccer.JPG" },
    { id: 4, img: "/images/IMG_4152.JPG" },
    { id: 5, img: "/images/NAV05745.JPG" }
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
            Aadhav
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Manimurugan{" "}
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px]"
        >
          <DecryptedText 
            text="Student at the University of Texas at Dallas"
            className="text-lg text-gray-400"
          />
        </motion.div>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Stack 
          cardsData={techStackCards}
          randomRotation={false}
          sensitivity={60}
          sendToBackOnClick={false}
          cardDimensions={{ width: 400, height: 400 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
