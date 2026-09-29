"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Zap,
  ShieldCheck,
  Sun,
  Layers,
  FileCheck,
  CheckCircle2
} from "lucide-react";

export default function InteractiveRoiCalculator() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  
  // Step form state (from Screenshot 2)
  const [quoteStep, setQuoteStep] = useState(1);
  const [propertyType, setPropertyType] = useState("Residential");
  const [includeDroneSurvey, setIncludeDroneSurvey] = useState("No");
  const [systemType, setSystemType] = useState("With Battery");
  const [systemSizeKw, setSystemSizeKw] = useState(12);
  const [needPeStamps, setNeedPeStamps] = useState(true);

  // Heatmap slider state (from Screenshot 1)
  const [heatmapIntensity, setHeatmapIntensity] = useState(79);

  // Calculated Pricing
  const basePrice = propertyType === "Residential" ? 149 : 399;
  const dronePrice = includeDroneSurvey === "Yes" ? 120 : 0;
  const batteryPrice = systemType === "With Battery" ? 99 : 0;
  const pePrice = needPeStamps ? 199 : 0;
  const totalPrice = basePrice + dronePrice + batteryPrice + pePrice;

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 overflow-hidden border-t border-slate-200/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-orange-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ─── Top Header Bar (Matches Screenshot 1) ─── */}
        <div className="flex items-center justify-between mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-700 uppercase">
            <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
            Explore the Dashboard in Action
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setHeatmapIntensity((prev) => Math.max(20, prev - 15))}
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-colors shadow-xs"
              title="Previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setHeatmapIntensity((prev) => Math.min(100, prev + 15))}
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-colors shadow-xs"
              title="Next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ─── Main Content Grid (Matches Screenshot 1 Layout) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─── Left Column: Headline, Copy, 3 Value Props, Pill Button ─── */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12]"
            >
              Maximize Your Solar Potential<br />
              with Precision Insights
            </motion.h2>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 text-base leading-relaxed max-w-lg font-normal"
            >
              Using advanced solar analysis, we help you understand how much energy your roof can generate — and how much you can save. With personalized recommendations, you&apos;re empowered to make the most of every sunlit hour.
            </motion.p>

            {/* 3 Key Value Propositions with Checkmarks (Matches Screenshot 1 Exactly) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 pt-1"
            >
              {/* Item 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Accurate Data:</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Get precise estimates on sunlight exposure and energy potential.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Optimized Placement:</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Visual maps show where solar panels work best on your roof.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Clear ROI Forecasts:</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Understand your financial savings before making the switch.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons: Solid Black Pill Button (Matches Screenshot 1) + Direct Quote Calculator */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Start for free
              </button>

              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>Get a Quote Wizard</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

          {/* ─── Right Column: 3D Rooftop Solar Heatmap Visual + Floating Analysis Badge (Matches Screenshot 1) ─── */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full"
            >
              {/* Dotted Grid Background Container */}
              <div className="relative rounded-[32px] bg-[#FAF8F5] border border-slate-200/90 p-6 sm:p-10 min-h-[460px] flex items-center justify-center overflow-hidden shadow-xl">
                
                {/* Fine Dot Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />

                {/* 3D Faceted Glowing Rooftop Heatmap Geometric Model */}
                <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 drop-shadow-[0_20px_35px_rgba(235,94,36,0.25)]">
                  <svg viewBox="0 0 240 240" className="w-full h-full">
                    <defs>
                      <linearGradient id="roofHeat1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FEF08A" />
                        <stop offset="50%" stopColor="#F97316" />
                        <stop offset="100%" stopColor="#9333EA" />
                      </linearGradient>
                      <linearGradient id="roofHeat2" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FDE047" />
                        <stop offset="100%" stopColor="#EA580C" />
                      </linearGradient>
                      <linearGradient id="roofHeat3" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FB923C" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                      <linearGradient id="roofHeat4" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#C026D3" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>

                    {/* Architectural Rooftop Structure Planes */}
                    {/* Top Chimney / Ridge Box */}
                    <polygon points="120,40 160,60 120,80 80,60" fill="url(#roofHeat2)" />
                    <polygon points="160,60 190,75 150,95 120,80" fill="url(#roofHeat1)" />

                    {/* Main High-Sun Rooftop Plane */}
                    <polygon points="80,60 120,80 120,130 60,110" fill="url(#roofHeat3)" />
                    <polygon points="120,80 150,95 180,140 120,130" fill="url(#roofHeat2)" />
                    
                    {/* Right Angle Gable */}
                    <polygon points="190,75 220,105 180,140 150,95" fill="url(#roofHeat4)" />
                    <polygon points="220,105 220,180 180,210 180,140" fill="url(#roofHeat1)" />

                    {/* Central Courtyard Cutout / Pitch */}
                    <polygon points="120,130 180,140 180,210 140,210 140,160 120,150" fill="url(#roofHeat2)" />
                    <polygon points="60,110 120,130 120,150 60,160" fill="url(#roofHeat3)" />
                    
                    {/* Bottom Left Extension */}
                    <polygon points="60,110 60,160 40,150 40,100" fill="url(#roofHeat4)" />
                    <polygon points="60,160 120,150 140,160 140,210 100,210" fill="url(#roofHeat3)" />

                    {/* Crisp Architectural Hip Line Overlays */}
                    <line x1="80" y1="60" x2="120" y2="80" stroke="#FFF" strokeWidth="1.2" opacity="0.8" />
                    <line x1="120" y1="80" x2="160" y2="60" stroke="#FFF" strokeWidth="1.2" opacity="0.8" />
                    <line x1="120" y1="80" x2="120" y2="130" stroke="#FFF" strokeWidth="1.2" opacity="0.8" />
                    <line x1="120" y1="130" x2="180" y2="140" stroke="#FFF" strokeWidth="1.2" opacity="0.8" />
                  </svg>
                </div>

                {/* ─── Floating White "Solar Analysis" Card (Matches Screenshot 1 Exactly) ─── */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xl max-w-[260px] sm:max-w-[280px]">
                  
                  {/* Card Title */}
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950 mb-2.5">
                    Solar Analysis
                  </h4>

                  {/* Heatmap Multi-Color Gradient Bar + Slider Pin */}
                  <div className="relative mb-3 pt-1">
                    <div className="h-2 w-full rounded-full bg-gradient-to-r from-purple-600 via-rose-500 via-orange-500 to-amber-300" />
                    {/* Slider Thumb Indicator */}
                    <div 
                      className="absolute top-0 w-1.5 h-4 bg-slate-950 rounded-full -translate-x-1/2 shadow-xs transition-all"
                      style={{ left: `${heatmapIntensity}%` }}
                    />
                  </div>

                  {/* 4 Stats Grid */}
                  <div className="space-y-1.5 text-[11px] pt-1 border-t border-slate-100">
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Yearly Average Energy</span>
                      <span className="font-bold text-slate-950">1578 kWh/m²</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Sun Exposure</span>
                      <span className="font-bold text-slate-950">{heatmapIntensity}%</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Peak Sun Hours</span>
                      <span className="font-bold text-slate-950">5.3 hours</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Daytime Sun Exposure</span>
                      <span className="font-bold text-slate-950">9.54 h/day</span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* ─── Interactive "Get a Quote" Modal (Exact Fields from Screenshot 2) ─── */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-[#FCFAF7] border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-2xl text-slate-900">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Instant Pricing Calculator
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                  Get a Quote
                </h3>
              </div>
              
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-xs font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Progress Bar (from Screenshot 2) */}
            <div className="mb-8">
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5">
                <span>Step {quoteStep} of 2</span>
                <span className="text-orange-600">{quoteStep === 1 ? "50%" : "100%"}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300"
                  style={{ width: quoteStep === 1 ? "50%" : "100%" }}
                />
              </div>
            </div>

            {/* Step 1 Fields (Exact from Screenshot 2) */}
            {quoteStep === 1 && (
              <div className="space-y-6">
                
                {/* Field 1: Property Type * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Property Type *
                  </label>
                  <div className="relative">
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange-500 appearance-none shadow-xs"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Field 2: Include Drone Pilot Survey * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Include Drone Pilot Survey *
                  </label>
                  <div className="relative">
                    <select
                      value={includeDroneSurvey}
                      onChange={(e) => setIncludeDroneSurvey(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange-500 appearance-none shadow-xs"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes (+$120)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Field 3: System Type * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    System Type *
                  </label>
                  <div className="relative">
                    <select
                      value={systemType}
                      onChange={(e) => setSystemType(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange-500 appearance-none shadow-xs"
                    >
                      <option value="Without Battery">Without Battery</option>
                      <option value="With Battery">With Battery (+$99)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

              </div>
            )}

            {/* Step 2: System Size & PE Stamps */}
            {quoteStep === 2 && (
              <div className="space-y-6">
                
                {/* System Size Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Estimated System Size
                    </label>
                    <span className="text-base font-extrabold text-orange-600">
                      {systemSizeKw} kW DC
                    </span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="50"
                    value={systemSizeKw}
                    onChange={(e) => setSystemSizeKw(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>4 kW (Small)</span>
                    <span>16 kW (Standard)</span>
                    <span>50 kW (Commercial)</span>
                  </div>
                </div>

                {/* PE Stamps Toggle */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Include 50-State PE Stamps?</p>
                    <p className="text-[11px] text-slate-500">Structural &amp; Electrical Review (+$199)</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNeedPeStamps(!needPeStamps)}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      needPeStamps ? "bg-orange-500" : "bg-slate-300"
                    }`}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full bg-white shadow-xs transition-transform ${
                        needPeStamps ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Price Summary Banner */}
                <div className="p-4 rounded-xl bg-slate-950 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Estimated Total</span>
                    <span className="text-2xl font-extrabold text-orange-400">${totalPrice}</span>
                  </div>
                  <span className="text-xs text-slate-300 font-medium">24-Hr SLA Included</span>
                </div>

              </div>
            )}

            {/* Buttons Row (Matches Screenshot 2: Previous & Next in coral/orange) */}
            <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-slate-200">
              {quoteStep > 1 && (
                <button
                  type="button"
                  onClick={() => setQuoteStep(1)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#E6561B] hover:bg-[#D4470F] text-white transition-colors"
                >
                  Previous
                </button>
              )}

              {quoteStep === 1 ? (
                <button
                  type="button"
                  onClick={() => setQuoteStep(2)}
                  className="px-8 py-2.5 rounded-xl text-xs font-bold bg-[#E6561B] hover:bg-[#D4470F] text-white transition-colors shadow-sm"
                >
                  Next
                </button>
              ) : (
                <Link
                  href={`/request-permit?property=${propertyType}&drone=${includeDroneSurvey}&battery=${systemType}&size=${systemSizeKw}&pe=${needPeStamps}`}
                  onClick={() => setQuoteModalOpen(false)}
                  className="px-8 py-2.5 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-white transition-colors shadow-md"
                >
                  Order Planset (${totalPrice})
                </Link>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
