"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ResponsibilityTransfer() {
    return (
        <section className="section bg-[var(--bg-secondary)]">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                    {/* You Bring */}
                    <div
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-[var(--text-muted)]">You bring</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-lg text-[var(--text-secondary)]">
                                <div className="w-2 h-2 rounded-full bg-gray-500" />
                                An idea, problem, or intent
                            </li>
                            <li className="flex items-center gap-3 text-lg text-[var(--text-secondary)]">
                                <div className="w-2 h-2 rounded-full bg-gray-500" />
                                Business context
                            </li>
                            <li className="flex items-center gap-3 text-lg text-[var(--text-secondary)]">
                                <div className="w-2 h-2 rounded-full bg-gray-500" />
                                Constraints and priorities
                            </li>
                        </ul>
                    </div>

                    {/* Divider for mobile */}
                    <div className="md:hidden flex justify-center text-[var(--text-muted)]">
                        <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>

                    {/* We Handle */}
                    <div
                        className="card"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">We handle</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-lg text-white">
                                <CheckCircle2 className="w-5 h-5 text-[var(--text-secondary)] flex-shrink-0" />
                                Planning and scoping
                            </li>
                            <li className="flex items-center gap-3 text-lg text-white">
                                <CheckCircle2 className="w-5 h-5 text-[var(--text-secondary)] flex-shrink-0" />
                                Execution and engineering decisions
                            </li>
                            <li className="flex items-center gap-3 text-lg text-white">
                                <CheckCircle2 className="w-5 h-5 text-[var(--text-secondary)] flex-shrink-0" />
                                Quality and edge cases
                            </li>
                            <li className="flex items-center gap-3 text-lg text-white">
                                <CheckCircle2 className="w-5 h-5 text-[var(--text-secondary)] flex-shrink-0" />
                                Delivery and handover
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
