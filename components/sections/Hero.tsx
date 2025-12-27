"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    onBookCall: () => void;
    onApplyTalent: () => void;
}

export default function Hero({ onBookCall, onApplyTalent }: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-10">
                        <span className="text-sm text-[var(--text-muted)] uppercase tracking-widest font-medium">
                            Serious about building something real?
                        </span>
                    </div>

                    <h1 className="mb-8">
                        You bring the intent.
                        <br />
                        <span className="text-white">We make it Happen.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                        From first idea to working system — without chaos or rework.
                    </p>

                    <p className="text-[var(--text-muted)] mb-12">
                        You don’t need everything figured out. That’s our job.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button
                                onClick={onBookCall}
                                className="btn btn-primary px-8"
                            >
                                Book a Strategy Call <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={onApplyTalent}
                                className="btn btn-secondary px-8"
                            >
                                Join Talent Network
                            </button>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">
                            What we’ll do: understand your intent → suggest the right approach → outline next steps.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
