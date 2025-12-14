"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

interface ProjectBriefFormProps {
    onClose: () => void;
}

interface FormData {
    name: string;
    email: string;
    company: string;
    projectType: string;
    requirement: string;
    timeline: string;
    budget: string;
    attachments: string;
    consent: boolean;
}

const projectTypes = [
    "Software Development",
    "Architecture / System Design",
    "Data Collection",
    "Feature Development",
    "Consultancy Execution",
    "Maintenance & Support",
    "Other",
];

const timelines = [
    "ASAP (within 2 weeks)",
    "1-2 months",
    "2-3 months",
    "3-6 months",
    "Flexible",
];

const budgets = [
    "Less than $1,000",
    "$1,000 - $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
    "Not sure yet",
];

// Google Apps Script Web App URL (with Drive upload support)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxgXOpr9vRV5_2ji223BRK1S2o9jY7rt7R3DGjfjWFh5-7xCfuxTX9p1sROTal_rUD/exec";

export default function ProjectBriefForm({ onClose }: ProjectBriefFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            // Send to Google Sheets via Apps Script
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sheetName: "ProjectBriefs",
                    fields: data,
                }),
            });

            setIsSuccess(true);
        } catch (error) {
            console.error("Submission error:", error);
            // Still show success since no-cors mode doesn't return response
            setIsSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    className="modal-content max-w-xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#0a0f1c] z-10">
                        <div>
                            <h3 className="text-xl font-bold">Submit Project Brief</h3>
                            <p className="text-sm text-gray-400 mt-1">Tell us about your project</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-400" />
                        </button>
                    </div>

                    {isSuccess ? (
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-400" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Brief Submitted!</h4>
                            <p className="text-gray-400 mb-6">
                                We'll review your project and get back to you within 24-48 hours.
                            </p>
                            <button onClick={onClose} className="btn btn-primary">
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
                            {/* Name */}
                            <div>
                                <label className="label">Name *</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="input"
                                    placeholder="Your name"
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="label">Work Email *</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    type="email"
                                    className="input"
                                    placeholder="you@company.com"
                                />
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Company */}
                            <div>
                                <label className="label">Company Name</label>
                                <input
                                    {...register("company")}
                                    className="input"
                                    placeholder="Your company (optional)"
                                />
                            </div>

                            {/* Project Type */}
                            <div>
                                <label className="label">Project Type *</label>
                                <select
                                    {...register("projectType", { required: "Please select a project type" })}
                                    className="input select"
                                >
                                    <option value="">Select project type</option>
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.projectType && <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>}
                            </div>

                            {/* Requirement */}
                            <div>
                                <label className="label">Problem / Requirement *</label>
                                <textarea
                                    {...register("requirement", { required: "Please describe your requirement" })}
                                    className="input textarea"
                                    placeholder="Describe what you're trying to build or solve..."
                                    rows={4}
                                />
                                {errors.requirement && <p className="text-red-400 text-sm mt-1">{errors.requirement.message}</p>}
                            </div>

                            {/* Timeline */}
                            <div>
                                <label className="label">Timeline Expectation</label>
                                <select {...register("timeline")} className="input select">
                                    <option value="">Select timeline</option>
                                    {timelines.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Budget */}
                            <div>
                                <label className="label">Budget Range</label>
                                <select {...register("budget")} className="input select">
                                    <option value="">Select budget range</option>
                                    {budgets.map((b) => (
                                        <option key={b} value={b}>{b}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Attachments */}
                            <div>
                                <label className="label">Attachments Link</label>
                                <input
                                    {...register("attachments")}
                                    className="input"
                                    placeholder="Google Drive, Dropbox, or other link (optional)"
                                />
                            </div>

                            {/* Consent */}
                            <div className="flex items-start gap-3">
                                <input
                                    {...register("consent", { required: "Please agree to be contacted" })}
                                    type="checkbox"
                                    className="w-5 h-5 rounded bg-white/5 border border-white/10 mt-0.5"
                                />
                                <label className="text-sm text-gray-400">
                                    I agree to be contacted about my project inquiry *
                                </label>
                            </div>
                            {errors.consent && <p className="text-red-400 text-sm">{errors.consent.message}</p>}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary w-full"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Submit Brief
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
