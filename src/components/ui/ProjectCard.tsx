"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Project } from "@/data/projects";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ProjectCardProps {
    project: Project;
    index?: number;
    onClick: () => void;
}

export default function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["0 1.25", "1.15 1"]
    });
    const scrollRotateX = useTransform(scrollYProgress, [0, 1], [65, 0]);
    const scrollYTransform = useTransform(scrollYProgress, [0, 1], [150, 0]);
    const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scrollScale = useTransform(scrollYProgress, [0, 1], [0.65, 1]);
    const springConfig = { damping: 20, stiffness: 150, mass: 1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const mouseRotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
    const mouseRotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

    const finalRotateX = useTransform(
        [scrollRotateX, mouseRotateX],
        ([sRx, mRx]: any) => Number(sRx) + Number(mRx)
    );

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const mx = (e.clientX - rect.left) / rect.width - 0.5;
        const my = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(mx);
        y.set(my);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            style={{
                perspective: 1200,
                y: scrollYTransform,
                opacity: scrollOpacity,
                scale: scrollScale,
            }}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl focus:ring-offset-2 dark:focus:ring-offset-black"
        >
            <motion.article
                style={{
                    rotateX: finalRotateX,
                    rotateY: mouseRotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative flex flex-col w-full h-full border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm transition-colors hover:border-blue-300 dark:hover:border-blue-900 duration-300"
            >
                <div className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden">
                    <motion.div
                        style={{
                            width: "200%",
                            height: "200%",
                            x: useTransform(springX, [-0.5, 0.5], ["-75%", "25%"]),
                            y: useTransform(springY, [-0.5, 0.5], ["-75%", "25%"]),
                            background: `radial-gradient(circle at center, rgba(255,255,255,0.25) 0%, transparent 50%)`,
                        }}
                        className="absolute top-0 left-0"
                    />
                </div>
                <div
                    style={{ transform: "translateZ(30px)" }}
                    className={`relative w-full h-52 sm:h-60 overflow-hidden ${project.placeholderBg}`}
                >
                    <div className="absolute inset-4 sm:inset-5">
                        <Image
                            src={project.previewImage}
                            alt={`Preview de ${project.title}`}
                            fill
                            className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 px-5 py-2.5 rounded-full bg-white/95 dark:bg-zinc-900/95 text-xs font-bold text-zinc-900 dark:text-white shadow-xl border border-zinc-200 dark:border-zinc-700 backdrop-blur-sm">
                            Ver proyecto →
                        </span>
                    </div>
                </div>

                <div
                    style={{ transform: "translateZ(40px)" }}
                    className="p-6 flex flex-col flex-grow gap-3 z-10 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md"
                >
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                        {project.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow line-clamp-3">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                        {project.techStack.map((tech: string) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.article>
        </motion.div>
    );
}