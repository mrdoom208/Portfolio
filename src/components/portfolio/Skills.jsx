import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95, color: "from-orange-500 to-orange-400" },
  { name: "CSS", level: 90, color: "from-blue-500 to-blue-400" },
  { name: "JavaScript", level: 92, color: "from-yellow-500 to-yellow-400" },
  { name: "React", level: 88, color: "from-cyan-500 to-cyan-400" },
  { name: "Java", level: 85, color: "from-red-500 to-red-400" },
  { name: "Node.js", level: 87, color: "from-green-500 to-green-400" },
];

const tools = [
  "Git",
  "Docker",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "TypeScript",
  "Tailwind CSS",
  "Spring Boot",
  "Express.js",
  "AWS",
  "Linux",
  "Agile",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 bg-slate-950">
      {/* Subtle divider gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skill bars */}
          <div className="space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-sm text-slate-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + i * 0.08,
                      ease: "easeOut",
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools grid */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                  className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/40 text-slate-400 text-sm hover:text-white hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
