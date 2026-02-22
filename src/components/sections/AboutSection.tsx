"use client";

import { motion } from "framer-motion";
import SectionHeading, { TechBadge } from "@/components/ui/SectionHeading";
import SectionBackground from "@/components/ui/SectionBackground";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TECH_STACK, LANGUAGES } from "@/data/portfolio.data";

export default function AboutSection() {
    const about = useScrollReveal("bottom");
    const aboutText = useScrollReveal("left");
    const aboutStack = useScrollReveal("right");

    return (
        <section
            id="about"
            className="relative w-full border-t border-zinc-100 dark:border-zinc-900"
        >
            <SectionBackground variant="b" />
            <div className="mx-auto w-full max-w-5xl flex flex-col items-start px-6 sm:px-12 py-16">
                <div className="flex flex-col md:flex-row gap-12 w-full">

                    <div className="flex flex-col gap-10 md:w-2/3">
                        <motion.div ref={about.ref} style={{ opacity: about.opacity, y: about.yBottom }}>
                            <SectionHeading label="Sobre mí" title="Un poco de contexto" />
                        </motion.div>

                        <motion.div
                            ref={aboutText.ref}
                            style={{ opacity: aboutText.opacity, x: aboutText.xLeft }}
                            className="flex flex-col gap-5 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
                        >
                            <p>
                                Soy un desarrollador con una curiosidad insaciable por aprender y mejorar todos los
                                días. Mi trabajo se define por una profunda atención a los detalles y el compromiso
                                innegociable de dar siempre el 100% en cada proyecto.
                            </p>
                            <p>
                                Mi enfoque principal está en el Frontend, construyendo aplicaciones web y móviles con{" "}
                                <strong className="text-zinc-800 dark:text-zinc-200">Next.js, umiJS y Expo</strong>.
                                Sin embargo, tengo la capacidad de abarcar el ciclo completo del producto gracias a mis
                                habilidades de Backend utilizando{" "}
                                <strong className="text-zinc-800 dark:text-zinc-200">Node.js y Express</strong>,
                                y gestión de bases de datos con{" "}
                                <strong className="text-zinc-800 dark:text-zinc-200">SQL, PostgreSQL y Prisma ORM</strong>.
                                Todo esto, priorizando siempre la implementación de arquitecturas escalables y asegurando
                                la calidad del código mediante testing automatizado con{" "}
                                <strong className="text-zinc-800 dark:text-zinc-200">Jest, Cypress y React Testing Library</strong>.
                            </p>
                            <p>
                                Académicamente, soy estudiante de la carrera de{" "}
                                <strong className="text-zinc-800 dark:text-zinc-200">
                                    Ingeniería en Inteligencia Artificial
                                </strong>
                                . Esta formación técnica me permite potenciar mi perfil lógico-analítico,
                                mejorando continuamente mis habilidades en el manejo de datos estructurados y
                                sentando bases sólidas en Machine Learning.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        ref={aboutStack.ref}
                        style={{ opacity: aboutStack.opacity, x: aboutStack.xRight }}
                        className="flex flex-col gap-6 md:w-1/3"
                    >
                        <div className="bg-white/80 dark:bg-zinc-950/60 backdrop-blur-md p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <h4 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-4">
                                Stack &amp; Intereses
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {TECH_STACK.map((tech) => (
                                    <TechBadge key={tech} tech={tech} />
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/80 dark:bg-zinc-950/60 backdrop-blur-md p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <h4 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-4">
                                Idiomas
                            </h4>
                            <div className="flex flex-col gap-3">
                                {LANGUAGES.map((l) => (
                                    <div
                                        key={l.lang}
                                        className="flex justify-between items-center text-sm border-b border-zinc-200 dark:border-zinc-800 pb-2 last:border-0 last:pb-0"
                                    >
                                        <span className="font-semibold text-zinc-800 dark:text-zinc-200">{l.lang}</span>
                                        <span className="text-zinc-500 dark:text-zinc-400">{l.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
