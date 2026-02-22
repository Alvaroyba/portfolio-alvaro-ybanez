# Álvaro Ybañez | Software Developer Portfolio

Este es mi portfolio profesional, diseñado para demostrar mis capacidades técnicas en el desarrollo de software de alto impacto, con un fuerte enfoque en el **Frontend Engineering**, la **Arquitectura de Software** y la **Calidad de Código**.

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://portfolio-alvaroybas-projects.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 🚀 Stack Tecnológico

He seleccionado un stack moderno orientado a la escalabilidad y el rendimiento:

- **Core:** Next.js 14/15, React, TypeScript.
- **Styling & Motion:** Tailwind CSS, Framer Motion, Lucide Icons.
- **State Management & Data:** TanStack Query, Zustand, tRPC.
- **Backend & DB:** Node.js, Express, PostgreSQL, Prisma ORM.
- **Testing & Quality:** Jest, React Testing Library, Cypress.
- **Media:** Cloudinary (Video Optimization).

## 🛠️ Características Destacadas

- **Diseño de Interfaz:** Experiencia de usuario (UX) pulida con soporte nativo para Dark Mode y animaciones de alto rendimiento optimizadas para GPU mediante Framer Motion.
- **Arquitectura Limpia:** Estructura de carpetas modular, basada en componentes reutilizables, hooks customizados y separación de lógica de negocio o datos (`projects.ts`, `portfolio.data.tsx`).
- **Optimización de Medios:** Gestión de demostraciones en video mediante Cloudinary para garantizar una carga rápida y métricas de Core Web Vitals optimizadas en la navegación de proyectos.
- **Estrategia de Versionado:** Uso de ramas y convenciones de commits profesionales para mantener un historial trazable y limpio.

## 📂 Estructura del Proyecto

```text
├── public/           # Assets estáticos locales (imágenes, icons)
├── src/
│   ├── app/          # Next.js 14+ app router (page.tsx, layout.tsx, styles)
│   ├── components/
│   │   ├── sections/ # Componentes complejos que arman la landing (Hero, Projects, Experience)
│   │   └── ui/       # Componentes de UI atómicos (Cards, Modals, Buttons)
│   ├── data/         # Archivos unificados de contenido estático (TechStack, Experience, Certifications)
│   └── hooks/        # Hooks personalizados para abstracción de lógica compleja (ej. scroll reveal)
└── next.config.ts    # Configuración de entornos y dominios autorizados de media
```

## 🛠️ Instalación y Uso

**Clonar el repositorio:**

```bash
git clone https://github.com/Alvaroyba/portfolio-alvaro-ybanez.git
```

**Instalar dependencias:**

```bash
cd portfolio-alvaro-ybanez
pnpm install
```

**Ejecutar en desarrollo:**

```bash
pnpm run dev
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000).

## 📬 Contacto

Si estás buscando un desarrollador comprometido con la excelencia técnica y enfocado en el detalle:

- **Email:** alvaro.ybanez16@gmail.com
- **LinkedIn:** [linkedin.com/in/alvaro-ybanez](https://www.linkedin.com/in/alvaro-ybanez/)
- **Web:** [https://portfolio-alvaroybas-projects.vercel.app/](https://portfolio-alvaroybas-projects.vercel.app/)
