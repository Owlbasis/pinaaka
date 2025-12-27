"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import WhyThisWorks from "@/components/sections/WhyThisWorks";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import CalendarModal from "@/components/CalendarModal";

// Google Form for Talent Applications
const TALENT_FORM_URL = "https://forms.gle/BgGQK3o2tJCiJosx9";
const CALENDAR_URL = "https://calendar.app.google/2Q9w7NuDhySy6LHA9";

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);

  const openTalentForm = () => {
    window.open(TALENT_FORM_URL, "_blank", "noopener,noreferrer");
  };

  const openCalendar = () => {
    window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="relative">
      <Navigation
        onBookCall={openCalendar}
        onApplyTalent={openTalentForm}
      />
      <Hero
        onBookCall={openCalendar}
        onApplyTalent={openTalentForm}
      />
      <WhoWeHelp />
      <HowItWorks />
      <WhyThisWorks />
      <Testimonials onBookCall={openCalendar} />
      <FAQ />
      <Pricing onBookCall={openCalendar} />
      <Footer />

      {/* Global Modals */}
      {showCalendar && <CalendarModal onClose={() => setShowCalendar(false)} />}
    </main>
  );
}
