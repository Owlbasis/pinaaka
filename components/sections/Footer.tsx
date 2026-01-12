"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[var(--accent-orange)] py-12">
            <div className="container">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                    {/* Logo & Description */}
                    <div className="flex flex-col items-start gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Charcoal Labs Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-black text-[var(--text-primary)] italic">Charcoal Labs</span>
                        </Link>
                    </div>

                    {/* Connect Links */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">Connect</h4>
                        <a
                            href="mailto:hello@charcoallabs.com"
                            className="text-[var(--text-primary)] link-underline hover:opacity-80 transition-opacity"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Follow Links */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">Follow</h4>
                        <a href="https://www.linkedin.com/in/charcoal-labs-a085663a1/" className="text-[var(--text-primary)] link-underline hover:opacity-80 transition-opacity">
                            LinkedIn
                        </a>
                        <a href="https://x.com/CharcoalLabs" className="text-[var(--text-primary)] link-underline hover:opacity-80 transition-opacity">
                            Twitter
                        </a>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">Subscribe to the newsletter</h4>
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-b-2 border-[var(--text-primary)] text-[var(--text-primary)] placeholder-[var(--text-primary)]/60 py-2 px-0 focus:outline-none w-48"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-[var(--text-primary)]/20 text-sm text-[var(--text-primary)]">
                    <p>© {new Date().getFullYear()} Charcoal Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
