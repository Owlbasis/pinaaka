"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import WhyThisWorks from "@/components/sections/WhyThisWorks";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import ProjectTypes from "@/components/sections/ProjectTypes";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import QualityControls from "@/components/sections/QualityControls";
import Testimonials from "@/components/sections/Testimonials";
import ConversionPanels from "@/components/sections/ConversionPanels";
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
      <WhyThisWorks />
      <WhatWeOffer />
      <ProjectTypes />
      <HowItWorks />
      <Pricing />
      <QualityControls onBookCall={openCalendar} />
      <Testimonials onBookCall={openCalendar} />
      <ConversionPanels
        onBookCall={openCalendar}
        onApplyTalent={openTalentForm}
      />
      <Footer />

      {/* Global Modals */}
      {showCalendar && <CalendarModal onClose={() => setShowCalendar(false)} />}
    </main>
  );
}
