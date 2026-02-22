"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
    text: string,
    {
        speed = 42,
        startDelay = 0,
        enabled = true,
    }: { speed?: number; startDelay?: number; enabled?: boolean } = {}
) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!enabled) {
            setDisplayed(text);
            setDone(true);
            return;
        }

        setDisplayed("");
        setDone(false);
        let i = 0;
        let interval: NodeJS.Timeout;

        const start = setTimeout(() => {
            interval = setInterval(() => {
                i++;
                setDisplayed(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(interval);
                    setDone(true);
                }
            }, speed);
        }, startDelay);
        return () => {
            clearTimeout(start);
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [text, speed, startDelay, enabled]);

    return { displayed, done };
}
interface TypewriterTextProps {
    text: string;
    speed?: number;
    startDelay?: number;
    className?: string;
    as?: "span" | "p" | "h1" | "h2" | "h3";
    enabled?: boolean;
    showCursor?: boolean;
}

export default function TypewriterText({
    text,
    speed = 42,
    startDelay = 0,
    className,
    as: Tag = "span",
    enabled = true,
    showCursor = true,
}: TypewriterTextProps) {
    const { displayed, done } = useTypewriter(text, { speed, startDelay, enabled });

    return (
        <Tag className={`relative inline-block ${className ?? ""}`} aria-label={text}>
            <span aria-hidden="true" className="invisible select-none whitespace-pre-wrap">
                {text}
            </span>

            <span
                aria-hidden="true"
                className="absolute inset-0 whitespace-pre-wrap"
            >
                {displayed}
                {showCursor && !done && (
                    <span className="inline-block w-[2px] h-[0.85em] ml-[1px] bg-current align-middle animate-pulse" />
                )}
            </span>

            <span className="sr-only">{text}</span>
        </Tag>
    );
}
