"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionBackground from "@/components/ui/SectionBackground";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EDUCATION } from "@/data/portfolio.data";

function EducationItem({ edu }: { edu: (typeof EDUCATION)[number] }) {
    const { ref, opacity, xLeft } = useScrollReveal("left");

    return (
        <motion.div ref={ref} style={{ opacity, x: xLeft }}>
            <motion.div
                whileHover={{ x: 6, transition: { duration: 0.25 } }}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300"
            >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-bold text-black dark:text-white leading-snug">
                            {edu.degree}
                        </h4>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {edu.institution}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-sm text-zinc-400 dark:text-zinc-500">{edu.period}</span>
                        {edu.status === "cursando" ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                En curso
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50">
                                ✓ Completado
                            </span>
                        )}
                    </div>
                </div>
                <ul className="flex flex-col gap-2">
                    {edu.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-600 flex-shrink-0" />
                            {h}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}

export default function EducationSection() {
    return (
        <section
            id="education"
            className="relative w-full border-t border-zinc-100 dark:border-zinc-900"
        >
            <SectionBackground variant="d" />
            <div className="mx-auto w-full max-w-5xl flex flex-col items-start gap-10 px-6 sm:px-12 py-16">
                <SectionHeading
                    label="Formación"
                    title="Estudios"
                    subtitle="Combino la práctica de la industria con una base académica sólida. Creo que entender el «por qué» hace mejores productos."
                />
                <div className="w-full flex flex-col gap-6">
                    {EDUCATION.map((edu) => (
                        <EducationItem key={edu.id} edu={edu} />
                    ))}
                </div>
            </div>
        </section>
    );
}
