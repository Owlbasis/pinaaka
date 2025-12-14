"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    onBookCall: () => void;
    onApplyTalent: () => void;
}

export default function Hero({ onBookCall, onApplyTalent }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20">
            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    >
                        Get projects shipped by{" "}
                        <span className="text-gradient">job-ready builders</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4"
                    >
                        We scope your work, match vetted talent, add architecture guidance, and deliver. Faster, cheaper, reliably.
                    </motion.p>

                    {/* Price Anchor */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-sm text-[var(--text-muted)] mb-8"
                    >
                        Starting at <span className="text-[var(--accent-primary)] font-semibold">$10/hour</span>
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
                    >
                        <button
                            onClick={onBookCall}
                            className="btn btn-primary px-6 py-3 text-base"
                        >
                            Book a Call
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* Talent Link */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-[var(--text-muted)] text-sm"
                    >
                        Looking to work on real projects?{" "}
                        <button onClick={onApplyTalent} className="text-[var(--accent-primary)] hover:underline">
                            Apply as Talent →
                        </button>
                    </motion.p>
                </div>
            </div>

            {/* Subtle scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border border-[var(--border-subtle)] flex justify-center pt-2"
                >
                    <div className="w-1 h-1.5 bg-[var(--text-muted)] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
