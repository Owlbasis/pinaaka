"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Shield, Wrench } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Things don't get stuck",
        description: "Work moves forward continuously without waiting, chasing, or unnecessary delays.",
        color: "bg-[#F9A8D4]" // Pink
    },
    {
        icon: Users,
        title: "There is always an owner",
        description: "Every piece of work has clear ownership, so nothing falls through the cracks.",
        color: "bg-[#FDE047]" // Yellow
    },
    {
        icon: Shield,
        title: "No scope surprises",
        description: "We agree on what will be built before we start, so timelines and costs stay predictable.",
        color: "bg-[#6EE7B7]" // Mint
    },
    {
        icon: Wrench,
        title: "You won't need to rebuild later",
        description: "Foundations are designed to hold up as your system grows, not force a rewrite later.",
        color: "bg-[#93C5FD]" // Blue
    }
];

export default function WhyThisWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="why" className="section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="mb-4">Why teams trust us with execution</h2>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg">
                        Clear ownership, predictable delivery, and no unpleasant surprises.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${feature.color} rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-[var(--text-primary)]" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]">{feature.title}</h3>
                            <p className="text-[var(--text-primary)]/80 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
