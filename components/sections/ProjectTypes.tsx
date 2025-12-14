"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Code2,
    Server,
    Database,
    Layers,
    MessageSquare,
    Settings
} from "lucide-react";

const projectTypes = [
    {
        icon: Code2,
        title: "Software Development",
        description: "Web, mobile, backend, APIs, internal tools",
    },
    {
        icon: Server,
        title: "Architecture & System Design",
        description: "Migrations, scalability, reliability planning",
    },
    {
        icon: Database,
        title: "Data Collection Projects",
        description: "LLM datasets, robotics, mechanical domain data",
    },
    {
        icon: Layers,
        title: "Feature Development",
        description: "For existing products and services",
    },
    {
        icon: MessageSquare,
        title: "Consultancy Execution",
        description: "Education, legal, creator ops, workflows",
    },
    {
        icon: Settings,
        title: "Maintenance & Support",
        description: "Ongoing improvements, monitoring, upgrades",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    },
};

export default function ProjectTypes() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section bg-[#0a0f1c]/50">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
                    >
                        Project Types
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        We support a wide range of projects
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        From greenfield builds to maintenance, from software to data — we've got the talent.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {projectTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <type.icon className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">{type.title}</h3>
                                <p className="text-sm text-gray-500">{type.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
