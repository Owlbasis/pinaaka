"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Shield, Wrench } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "AI-Amplified Execution",
        description: "Our builders use AI tools to move 2-3x faster than traditional developers."
    },
    {
        icon: Users,
        title: "Job-Ready Talent",
        description: "Vetted students and fresh grads eager to prove themselves on real projects."
    },
    {
        icon: Shield,
        title: "Scoped & Predictable",
        description: "Every project starts with clear scope, timeline, and fixed pricing."
    },
    {
        icon: Wrench,
        title: "Architecture Support",
        description: "Senior guidance ensures code quality and scalable foundations."
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
                    <h2 className="mb-4">Why this works</h2>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                        A new model for getting quality work done at startup speed.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card"
                        >
                            <div className="icon-box">
                                <feature.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-[var(--text-secondary)] text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
