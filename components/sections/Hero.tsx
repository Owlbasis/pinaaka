"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    onBookCall: () => void;
    onApplyTalent: () => void;
}

export default function Hero({ onBookCall, onApplyTalent }: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 backdrop-blur-sm">
                            Serious about building something real?
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        You bring the intent.
                        <br />
                        <span className="text-gradient">We make it Happen.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-[var(--text-secondary)] mb-4 max-w-2xl mx-auto"
                    >
                        From first idea to working system — without chaos or rework.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-[var(--text-muted)] mb-10"
                    >
                        You don’t need everything figured out. That’s our job.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button
                                onClick={onBookCall}
                                className="btn btn-primary h-12 px-8 text-lg w-full sm:w-auto"
                            >
                                Book a Strategy Call <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={onApplyTalent}
                                className="btn btn-secondary h-12 px-8 text-lg w-full sm:w-auto"
                            >
                                Join Talent Network
                            </button>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] mt-2">
                            What we’ll do: understand your intent → suggest the right approach → outline next steps.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
