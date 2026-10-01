"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SunPermitLogo from "@/components/SunPermitLogo";
import {
Search,
MapPin,
Compass,
Clock,
Home,
Sun,
Layers,
Sliders,
Play,
ArrowRight,
Sparkles,
Zap,
ShieldCheck,
CheckCircle2,
FileCheck,
Building2,
LogOut,
HelpCircle,
TrendingUp,
Maximize2
} from "lucide-react";

export default function SolarAnalyticsHero() {
const [activeRange, setActiveRange] = useState<"daily" | "weekly" | "monthly" | "yearly">("monthly");
const [demoModalOpen, setDemoModalOpen] = useState(false);

return (
<div className="relative w-full overflow-hidden bg-[#FBF8F5] text-slate-900 selection:bg-orange-500 selection:text-white">
{/* ─── Warm Sunset Background ─── */}
<div className="absolute inset-0 pointer-events-none">

    {/* Cream → Peach → Orange → Dark Orange */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to bottom, #FBF8F5 0%, #FBF3EA 18%, #FBE2CC 38%, #F8B078 58%, #E85D24 76%, #A83212 91%, #76270F 100%)",
      }}
    />

    {/* Main orange glow */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 75% 55% at 35% 70%, rgba(255,159,82,0.65) 0%, rgba(241,105,35,0.45) 35%, rgba(190,57,15,0.3) 60%, transparent 82%)",
      }}
    />

    {/* Dark burnt-orange bottom */}
    <div
      className="absolute bottom-0 left-0 right-0 h-[38%]"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(142,43,14,0.18) 25%, rgba(104,34,13,0.55) 70%, rgba(78,27,12,0.85) 100%)",
      }}
    />

    {/* Fine background texture */}
    <div className="absolute inset-0 opacity-[0.03] bg-repeat bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

  </div>

  {/* ─── Floating Top Pill Navbar (Matches sunpermit.com exactly) ─── */}
  <header className="relative z-30 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <nav className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-sm px-5 sm:px-8 py-3.5 flex items-center justify-between transition-all">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <SunPermitLogo height={38} />
      </Link>

      {/* Center Links from sunpermit.com */}
      <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
        <Link href="#about" className="hover:text-slate-950 hover:text-orange-600 transition-colors">About Us</Link>
        <Link href="#services" className="hover:text-slate-950 hover:text-orange-600 transition-colors">Services</Link>
        <Link href="#pricing" className="hover:text-slate-950 hover:text-orange-600 transition-colors">Pricing Calculator</Link>
        <Link href="#contact" className="hover:text-slate-950 hover:text-orange-600 transition-colors">Contact Us</Link>
        <Link href="/track-permit" className="hover:text-slate-950 hover:text-orange-600 transition-colors">My Account</Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <Link
          href="/quick"
          className="bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Get started
        </Link>
      </div>
    </nav>
  </header>

  {/* ─── Main Hero Content Grid ─── */}

{/* ─── Main Hero Content Grid ─── */}

