"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SunPermitLogo from "@/components/SunPermitLogo";
import {
  Search,
  MapPin,
  Compass,
  Home,
  Sun,
  Layers,
  Sliders,
  CheckCircle2,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function SolarAnalyticsHero() {
  const [activeRange, setActiveRange] = useState<"daily" | "weekly" | "monthly" | "yearly">("monthly");

  return (
    <div className="relative w-full overflow-hidden bg-[#FBF8F5] text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* ─── Warm Sunset Aesthetic Background Gradient & Glows (Matches Screenshot) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft top-to-bottom cream to warm terracotta base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #FDF9F5 0%, #FBF3EA 18%, #FCE2CD 38%, #F7AF76 60%, #E65A22 78%, #AA3412 92%, #78280E 100%)",
          }}
        />

        {/* Main large rich sunset orange radial bloom in bottom-left */}
        <div
          className="absolute -bottom-24 -left-40 w-[1100px] h-[850px] rounded-full blur-[100px] opacity-95"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, rgba(217, 72, 15, 1) 0%, rgba(235, 94, 36, 0.95) 35%, rgba(245, 142, 62, 0.75) 60%, rgba(254, 204, 152, 0.2) 85%, transparent 100%)",
          }}
        />

        {/* Dark burnt-orange bottom glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40%]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(142,43,14,0.18) 25%, rgba(104,34,13,0.55) 70%, rgba(78,27,12,0.85) 100%)",
          }}
        />

        {/* Secondary warm ambient glow behind right dashboard */}
        <div
          className="absolute top-1/4 right-10 w-[700px] h-[600px] rounded-full blur-[140px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, rgba(253, 186, 116, 0.3) 50%, transparent 80%)",
          }}
        />

        {/* Fine background noise/grain pattern */}
        <div className="absolute inset-0 opacity-[0.035] bg-repeat bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* ─── Floating Top Pill Navbar (Matches Screenshot) ─── */}
      <header className="relative z-30 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav className="bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-sm px-5 sm:px-8 py-3.5 flex items-center justify-between transition-all">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <SunPermitLogo height={38} />
          </Link>

          {/* Center Links */}
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

      {/* ─── Main Hero Content: Space Between Layout (Left on Left, Right on Right) ─── */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* ─── Left Column: Aligned on the Left Side ─── */}
          <div className="w-full lg:max-w-[480px] xl:max-w-[540px] shrink-0 flex flex-col justify-center space-y-7 text-left">
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl xl:text-[64px] font-extrabold tracking-tight text-slate-950 leading-[1.08]"
            >
              Understand<br />
              Your Solar Data<br />
              in Seconds
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-800 text-base sm:text-lg font-normal leading-relaxed max-w-md"
            >
              Track sunlight, optimize your energy output, and make smarter solar decisions — all in one sleek, user-friendly dashboard.
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
                className="bg-slate-950 hover:bg-slate-800 text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-slate-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get started
              </Link>
            </motion.div>

            {/* SunPermit Quick Feature Points (Matches Screenshot) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-800"
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

          {/* ─── Right Column: Tablet Mockup Aligned on the Far Right Side ─── */}
          <div className="w-full lg:flex-1 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative w-full max-w-[680px] xl:max-w-[760px]"
            >
              {/* Sleek Tablet Frame */}
              <div className="relative rounded-[36px] p-3 sm:p-4 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-[0_30px_90px_rgba(0,0,0,0.35)] border border-slate-700/60 ring-1 ring-white/10">
                
                {/* Tablet Camera / Sensor Pill */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-slate-900 rounded-full flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                </div>

                {/* Tablet Screen Container */}
                <div className="relative rounded-[26px] bg-[#0A0E1A] overflow-hidden border border-white/[0.06] text-slate-200">
                  
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
                            
                            <line x1="0" y1="15" x2="200" y2="15" stroke="#ffffff" strokeOpacity="0.04" />
                            <line x1="0" y1="35" x2="200" y2="35" stroke="#ffffff" strokeOpacity="0.04" />
                            
                            <path
                              d="M0,45 Q30,42 60,36 T120,24 T160,30 T200,20"
                              fill="none"
                              stroke="url(#gradPurple)"
                              strokeWidth="2"
                            />
                            
                            <path
                              d="M0,38 Q40,30 80,18 T140,12 T180,22 T200,10"
                              fill="none"
                              stroke="url(#gradOrange)"
                              strokeWidth="2.5"
                            />
                          </svg>

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

                    {/* Right 3D Visualizer Area: Glowing Faceted Solar Crystal (Matches Screenshot) */}
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

        {/* ─── Bottom Accreditation Logos Row — Dark/Black Low Opacity Logos Matching Screenshot ─── */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 hover:opacity-100 transition-opacity">
          {/* Uber style brand representation */}
          <span className="text-xl sm:text-2xl font-bold tracking-tighter text-black/80 font-sans">Uber</span>
          
          {/* Amazon style logo representation */}
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-black/80 font-sans leading-none">amazon</span>
            <svg className="w-10 h-1.5 text-black/80 stroke-current fill-none stroke-[2]" viewBox="0 0 40 6">
              <path d="M2,1 Q20,6 38,1" />
            </svg>
          </div>

          {/* NETFLIX */}
          <span className="text-base sm:text-lg font-black tracking-widest text-black/80 font-sans uppercase">NETFLIX</span>

          {/* Airbnb logo representation */}
          <div className="flex items-center gap-1.5 text-black/80">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
              <path d="M16 1c-2 0-4 2-5 4L2 22c-1 2 0 5 2 6 2 2 5 2 7 0l5-6 5 6c2 2 5 2 7 0 2-1 3-4 2-6L21 5c-1-2-3-4-5-4zm0 6c1 0 2 1 3 3l7 14c0 1 0 2-1 2-1 1-2 1-3 0l-6-7-6 7c-1 1-2 1-3 0-1 0-1-1-1-2L13 10c1-2 2-3 3-3z"/>
            </svg>
            <span className="text-base sm:text-lg font-semibold tracking-tight font-sans">airbnb</span>
          </div>

          {/* Apple */}
          <div className="flex items-center gap-1.5 text-black/80">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.9-14.36-6.07-3.37-2.73-7.23-7.44-11.59-14.14-7.28-11.2-12.87-23.77-16.78-37.71-3.9-13.94-5.86-26.68-5.86-38.22 0-14.1 3.52-25.76 10.56-34.97 7.04-9.21 16.03-13.95 26.96-14.22 4.46 0 9.47 1.15 15.03 3.44 5.56 2.29 9.38 3.44 11.45 3.44 1.74 0 5.68-1.22 11.82-3.67 6.14-2.45 11.47-3.56 16-3.32 11.97.98 21.61 5.39 28.91 13.23-10.45 6.32-15.57 15.22-15.36 26.7 0 9.7 3.7 17.84 11.1 24.42 7.4 6.58 16.29 10.13 26.67 10.66-2.5 7.41-5.88 15.25-10.14 23.52zM119.22 31.85c0-7.3 2.65-14.37 7.95-21.21 5.3-6.84 12.02-10.64 20.15-11.4 1.09 7.63-1.57 14.86-7.98 21.69-6.41 6.83-13.41 10.68-20.12 10.92z"/>
            </svg>
            <span className="text-base sm:text-lg font-medium tracking-tight font-sans">Apple</span>
          </div>

          {/* BEST BUY */}
          <span className="text-base sm:text-lg font-black tracking-tighter text-black/80 font-sans italic">BEST BUY</span>

          {/* Spotify */}
          <div className="flex items-center gap-1.5 text-black/80">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.341c-.217.357-.68.471-1.037.253-2.845-1.738-6.427-2.13-10.647-1.168-.403.093-.807-.161-.9-.564-.093-.404.16-.807.563-.9 4.621-1.056 8.568-.61 11.768 1.346.357.217.471.68.253 1.037zm1.472-3.275c-.273.444-.858.587-1.302.314-3.257-2.002-8.223-2.583-12.077-1.413-.5.152-1.026-.134-1.178-.634-.152-.5.134-1.027.634-1.179 4.405-1.336 9.873-.692 13.609 1.61.444.273.587.858.314 1.302zm.126-3.413c-3.906-2.319-10.354-2.533-14.116-1.391-.6.183-1.237-.164-1.42-.763-.183-.6.164-1.237.763-1.42 4.316-1.31 11.436-1.052 15.894 1.593.54.32.719 1.022.4 1.562-.32.54-1.022.72-1.521.419z"/>
            </svg>
            <span className="text-base sm:text-lg font-bold tracking-tight font-sans">Spotify</span>
          </div>

          {/* TARGET */}
          <div className="flex items-center gap-1.5 text-black/80">
            <svg className="w-5 h-5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="3" className="fill-current" />
            </svg>
            <span className="text-base sm:text-lg font-black tracking-widest font-sans uppercase">TARGET</span>
          </div>
        </div>

      </main>
    </div>
  );
}
