"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface PricingProps {
    onBookCall?: () => void;
}

export default function Pricing({ onBookCall }: PricingProps) {
    const engagementPaths = [
        {
            title: "When things aren't fully clear yet",
            description: "We start by exploring the problem and shaping the right direction.",
            color: "bg-[#FDE047]", // Yellow
        },
        {
            title: "When you know what needs to be built",
            description: "We define the scope upfront and deliver it end to end.",
            color: "bg-[#F9A8D4]", // Pink
            badge: "Most common"
        }
    ];

    return (
        <section id="pricing" className="section">
            <div className="container">
                <div className="text-center mb-12">
                    <span className="inline-block text-[var(--accent)] text-sm font-semibold uppercase tracking-widest mb-4">
                        Pricing
                    </span>
                    <h2 className="mb-4">
                        Pricing based on scope, not guesses
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
                        We agree on scope first. Pricing comes next. No surprises.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                    {engagementPaths.map((path, index) => (
                        <div
                            key={index}
                            className={`${path.color} rounded-2xl text-center flex flex-col justify-center min-h-[200px] p-8 relative transition-all duration-300 hover:scale-[1.02]`}
                        >
                            {path.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--text-primary)] rounded-full text-xs font-bold text-white shadow-lg">
                                    {path.badge}
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">{path.title}</h3>
                            <p className="text-[var(--text-primary)]/80 leading-relaxed">
                                {path.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-[var(--text-muted)] max-w-2xl mx-auto mb-16 italic">
                    Many teams continue working with us beyond the first delivery as their needs evolve.
                </p>

                <div className="text-center">
                    <div className="mb-8">
                        <p className="text-xl text-[var(--text-primary)] font-medium mb-2">
                            You don't need to choose this now.
                        </p>
                        <p className="text-[var(--text-secondary)]">
                            Most teams figure this out in a short conversation.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={onBookCall}
                            className="btn btn-primary"
                        >
                            Book a Strategy Call <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-xs text-[var(--text-muted)]">
                            What we'll do: understand your intent → suggest the right approach → outline next steps.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
