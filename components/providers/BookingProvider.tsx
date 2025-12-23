"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import CalendarModal from "@/components/CalendarModal";

interface BookingContextType {
    openCalendar: () => void;
    openTalentForm: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const TALENT_FORM_URL = "https://forms.gle/BgGQK3o2tJCiJosx9";

export function BookingProvider({ children }: { children: ReactNode }) {
    const [showCalendar, setShowCalendar] = useState(false);

    const openCalendar = () => {
        // Show modal first
        setShowCalendar(true);
        // The modal's internal useEffect will handle opening the actual URL
    };

    const openTalentForm = () => {
        window.open(TALENT_FORM_URL, "_blank", "noopener,noreferrer");
    };

    return (
        <BookingContext.Provider value={{ openCalendar, openTalentForm }}>
            {children}
            {showCalendar && <CalendarModal onClose={() => setShowCalendar(false)} />}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
}
