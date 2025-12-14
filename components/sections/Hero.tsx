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

// Starfish/star positions for random popping
const starPositions = [
    { top: "15%", left: "8%", size: 12, delay: 0.5 },
    { top: "25%", right: "12%", size: 8, delay: 1.2 },
    { top: "45%", left: "5%", size: 10, delay: 2.0 },
    { top: "60%", right: "8%", size: 14, delay: 0.8 },
    { top: "75%", left: "15%", size: 6, delay: 1.5 },
    { top: "20%", right: "20%", size: 8, delay: 2.5 },
    { top: "80%", right: "18%", size: 10, delay: 1.8 },
    { top: "35%", left: "12%", size: 6, delay: 3.0 },
];

// Starfish SVG component
const Starfish = ({ size = 12 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M12 2L14.09 8.26L20.18 9.27L15.54 13.14L16.82 19.02L12 16.27L7.18 19.02L8.46 13.14L3.82 9.27L9.91 8.26L12 2Z" />
    </svg>
);

export default function Hero({ onBookCall, onApplyTalent }: HeroProps) {
    const [wordIndex, setWordIndex] = useState(0);

    // Rotate words every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated starfish popping in */}
            {starPositions.map((star, index) => (
                <motion.div
                    key={index}
                    className="absolute text-[var(--accent-primary)]"
                    style={{
                        top: star.top,
                        left: star.left,
                        right: star.right,
                        opacity: 0.15,
                    }}
                    initial={{ scale: 0, opacity: 0, rotate: -30 }}
                    animate={{
                        scale: [0, 1.2, 1],
                        opacity: [0, 0.25, 0.15],
                        rotate: [0, 15, 0]
                    }}
                    transition={{
                        duration: 0.6,
                        delay: star.delay,
                        ease: "easeOut"
                    }}
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: star.delay + 0.6,
                            ease: "easeInOut"
                        }}
                    >
                        <Starfish size={star.size} />
                    </motion.div>
                </motion.div>
            ))}

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
