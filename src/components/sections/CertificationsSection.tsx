"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionBackground from "@/components/ui/SectionBackground";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CERTIFICATIONS } from "@/data/portfolio.data";

import { useMotionValue, useMotionTemplate } from "framer-motion";

function CertificationItem({ cert }: { cert: (typeof CERTIFICATIONS)[number] }) {
    const { ref, opacity, xLeft } = useScrollReveal("left");
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            ref={ref}
            style={{ opacity, x: xLeft }}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col gap-1 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 hover:border-blue-200 dark:hover:border-blue-900 transition-colors shadow-sm hover:shadow-md overflow-hidden"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 dark:group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            300px circle at ${mouseX}px ${mouseY}px,
                            rgba(59, 130, 246, 0.12),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 flex justify-between items-start gap-4">
                <div className="flex flex-col gap-1">
                    <h4 className="text-md font-bold text-black dark:text-white leading-snug">{cert.title}</h4>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                </div>
                <span className="text-xs font-medium text-zinc-400 whitespace-nowrap bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded-md">
                    {cert.date}
                </span>
            </div>

            <p className="relative z-10 text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed flex-grow">{cert.details}</p>

            {cert.link && (
                <div className="relative z-10 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors"
                    >
                        Ver credencial oficial
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                    </a>
                </div>
            )}
        </motion.div>
    );
}

export default function CertificationsSection() {
    return (
        <section
            id="certifications"
            className="relative w-full border-t border-zinc-100 dark:border-zinc-900"
        >
            <SectionBackground variant="a" />
            <div className="mx-auto w-full max-w-5xl flex flex-col items-start gap-10 px-6 sm:px-12 py-16">
                <SectionHeading
                    label="Validación"
                    title="Certificaciones"
                    subtitle="Acreditaciones oficiales que respaldan mis metodologías de trabajo y especializaciones técnicas."
                />
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {CERTIFICATIONS.map((cert) => (
                        <CertificationItem key={cert.id} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}