"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeImg, setActiveImg] = useState(0);

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    const { scrollYProgress: modalScroll } = useScroll({ container: scrollRef });
    const progressScaleX = useTransform(modalScroll, [0, 1], [0, 1]);
    const headerOpacity = useTransform(modalScroll, [0, 0.08], [1, 0.9]);

    return (
        <>
            <motion.div
                key="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                onClick={onClose}
                className="fixed inset-0 z-40 bg-black/55 backdrop-blur-md"
            />
            <motion.div
                key={`modal-panel-${project.id}`}
                initial={{ opacity: 0, clipPath: "inset(48% 24% 48% 24% round 24px)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 20px)" }}
                exit={{ opacity: 0, clipPath: "inset(48% 24% 48% 24% round 24px)" }}
                transition={{
                    duration: 0.52,
                    ease: EASE,
                    opacity: { duration: 0.25 },
                }}
                className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                style={{ padding: "clamp(12px, 4vw, 40px)" }}
            >
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`modal-title-${project.id}`}
                    className="relative w-full max-w-3xl max-h-[92vh] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-[20px] overflow-hidden pointer-events-auto flex flex-col"
                >
                    <motion.div
                        className="absolute top-0 left-0 h-[3px] bg-blue-500 z-10 origin-left w-full"
                        style={{ scaleX: progressScaleX }}
                    />
                    <motion.div
                        style={{ opacity: headerOpacity }}
                        className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800"
                    >
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <h2 className="text-lg font-bold text-black dark:text-white leading-tight truncate">
                                {project.title}
                            </h2>
                            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium truncate">
                                {project.tagline}
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.12, rotate: 90 }}
                            whileTap={{ scale: 0.88 }}
                            transition={{ duration: 0.2 }}
                            onClick={onClose}
                            className="flex-shrink-0 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
                            aria-label="Cerrar modal"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        </motion.button>
                    </motion.div>

                    <div ref={scrollRef} className="overflow-y-auto flex flex-col gap-8 p-6 pb-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
                            }}
                            className="flex flex-wrap gap-2"
                        >
                            {project.techStack.map((tech) => (
                                <motion.span
                                    key={tech}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8, y: 8 },
                                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
                                    }}
                                    className="px-3 py-1 text-xs font-semibold bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.18, ease: EASE, duration: 0.45 }}
                            className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed"
                        >
                            {project.description}
                        </motion.p>

                        <div className="flex flex-col gap-4">
                            <motion.p
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.22, ease: EASE, duration: 0.4 }}
                                className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500"
                            >
                                Capturas
                            </motion.p>

                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {project.images.map((img, i) => (
                                    <motion.button
                                        key={i}
                                        onClick={() => setActiveImg(i)}
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.94 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.06, ease: EASE, duration: 0.35 }}
                                        className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all bg-zinc-100 dark:bg-zinc-800/40 ${activeImg === i
                                            ? "border-blue-500 shadow-md"
                                            : "border-zinc-200 dark:border-zinc-800 opacity-55 hover:opacity-80"
                                            }`}
                                    >
                                        <Image src={img} alt={`captura-${i + 1}`} fill className="object-contain p-[2px]" />
                                    </motion.button>
                                ))}
                            </div>

                            <div className="relative w-full h-[350px] sm:h-[500px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-zinc-50 dark:bg-zinc-900">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeImg}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="absolute inset-4 sm:inset-6"
                                    >
                                        <Image
                                            src={project.images[activeImg]}
                                            alt={`${project.title} — captura ${activeImg + 1}`}
                                            fill
                                            className="object-contain object-center drop-shadow-md"
                                            priority
                                            sizes="(max-width: 768px) 100vw, 800px"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {project.videoSrc && (
                            <ScrollReveal scrollRef={scrollRef}>
                                <div className="flex flex-col gap-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                                        Video Demo
                                    </p>

                                    <div className="relative w-full h-[350px] sm:h-[500px] flex items-center justify-center rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black shadow-lg">
                                        <video
                                            src={project.videoSrc}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            controls={false}
                                            className="w-full h-full object-contain"
                                            poster={project.previewImage}
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        )}

                        {(project.link || project.repo) && (
                            <ScrollReveal scrollRef={scrollRef}>
                                <div className="flex gap-3 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                                    {project.link && (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.04 }}
                                            whileTap={{ scale: 0.96 }}
                                            className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                                        >
                                            Ver demo →
                                        </motion.a>
                                    )}
                                    {project.repo && (
                                        <motion.a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.04 }}
                                            whileTap={{ scale: 0.96 }}
                                            className="px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                                        >
                                            Código fuente
                                        </motion.a>
                                    )}
                                </div>
                            </ScrollReveal>
                        )}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

function ScrollReveal({
    children,
    scrollRef,
}: {
    children: React.ReactNode;
    scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        container: scrollRef,
        offset: ["start 1.05", "start 0.65"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [36, 0]);

    return (
        <motion.div ref={ref} style={{ opacity, y }}>
            {children}
        </motion.div>
    );
}
