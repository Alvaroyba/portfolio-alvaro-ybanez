"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="w-[52px] h-[28px]" />;

    const isDark = resolvedTheme === "dark";

    return (
        <motion.button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            title={isDark ? "Tema claro" : "Tema oscuro"}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`relative flex items-center w-[52px] h-[28px] rounded-full border border-zinc-200 dark:border-zinc-700 p-[3px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors duration-300 ${isDark ? "bg-zinc-700" : "bg-zinc-100"
                }`}
        >
            <motion.span
                animate={{ x: isDark ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="relative z-10 w-[20px] h-[20px] rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-600 flex items-center justify-center"
            >
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.svg
                            key="moon"
                            initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                            transition={{ duration: 0.22, ease: EASE }}
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-blue-400"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="sun"
                            initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
                            transition={{ duration: 0.22, ease: EASE }}
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className="text-amber-500"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.span>
        </motion.button>
    );
}