"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const primaryFAQs = [
    {
        question: "Who do you typically work with?",
        answer: "We work with product teams, founders, and companies looking to take ideas, MVPs, or systems to production with clear ownership and predictable delivery."
    },
    {
        question: "How do projects usually start?",
        answer: "Projects typically start with a short strategy call to understand intent, scope, and constraints. From there, we propose a clear execution plan."
    },
    {
        question: "Who owns the code and IP?",
        answer: "You do. All code and assets are fully owned by you upon delivery."
    },
    {
        question: "How is pricing decided?",
        answer: "Pricing is based on scope and engagement type. Final costs are confirmed after a short scope discussion."
    }
];

const secondaryFAQs = [
    {
        question: "Do you work with early-stage ideas or only existing products?",
        answer: "Both. Some teams come to us with just an idea, others with an MVP or a system that needs to scale. The engagement depends on scope, not stage."
    },
    {
        question: "Are you an agency or a staffing company?",
        answer: "Neither. We partner with teams to own execution end-to-end, rather than just providing people or hours."
    },
    {
        question: "How do you handle changing requirements?",
        answer: "For fixed-scope engagements, scope is locked upfront. Any changes are handled transparently through re-scoping or phased delivery."
    },
    {
        question: "How involved do we need to be during execution?",
        answer: "As involved as you prefer. We handle execution while keeping you informed through regular updates and demos."
    },
    {
        question: "How do you ensure production-level quality?",
        answer: "Quality checks, reviews, and edge-case handling are built into the delivery process, not added at the end."
    },
    {
        question: "Do you sign NDAs?",
        answer: "Yes. NDAs are available for sensitive or early-stage ideas."
    },
    {
        question: "Do you offer fixed pricing or hourly models?",
        answer: "We offer fixed-scope delivery, hourly exploration, and long-term retainers depending on the engagement."
    },
    {
        question: "Are there any hidden costs?",
        answer: "No. All costs are discussed and agreed upon before work begins."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);

    const toggleFAQ = (index: string) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const FAQItem = ({ item, index, prefix }: { item: { question: string, answer: string }, index: number, prefix: string }) => {
        const uniqueId = `${prefix}-${index}`;
        const isOpen = openIndex === uniqueId;

        return (
            <div
                className="border border-[var(--border-subtle)] rounded-lg bg-[var(--bg-card)] overflow-hidden transition-colors hover:border-[var(--border-accent)]"
            >
                <button
                    onClick={() => toggleFAQ(uniqueId)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                >
                    <span className="font-medium text-white pr-4">
                        {item.question}
                    </span>
                    <span className="text-gray-500 flex-shrink-0">
                        {isOpen ? (
                            <Minus className="w-5 h-5" />
                        ) : (
                            <Plus className="w-5 h-5" />
                        )}
                    </span>
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="p-5 pt-0 text-[var(--text-secondary)] leading-relaxed border-t border-transparent">
                                {item.answer}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <section className="section bg-[var(--bg-primary)]">
            <div className="container max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Questions teams usually ask before working with us
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        Most teams only need a quick conversation to get clarity.
                    </p>
                </div>

                <div className="space-y-4">
                    {primaryFAQs.map((item, index) => (
                        <FAQItem key={index} item={item} index={index} prefix="primary" />
                    ))}

                    <AnimatePresence>
                        {showAll && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <div className="space-y-4 pt-4">
                                    {secondaryFAQs.map((item, index) => (
                                        <FAQItem key={index} item={item} index={index} prefix="secondary" />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="text-center pt-8">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
                        >
                            {showAll ? "View fewer questions" : "View all questions"} <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${showAll ? "-rotate-90" : "rotate-0"}`} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
