"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Project data
const projectData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  slides: { image: string; title: string; description: string }[];
  githubUrl?: string;
  liveUrl?: string;
}> = {
  "saasmatch": {
    title: "SaasMatch",
    description: "Fullstack application that serves as a platform for entrepreneurs and businesses to find each other to complete a project. Software has been sold.",
    longDescription: "SaasMatch is a comprehensive platform designed to connect entrepreneurs with skilled professionals and businesses. The platform facilitates project collaboration, team formation, and business partnerships through an intuitive matching system.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Stripe"],
    slides: [
      {
        image: "/SaasSlides/slide1.png",
        title: "Slide 1",
        description: ""
      },
      {
        image: "/SaasSlides/slide2.png",
        title: "Slide 2",
        description: ""
      },
      {
        image: "/SaasSlides/slide3.png",
        title: "Slide 3",
        description: ""
      },
      {
        image: "/SaasSlides/slide4.png",
        title: "Slide 4",
        description: ""
      },
      {
        image: "/SaasSlides/slide5.png",
        title: "Slide 5",
        description: ""
      },
      {
        image: "/SaasSlides/slide6.png",
        title: "Slide 6",
        description: ""
      },
      {
        image: "/SaasSlides/slide7.png",
        title: "Slide 7",
        description: ""
      },
      {
        image: "/SaasSlides/slide8.png",
        title: "Slide 8",
        description: ""
      },
      {
        image: "/SaasSlides/slide9.png",
        title: "Slide 9",
        description: ""
      },
      {
        image: "/SaasSlides/slide10.png",
        title: "Slide 10",
        description: ""
      },
      {
        image: "/SaasSlides/slide11.png",
        title: "Slide 11",
        description: ""
      },
      {
        image: "/SaasSlides/slide12.png",
        title: "Slide 12",
        description: ""
      }
    ],
    githubUrl: "https://github.com/KappaThetaPiUTD/Saas"
  },
  "foodie": {
    title: "Foodie",
    description: "Website and Mobile Application allowing groups of people to find restaurants that accommodate everyone. Currently in development.",
    longDescription: "Foodie solves the common problem of finding restaurants that satisfy everyone in a group. The app considers dietary restrictions, preferences, location, and budget to suggest perfect dining options for groups.",
    technologies: ["React Native", "Next.js", "PostgreSQL", "Node.js", "Maps API", "Firebase"],
    slides: [
      {
        image: "/Foodie.png",
        title: "Group Creation",
        description: "Easy group creation flow where users can invite friends and set dining preferences, dietary restrictions, and budget constraints."
      },
      {
        image: "/Foodie.png",
        title: "Restaurant Matching",
        description: "Intelligent algorithm that finds restaurants matching all group members' preferences, with ratings, reviews, and real-time availability."
      },
      {
        image: "/Foodie.png",
        title: "Mobile Experience", 
        description: "Seamless mobile app experience with location services, push notifications, and easy reservation booking directly through the app."
      }
    ],
    githubUrl: "https://github.com/KappaThetaPiUTD/Foodie"
  }
};

interface PageProps {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const project = projectData[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Project not found</h1>
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length);
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#03001417] backdrop-blur-md border-b border-[#7042f861]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
            <ChevronLeftIcon className="w-5 h-5" />
            Back to Portfolio
          </Link>
          <h1 className="text-xl font-semibold">{project.title}</h1>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-purple-400/30 bg-purple-500/10 text-sm text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Slide Presentation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden border border-[#7042f861] bg-[#0300145e]">
                  <Image
                    src={project.slides[currentSlide].image}
                    alt={project.slides[currentSlide].title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Slide Controls */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={prevSlide}
                    className="ml-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={nextSlide}
                    className="mr-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-purple-500' : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide Counter */}
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  {currentSlide + 1} / {project.slides.length}
                </p>
              </div>
            </motion.div>

            {/* Project Description */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="rounded-xl border border-[#7042f861] bg-[#0300145e] p-6">
                <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                    >
                      View Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#7042f861] bg-[#0300145e] hover:bg-[#03001486] transition-colors"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


