"use client";
type Variant = "a" | "b" | "c" | "d";

export default function SectionBackground({ variant = "a" }: { variant?: Variant }) {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        >
            {variant === "a" && <VariantA />}
            {variant === "b" && <VariantB />}
            {variant === "c" && <VariantC />}
            {variant === "d" && <VariantD />}
        </div>
    );
}

function Blob({
    color,
    size,
    className,
    opacityClaro = 0.45,
    opacityOscuro = 0.15,
}: {
    color: string;
    size: number;
    className?: string;
    opacityClaro?: number;
    opacityOscuro?: number;
}) {
    return (
        <>
            <div
                className={`absolute rounded-full dark:hidden ${className}`}
                style={{
                    width: size,
                    height: size,
                    background: color,
                    filter: `blur(${size * 0.35}px)`,
                    opacity: opacityClaro,
                    transform: "translateZ(0)",
                    willChange: "transform",
                }}
            />
            <div
                className={`absolute rounded-full hidden dark:block ${className}`}
                style={{
                    width: size,
                    height: size,
                    background: color,
                    filter: `blur(${size * 0.35}px)`,
                    opacity: opacityOscuro,
                    transform: "translateZ(0)",
                    willChange: "transform",
                }}
            />
        </>
    );
}

function Ring({
    size,
    strokeWidth = 1,
    className,
}: {
    size: number;
    strokeWidth?: number;
    className?: string;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className={`absolute ${className}`}
        >
            <circle
                cx={size / 2}
                cy={size / 2}
                r={size / 2 - strokeWidth}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                fill="none"
                className="text-zinc-300 dark:text-zinc-700"
                opacity={0.7}
            />
        </svg>
    );
}

function DotGrid({
    cols = 6,
    rows = 4,
    gap = 18,
    className,
}: {
    cols?: number;
    rows?: number;
    gap?: number;
    className?: string;
}) {
    const dots = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dots.push(
                <circle
                    key={`${r}-${c}`}
                    cx={c * gap + gap / 2}
                    cy={r * gap + gap / 2}
                    r={1.5}
                    fill="currentColor"
                />
            );
        }
    }
    return (
        <svg
            width={cols * gap}
            height={rows * gap}
            viewBox={`0 0 ${cols * gap} ${rows * gap}`}
            className={`absolute text-zinc-300 dark:text-zinc-700 opacity-60 ${className}`}
        >
            {dots}
        </svg>
    );
}

function VariantA() {
    return (
        <>
            <Blob
                color="radial-gradient(circle, #3b82f6 0%, #60a5fa 60%, transparent 100%)"
                size={580}
                className="-left-20 -top-32"
                opacityClaro={0.25}
                opacityOscuro={0.12}
            />
            <Ring size={320} strokeWidth={1.5} className="-right-24 bottom-12" />
            <Ring size={160} strokeWidth={1} className="right-48 top-16" />
        </>
    );
}

function VariantB() {
    return (
        <>
            <Blob
                color="radial-gradient(circle, #8b5cf6 0%, #a78bfa 60%, transparent 100%)"
                size={540}
                className="-right-20 -top-20"
                opacityClaro={0.22}
                opacityOscuro={0.10}
            />
            <DotGrid cols={8} rows={6} gap={22} className="left-12 bottom-12" />
            <Ring size={220} strokeWidth={1} className="right-24 bottom-8" />
        </>
    );
}

function VariantC() {
    return (
        <>
            <Blob
                color="radial-gradient(circle, #0ea5e9 0%, #38bdf8 50%, transparent 100%)"
                size={600}
                className="-left-40 top-1/2 -translate-y-1/2"
                opacityClaro={0.22}
                opacityOscuro={0.09}
            />
            <svg
                width="240"
                height="240"
                viewBox="0 0 240 240"
                className="absolute right-12 top-12 text-blue-200 dark:text-blue-900 opacity-40"
            >
                {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216].map((offset) => (
                    <line
                        key={offset}
                        x1={offset}
                        y1={0}
                        x2={240}
                        y2={240 - offset}
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                ))}
            </svg>
            <Ring size={180} strokeWidth={1} className="right-8 bottom-8" />
        </>
    );
}

function VariantD() {
    return (
        <>
            <Blob
                color="radial-gradient(circle, #10b981 0%, #34d399 50%, transparent 100%)"
                size={520}
                className="-right-32 -bottom-24"
                opacityClaro={0.20}
                opacityOscuro={0.08}
            />
            <Blob
                color="radial-gradient(circle, #3b82f6 0%, #93c5fd 50%, transparent 100%)"
                size={400}
                className="-left-32 top-20"
                opacityClaro={0.15}
                opacityOscuro={0.06}
            />
            <Ring size={260} strokeWidth={1} className="-left-16 -top-20" />
            <DotGrid cols={6} rows={5} gap={20} className="right-16 top-12" />
        </>
    );
}
