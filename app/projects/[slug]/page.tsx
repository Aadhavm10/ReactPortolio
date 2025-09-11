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
  mediaType: 'video' | 'slides';
  videoUrl?: string;
  slides?: { image: string; title: string; description: string }[];
  githubUrl?: string;
  liveUrl?: string;
}> = {
  "ScribbleAi": {
    title: "ScribbleAi",
    description: "AI-powered notes application with intelligent summarization, task extraction, and text rephrasing capabilities. Features modern authentication and real-time AI processing.",
    longDescription: "ScribbleAI is a comprehensive AI-powered notes application that transforms how users create, organize, and interact with their notes. The platform leverages advanced AI capabilities to automatically summarize content, extract actionable tasks, and rephrase text for improved clarity and tone. Built with a modern microservices architecture, the application features secure Google OAuth authentication, real-time AI processing through the Groq API, and a sleek glass morphism design. The scalable backend handles complex note operations while the responsive frontend provides an intuitive user experience across all devices.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Stripe", "OpenAI", "Supabase"],
    mediaType: 'video',
    videoUrl: "/videos/saasmatch-demo.mp4", // Add your video path here
    githubUrl: "https://github.com/KappaThetaPiUTD/Saas"
  },
  "foodie": {
    title: "Foodie",
    description: "Website and Mobile Application allowing groups of people to find restaurants that accommodate everyone. Currently in development.",
    longDescription: "Foodie solves the common problem of finding restaurants that satisfy everyone in a group. The app considers dietary restrictions, preferences, location, and budget to suggest perfect dining options for groups. We are curretly working on done front end, mobile app support, and overall testing and bug fixes. ",
    technologies: ["React Native", "Next.js", "PostgreSQL", "Node.js", "Maps API", "Firebase"],
    mediaType: 'video',
    videoUrl: "/foodie-demo.mp4", // Add your video path here
    githubUrl: "https://github.com/KappaThetaPiUTD/Foodie"
  },
  // Example project with slides (keep this structure for other projects)
  "example-project": {
    title: "Example Project",
    description: "An example project with slides",
    longDescription: "This is an example of how projects with slides would look.",
    technologies: ["React", "TypeScript"],
    mediaType: 'slides',
    slides: [
      {
        image: "/example/slide1.png",
        title: "Slide 1",
        description: "First slide description"
      },
      {
        image: "/example/slide2.png",
        title: "Slide 2", 
        description: "Second slide description"
      }
    ]
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

  const renderMedia = () => {
    if (project.mediaType === 'video' && project.videoUrl) {
      return (
        <div className="aspect-video rounded-xl overflow-hidden border border-[#7042f861] bg-[#0300145e]">
          <video
            controls
            className="w-full h-full object-cover"
            poster="/video-thumbnails/default-poster.png" // Optional: Add a poster image
          >
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else if (project.mediaType === 'slides' && project.slides) {
      return (
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
      );
    }
  };

  const renderMediaInfo = () => {
    if (project.mediaType === 'slides' && project.slides) {
      return (
        <div className="text-center">
          <p className="text-sm text-gray-500">
            {currentSlide + 1} / {project.slides.length}
          </p>
        </div>
      );
    }
    return null;
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
            {/* Media Presentation (Video or Slides) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {renderMedia()}
              {renderMediaInfo()}
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