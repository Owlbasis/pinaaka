"use client";

import { motion, useInView } from "framer-motion";
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

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
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
        <section id="pricing" className="section bg-gradient-to-b from-[#0a0f1c]/50 to-transparent">
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
                        className="inline-block text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
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
                        className="text-gray-400 max-w-2xl mx-auto mb-12"
                    >
                        Transparent pricing. Final rate confirmed after scope review.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h3
                        variants={itemVariants}
                        className="text-xl font-semibold mb-2"
                    >
                        Engagement Models
                    </motion.h3>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-500 text-sm"
                    >
                        Choose the engagement that fits your project needs
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
                            className={`relative rounded-2xl p-8 ${model.highlighted
                                    ? "bg-gradient-to-b from-indigo-500/20 to-purple-500/10 border-2 border-indigo-500/50"
                                    : "bg-white/[0.02] border border-white/10"
                                }`}
                        >
                            {model.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-semibold">
                                    Most Popular
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${model.highlighted
                                    ? "bg-gradient-to-br from-indigo-500 to-purple-500"
                                    : "bg-white/5 border border-white/10"
                                }`}>
                                <model.icon className={`w-7 h-7 ${model.highlighted ? "text-white" : "text-gray-400"}`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-1">{model.title}</h3>
                            <p className="text-gray-500 text-sm mb-6">{model.description}</p>

                            <ul className="space-y-3">
                                {model.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <Check className={`w-4 h-4 flex-shrink-0 ${model.highlighted ? "text-indigo-400" : "text-gray-500"}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Talent Compensation Note */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="mt-16 text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20"
                    >
                        <span className="text-sm text-green-400">
                            💰 Talent earns: Fixed monthly base + optional project incentives
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
