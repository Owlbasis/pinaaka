"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
    onBookCall: () => void;
    onApplyTalent: () => void;
}

// Words that cycle through
const rotatingWords = ["faster", "cheaper", "reliably"];

export default function Hero({ onBookCall, onApplyTalent }: HeroProps) {
    const [wordIndex, setWordIndex] = useState(0);

    // Rotate words every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating shapes */}
                <motion.div
                    className="absolute w-72 h-72 rounded-full opacity-[0.03]"
                    style={{
                        background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
                        top: '20%',
                        left: '10%'
                    }}
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full opacity-[0.02]"
                    style={{
                        background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
                        bottom: '20%',
                        right: '10%'
                    }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    >
                        Get projects shipped by{" "}
                        <span className="text-gradient">job-ready builders</span>
                        <br />
                        <span className="text-[var(--text-secondary)]">— </span>
                        <motion.span
                            key={wordIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-[var(--accent-primary)] inline-block min-w-[140px]"
                        >
                            {rotatingWords[wordIndex]}
                        </motion.span>
                        <span className="text-[var(--text-secondary)]">.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4"
                    >
                        We scope your work, match vetted talent, add architecture guidance, and deliver.
                    </motion.p>

                    {/* Price Anchor */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-sm text-[var(--text-muted)] mb-8"
                    >
                        Starting at <span className="text-[var(--accent-primary)] font-semibold">$10/hour</span>
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
                    >
                        <motion.button
                            onClick={onBookCall}
                            className="btn btn-primary px-6 py-3 text-base"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Book a Call
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>

                    {/* Talent Link */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-[var(--text-muted)] text-sm"
                    >
                        Looking to work on real projects?{" "}
                        <button onClick={onApplyTalent} className="text-[var(--accent-primary)] hover:underline">
                            Apply as Talent →
                        </button>
                    </motion.p>
                </div>
            </div>

            {/* Animated stats/trust bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-12 left-0 right-0"
            >
                <div className="container">
                    <div className="flex items-center justify-center gap-8 md:gap-16 text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <div className="text-xl md:text-2xl font-bold text-[var(--accent-primary)]">$10</div>
                            <div className="text-xs text-[var(--text-muted)]">per hour</div>
                        </motion.div>
                        <div className="w-px h-8 bg-[var(--border-subtle)]" />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="text-xl md:text-2xl font-bold">24-48h</div>
                            <div className="text-xs text-[var(--text-muted)]">to scope</div>
                        </motion.div>
                        <div className="w-px h-8 bg-[var(--border-subtle)]" />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <div className="text-xl md:text-2xl font-bold text-[var(--accent-green)]">2-3x</div>
                            <div className="text-xs text-[var(--text-muted)]">faster delivery</div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
