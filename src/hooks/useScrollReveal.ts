"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

export function useScrollReveal(
    from: "left" | "right" | "bottom" = "bottom",
    startOffset: string = "0.9"
) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start ${startOffset}` as any, "start 0.35"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const rawMovement = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const smoothMovement = useSpring(rawMovement, {
        stiffness: 100,
        damping: 24
    });

    const xLeft = useTransform(smoothMovement, (v) => (from === "left" ? -80 * v : 0));
    const xRight = useTransform(smoothMovement, (v) => (from === "right" ? 80 * v : 0));
    const yBottom = useTransform(smoothMovement, (v) => (from === "bottom" ? 80 * v : 0));

    return { ref, opacity, xLeft, xRight, yBottom };
}