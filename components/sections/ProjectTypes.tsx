"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, Database, Layers, Smartphone, BarChart } from "lucide-react";

const projectTypes = [
    { icon: Code, title: "Software Development", description: "Full-stack apps, MVPs, features" },
    { icon: Layers, title: "Architecture", description: "System design, tech strategy" },
    { icon: Database, title: "Data Collection", description: "Scraping, pipelines, processing" },
    { icon: Smartphone, title: "Mobile Apps", description: "iOS, Android, cross-platform" },
    { icon: Cpu, title: "AI/ML Integration", description: "LLMs, automation, agents" },
    { icon: BarChart, title: "Analytics", description: "Dashboards, reporting, insights" },
];

export default function ProjectTypes() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="mb-4">What we build</h2>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                        From MVPs to enterprise features, we handle the full spectrum.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {projectTypes.map((type, index) => (
                        <motion.div
                            key={type.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="card text-center p-4"
                        >
                            <div className="icon-box mx-auto">
                                <type.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-semibold mb-1">{type.title}</h3>
                            <p className="text-[var(--text-muted)] text-xs">{type.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
