"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { href: "#why", label: "Why Us" },
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
];

interface NavigationProps {
    onBookCall: () => void;
    onApplyTalent: () => void;
}

export default function Navigation({ onBookCall, onApplyTalent }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">TalentBridge</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="hidden md:flex items-center gap-4">
                        <button onClick={onApplyTalent} className="btn btn-ghost text-sm">
                            Apply as Talent
                        </button>
                        <button onClick={onBookCall} className="btn btn-primary text-sm">
                            Book a Call
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0f1c] border-t border-white/10"
                    >
                        <div className="container py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-white/10" />
                            <button
                                onClick={() => { onApplyTalent(); setIsMobileMenuOpen(false); }}
                                className="btn btn-secondary w-full"
                            >
                                Apply as Talent
                            </button>
                            <button
                                onClick={() => { onBookCall(); setIsMobileMenuOpen(false); }}
                                className="btn btn-primary w-full"
                            >
                                Book a Call
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
