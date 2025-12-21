"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
    Lock,
    Target,
    Eye,
    MessageCircle,
    Shield,
    RefreshCw,
    FileKey,
    ArrowRight
} from "lucide-react";

interface QualityControlsProps {
    onBookCall: () => void;
}

const qualityPoints = [
    {
        icon: Lock,
        title: "No scope surprises",
        description: "Work starts only after scope is confirmed (or timeboxed discovery).",
    },
    {
        icon: Target,
        title: "You always know where things stand",
        description: "Weekly demos and updates so progress is never a guess.",
    },
    {
        icon: Eye,
        title: "Production-quality, not “it works”",
        description: "Reviews, edge cases, and quality checks built into delivery.",
    },
    {
        icon: MessageCircle,
        title: "No communication chaos",
        description: "One accountable point of contact from start to delivery.",
    },
    {
        icon: Shield,
        title: "Your idea stays yours",
        description: "NDAs available for sensitive or early-stage ideas.",
    },
    {
        icon: FileKey,
        title: "You own everything",
        description: "100% ownership of code and assets on delivery.",
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

export default function QualityControls({ onBookCall }: QualityControlsProps) {
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
                            Quality & Execution Confidence
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Built to remove execution risk
                        </h2>
                        <p className="text-gray-400">
                            Everything you worry about — scope, quality, ownership, and communication — is handled upfront.
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

                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center"
                    >
                        <p className="text-lg text-white font-medium mb-4">
                            This is why most clients come to us with just an idea — and leave with something real.
                        </p>
                        <button
                            onClick={onBookCall}
                            className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors text-lg"
                        >
                            Something in mind? Let’s make it real. <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
