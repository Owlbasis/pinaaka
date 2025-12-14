"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
    onBookCall: () => void;
    onApplyTalent: () => void;
}

const rotatingWords = ["faster", "cheaper", "reliably"];

export default function Hero({ onBookCall, onApplyTalent }: HeroProps) {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0f]">
            {/* Stars */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.2 + Math.random() * 0.5,
                        }}
                        animate={{
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Moon */}
            <motion.div
                className="absolute top-16 right-16 md:top-24 md:right-24"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full relative"
                    style={{
                        background: "radial-gradient(circle at 30% 30%, #fefcd7 0%, #e8e4c9 40%, #c9c5a8 100%)",
                        boxShadow: "0 0 60px 20px rgba(254, 252, 215, 0.15), 0 0 120px 40px rgba(254, 252, 215, 0.08)",
                    }}
                >
                    {/* Moon craters */}
                    <div className="absolute w-4 h-4 rounded-full bg-[#d4d0b5] opacity-40 top-4 left-6" />
                    <div className="absolute w-6 h-6 rounded-full bg-[#d4d0b5] opacity-30 top-12 left-4" />
                    <div className="absolute w-3 h-3 rounded-full bg-[#d4d0b5] opacity-35 top-8 right-6" />
                    <div className="absolute w-5 h-5 rounded-full bg-[#d4d0b5] opacity-25 bottom-6 right-8" />
                </div>
            </motion.div>

            {/* Moonlight rays */}
            <div
                className="absolute top-0 right-0 w-full h-full pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 85% 15%, rgba(254, 252, 215, 0.08) 0%, transparent 50%)",
                }}
            />
            <motion.div
                className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 100% 0%, rgba(254, 252, 215, 0.05) 0%, transparent 70%)",
                }}
                animate={{
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
                    >
                        Get projects shipped by{" "}
                        <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">
                            job-ready builders
                        </span>
                        <br />
                        <span className="text-gray-600">— </span>
                        <motion.span
                            key={wordIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-amber-200 inline-block min-w-[140px]"
                        >
                            {rotatingWords[wordIndex]}
                        </motion.span>
                        <span className="text-gray-600">.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-4"
                    >
                        We scope your work, match vetted talent, add architecture guidance, and deliver.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm text-gray-500 mb-8"
                    >
                        Starting at <span className="text-amber-200 font-semibold">$10/hour</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-center justify-center gap-4 mb-10"
                    >
                        <motion.button
                            onClick={onBookCall}
                            className="px-8 py-4 bg-gradient-to-r from-amber-100 to-yellow-50 text-gray-900 rounded-full font-semibold flex items-center gap-2"
                            style={{
                                boxShadow: "0 0 30px rgba(254, 252, 215, 0.2)",
                            }}
                            whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(254, 252, 215, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Book a Call
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-500 text-sm"
                    >
                        Looking to work on real projects?{" "}
                        <button onClick={onApplyTalent} className="text-amber-200 hover:text-amber-100 transition-colors">
                            Apply as Talent →
                        </button>
                    </motion.p>
                </div>
            </div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute bottom-12 left-0 right-0 z-10"
            >
                <div className="container">
                    <div className="flex items-center justify-center gap-10 md:gap-16 text-center">
                        <div>
                            <div className="text-2xl font-bold text-amber-100">$10</div>
                            <div className="text-xs text-gray-500">per hour</div>
                        </div>
                        <div className="w-px h-8 bg-gray-800" />
                        <div>
                            <div className="text-2xl font-bold text-white">24-48h</div>
                            <div className="text-xs text-gray-500">to scope</div>
                        </div>
                        <div className="w-px h-8 bg-gray-800" />
                        <div>
                            <div className="text-2xl font-bold text-emerald-400">2-3x</div>
                            <div className="text-xs text-gray-500">faster</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
