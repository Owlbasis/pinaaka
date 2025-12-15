"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
    Lock,
    Target,
    Eye,
    MessageCircle,
    Shield,
    RefreshCw
} from "lucide-react";

const qualityPoints = [
    {
        icon: Lock,
        title: "Scope Locked",
        description: "Work begins only after scope is confirmed (or timeboxed discovery)",
    },
    {
        icon: Target,
        title: "Milestones & Demos",
        description: "Weekly updates and demos to track progress",
    },
    {
        icon: Eye,
        title: "Code Reviews & QA",
        description: "Quality checklist and review process built in",
    },
    {
        icon: MessageCircle,
        title: "Single Point of Contact",
        description: "Dedicated communication channel for clarity",
    },
    {
        icon: Shield,
        title: "NDA Available",
        description: "Confidentiality agreements for sensitive projects",
    },
    {
        icon: RefreshCw,
        title: "Replacement Policy",
        description: "Quick talent swap if the fit isn't right",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
};

export default function QualityControls() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <span className="inline-block text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
                            Quality & Risk Controls
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Built for enterprise confidence
                        </h2>
                        <p className="text-gray-400">
                            Process safeguards that remove fear and ensure predictable outcomes.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="grid sm:grid-cols-2 gap-4"
                    >
                        {qualityPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-colors"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                    <point.icon className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{point.title}</h3>
                                    <p className="text-sm text-gray-500">{point.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
