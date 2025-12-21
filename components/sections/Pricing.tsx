"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Clock, Target, CalendarRange, Check } from "lucide-react";

const pricingModels = [
    {
        icon: Clock,
        title: "Hourly",
        description: "Best for evolving scope",
        features: [
            "Flexible hours allocation",
            "Weekly billing cycles",
            "Scale up or down easily",
            "Ideal for R&D phases",
        ],
        highlighted: false,
    },
    {
        icon: Target,
        title: "Fixed Scope",
        description: "Best for clear deliverables",
        features: [
            "Defined milestones",
            "Predictable budget",
            "Clear acceptance criteria",
            "Payment on delivery",
        ],
        highlighted: true,
    },
    {
        icon: CalendarRange,
        title: "Monthly Retainer",
        description: "Best for ongoing work",
        features: [
            "Dedicated capacity",
            "Priority support",
            "Feature iterations",
            "Maintenance included",
        ],
        highlighted: false,
    },
];

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

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="pricing" className="section bg-gradient-to-b from-[var(--bg-primary)] to-transparent">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-6"
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4"
                    >
                        Pricing
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-bold mb-2"
                    >
                        Starting at <span className="text-gradient">$10/hour</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-12"
                    >
                        Transparent pricing. Final rate confirmed after scope review.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {pricingModels.map((model, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative rounded-2xl p-8 transition-all duration-300 ${model.highlighted
                                ? "bg-[var(--bg-secondary)] border-2 border-blue-500/50 shadow-xl shadow-blue-500/10 scale-105 z-10"
                                : "bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)]"
                                }`}
                        >
                            {model.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-xs font-bold text-white shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${model.highlighted
                                ? "bg-blue-500/10 text-blue-400"
                                : "bg-white/5 text-slate-400"
                                }`}>
                                <model.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold mb-1">{model.title}</h3>
                            <p className="text-[var(--text-secondary)] text-sm mb-6">{model.description}</p>

                            <ul className="space-y-3">
                                {model.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                                        <Check className={`w-4 h-4 flex-shrink-0 ${model.highlighted ? "text-blue-400" : "text-green-500"}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
