"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
    Phone,
    FileSearch,
    Users,
    Compass,
    Code,
    Rocket
} from "lucide-react";

const steps = [
    {
        icon: Phone,
        title: "You bring the intent",
        description: "Idea, MVP, feature, system, or scale problem.",
    },
    {
        icon: Code,
        title: "We make it happen",
        description: "(Team matching, execution planning, architecture, build, reviews, edge cases, and quality assurance)",
    },
    {
        icon: Rocket,
        title: "Delivery, done right",
        description: "Production-ready, scalable, and owned.",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="how-it-works" className="section">
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
                        How It Works
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        From intent to delivery
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        A transparent process designed for predictable outcomes.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="relative max-w-3xl mx-auto"
                >
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:-translate-x-1/2" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative flex items-start gap-6 mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Step number dot */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#050810] -translate-x-1/2 z-10" />

                            {/* Content */}
                            <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                                <div className={`inline-flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center">
                                        <step.icon className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Step {index + 1}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
