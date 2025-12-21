"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "#why", label: "Why Us" },
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "Process" },
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
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`nav ${isScrolled ? "scrolled shadow-md" : "bg-transparent"}`}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/logo.png"
                                alt="Charcoal Labs Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight">Charcoal Labs</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTAs */}
                    <div className="hidden md:flex items-center gap-3">
                        <button onClick={onApplyTalent} className="text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-2">
                            For Talent
                        </button>
                        <button onClick={onBookCall} className="btn btn-primary h-9 px-4 text-sm shadow-sm opacity-90 hover:opacity-100">
                            Book a Call
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-300 p-1"
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
                        className="md:hidden bg-[#0B1120] border-b border-white/5 overflow-hidden"
                    >
                        <nav className="px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-white/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <button
                                    onClick={() => { onApplyTalent(); setIsMobileMenuOpen(false); }}
                                    className="btn btn-secondary w-full justify-center"
                                >
                                    For Talent
                                </button>
                                <button
                                    onClick={() => { onBookCall(); setIsMobileMenuOpen(false); }}
                                    className="btn btn-primary w-full justify-center"
                                >
                                    Book a Call
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
