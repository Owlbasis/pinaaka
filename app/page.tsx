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
import ConversionPanels from "@/components/sections/ConversionPanels";
import Footer from "@/components/sections/Footer";
import CalendarModal from "@/components/CalendarModal";
import ProjectBriefForm from "@/components/forms/ProjectBriefForm";

// Google Form for Talent Applications
const TALENT_FORM_URL = "https://forms.gle/BgGQK3o2tJCiJosx9";

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const openTalentForm = () => {
    window.open(TALENT_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="relative">
      <Navigation
        onBookCall={() => setShowCalendar(true)}
        onApplyTalent={openTalentForm}
      />
      <Hero
        onBookCall={() => setShowCalendar(true)}
        onSubmitBrief={() => setShowProjectForm(true)}
        onApplyTalent={openTalentForm}
      />
      <WhyThisWorks />
      <WhatWeOffer />
      <ProjectTypes />
      <HowItWorks />
      <Pricing />
      <QualityControls />
      <ConversionPanels
        onBookCall={() => setShowCalendar(true)}
        onSubmitBrief={() => setShowProjectForm(true)}
        onApplyTalent={openTalentForm}
      />
      <Footer />

      {/* Global Modals */}
      {showCalendar && <CalendarModal onClose={() => setShowCalendar(false)} />}
      {showProjectForm && <ProjectBriefForm onClose={() => setShowProjectForm(false)} />}
    </main>
  );
}
