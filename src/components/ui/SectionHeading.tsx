"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function TechBadge({ tech }: { tech: string }) {
    return (
        <motion.span
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md cursor-default select-none"
        >
            {tech}
        </motion.span>
    );
}

export default function SectionHeading({
    label,
    title,
    subtitle,
}: {
    label: string;
    title: string;
    subtitle?: string;
}) {
    const { ref, opacity, yBottom } = useScrollReveal("bottom");
    return (
        <motion.div ref={ref} style={{ opacity, y: yBottom }} className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                {label}
            </p>
            <h3 className="text-3xl font-bold text-black dark:text-white">{title}</h3>
            {subtitle && (
                <p className="text-zinc-500 dark:text-zinc-400 max-w-xl">{subtitle}</p>
            )}
        </motion.div>
    );
}
