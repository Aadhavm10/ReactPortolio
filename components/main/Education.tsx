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
};

const courseTerms: CourseTerm[] = [
  {
    term: "Fall 2024",
    courses: [
      "Data Structures",
      "Discrete Mathematics",
      "Linear Algebra",
      "Computer Systems",
    ],
  },
  {
    term: "Spring 2025",
    courses: [
      "Algorithms",
      "Operating Systems",
      "Database Systems",
      "Computer Networks",
    ],
  },
  {
    term: "Planned",
    courses: [
      "Machine Learning",
      "Software Engineering",
      "Distributed Systems",
    ],
  },
];

const Education = () => {
  const [openTermIndex, setOpenTermIndex] = useState<number | null>(0);

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.98)" }}
    >
      <div className="text-center">
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Education</h2>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summary Card */}
        <div className="lg:col-span-1 rounded-2xl border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md p-6 text-gray-200">
          <h3 className="text-xl font-semibold text-white">{educationSummary.school}</h3>
          <p className="mt-1 text-sm text-gray-300">{educationSummary.location}</p>
          <p className="mt-4 text-base text-white/90">{educationSummary.degree}</p>
          <p className="mt-1 text-sm text-gray-300">{educationSummary.period}</p>
          <p className="mt-4 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">
          </p>

          <div className="mt-6 text-xs text-gray-400">
          </div>
        </div>

        {/* Courses Accordion */}
        <div className="lg:col-span-2 rounded-2xl border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md p-4 md:p-6 text-gray-200">
          <h4 className="text-lg font-semibold text-white mb-3">Relevant Coursework</h4>

          <div className="space-y-3">
            {courseTerms.map((term, index) => {
              const isOpen = openTermIndex === index;
              return (
                <div
                  key={term.term}
                  className="rounded-xl border border-violet-400/20 bg-[#0b0720]/40"
                >
                  <button
                    type="button"
                    onClick={() => setOpenTermIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4"
                  >
                    <span className="text-white font-medium">{term.term}</span>
                    <span
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {term.courses.map((course) => (
                          <li
                            key={course}
                            className="px-3 py-2 rounded-lg border border-violet-400/20 bg-violet-500/5 text-sm text-gray-200"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute pointer-events-none select-none">
        <div className="w-full h-full z-[-10] opacity-20 absolute inset-0 bg-gradient-to-b from-transparent via-[#2A0E61]/10 to-transparent" />
      </div>
    </section>
  );
};

export default Education;

