import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="contact" className="w-full bg-transparent text-gray-200 shadow-lg px-6 py-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-8 text-center max-w-2xl">
          Interested in collaborating or have an opportunity? Reach out via any of the links below.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#7042f861] bg-[#0300145e] hover:bg-[#03001486] transition-colors"
          >
            <RxGithubLogo size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#7042f861] bg-[#0300145e] hover:bg-[#03001486] transition-colors"
          >
            <RxLinkedinLogo size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:youremail@example.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#7042f861] bg-[#0300145e] hover:bg-[#03001486] transition-colors"
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


