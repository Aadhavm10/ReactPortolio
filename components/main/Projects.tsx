import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 sm:py-16 lg:py-20"
      id="projects"
    >
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 sm:py-12 lg:py-20 text-center">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 max-w-7xl">
        <ProjectCard
          src="/FantasyPremierLeague.png"
          title="PremScout"
          description="Fantasy Premier League Points Predictor using machine learning algorithms to analyze player performance and predict fantasy points."
          projectUrl="https://prem-scout.vercel.app/"
        />
        <ProjectCard
          src="/Foodie.png"
          title="Foodie"
          description="Group dining solution that finds restaurants accommodating everyone's dietary restrictions, preferences, and budget constraints."
          projectUrl="/projects/foodie"
        />
        <ProjectCard
          src="/ScribbleAi.png"
          title="ScribbleAi"
          description="AI-powered notes application with intelligent summarization, task extraction, and text rephrasing capabilities for enhanced productivity."
          projectUrl="/projects/ScribbleAi"
        />
        <ProjectCard
          src="/gpu-optimizer.png"
          title="GPU Optimizer"
          description="Real-time GPU monitoring and optimization toolkit with CUDA performance enhancements achieving up to 12x speedup improvements."
          projectUrl="https://github.com/Aadhavm10/GPU_Optimzer"
        />
      </div>
    </div>
  );
};

export default Projects;