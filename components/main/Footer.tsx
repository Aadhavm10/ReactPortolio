import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="contact" className="w-full bg-transparent text-gray-200 shadow-lg px-6 py-16 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-8 text-center max-w-2xl">
          Interested in collaborating or have an opportunity? Reach out via any of the links below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/Aadhavm10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#7042f861] bg-[#0300145e] hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 relative z-20"
            style={{ pointerEvents: 'auto' }}
          >
            <RxGithubLogo size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aadhav-/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#7042f861] bg-[#0300145e] hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 relative z-20"
            style={{ pointerEvents: 'auto' }}
          >
            <RxLinkedinLogo size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:aadhavmanimurugan@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#7042f861] bg-[#0300145e] hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 relative z-20"
            style={{ pointerEvents: 'auto' }}
          >
            <MdEmail size={20} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;


