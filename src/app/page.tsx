"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Project } from "@/data/projects";
import ThemeToggle from "@/components/ui/ThemeToggle";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: pageProgress } = useScroll();
  const pageBar = useSpring(pageProgress, { stiffness: 100, damping: 30 });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center font-sans bg-background selection:bg-blue-100 dark:selection:bg-blue-900 overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-blue-500 z-50 origin-left"
        style={{ scaleX: pageBar }}
      />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <HeroSection heroRef={heroRef} heroScroll={heroScroll} />
      <ProjectsSection onProjectClick={setSelectedProject} />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <FooterSection
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}