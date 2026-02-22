export interface Project {
    id: string;
    title: string;
    tagline: string;
    techStack: string[];
    description: string;
    previewImage: string;
    images: string[];
    videoSrc?: string;
    placeholderBg: string;
    link?: string;
    repo?: string;
}

export const projects: Project[] = [
    {
        id: "app-antilu",
        title: "Gestión Comercial — Antilu",
        tagline: "Operaciones de ventas, compras y costos en un solo lugar.",
        techStack: ["React Native", "Expo", "Node.js", "TRPC", "PostgreSQL", "Supabase", "Prisma", "TypeScript"],
        description:
            "App móvil nativa para la gestión integral de ventas, compras y costeo. Reduce la fricción operativa ofreciendo a los comercios una única fuente de verdad para su flujo de caja y control de inventario.",
        previewImage: "/projects/antilu/antilu-dashboard.png",
        images: [
            "/projects/antilu/antilu-dashboard.png",
            "/projects/antilu/antilu-ventas.png",
            "/projects/antilu/antilu-ventas-detalles.png",
            "/projects/antilu/antilu-productos.png",
            "/projects/antilu/antilu-productos-detalle.png",
            "/projects/antilu/antilu-compras.png",
            "/projects/antilu/antilu-insumos.png",
            "/projects/antilu/antilu-agenda.png",
            "/projects/antilu/antilu-agenda-detalles.png",
            "/projects/antilu/antilu-movimientos.png",
            "/projects/antilu/antilu-registrar pago.png",
        ],
        videoSrc: "https://res.cloudinary.com/dofqs6szr/video/upload/v1771794789/antilu-demo_k3dcpt.mov",
        placeholderBg: "bg-rose-950/40",
    },
    {
        id: "app-gastos",
        title: "Control de Gastos Familiares",
        tagline: "Presupuesto colaborativo para toda la familia.",
        techStack: ["React Native", "Expo", "Node.js", "PostgreSQL", "Supabase", "Prisma", "TypeScript", "JWT"],
        description:
            "Aplicación colaborativa para el seguimiento y distribución del presupuesto mensual. Registra ingresos y egresos en tiempo real, con vistas por categoría y resúmenes mensuales compartidos.",
        previewImage: "/projects/family-expenses/family-dashboard.png",
        images: [
            "/projects/family-expenses/family-dashboard.png",
            "/projects/family-expenses/family-compras.png",
            "/projects/family-expenses/family-compras-detalle.png",
            "/projects/family-expenses/family-balance.png",
            "/projects/family-expenses/family-pago.png",
            "/projects/family-expenses/family-deudores.png",
            "/projects/family-expenses/family-dolares.png",
            "/projects/family-expenses/family-families.png",
        ],
        videoSrc: "https://res.cloudinary.com/dofqs6szr/video/upload/v1771793829/family-demo_sf8icg.mp4",
        placeholderBg: "bg-blue-950/40",

    },
    {
        id: "app-uniteach",
        title: "Uniteach — Plataforma Educativa",
        tagline: "Mentoría entre pares para la universidad moderna.",
        techStack: ["React", "JavaScript", "Node.js", "Express", "MySQL", "Tailwind CSS"],
        description:
            "Proyecto Final de Carrera (nota: 10/10). Plataforma peer-to-peer que conecta a estudiantes universitarios con mentores. Incluye perfiles dinámicos, sistema de reservas y dashboard sincronizado con Google Calendar.",
        previewImage: "/projects/uniteach/uniteach-landing.png",
        images: [
            "/projects/uniteach/uniteach-landing.png",
            "/projects/uniteach/uniteach-inicio.png",
            "/projects/uniteach/uniteach-nosotros.png",
            "/projects/uniteach/uniteach-login.png",
            "/projects/uniteach/uniteach-registro.png",
            "/projects/uniteach/uniteach-busqueda.png",
            "/projects/uniteach/uniteach-seleccion.png",
            "/projects/uniteach/uniteach-perfil.png",
        ],
        placeholderBg: "bg-blue-950/40",
    },
];