"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionBackground from "@/components/ui/SectionBackground";
import { projects, Project } from "@/data/projects";

interface ProjectsSectionProps {
    onProjectClick: (project: Project) => void;
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
    return (
        <section
            id="projects"
            className="relative w-full border-t border-zinc-100 dark:border-zinc-900"
        >
            <SectionBackground variant="a" />
            <div className="mx-auto w-full max-w-5xl flex flex-col items-start gap-10 px-6 sm:px-12 py-16">
                <SectionHeading
                    label="Portafolio"
                    title="Proyectos Destacados"
                    subtitle="Selección de proyectos personales y profesionales que demuestran mi enfoque en usabilidad, diseño y calidad técnica."
                />

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            onClick={() => onProjectClick(project)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
