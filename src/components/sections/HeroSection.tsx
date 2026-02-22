"use client";

import Image from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";
import { FaLinkedin, FaArrowDown, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import TypewriterText from "@/components/ui/TypewriterText";
import SocialButton from "@/components/ui/SocialButton";
import { EASE } from "@/data/portfolio.data";

interface HeroSectionProps {
    heroRef: React.RefObject<HTMLElement | null>;
    heroScroll: MotionValue<number>;
}

export default function HeroSection({ heroRef, heroScroll }: HeroSectionProps) {
    const heroY = useTransform(heroScroll, [0, 1], [0, 90]);
    const heroOpacity = useTransform(heroScroll, [0, 0.75], [1, 0]);
    const imageY = useTransform(heroScroll, [0, 1], [0, 40]);

    return (
        <section
            ref={heroRef}
            className="relative overflow-hidden w-full flex justify-center min-h-screen"
        >
            <ParticleCanvas />

            <div className="relative z-10 w-full max-w-5xl flex flex-col-reverse md:flex-row items-center justify-evenly gap-4 md:gap-16 px-6 sm:px-12 py-10 md:py-32">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="flex flex-col items-start gap-5 md:w-1/2"
                >
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
                    >
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                        </span>
                        <span>Disponible para nuevos proyectos</span>
                    </motion.p>

                    <motion.h1
                        aria-label="Hola, soy Alvaro Ybañez."
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white text-balance leading-[1.1]"
                    >
                        <span aria-hidden="true">
                            <TypewriterText text="Hola, soy " startDelay={100} speed={22} showCursor={false} />
                            <motion.span
                                className="text-blue-600 dark:text-blue-400 inline-block"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.01, delay: 0.5 }}
                            >
                                <TypewriterText text="Alvaro Ybañez" startDelay={500} speed={25} showCursor />
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.15 }}
                            >
                                {" "}.
                            </motion.span>
                        </span>
                    </motion.h1>

                    <motion.h2
                        aria-label="Frontend Developer y Estudiante de Ingeniería en Inteligencia Artificial"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
                        className="text-xl sm:text-2xl font-medium text-zinc-600 dark:text-zinc-300"
                    >
                        <span aria-hidden="true">
                            <TypewriterText
                                text="Frontend Developer & Estudiante de Ingeniería en IA"
                                startDelay={800}
                                speed={14}
                                showCursor={false}
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.34 }}
                        className="max-w-lg text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed"
                    >
                        <TypewriterText
                            text="Desarrollador Full Stack orientado al Frontend. Construyo productos digitales end-to-end: desde experiencias de usuario fluidas y accesibles con React, React Native, hasta la lógica de negocio y APIs con Node.js."
                            startDelay={1000}
                            speed={8}
                            showCursor={false}
                        />
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: EASE, delay: 0.44 }}
                        className="flex flex-wrap gap-3 mt-4 w-full md:w-auto items-center justify-center"                    >
                        <div className="flex flex-row items-center gap-3">
                            <SocialButton
                                href="https://github.com/Alvaroyba"
                                label="GitHub"
                                icon={FaGithub}
                                colorClass="bg-[#24292e] text-white hover:bg-[#1b1f23]"
                                external
                            />
                            <SocialButton
                                href="https://www.linkedin.com/in/alvaro-ybanez/"
                                label="LinkedIn"
                                icon={FaLinkedin}
                                colorClass="bg-[#0A66C2] text-white hover:bg-[#0958a8]"
                                external
                            />
                            <SocialButton
                                href="mailto:alvaro.ybanez16@gmail.com"
                                label="Email"
                                icon={SiGmail}
                                colorClass="bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                                external={false}
                            />
                        </div>

                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="inline-flex items-center gap-2 px-6 py-3 ml-0 md:ml-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                        >
                            Ver proyectos
                            <FaArrowDown size={14} className="animate-bounce mt-0.5" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ y: imageY }}
                    initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 3 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
                    whileHover={{ rotate: 0, scale: 1.04, transition: { duration: 0.4 } }}
                    className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[360px] md:h-[360px] flex-shrink-0 rounded-full md:rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl shadow-zinc-300/40 dark:shadow-zinc-950/70 cursor-pointer"
                >
                    <Image
                        src="/profile.png"
                        alt="Foto de perfil de Alvaro Ybañez"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 192px, (max-width: 1200px) 256px, 360px"
                    />
                </motion.div>
            </div>
        </section>
    );
}