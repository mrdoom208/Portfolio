import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Palette } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    desc: "Building responsive, interactive UIs with React and modern CSS",
  },
  {
    icon: Server,
    title: "Backend",
    desc: "Designing robust APIs and microservices with Java & Node.js",
  },
  {
    icon: Palette,
    title: "UI/UX",
    desc: "Creating intuitive interfaces with attention to design details",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Turning ideas into
            <br />
            <span className="text-slate-500">digital reality.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              I'm a passionate IT professional with expertise spanning the full
              development stack. From crafting pixel-perfect frontends to
              architecting efficient backend systems, I bring a holistic
              approach to every project.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              With experience in HTML, CSS, JavaScript, React, Java, and
              Node.js, I build applications that are not only functional but
              also maintainable, scalable, and a joy to use.
            </p>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex gap-5 p-5 rounded-2xl border border-slate-800/50 bg-slate-900/30 hover:border-slate-700/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="text-blue-400" size={22} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
