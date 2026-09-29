import React from "react";
import Navbar from "@/components/Navbar";
import SolarAnalyticsHero from "@/components/SolarAnalyticsHero";
import ServicesSection from "@/components/ServicesSection";
import InteractiveRoiCalculator from "@/components/InteractiveRoiCalculator";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div id="analytics">
          <SolarAnalyticsHero />
        </div>
        <ServicesSection />
        <InteractiveRoiCalculator />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
