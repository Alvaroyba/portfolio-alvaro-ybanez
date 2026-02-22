"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SocialButtonProps {
    href: string;
    label: string;
    icon: IconType;
    colorClass?: string;
    external?: boolean;
    variant?: "solid" | "outline";
}

export default function SocialButton({
    href,
    label,
    icon: Icon,
    colorClass = "bg-black dark:bg-white text-white dark:text-black",
    external = true,
    variant = "solid",
}: SocialButtonProps) {
    const base =
        variant === "solid"
            ? `inline-flex items-center justify-center w-12 h-12 rounded-full shadow-sm transition-colors ${colorClass}`
            : "inline-flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors";

    return (
        <motion.a
            href={href}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={base}
            aria-label={label}
            title={label}
        >
            <Icon size={20} aria-hidden="true" />
        </motion.a>
    );
}
