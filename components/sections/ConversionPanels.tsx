"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, User, ArrowRight, Calendar, FileText } from "lucide-react";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

interface ConversionPanelsProps {
    onBookCall: () => void;
    onSubmitBrief: () => void;
    onApplyTalent: () => void;
}

export default function ConversionPanels({ onBookCall, onSubmitBrief, onApplyTalent }: ConversionPanelsProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="book" className="section bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {/* Companies Panel */}
                    <motion.div
                        variants={itemVariants}
                        id="brief"
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 p-8 md:p-10"
                    >
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
                                <Building2 className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                Have a project?
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Book a call and get a scoped plan within 24–48 hours. We'll define deliverables, timeline, and pricing.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onBookCall}
                                    className="btn btn-primary group"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book a Call
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={onSubmitBrief}
                                    className="btn btn-secondary group"
                                >
                                    <FileText className="w-5 h-5" />
                                    Submit Brief
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Talent Panel */}
                    <motion.div
                        variants={itemVariants}
                        id="talent"
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/20 p-8 md:p-10"
                    >
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                                <User className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                Want to work on real projects?
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Apply with your skills and portfolio. Get matched to scoped work with mentorship and fair pay.
                            </p>

                            <button
                                onClick={onApplyTalent}
                                className="btn bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/30 group"
                            >
                                <User className="w-5 h-5" />
                                Apply as Talent
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
