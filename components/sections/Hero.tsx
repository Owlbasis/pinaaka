"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { useBooking } from "@/components/providers/BookingProvider";

const flippingStatements = [
    { left: "MVP", right: "Production" },
    { left: "Idea", right: "Reality" },
    { left: "Feature", right: "Launch" },
    { left: "Systems", right: "Scale" },
    { left: "Data", right: "Intelligence" },
    { left: "AI", right: "Automation" },
];

export default function Hero() {
    const { openCalendar, openTalentForm } = useBooking();
    const [statementIndex, setStatementIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStatementIndex((prev) => (prev + 1) % flippingStatements.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#0B1120] to-[#111827]">
            {/* Background Grid */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10 px-4">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Accepting new enterprise partners
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white"
                    >
                        Ship production code
                        <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            with vetted engineers
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-12 md:h-16 flex items-center justify-center mb-12"
                    >
                        <motion.div
                            key={statementIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl font-medium tracking-tight"
                        >
                            <span className="text-slate-400">{flippingStatements[statementIndex].left}</span>
                            <span className="mx-3 text-blue-500">→</span>
                            <span className="text-white">{flippingStatements[statementIndex].right}</span>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="text-slate-400 font-medium mb-4"
                    >
                        Something in mind? We make it happen.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <button
                            onClick={openCalendar}
                            aria-label="Book a strategy call with Charcoal Labs"
                            className="btn btn-primary w-full sm:w-auto h-12 px-8 text-base shadow-lg shadow-blue-500/25 ring-1 ring-white/10"
                        >
                            Book a Strategy Call
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={openTalentForm}
                            aria-label="Apply to join the Charcoal Labs talent network"
                            className="btn btn-secondary w-full sm:w-auto h-12 px-8 text-base bg-white/5 hover:bg-white/10"
                        >
                            Join Talent Network
                        </button>
                    </motion.div>


                </div>
            </div>
        </section>
    );
}
