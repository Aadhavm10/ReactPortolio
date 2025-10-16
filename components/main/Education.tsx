"use client";

import React from "react";

const educationSummary = {
  school: "University of Texas at Dallas",
  degree: "B.S. in Computer Science",
  period: "Expected Graduation: December 2026",
  location: "Richardson, Texas",
  gpa: "3.6/4.0",
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
      className="flex flex-col items-center justify-center gap-8 sm:gap-12 h-full relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <p className="text-xs tracking-widest text-violet-300/80 uppercase">Academic Journey</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Education</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
      </div>

      <div className="w-full max-w-6xl px-4 sm:px-6 space-y-8">
        {/* Main Education Card */}
        <div className="group relative rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 backdrop-blur-lg p-6 sm:p-8 hover:border-violet-400/50 transition-all duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative space-y-6">
            {/* School Info */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                  {educationSummary.school}
                </h3>
                <p className="text-sm text-gray-400">{educationSummary.location}</p>
              </div>

              <div className="flex items-center gap-3 lg:gap-4 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-400/30 w-fit">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-wider text-violet-300/70">GPA</p>
                  <p className="text-lg font-bold text-white">{educationSummary.gpa}</p>
                </div>
              </div>
            </div>

            {/* Degree & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-base sm:text-lg font-medium text-violet-200">
                {educationSummary.degree}
              </span>
              <span className="hidden sm:inline text-violet-400/50">•</span>
              <span className="text-sm text-gray-400">{educationSummary.period}</span>
            </div>

            {/* Extracurriculars */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm uppercase tracking-wider text-violet-300/70">Involvement</h4>
              <div className="flex flex-wrap gap-2">
                {educationSummary.extracurriculars.map((activity, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-violet-500/15 to-cyan-500/15 border border-violet-400/30 text-gray-200 hover:border-violet-400/50 hover:from-violet-500/25 hover:to-cyan-500/25 transition-all duration-300"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coursework Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Relevant Coursework</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allCourses.map((course, index) => (
              <div
                key={index}
                className="group relative px-4 py-3 rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/5 to-transparent backdrop-blur-sm text-sm text-gray-200 hover:border-violet-400/40 hover:from-violet-500/10 hover:to-cyan-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/0 to-cyan-500/0 group-hover:from-violet-500/5 group-hover:to-cyan-500/5 transition-all duration-300"></div>
                <span className="relative">{course}</span>
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