"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Description */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Charcoal Labs Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">Charcoal Labs</span>
                        </Link>
                        <p className="text-gray-500 text-sm text-center md:text-left max-w-xs">
                            Ship scoped projects with vetted, AI-enabled talent.
                        </p>
                    </div>

                    {/* Links */}
                    <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="#who-we-help" className="text-gray-400 hover:text-white transition-colors">
                            How We Help
                        </Link>
                        <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                            How It Works
                        </Link>
                        <Link href="#why" className="text-gray-400 hover:text-white transition-colors">
                            Why Teams Trust Us
                        </Link>
                        <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                            FAQs
                        </Link>
                    </nav>

                    {/* Contact & Social */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <p className="text-sm text-gray-500">Prefer clarity over calls? Email us.</p>
                        <a
                            href="mailto:hello@charcoallabs.com"
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            hello@charcoallabs.com
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
                <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Charcoal Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
