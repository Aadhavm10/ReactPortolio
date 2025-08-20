import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 max-w-7xl relative z-40" style={{ position: 'relative', zIndex: 40 }}>
        <ProjectCard
          src="/NextWebsite.png"
          title="Fantasy Premier League Points Predictor"
          description="A modern and responsive portfolio website built with Next.js, featuring smooth animations and interactive components."
          projectUrl="https://prem-scout.vercel.app/"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Foodie"
          description="A collection of interactive and animated card components with hover effects and smooth transitions."
          projectUrl="https://github.com/yourusername/interactive-cards"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="An immersive space-themed website with stunning visuals, animations, and cosmic interactions."
          projectUrl="https://github.com/yourusername/space-website"
        />
      </div>
    </div>
  );
};

export default Projects;