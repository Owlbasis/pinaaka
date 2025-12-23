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
import { BookingProvider } from "@/components/providers/BookingProvider";

export default function Home() {
  return (
    <BookingProvider>
      <main className="relative">
        <Navigation />
        <Hero />
        <WhyThisWorks />
        <WhatWeOffer />
        <ProjectTypes />
        <HowItWorks />
        <Pricing />
        <QualityControls />
        <Testimonials />
        <ConversionPanels />
        <Footer />
      </main>
    </BookingProvider>
  );
}
