import React from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/portfolio/Hero";
import AboutSection from "../components/portfolio/About";
import SkillsSection from "../components/portfolio/Skills";
import ProjectsSection from "../components/portfolio/Projects";
import ContactSection from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
