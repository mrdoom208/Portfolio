import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack online store with real-time inventory, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    gradient: "from-blue-600/20 to-indigo-600/20",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop, and analytics.",
    tags: ["React", "Java", "Spring Boot", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization platform with customizable charts and real-time data processing.",
    tags: ["JavaScript", "Node.js", "D3.js", "REST API"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "Social Media API",
    description:
      "RESTful API service handling authentication, media uploads, and real-time messaging.",
    tags: ["Java", "Spring Boot", "Redis", "Docker"],
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80",
    gradient: "from-orange-600/20 to-red-600/20",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 bg-slate-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-slate-800/50 bg-slate-900/20 overflow-hidden hover:border-slate-700/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <button className="p-2.5 rounded-xl bg-slate-950/60 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:text-white transition-colors">
                    <Github size={16} />
                  </button>
                  <button className="p-2.5 rounded-xl bg-slate-950/60 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:text-white transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="text-slate-600 group-hover:text-blue-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    size={18}
                  />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-lg bg-slate-800/50 text-slate-400 border border-slate-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
