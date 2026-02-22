"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "@/components/ui/ProjectModal";
import { Project } from "@/data/projects";

const LINKS = [
    { label: "GitHub", href: "https://github.com/Alvaroyba" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alvaro-ybanez/" },
    { label: "Email", href: "mailto:alvaro.ybanez16@gmail.com" },
];

interface FooterSectionProps {
    selectedProject: Project | null;
    onClose: () => void;
}

export default function FooterSection({ selectedProject, onClose }: FooterSectionProps) {
    return (
        <>
            <footer
                id="contact"
                className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 px-6 sm:px-12 py-12 border-t border-zinc-200 dark:border-zinc-800 mt-8 mb-8"
            >
                <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                    © {new Date().getFullYear()} Alvaro Ybañez — Hecho con{" "}
                    <Link
                        className="text-blue-600 dark:text-blue-400"
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Next.js
                    </Link>
                </p>

                <div className="flex gap-8">
                    {LINKS.map(({ label, href }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target={label !== "Email" ? "_blank" : undefined}
                            rel={label !== "Email" ? "noopener noreferrer" : undefined}
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="text-sm font-semibold text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                        >
                            {label}
                        </motion.a>
                    ))}
                </div>
            </footer>
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        key={selectedProject.id}
                        project={selectedProject}
                        onClose={onClose}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
