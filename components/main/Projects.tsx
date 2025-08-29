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
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10 max-w-7xl">
        <ProjectCard
          src="/FantasyPremierLeague.png"
          title="PremScout"
          description="Fantasy Premier League Points Predictor using Scikit-Learn and Python in the backend as well as React in the frontend."
          projectUrl="https://prem-scout.vercel.app/"
        />
        <ProjectCard
          src="/Foodie.png"
          title="Foodie"
          description="Website and Mobile Application allowing gorups of people to find resteraunts that accomodate evryone. Currently in development."
          projectUrl="/projects/foodie"
        />
        <ProjectCard
          src="/ScribbleAi.png"
          title="ScribbleAi"
          description="Fullstack application that serves as a platform for entrepeuneurs and businesss to find eachother to complete a project. Software has been sold."
          projectUrl="/projects/ScribbleAi"
        />
      </div>
    </div>
  );
};

export default Projects;