"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Quote, ArrowRight, Linkedin } from "lucide-react";
import Image from "next/image";

interface TestimonialsProps {
    onBookCall: () => void;
}

const testimonials = [
    {
        quote: "The approach was structured and professional from the very beginning. Requirements were clearly understood, decisions were documented, and delivery followed a predictable path. That level of discipline is important in our environment, and it was handled well.",
        author: "Abhisar Kushwaha",
        role: "Bank Manager, SBI",
        linkedin: "https://www.linkedin.com/in/abhisar-kushwah/",
        image: "/images/testimonials/abhisar-kushwaha.jpg",
    },
    {
        quote: "In healthcare, reliability matters more than speed. What stood out was the sense of ownership — things were handled carefully, communication was timely, and I never had to follow up repeatedly. It gave me confidence throughout the process.",
        author: "Dr. Rajneesh Pandey",
        role: "MBBS",
        linkedin: "https://www.linkedin.com/in/dr-rajneesh-pandey-a58296236/",
        image: "/images/testimonials/rajneesh-pandey.png",
    },
    {
        quote: "Everything was handled in a very practical way. There was no unnecessary complexity — just clear understanding and proper execution. It genuinely made operations easier for us.",
        author: "Sunil Bansal",
        role: "FMCG Retail Business Owner",
        linkedin: null,
        image: "/images/testimonials/sunil-bansal.png",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export default function Testimonials({ onBookCall }: TestimonialsProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section bg-gradient-to-b from-transparent to-[var(--bg-secondary)]">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <span className="inline-block text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
                            What our partners say
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What partners say after working with us
                        </h2>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
                            Different industries. Same experience — clarity, ownership, and delivery.
                        </p>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-center text-[var(--text-muted)] mb-8 text-sm"
                    >
                        Trusted by teams in banking, healthcare, and retail.
                    </motion.p>

                    <motion.div
                        variants={containerVariants}
                        className="grid md:grid-cols-3 gap-6 mb-16"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] relative"
                            >
                                <Quote className="w-8 h-8 text-indigo-500/20 mb-6" />
                                <p className="text-[var(--text-secondary)] mb-8 flex-grow leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    {testimonial.image ? (
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-lg border border-indigo-500/20">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                    )}
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold text-white">{testimonial.author}</p>
                                            {testimonial.linkedin && (
                                                <a
                                                    href={testimonial.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-[#0077b5] transition-colors"
                                                    aria-label={`LinkedIn profile of ${testimonial.author}`}
                                                >
                                                    <Linkedin className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-sm text-[var(--text-muted)]">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="text-center"
                    >
                        <p className="text-lg text-white font-medium mb-4">
                            Different industries. Same experience — clarity, ownership, and delivery.
                        </p>
                        <button
                            onClick={onBookCall}
                            className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors text-lg"
                        >
                            Something in mind? Let’s make it real. <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
