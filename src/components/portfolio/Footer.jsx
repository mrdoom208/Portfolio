import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} My.Portfolio — Built with passion.
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, link: "https://github.com/mrdoom208" },
            { icon: Linkedin, link: "https://linkedin.com/in/karlformentera" },
            { icon: Mail, link: "mailto:karlformentera2@gmail.com" },
          ].map(({ icon: Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-slate-600 hover:text-white transition-colors duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
