"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle {
    x: number;
    y: number;
    ox: number;
    oy: number;
    vx: number;
    vy: number;
    size: number;
}

const GRID_GAP = 65;
const REPULSION_RADIUS = 175;
const REPULSION_FORCE = 7000;
const SPRING = 0.016;
const DAMPING = 0.91;
const MAX_SPEED = 10;

function clamp(v: number, lo: number, hi: number) {
    return v < lo ? lo : v > hi ? hi : v;
}

function initParticles(w: number, h: number): Particle[] {
    const particles: Particle[] = [];
    const cols = Math.ceil(w / GRID_GAP) + 1;
    const rows = Math.ceil(h / GRID_GAP) + 1;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const jx = (Math.random() - 0.5) * 8;
            const jy = (Math.random() - 0.5) * 8;
            const ox = c * GRID_GAP + jx;
            const oy = r * GRID_GAP + jy;
            particles.push({ x: ox, y: oy, ox, oy, vx: 0, vy: 0, size: Math.random() * 1.5 + 1.2 });
        }
    }
    return particles;
}

export default function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const rafRef = useRef<number>(0);
    const particlesRef = useRef<Particle[]>([]);
    const { resolvedTheme } = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    const themeRef = useRef(resolvedTheme);
    useEffect(() => {
        themeRef.current = resolvedTheme;
    }, [resolvedTheme]);

    useEffect(() => {
        const mq = window.matchMedia("(pointer: coarse)");
        setIsMobile(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let isVisible = true;
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
        });
        observer.observe(canvas);

        function resize() {
            if (!canvas) return;
            const parent = canvas.parentElement;
            if (!parent) return;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            particlesRef.current = initParticles(canvas.width, canvas.height);
        }

        const ro = new ResizeObserver(resize);
        if (canvas.parentElement) ro.observe(canvas.parentElement);
        resize();

        function onMouseMove(e: MouseEvent) {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        }
        function onMouseLeave() {
            mouseRef.current = { x: -9999, y: -9999 };
        }
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseleave", onMouseLeave);

        function tick() {
            rafRef.current = requestAnimationFrame(tick);

            if (!isVisible || !canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { x: mx, y: my } = mouseRef.current;
            const isDark = themeRef.current === "dark";
            const colorDot = isDark ? "rgba(255,255,255,0.25)" : "rgba(59,130,246,0.35)";
            const particles = particlesRef.current;

            for (const p of particles) {
                const dx = p.x - mx;
                const dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let nearFactor = 0;

                if (dist < REPULSION_RADIUS && dist > 0.5) {
                    const force = REPULSION_FORCE / (dist * dist);
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                    nearFactor = Math.max(0, 1 - dist / REPULSION_RADIUS);
                }

                p.vx += (p.ox - p.x) * SPRING;
                p.vy += (p.oy - p.y) * SPRING;
                p.vx *= DAMPING;
                p.vy *= DAMPING;

                p.vx = clamp(p.vx, -MAX_SPEED, MAX_SPEED);
                p.vy = clamp(p.vy, -MAX_SPEED, MAX_SPEED);

                p.x += p.vx;
                p.y += p.vy;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size + nearFactor * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = nearFactor > 0
                    ? `rgba(${isDark ? "96,165,250" : "37,99,235"},${(isDark ? 0.4 : 0.6) + nearFactor * 0.4})`
                    : colorDot;
                ctx.fill();
            }
        }

        tick();

        return () => {
            cancelAnimationFrame(rafRef.current);
            observer.disconnect();
            ro.disconnect();
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
}