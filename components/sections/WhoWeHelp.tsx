"use client";

import { motion } from "framer-motion";
import { Building2, Lightbulb } from "lucide-react";

const audiences = [
    {
        icon: Building2,
        title: "Already running a business?",
        description: "If your business runs on manual processes, spreadsheets, or WhatsApp and you want systems, automation, or AI that actually helps, we digitise and streamline how things work. So your operations feel simpler, not heavier.",
        color: "bg-[#F9A8D4]" // Pink
    },
    {
        icon: Lightbulb,
        title: "Starting from an idea or early MVP?",
        description: "If you have an idea, early MVP, or concept you want built properly without managing tech or execution, we take it from intent to production. So you can focus on the idea, not managing execution.",
        color: "bg-[#6EE7B7]" // Mint
    }
];

export default function WhoWeHelp() {
    return (
        <section id="who-we-help" className="section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Who we help</h2>
                    <p className="text-[var(--text-secondary)] text-lg">
                        People usually come to us in one of these situations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {audiences.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.color} rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6 text-[var(--text-primary)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">{item.title}</h3>
                            <p className="text-[var(--text-primary)]/80 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
