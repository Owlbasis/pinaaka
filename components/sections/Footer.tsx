"use client";

import Link from "next/link";
import { Mountain, Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Description */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 flex items-center justify-center">
                                <Mountain className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Charcoal Labs</span>
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
                            href="mailto:hellocharcoallabs@gmail.com"
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            hellocharcoallabs@gmail.com
                        </a>
                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/in/charcoal-labs-a085663a1/" className="text-gray-500 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/CharcoalLabs" className="text-gray-500 hover:text-white transition-colors">
                                {/* X icon (using text for now as Lucide might not have direct X icon in older versions, or just use a custom SVG if needed. Let's try to see if Lucide has an X icon or just use a placeholder if unsure. Wait, the user asked for X.com logo. I'll use a simple SVG or text if Lucide doesn't fail me, but replacing Twitter with X is safer.) */}
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Charcoal Labs. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
