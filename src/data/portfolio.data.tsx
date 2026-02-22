import React from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const EXPERIENCE = [
    {
        id: "censys",
        role: "FrontEnd Developer",
        company: "Censys S.A.",
        period: "Dic 2024 — Actualidad",
        active: true,
        bullets: [
            <>Implementé pipelines de <strong className="text-zinc-700 dark:text-zinc-300">CI/CD y automatización de pruebas</strong> (unitarias, de integración y E2E), mejorando drásticamente la calidad del código y reduciendo el margen de error en los despliegues a producción.</>,
            <>Diseñé e integré <strong className="text-zinc-700 dark:text-zinc-300">agentes y subagentes de IA con VS Copilot</strong> para realizar auditorías de seguridad, análisis técnico profundo y generación automatizada de suites de testing en los repositorios.</>,
            <>Definí y estandaricé una <strong className="text-zinc-700 dark:text-zinc-300">nueva estrategia de versionado en Git</strong> exclusiva para el equipo Frontend, optimizando los tiempos de entrega y asegurando un historial colaborativo limpio y escalable.</>,
            <>Lideré el <strong className="text-zinc-700 dark:text-zinc-300">rediseño y migración arquitectónica</strong> de múltiples proyectos hacia versiones más modernas del ecosistema, reduciendo la deuda técnica y mejorando la mantenibilidad global.</>,
        ]
    }
];

export const TECH_STACK = [
    // Lenguajes Core
    "TypeScript",
    // Frontend Pesado
    "React", "Next.js", "React Native", "umiJS",
    // Backend & Datos
    "Node.js", "Express", "PostgreSQL", "Prisma",
    // Arquitectura & Estado (Demuestra Seniority)
    "TanStack Query", "Zustand", "tRPC",
    // UI & Styling Moderno
    "Tailwind CSS", "Framer Motion",
    // Testing & Calidad
    "Jest", "Cypress", "React Testing Library",
];

export const EDUCATION = [
    {
        id: "unsta-ia",
        degree: "Ingeniería en Inteligencia Artificial",
        institution: "Universidad del Norte Santo Tomás de Aquino (UNSTA)",
        period: "Abril 2025 — En curso",
        status: "cursando" as const,
        highlights: [
            "Formación orientada a ciencia de datos, machine learning y arquitecturas Cloud (AWS).",
            "Desarrollo algorítmico avanzado con Python.",
        ],
    },
    {
        id: "unsta-tecnicatura",
        degree: "Tecnicatura en Desarrollo y Calidad de Software",
        institution: "Universidad del Norte Santo Tomás de Aquino (UNSTA)",
        period: "Marzo 2022 — Marzo 2025",
        status: "completado" as const,
        highlights: [
            "Graduado con Honores: Proyecto Final de Carrera (Uniteach) calificado con 10 y destacado en Programación.",
            "Especialización en patrones de diseño, testing corporativo y control de versiones.",
        ],
    },
];

export const CERTIFICATIONS = [
    {
        id: "cert-ai",
        title: "Desarrollo con IA",
        issuer: "BIG school",
        date: "Octubre 2025",
        details:
            "Certificación práctica sobre integración y desarrollo con herramientas de Inteligencia Artificial.",
        link: "/certs/big-school-ia.pdf",
    },
    {
        id: "cert-scrum",
        title: "Scrum Foundation Professional Certificate (SFPC)",
        issuer: "CertiProf",
        date: "Mayo 2023",
        details:
            "Fundamentos teóricos y prácticos de metodologías ágiles aplicadas al ciclo de vida del desarrollo de software.",
        link: "/certs/scrum-foundation.pdf",
    },
];

export const LANGUAGES = [
    { lang: "Español", level: "Nativo" },
    { lang: "Inglés", level: "B1 Certificado (Cursando B2)" },
];
