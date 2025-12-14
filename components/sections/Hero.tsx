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

// Jellyfish positions
const jellyfishPositions = [
    { top: "10%", left: "5%", scale: 0.6, delay: 0.3, color: "#f59e0b" },
    { top: "30%", right: "8%", scale: 0.8, delay: 1.0, color: "#fbbf24" },
    { top: "55%", left: "3%", scale: 0.5, delay: 1.8, color: "#f97316" },
    { top: "70%", right: "5%", scale: 0.7, delay: 0.8, color: "#fcd34d" },
    { top: "15%", right: "15%", scale: 0.4, delay: 2.0, color: "#fb923c" },
];

// Jellyfish SVG component
const Jellyfish = ({ color = "#f59e0b", scale = 1 }: { color?: string; scale?: number }) => (
    <svg
        width={60 * scale}
        height={80 * scale}
        viewBox="0 0 60 80"
        fill="none"
        style={{ filter: `drop-shadow(0 0 10px ${color}40)` }}
    >
        {/* Bell/dome */}
        <ellipse cx="30" cy="20" rx="25" ry="18" fill={color} opacity="0.7" />
        <ellipse cx="30" cy="20" rx="20" ry="14" fill={color} opacity="0.9" />
        <ellipse cx="25" cy="15" rx="8" ry="5" fill="white" opacity="0.3" />

        {/* Tentacles */}
        <motion.path
            d="M10 35 Q8 50 12 65 Q10 75 8 80"
            stroke={color}
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            animate={{ d: ["M10 35 Q8 50 12 65 Q10 75 8 80", "M10 35 Q12 50 8 65 Q12 75 10 80", "M10 35 Q8 50 12 65 Q10 75 8 80"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
            d="M20 36 Q18 55 22 70 Q20 78 18 80"
            stroke={color}
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            animate={{ d: ["M20 36 Q18 55 22 70 Q20 78 18 80", "M20 36 Q22 55 18 70 Q22 78 20 80", "M20 36 Q18 55 22 70 Q20 78 18 80"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.path
            d="M30 38 Q28 58 32 75 Q30 78 30 80"
            stroke={color}
            strokeWidth="2.5"
            fill="none"
            opacity="0.6"
            animate={{ d: ["M30 38 Q28 58 32 75 Q30 78 30 80", "M30 38 Q32 58 28 75 Q30 78 30 80", "M30 38 Q28 58 32 75 Q30 78 30 80"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />
        <motion.path
            d="M40 36 Q42 55 38 70 Q40 78 42 80"
            stroke={color}
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            animate={{ d: ["M40 36 Q42 55 38 70 Q40 78 42 80", "M40 36 Q38 55 42 70 Q38 78 40 80", "M40 36 Q42 55 38 70 Q40 78 42 80"] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
            d="M50 35 Q52 50 48 65 Q50 75 52 80"
            stroke={color}
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            animate={{ d: ["M50 35 Q52 50 48 65 Q50 75 52 80", "M50 35 Q48 50 52 65 Q48 75 50 80", "M50 35 Q52 50 48 65 Q50 75 52 80"] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
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
            {/* Animated jellyfish floating */}
            {jellyfishPositions.map((jelly, index) => (
                <motion.div
                    key={index}
                    className="absolute pointer-events-none"
                    style={{
                        top: jelly.top,
                        left: jelly.left,
                        right: jelly.right,
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: [0, 0.4, 0.3],
                        y: [50, 0, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        delay: jelly.delay,
                        ease: "easeOut"
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [-2, 2, -2],
                        }}
                        transition={{
                            duration: 4 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Jellyfish color={jelly.color} scale={jelly.scale} />
                    </motion.div>
                </motion.div>
            ))}

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
