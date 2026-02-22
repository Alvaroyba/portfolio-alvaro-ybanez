"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionBackground from "@/components/ui/SectionBackground";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EASE, EXPERIENCE } from "@/data/portfolio.data";

export default function ExperienceSection() {
    const exp = useScrollReveal("bottom");

    return (
        <section
            id="experience"
            className="relative w-full border-t border-zinc-100 dark:border-zinc-900"
        >
            <SectionBackground variant="c" />
            <div className="mx-auto w-full max-w-5xl flex flex-col items-start gap-10 px-6 sm:px-12 py-16">
                <SectionHeading label="Trayectoria" title="Experiencia Profesional" />

                <div className="w-full flex flex-col gap-12">
                    {EXPERIENCE.map((job, idx) => (
                        <motion.div
                            key={job.id}
                            ref={idx === 0 ? exp.ref : undefined}
                            style={idx === 0 ? { opacity: exp.opacity, y: exp.yBottom } : {}}
                            className="w-full"
                        >
                            <motion.article
                                whileHover={{ x: 5, transition: { duration: 0.25 } }}
                                className="flex flex-col gap-4 pl-6 border-l-2 border-blue-200 dark:border-blue-900"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                                    <div className="flex flex-col gap-0.5">
                                        <h4 className="text-xl font-bold text-black dark:text-white">{job.role}</h4>
                                        <h5 className="text-base font-semibold text-blue-600 dark:text-blue-400">{job.company}</h5>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                                            {job.period}
                                        </span>
                                        {job.active && (
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                                Activo
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-3 mt-1">
                                    {job.bullets.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -14 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, ease: EASE, delay: i * 0.09 }}
                                            className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                                        >
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.article>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
