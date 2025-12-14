"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Users, Compass, Wrench } from "lucide-react";

const services = [
    {
        icon: FileText,
        title: "Scoped Delivery",
        description: "PRD-lite, deliverables, timeline, and acceptance criteria — all defined upfront.",
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        icon: Users,
        title: "Talent Matching",
        description: "We match skills + availability + project complexity for the perfect fit.",
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        icon: Compass,
        title: "Architecture Support",
        description: "Tech decisions, review checkpoints, and scalability guidance built in.",
        gradient: "from-pink-500 to-purple-500",
    },
    {
        icon: Wrench,
        title: "Maintenance",
        description: "Bug fixes, upgrades, and feature iterations for ongoing support.",
        gradient: "from-orange-500 to-pink-500",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
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

export default function WhatWeOffer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4"
                    >
                        What We Offer
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Everything you need to ship
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        From initial scoping to ongoing maintenance, we've got your project covered.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative card overflow-hidden"
                        >
                            {/* Gradient border on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
