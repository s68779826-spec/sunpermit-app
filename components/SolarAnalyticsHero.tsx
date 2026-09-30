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
    <div className="relative w-full overflow-hidden bg-[#FBF7F2] text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* ─── Warm Sunset Aesthetic Background Gradient & Glows ─── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft top-to-bottom cream background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF8F5] via-[#F8EFE6] to-[#F1DFC9]" />
        
        {/* Deep rich sunset orange/terracotta radial bloom in bottom-left/center */}
        <div 
          className="absolute -bottom-24 -left-20 w-[850px] h-[650px] rounded-full blur-[140px] opacity-85"
          style={{
            background: "radial-gradient(circle, rgba(235,94,36,0.9) 0%, rgba(245,142,62,0.7) 40%, rgba(254,204,152,0.3) 70%, transparent 85%)"
          }}
        />

        {/* Secondary warm ambient glow behind right dashboard */}
        <div 
          className="absolute top-1/3 right-1/4 w-[600px] h-[500px] rounded-full blur-[160px] opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(253,186,116,0.2) 50%, transparent 80%)"
          }}
        />

        {/* Fine background noise/grain pattern */}
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
              href="/track-permit" 
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors hidden sm:inline-block"
            >
              Login
            </Link>
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
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─── Left Column: Headline, Subtitle, CTAs ─── */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-7">
            
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
              className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed max-w-md"
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
                className="bg-slate-950 hover:bg-slate-800 text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-slate-950/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get started
              </Link>

              <button
                type="button"
                onClick={() => setDemoModalOpen(true)}
                className="inline-flex items-center gap-2.5 text-base font-bold text-slate-950 hover:text-orange-600 transition-colors group"
              >
                <span>Watch Demo</span>
                <div className="w-8 h-8 rounded-full border border-slate-900/30 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-50 transition-all">
                  <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950 group-hover:fill-orange-600 group-hover:text-orange-600 ml-0.5" />
                </div>
              </button>
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
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative w-full"
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

                    {/* Right 3D Visualizer Area: Glowing Faceted Solar Crystal (Matches Screenshot) */}
                    <div className="hidden sm:flex flex-1 relative bg-[#070A12] overflow-hidden items-center justify-center p-6">
                      
                      {/* Dark grid / satellite map lines background */}
                      <div className="absolute inset-0 opacity-15">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60A5FA" strokeWidth="0.5" />
                          </pattern>
                          <rect width="100%" height="100%" fill="url(#mapgrid)" />
                          <path d="M 0 100 Q 150 50 300 250" fill="none" stroke="#F59E0B" strokeWidth="0.8" opacity="0.4" />
                          <path d="M 50 0 L 250 300" fill="none" stroke="#F59E0B" strokeWidth="0.8" opacity="0.3" />
                        </svg>
                      </div>

                      {/* Ambient Crystal Glow */}
                      <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-orange-500 via-amber-500 to-fuchsia-600 blur-3xl opacity-45 pointer-events-none" />

                      {/* High-Fidelity 3D Faceted Glowing Geometric Crystal Model */}
                      <motion.div
                        animate={{ 
                          rotateY: [0, 8, 0, -8, 0],
                          rotateX: [0, 4, 0, -4, 0],
                          y: [0, -6, 0, 6, 0]
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 drop-shadow-[0_20px_40px_rgba(235,94,36,0.45)]"
                      >
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          <defs>
                            {/* Crystal Facet Gradients */}
                            <linearGradient id="facet1" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#FEF08A" />
                              <stop offset="100%" stopColor="#F97316" />
                            </linearGradient>
                            <linearGradient id="facet2" x1="1" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#F59E0B" />
                              <stop offset="100%" stopColor="#DC2626" />
                            </linearGradient>
                            <linearGradient id="facet3" x1="0" y1="1" x2="1" y2="0">
                              <stop offset="0%" stopColor="#7C3AED" />
                              <stop offset="100%" stopColor="#EC4899" />
                            </linearGradient>
                            <linearGradient id="facet4" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#FBBF24" />
                              <stop offset="100%" stopColor="#EA580C" />
                            </linearGradient>
                            <linearGradient id="facet5" x1="1" y1="1" x2="0" y2="0">
                              <stop offset="0%" stopColor="#4C1D95" />
                              <stop offset="100%" stopColor="#9333EA" />
                            </linearGradient>
                            <linearGradient id="facet6" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#FDE047" />
                              <stop offset="100%" stopColor="#F97316" />
                            </linearGradient>
                          </defs>

                          {/* Outer Purple/Magenta Shadow Wings */}
                          <polygon points="100,15 175,55 185,115 100,100" fill="url(#facet3)" opacity="0.9" />
                          <polygon points="100,15 25,55 15,115 100,100" fill="url(#facet5)" opacity="0.85" />
                          <polygon points="15,115 100,185 100,100" fill="url(#facet3)" opacity="0.9" />
                          <polygon points="185,115 100,185 100,100" fill="url(#facet5)" opacity="0.85" />

                          {/* Central Glowing Gold / Orange Faceted Cube Body */}
                          <polygon points="100,35 155,70 100,105 45,70" fill="url(#facet1)" />
                          <polygon points="155,70 155,135 100,170 100,105" fill="url(#facet2)" />
                          <polygon points="45,70 100,105 100,170 45,135" fill="url(#facet4)" />

                          {/* Inner Inverted Facet Chamber (Hollow glowing core) */}
                          <polygon points="100,85 130,102 100,120 70,102" fill="#0A0E1A" opacity="0.95" />
                          <polygon points="100,85 130,102 130,125 100,108" fill="url(#facet6)" opacity="0.6" />
                          <polygon points="70,102 100,85 100,108 70,125" fill="url(#facet2)" opacity="0.6" />

                          {/* Specular Edge Highlights */}
                          <line x1="100" y1="35" x2="155" y2="70" stroke="#FFF" strokeWidth="1.2" opacity="0.8" />
                          <line x1="100" y1="35" x2="45" y2="70" stroke="#FFF" strokeWidth="1.2" opacity="0.8" />
                          <line x1="100" y1="35" x2="100" y2="105" stroke="#FFE4E6" strokeWidth="1" opacity="0.7" />
                        </svg>
                      </motion.div>

                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* ─── Bottom Social Proof Brand Logos Row (Matches Screenshot) ─── */}
        <div className="mt-16 pt-10 border-t border-slate-900/10">
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 opacity-70 grayscale contrast-125 hover:grayscale-0 transition-all">
            
            {/* Uber */}
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
              Uber
            </span>

            {/* amazon */}
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-slate-900 font-sans lowercase">
              amazon
            </span>

            {/* NETFLIX */}
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900 font-sans uppercase">
              NETFLIX
            </span>

            {/* airbnb */}
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-bold text-slate-900">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32">
                <path d="M16 1c-4.4 0-8 3.6-8 8 0 5.4 6.8 14.6 7.4 15.4.3.4.9.6 1.4.4.2-.1.4-.2.6-.4.6-.8 7.4-10 7.4-15.4 0-4.4-3.6-8-8-8zm0 11.5c-1.9 0-3.5-1.6-3.5-3.5S14.1 5.5 16 5.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
              </svg>
              <span>airbnb</span>
            </div>

            {/* Apple */}
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-semibold text-slate-900">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.7-7.94-12.04-14.58-6.19-9.44-11.04-20.59-14.55-33.44-3.51-12.85-5.27-24.96-5.27-36.33 0-15.65 4.13-28.71 12.41-39.18 8.28-10.47 18.77-15.82 31.45-16.06 4.91 0 10.42 1.34 16.53 4.02 6.11 2.68 10.23 4.08 12.37 4.19 1.8 0 6.13-1.45 12.99-4.36 6.86-2.91 12.73-4.14 17.61-3.69 13.06 1.09 23.36 5.86 30.9 14.31-11.53 7.02-17.18 16.64-16.94 28.86.24 9.68 4.03 17.76 11.37 24.23 7.34 6.47 15.93 10.2 25.77 11.2-2.38 7.08-5.27 14.31-8.68 21.68zM119.22 33.64c0-7.39 2.72-14.38 8.16-20.97 5.44-6.59 12.28-10.87 20.52-12.84.22 1.63.33 3.16.33 4.58 0 7.39-2.8 14.5-8.41 21.33-5.61 6.83-12.45 10.97-20.52 12.41-.05-1.52-.08-3.02-.08-4.51z" />
              </svg>
              <span>Apple</span>
            </div>

            {/* BEST BUY */}
            <div className="bg-slate-900 text-[#FBF7F2] font-black px-2 py-0.5 text-lg sm:text-xl rounded tracking-tighter">
              BEST BUY
            </div>

            {/* Spotify */}
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-bold text-slate-900">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.307c-.218.358-.684.474-1.042.256-2.859-1.748-6.458-2.143-10.697-1.173-.411.093-.822-.164-.915-.575-.093-.411.164-.822.575-.915 4.639-1.06 8.608-.616 11.823 1.365.358.218.474.684.256 1.042zm1.469-3.267c-.275.447-.859.59-1.306.315-3.272-2.011-8.261-2.593-12.133-1.417-.503.153-1.036-.135-1.189-.638-.153-.503.135-1.036.638-1.189 4.425-1.343 9.921-.697 13.675 1.613.447.275.59.859.315 1.306zm.126-3.41c-3.924-2.33-10.386-2.545-14.129-1.408-.601.183-1.242-.161-1.425-.762-.183-.601.161-1.242.762-1.425 4.301-1.305 11.436-1.05 15.973 1.644.542.321.719 1.026.398 1.568-.321.542-1.026.719-1.568.398z"/>
              </svg>
              <span>Spotify</span>
            </div>

            {/* TARGET */}
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              <div className="w-5 h-5 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              </div>
              <span>TARGET</span>
            </div>

          </div>
        </div>

      </main>

      {/* ─── Interactive Watch Demo Modal ─── */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-700 rounded-2xl p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
                <h3 className="text-base font-bold">SunPermit Solar Analytics & CAD Demo</h3>
              </div>
              <button 
                onClick={() => setDemoModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm px-2 py-1 rounded bg-slate-800"
              >
                ✕ Close
              </button>
            </div>
            
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 mx-auto flex items-center justify-center">
                <Play className="w-7 h-7 text-orange-400 fill-orange-400 ml-1" />
              </div>
              <h4 className="text-xl font-bold text-white">Interactive Demo Walkthrough</h4>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Watch how SunPermit generates residential and commercial permit plansets with automated AHJ compliance and full PE structural stamps in under 24 hours.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <Link
                  href="/request-permit"
                  onClick={() => setDemoModalOpen(false)}
                  className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-all"
                >
                  Request First Planset ($149)
                </Link>
                <button
                  onClick={() => setDemoModalOpen(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-5 py-2.5 rounded-xl text-sm font-semibold"
                >
                  Close Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
