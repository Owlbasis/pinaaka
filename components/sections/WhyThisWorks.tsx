"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Shield, Wrench } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Things don’t get stuck",
        description: "Work moves forward continuously without waiting, chasing, or unnecessary delays.",
        highlighted: false
    },
    {
        icon: Users,
        title: "There is always an owner",
        description: "Every piece of work has clear ownership, so nothing falls through the cracks.",
        highlighted: false
    },
    {
        icon: Shield,
        title: "No scope surprises",
        description: "We agree on what will be built before we start, so timelines and costs stay predictable.",
        highlighted: true
    },
    {
        icon: Wrench,
        title: "You won’t need to rebuild later",
        description: "Foundations are designed to hold up as your system grows, not force a rewrite later.",
        highlighted: false
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
                        <div
                            key={feature.title}
                            className="card"
                        >
                            <div className="icon-box">
                                <feature.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg mb-2">{feature.title}</h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
