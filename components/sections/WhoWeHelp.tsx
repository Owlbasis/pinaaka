"use client";

import { motion } from "framer-motion";
import { Building2, Lightbulb } from "lucide-react";

const audiences = [
    {
        icon: Building2,
        title: "Already running a business?",
        description: "If your business runs on manual processes, WhatsApp messages, or spreadsheets — and you want systems, automation, or AI that actually helps — we can digitise and streamline how things work."
    },
    {
        icon: Lightbulb,
        title: "Have something in mind?",
        description: "If you have an idea, early MVP, or concept you want built properly — without figuring out tech or managing execution — we take it from intent to production."
    }
];

export default function WhoWeHelp() {
    return (
        <section className="section bg-[var(--bg-primary)]">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
