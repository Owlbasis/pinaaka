"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Rocket, Building2 } from "lucide-react";

const reasons = [
    {
        icon: Cpu,
        title: "AI Amplifies Execution",
        description: "Modern AI tools reduce junior ramp-up time dramatically. Our talent delivers production-quality output faster than traditional freshers.",
    },
    {
        icon: Rocket,
        title: "Hungry & Motivated",
        description: "Students seeking real-world outcomes bring fresh perspectives and relentless drive. They're building portfolios, not just clocking hours.",
    },
    {
        icon: Building2,
        title: "Predictable Delivery",
        description: "Companies get clear scope, milestones, and accountability without the overhead of full-time hiring or long-term commitments.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
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

export default function WhyThisWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="why" className="section bg-[#0a0f1c]/50">
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
                        Why This Works
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        The model that makes sense
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        AI tools + motivated talent + structured delivery = reliable execution at a fraction of traditional costs.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card card-highlight text-center"
                        >
                            <div className="icon-box mx-auto">
                                <reason.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
