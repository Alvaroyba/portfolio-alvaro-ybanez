"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    /** Si es true, usa variantes de fade + slide corto hacia arriba */
    once?: boolean;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: EASE,
            delay,
        },
    }),
};

/**
 * Wrapper que anima sus hijos con fade-up al entrar en el viewport.
 * Usa `once: true` por defecto para que solo anime en la primera aparición.
 */
export default function AnimatedSection({
    children,
    className,
    delay = 0,
    once = true,
}: AnimatedSectionProps) {
    return (
        <motion.div
            className={className}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-60px" }}
            custom={delay}
        >
            {children}
        </motion.div>
    );
}
