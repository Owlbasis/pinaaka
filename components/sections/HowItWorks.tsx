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
        icon: FileSearch,
        title: "Clarify the intent",
        description: "Short conversation to understand the problem and define boundaries.",
    },
    {
        icon: Code,
        title: "Build and review",
        description: "Execution with regular checkpoints and shared visibility.",
    },
    {
        icon: Rocket,
        title: "Deliver and support",
        description: "Production-ready system. You own everything.",
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
    return (
        <section id="how-it-works" className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="inline-block text-[var(--text-muted)] text-sm font-medium uppercase tracking-widest mb-4">
                        How It Works
                    </span>
                    <h2 className="mb-4">
                        How it works
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
                        A simple process designed to keep things clear and predictable.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--border-soft)] md:-translate-x-1/2" />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative flex items-start gap-6 mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Step number dot */}
                            <div className="absolute left-8 md:left-1/2 w-3 h-3 rounded-full bg-[var(--border-soft)] border-4 border-[var(--bg-primary)] -translate-x-1/2 z-10" />

                            {/* Content */}
                            <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                                <div className={`inline-flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                    <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border-soft)] flex items-center justify-center">
                                        <step.icon className="w-5 h-5 text-[var(--text-secondary)]" />
                                    </div>
                                    <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Step {index + 1}</span>
                                </div>
                                <h3 className="text-xl mb-2">{step.title}</h3>
                                <p className="text-[var(--text-secondary)]">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
