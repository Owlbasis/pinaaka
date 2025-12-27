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
    return (
        <section className="section">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block text-[var(--text-muted)] text-sm font-medium uppercase tracking-widest mb-4">
                            Quality & Execution Confidence
                        </span>
                        <h2 className="mb-4">
                            Built to remove execution risk
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                            Everything you worry about — scope, quality, ownership, and communication — is handled upfront.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {qualityPoints.map((point, index) => (
                            <div
                                key={index}
                                className="card flex items-start gap-4"
                            >
                                <div className="icon-box flex-shrink-0">
                                    <point.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg mb-1">{point.title}</h3>
                                    <p className="text-sm text-[var(--text-muted)]">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-white font-medium mb-6">
                            This is why most clients come to us with just an idea — and leave with something real.
                        </p>
                        <button
                            onClick={onBookCall}
                            className="btn btn-secondary"
                        >
                            Something in mind? Let’s make it real. <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
