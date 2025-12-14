"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, User } from "lucide-react";

interface ConversionPanelsProps {
    onBookCall: () => void;
    onApplyTalent: () => void;
}

export default function ConversionPanels({ onBookCall, onApplyTalent }: ConversionPanelsProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="book" className="section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                >
                    {/* Companies Panel */}
                    <div className="card p-6 md:p-8">
                        <h3 className="text-xl font-bold mb-2">Have a project?</h3>
                        <p className="text-[var(--text-secondary)] text-sm mb-6">
                            Book a call and get a scoped plan within 24–48 hours.
                        </p>
                        <button onClick={onBookCall} className="btn btn-primary">
                            <Calendar className="w-4 h-4" />
                            Book a Call
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Talent Panel */}
                    <div className="card p-6 md:p-8" style={{ borderColor: 'rgba(0, 186, 124, 0.3)' }}>
                        <h3 className="text-xl font-bold mb-2">Want to work on real projects?</h3>
                        <p className="text-[var(--text-secondary)] text-sm mb-6">
                            Apply with your skills and portfolio. Get matched to scoped work.
                        </p>
                        <button
                            onClick={onApplyTalent}
                            className="btn text-white"
                            style={{ background: 'var(--accent-green)' }}
                        >
                            <User className="w-4 h-4" />
                            Apply as Talent
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
