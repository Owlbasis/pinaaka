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
        color: "bg-[#F9A8D4]", // Pink
    },
    {
        quote: "In healthcare, reliability matters more than speed. What stood out was the sense of ownership. Things were handled carefully, communication was timely, and I never had to follow up repeatedly. It gave me confidence throughout the process.",
        author: "Dr. Rajneesh Pandey",
        role: "MBBS",
        linkedin: "https://www.linkedin.com/in/dr-rajneesh-pandey-a58296236/",
        image: "/images/testimonials/rajneesh-pandey.png",
        color: "bg-[#6EE7B7]", // Mint
    },
    {
        quote: "Everything was handled in a very practical way. There was no unnecessary complexity. Just clear understanding and proper execution. It genuinely made operations easier for us.",
        author: "Sunil Bansal",
        role: "FMCG Retail Business Owner",
        linkedin: null,
        image: "/images/testimonials/sunil-bansal.png",
        color: "bg-[#FDE047]", // Yellow
    },
];

export default function Testimonials({ onBookCall }: TestimonialsProps) {
    return (
        <section className="section">
            <div className="container">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block text-[var(--accent)] text-sm font-semibold uppercase tracking-widest mb-4">
                            What our partners say
                        </span>
                        <h2 className="mb-4">
                            What partners say after working with us
                        </h2>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
                            Different industries. Same experience: clarity, ownership, and delivery.
                        </p>
                    </div>

                    <p className="text-center text-[var(--text-muted)] mb-8 text-sm">
                        Trusted by teams in banking, healthcare, and retail.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`${testimonial.color} rounded-2xl p-8 flex flex-col relative transition-all duration-300 hover:scale-[1.02]`}
                            >
                                <Quote className="w-8 h-8 text-[var(--text-primary)]/20 mb-6" />
                                <p className="text-[var(--text-primary)]/80 mb-8 flex-grow leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    {testimonial.image ? (
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/50">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-[var(--text-primary)] font-bold text-lg">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                    )}
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-[var(--text-primary)]">{testimonial.author}</p>
                                            {testimonial.linkedin && (
                                                <a
                                                    href={testimonial.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[var(--text-primary)]/60 hover:text-[var(--text-primary)] transition-colors"
                                                    aria-label={`LinkedIn profile of ${testimonial.author}`}
                                                >
                                                    <Linkedin className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-sm text-[var(--text-primary)]/60">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-lg text-[var(--text-primary)] font-medium mb-6">
                            Different industries. Same experience: clarity, ownership, and delivery.
                        </p>
                        <button
                            onClick={onBookCall}
                            className="btn btn-secondary"
                        >
                            Something in mind? Let's make it real. <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
