"use client";

import React, { useState } from "react";

type CourseTerm = {
  term: string;
  courses: string[];
};



const educationSummary = {
  school: "University of Texas at Dallas",
  degree: "B.S. in Computer Science",
  period: "Expected Graduation: December 2026",
  location: "Richardson, Texas",
  gpa: "3.9/4.0",
  highlights: [
    "Dean's List (Fall 2023, Spring 2024)",,
  ],
  extracurriculars: [
    "UTD Soccer",
    "Kappa Theta Pi",
  ]
};

const allCourses = [
  "Data Structures & Algorithms",
  "Discrete Mathematics", 
  "Linear Algebra",
  "Computer Systems Architecture",
  "Advanced Algorithms",
  "Operating Systems",
  "Database Systems",
  "Computer Networks",
  "Machine Learning",
  "Software Engineering",
  "Distributed Systems",
  "Web Development",
  "Object-Oriented Programming",
  "Computer Graphics",
  "Artificial Intelligence"
];



const Education = () => {

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.98)" }}
    >
      <div className="text-center">
        <p className="text-xs tracking-widest text-violet-300/80 uppercase">Academic & Professional</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Education</h2>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Education Summary */}
        <div className="rounded-2xl border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md p-6 text-gray-200">
          <div className="mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-3">
              <span className="text-white text-sm font-bold">🎓</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Education</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-white">{educationSummary.school}</h4>
              <p className="text-sm text-gray-300">{educationSummary.location}</p>
              <p className="text-violet-200 mt-1">{educationSummary.degree}</p>
              <p className="text-xs text-gray-400 mt-1">{educationSummary.period}</p>
            </div>


            <div>
              <h5 className="text-sm font-medium text-white mb-2">Achievements</h5>
              <ul className="space-y-1">
                {educationSummary.highlights.map((highlight, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-violet-400 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-medium text-white mb-2">Extracurriculars</h5>
              <ul className="space-y-1">
                {educationSummary.extracurriculars.map((highlight, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-violet-400 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        

        {/* Coursework */}
        <div className="rounded-2xl border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md p-6 text-gray-200">
          <div className="mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-3">
              <span className="text-white text-sm font-bold">📚</span>
            </div>
            <h4 className="text-xl font-semibold text-white">Relevant Coursework</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allCourses.map((course, index) => (
              <div
                key={index}
                className="px-3 py-2 rounded-lg border border-violet-400/20 bg-violet-500/5 text-sm text-gray-200 hover:bg-violet-500/10 transition-colors"
              >
                {course}
              </div>
            ))}
          </div>
        </div>


      </div>

      <div className="w-full h-full absolute pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-20 absolute inset-0 bg-gradient-to-b from-transparent via-[#2A0E61]/10 to-transparent" />
      </div>
    </section>
  );
};

export default Education;