"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface PricingProps {
    onBookCall?: () => void;
}



const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export default function Pricing({ onBookCall }: PricingProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const engagementPaths = [
        {
            title: "When things aren’t fully clear yet",
            description: "We start by exploring the problem and shaping the right direction.",
            highlighted: false,
        },
        {
            title: "When you know what needs to be built",
            description: "We define the scope upfront and deliver it end to end.",
            highlighted: true,
            badge: "Most common"
        }
    ];

    return (
        <section id="pricing" className="section bg-gradient-to-b from-[var(--bg-primary)] to-transparent">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-12"
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4"
                    >
                        Pricing
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Pricing based on scope, not guesses
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg"
                    >
                        We agree on scope first. Pricing comes next. No surprises.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
                >
                    {engagementPaths.map((path, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative rounded-2xl p-8 text-center transition-all duration-300 flex flex-col justify-center min-h-[200px] ${path.highlighted
                                ? "bg-[var(--bg-secondary)] border-2 border-blue-500/50 shadow-xl shadow-blue-500/10 scale-105 z-10"
                                : "bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)]"
                                }`}
                        >
                            {path.highlighted && path.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-xs font-bold text-white shadow-lg">
                                    {path.badge}
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-4">{path.title}</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {path.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center text-[var(--text-muted)] max-w-2xl mx-auto mb-16 italic"
                >
                    Many teams continue working with us beyond the first delivery as their needs evolve.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center"
                >
                    <div className="mb-8">
                        <p className="text-xl text-white font-medium mb-2">
                            You don’t need to choose this now.
                        </p>
                        <p className="text-[var(--text-secondary)]">
                            Most teams figure this out in a short conversation.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <button
                            onClick={onBookCall}
                            className="btn btn-primary h-12 px-8 text-lg"
                        >
                            Book a Strategy Call <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-xs text-[var(--text-muted)]">
                            15–30 minutes · No obligation
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
