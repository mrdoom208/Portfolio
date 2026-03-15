import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "karlformentera2@gmail.com" },
  { icon: MapPin, label: "Location", value: "Manila, Philippines" },
  { icon: Phone, label: "Phone", value: "+63 951 747 5438" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="relative py-32 bg-slate-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            Let's work together.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you. Drop me a message and I'll get back to you as
              soon as possible.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 h-12 rounded-xl focus:border-blue-500/50 focus:ring-blue-500/20"
                type={undefined}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 h-12 rounded-xl focus:border-blue-500/50 focus:ring-blue-500/20"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 rounded-xl focus:border-blue-500/50 focus:ring-blue-500/20 resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              onClick={handleSubmit}
              className="w-full h-12 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {sending ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
