"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ExternalLink } from "lucide-react";
import { useEffect } from "react";

interface CalendarModalProps {
    onClose: () => void;
}

export default function CalendarModal({ onClose }: CalendarModalProps) {
    // Your Google Calendar Appointment Schedule URL
    const CALENDAR_URL = "https://calendar.app.google/ziw7JyH8ez5E2z3q8";

    // Auto-open in new tab when modal opens
    useEffect(() => {
        window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="modal-overlay"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="modal-content p-0 max-w-md w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-[var(--border-soft)]">
                        <div>
                            <h3 className="text-xl">Book a Discovery Call</h3>
                            <p className="text-sm text-[var(--text-muted)] mt-1">Choose a time that works for you</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5 text-[var(--text-muted)]" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--surface)] border border-[var(--border-soft)] flex items-center justify-center mx-auto mb-6">
                            <Calendar className="w-8 h-8 text-[var(--text-secondary)]" />
                        </div>

                        <h4 className="text-lg font-medium mb-2">Calendar Opened in New Tab</h4>
                        <p className="text-[var(--text-muted)] text-sm mb-8">
                            Your Google Calendar booking page has opened in a new tab. If it didn&apos;t open, click the button below.
                        </p>

                        <a
                            href={CALENDAR_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Open Calendar
                        </a>

                        <button
                            onClick={onClose}
                            className="block w-full mt-6 text-[var(--text-muted)] hover:text-white text-sm transition-colors"
                        >
                            Close this window
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
