"use client";

import Link from "next/link";
import { Zap, Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Description */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">TalentBridge</span>
                        </Link>
                        <p className="text-gray-500 text-sm text-center md:text-left max-w-xs">
                            Ship scoped projects with vetted, AI-enabled talent.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="#why" className="text-gray-400 hover:text-white transition-colors">
                            Why Us
                        </Link>
                        <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                            Services
                        </Link>
                        <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                            How It Works
                        </Link>
                        <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                            Pricing
                        </Link>
                    </div>

                    {/* Contact & Social */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <a
                            href="mailto:hello@talentbridge.io"
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            hello@talentbridge.io
                        </a>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} TalentBridge. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