<main className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pt-10 lg:pt-14 pb-16 lg:pb-24 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center min-h-[560px]">



      {/* ─── Left Column: Headline, Subtitle, CTAs ─── */}
  <div className="lg:col-span-5 flex flex-col justify-center space-y-6 max-w-[500px] lg:max-w-[540px] lg:pr-0 relative z-20">

        
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl xl:text-[64px] font-extrabold tracking-tight text-slate-950 leading-[1.08]"
        >
          Order solar  <br />
         design & engineering<br />
          services
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed max-w-md"
        >
          Our goal is to provide reliable service by assisting solar industry in every aspect and take part in making the solar network stronger. Get assistance and grow seamlessly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-6 pt-2"
        >
          <Link
            href="/quick"
            className="bg-slate-950 hover:bg-slate-800 text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-slate-950/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get started
          </Link>
        </motion.div>

        {/* SunPermit Quick Feature Points */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 24-Hr SLA Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 50-State PE Licensed
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 99.8% AHJ Pass Rate
          </span>
        </motion.div>

      </div>

      {/* ─── Right Column: High-Fidelity Floating iPad Dashboard Mockup ─── */}

  <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center">

<motion.div
initial={{ opacity: 0, scale: 0.96, y: 30 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
className="relative w-full sm:w-[115%] lg:w-[125%] max-w-[820px] lg:-mr-20 xl:-mr-28"



          {/* Sleek Tablet Frame */}

<div className="relative rounded-[28px] p-3 sm:p-4 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-[0_30px_90px_rgba(0,0,0,0.35)] border border-slate-700/60 ring-1 ring-white/10">

            {/* Tablet Camera / Sensor Pill */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-slate-900 rounded-full flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            </div>

            {/* Tablet Screen Container */}
           <div className="relative rounded-[20px] bg-[#0A0E1A] ...

              
              {/* Dashboard Top Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D1322] border-b border-white/[0.06] text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-300 font-medium">Dashboard</span>
                  <span className="text-slate-600">&gt;</span>
                  <span className="text-slate-500">...</span>
                  <span className="text-slate-600">&gt;</span>
                  <span className="text-orange-400 font-semibold">Solar analysis</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3 h-3 absolute left-2 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      readOnly
                      placeholder="Search"
                      value=""
                      className="bg-[#080B14] border border-white/[0.08] rounded-md pl-6 pr-2 py-0.5 text-[10px] text-slate-300 placeholder-slate-600 w-28 focus:outline-none cursor-default"
                    />
                  </div>
                </div>
              </div>

              {/* Dashboard Body with Left Icon Rail + Content */}
              <div className="flex">
                
                {/* Left Icon Rail */}
                <div className="w-11 sm:w-12 bg-[#090D18] border-r border-white/[0.06] py-3.5 flex flex-col items-center justify-between min-h-[460px] select-none">
                  {/* Top App Icon */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-[1.5px] flex items-center justify-center">
                      <div className="w-full h-full bg-[#0A0E1A] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 -translate-x-0.5" />
                      </div>
                    </div>

                    {/* Rail Nav Icons */}
                    <div className="flex flex-col items-center gap-3 pt-2">
                      <div className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer transition-colors">
                        <Home className="w-4 h-4" />
                      </div>
                      <div className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer transition-colors">
                        <Sun className="w-4 h-4" />
                      </div>
                      <div className="p-1.5 rounded-lg bg-orange-500/15 text-orange-400 border border-orange-500/30">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <div className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer transition-colors">
                        <Layers className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Utility Icons */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 cursor-pointer">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 cursor-pointer">
                      <LogOut className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Middle Analytics Column */}
                <div className="flex-1 p-3.5 sm:p-4.5 space-y-3.5 max-w-[340px] sm:max-w-[370px]">
                  
                  {/* Overview Box */}
                  <div className="bg-[#101626] border border-white/[0.06] rounded-xl p-3 shadow-inner">
                    <h4 className="text-[11px] font-bold text-white mb-2.5 tracking-wide">Overview</h4>
                    <div className="space-y-2 text-[10px]">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-wider">Address</p>
                          <p className="text-slate-200 font-medium">123 Solar Street, Sunnytown</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Compass className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-wider">GPS Coordinates</p>
                          <p className="text-slate-200 font-medium">40.7128° N, 74.0060° W</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/[0.04]">
                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-wider">Time Zone</p>
                          <p className="text-slate-200 font-medium">EDT (UTC -4)</p>
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-wider">Roof Surface Area</p>
                          <p className="text-slate-200 font-medium">250 m²</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Solar Energy Potential Box */}
                  <div className="bg-[#101626] border border-white/[0.06] rounded-xl p-3 shadow-inner">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[11px] font-bold text-white tracking-wide">Solar Energy Potential</h4>
                      <div className="flex items-center gap-0.5 bg-[#090D18] p-0.5 rounded-md border border-white/[0.06] text-[8px]">
                        {(["daily", "weekly", "monthly", "yearly"] as const).map((r) => (
                          <button
                            key={r}
                            onClick={() => setActiveRange(r)}
                            className={`px-1.5 py-0.5 rounded capitalize font-medium transition-all ${
                              activeRange === r 
                                ? "bg-slate-700 text-white font-bold" 
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Equalizer / Bar Histogram Visualization */}
                    <div className="py-1">
                      <div className="flex items-end justify-between gap-1 h-9 px-1">
                        {[20, 25, 40, 55, 75, 95, 80, 60, 45, 30, 20, 15, 35, 50, 70, 90, 100, 85, 65, 45].map((h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className={`w-1 rounded-t-sm transition-all ${
                              i === 16 
                                ? "bg-gradient-to-t from-orange-500 to-amber-300 shadow-sm shadow-orange-500/50" 
                                : i >= 14 && i <= 18 
                                ? "bg-slate-400" 
                                : "bg-slate-700/60"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-[8px] text-slate-400 px-1 mt-1 border-t border-white/[0.04] pt-0.5">
                        <span>April - 158 kWh</span>
                        <span className="text-orange-400 font-semibold">May - 186 kWh</span>
                      </div>
                    </div>

                    {/* 2x2 Key Metric Tiles */}
                    <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/[0.04] text-[9px]">
                      <div className="bg-[#090D18] p-1.5 rounded-lg border border-white/[0.04]">
                        <p className="text-[8px] text-slate-500">Irradiance Intensity</p>
                        <p className="text-slate-100 font-bold text-[11px] mt-0.5">5.1 kWh/m²</p>
                      </div>
                      <div className="bg-[#090D18] p-1.5 rounded-lg border border-white/[0.04]">
                        <p className="text-[8px] text-slate-500">Shading Impact</p>
                        <p className="text-slate-100 font-bold text-[11px] mt-0.5">5% loss</p>
                      </div>
                      <div className="bg-[#090D18] p-1.5 rounded-lg border border-white/[0.04]">
                        <p className="text-[8px] text-slate-500">Panel Efficiency</p>
                        <p className="text-slate-100 font-bold text-[11px] mt-0.5">20.1%</p>
                      </div>
                      <div className="bg-[#090D18] p-1.5 rounded-lg border border-white/[0.04]">
                        <p className="text-[8px] text-slate-500">Energy Output</p>
                        <p className="text-slate-100 font-bold text-[11px] mt-0.5">2.5 MWh/month</p>
                      </div>
                    </div>
                  </div>

                  {/* Solar Generation Efficiency Box */}
                  <div className="bg-[#101626] border border-white/[0.06] rounded-xl p-3 shadow-inner">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-[11px] font-bold text-white tracking-wide">Solar Generation Efficiency</h4>
                      <span className="text-[8px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 font-bold rounded border border-emerald-500/20">
                        Live
                      </span>
                    </div>

                    {/* Multi-line Mini Chart with 84% callout badge */}
                    <div className="relative h-14 w-full my-1">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradOrange" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#F97316" />
                            <stop offset="100%" stopColor="#FBBF24" />
                          </linearGradient>
                          <linearGradient id="gradPurple" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#818CF8" />
                            <stop offset="100%" stopColor="#C084FC" />
                          </linearGradient>
                        </defs>
                        
                        {/* Grid lines */}
                        <line x1="0" y1="15" x2="200" y2="15" stroke="#ffffff" strokeOpacity="0.04" />
                        <line x1="0" y1="35" x2="200" y2="35" stroke="#ffffff" strokeOpacity="0.04" />
                        
                        {/* Purple curve (Actual Output) */}
                        <path
                          d="M0,45 Q30,42 60,36 T120,24 T160,30 T200,20"
                          fill="none"
                          stroke="url(#gradPurple)"
                          strokeWidth="2"
                        />
                        
                        {/* Orange curve (Expected Output) */}
                        <path
                          d="M0,38 Q40,30 80,18 T140,12 T180,22 T200,10"
                          fill="none"
                          stroke="url(#gradOrange)"
                          strokeWidth="2.5"
                        />
                      </svg>

                      {/* Floating 84% Highlight Pill Badge */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-orange-500/40 px-2 py-0.5 rounded-full text-[9px] font-extrabold text-orange-400 shadow-md">
                        84%
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="space-y-0.5 text-[7.5px] text-slate-400 pt-1 border-t border-white/[0.04]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span>Expected Solar Generation (MWh)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>Actual Energy Output (MWh)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        <span>Energy Loss (%)</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right 3D Visualizer Area: Glowing Faceted Solar Crystal (Matches Screenshot 1) */}
                <div className="hidden sm:flex flex-1 relative bg-[#070A12] overflow-hidden items-center justify-center p-3">
                  <div className="relative z-10 w-full h-full min-h-[300px] flex items-center justify-center">
                    <img
                      src="/images/hero-3d-cube.jpg"
                      alt="Solar Analytics 3D Model"
                      className="w-full max-w-[280px] h-auto object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(235,94,36,0.45)]"
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </motion.div>
      </div>

    </div>

    {/* ─── Bottom Accreditation Logos Row (Matches Screenshot) ─── */}
    <div className="mt-16 pt-8 border-t border-slate-900/10">
      <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 opacity-85 hover:opacity-100 transition-opacity">
        {/* NABCEP */}
        <div className="h-12 sm:h-14 flex items-center justify-center">
          <img
            src="/images/accreditations/nabcep.png"
            alt="NABCEP Certified PV Installation Professional"
            className="h-full w-auto object-contain brightness-90 contrast-125"
          />
        </div>

        {/* LG Chem */}
        <div className="h-12 sm:h-14 flex items-center justify-center">
          <img
            src="/images/accreditations/lg-chem.png"
            alt="LG Chem Certified Installer"
            className="h-full w-auto object-contain brightness-90 contrast-125"
          />
        </div>

        {/* ENPHASE */}
        <div className="h-9 sm:h-11 flex items-center justify-center">
          <img
            src="/images/accreditations/enphase.png"
            alt="Enphase"
            className="h-full w-auto object-contain brightness-90 contrast-125"
          />
        </div>

        {/* EverVolt */}
        <div className="h-10 sm:h-12 flex items-center justify-center">
          <img
            src="/images/accreditations/evervolt.png"
            alt="EverVolt Certified Installer"
            className="h-full w-auto object-contain brightness-90 contrast-125"
          />
        </div>

        {/* Drone Pilot */}
        <div className="h-12 sm:h-14 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full border-2 border-slate-900/80 flex items-center justify-center p-1">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-slate-900 stroke-2">
                <circle cx="12" cy="12" r="3" />
                <circle cx="6" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="6" cy="18" r="2" />
                <circle cx="18" cy="18" r="2" />
                <line x1="8" y1="8" x2="10" y2="10" />
                <line x1="16" y1="8" x2="14" y2="10" />
                <line x1="8" y1="16" x2="10" y2="14" />
                <line x1="16" y1="16" x2="14" y2="14" />
              </svg>
            </div>
            <span className="text-[9px] font-extrabold uppercase tracking-tight text-slate-900 mt-1 leading-none">
              Drone Pilot
            </span>
            <span className="text-[7px] font-bold text-slate-700 tracking-wider">
              TRAINING
            </span>
          </div>
        </div>
      </div>
    </div>

  </main>
</div>

);
}
