"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Sun,
  Zap,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Clock,
  ArrowRight,
  Sparkles,
  Building2,
  CheckCircle2,
  Activity,
  Layers,
  Search,
  ChevronRight,
  Compass,
  Download,
  Gauge,
  SlidersHorizontal,
  RefreshCw
} from "lucide-react";

// Mock Solar Yield & Telemetry Data (Dribbble 25889080)
const yieldData = [
  { time: "06:00 AM", production: 2.4, baseline: 2.0, efficiency: 94, permits: 14 },
  { time: "08:00 AM", production: 6.8, baseline: 5.5, efficiency: 96, permits: 32 },
  { time: "10:00 AM", production: 14.2, baseline: 12.1, efficiency: 99, permits: 78 },
  { time: "12:00 PM", production: 22.8, baseline: 19.4, efficiency: 100, permits: 124 },
  { time: "02:00 PM", production: 20.6, baseline: 18.2, efficiency: 98, permits: 168 },
  { time: "04:00 PM", production: 15.1, baseline: 13.5, efficiency: 97, permits: 194 },
  { time: "06:00 PM", production: 7.9, baseline: 6.2, efficiency: 95, permits: 218 },
  { time: "08:00 PM", production: 1.8, baseline: 1.4, efficiency: 92, permits: 230 },
];

const pieData = [
  { name: "Approved (First-Pass)", value: 78, color: "#10B981" },
  { name: "In Engineering Review", value: 16, color: "#06B6D4" },
  { name: "CAD Drafting", value: 6, color: "#F59E0B" },
];

const activePermitsList = [
  { id: "SP-89412", location: "Austin, TX (Austin Energy)", system: "14.8 kW DC + Tesla PW3", status: "PE Stamped & Sent", time: "12 mins ago", badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  { id: "SP-89411", location: "San Diego, CA (SDG&E)", system: "22.4 kW Commercial PV", status: "Electrical SLD Review", time: "28 mins ago", badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  { id: "SP-89410", location: "Miami, FL (FPL AHJ)", system: "9.6 kW DC Rooftop", status: "AHJ Approved", time: "45 mins ago", badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  { id: "SP-89409", location: "Phoenix, AZ (APS Electric)", system: "18.2 kW DC + Sol-Ark 15K", status: "CAD Drafting", time: "1 hour ago", badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
];

export default function SolarAnalyticsHero() {
  const [activeTab, setActiveTab] = useState<"yield" | "permits" | "ahj">("yield");
  const [searchTrackingId, setSearchTrackingId] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <section className="relative pt-10 pb-20 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-300 backdrop-blur-md shadow-lg shadow-emerald-500/10"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400">SunPermit Platform 2.0:</span>
            <span className="hidden sm:inline">24-Hour Express Solar Permit Plansets &amp; PE Stamps</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </motion.div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Solar Analytics Dashboard &amp;{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 glow-emerald-text">
              Permit Engineering
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Turnaround complete solar permit plansets in 24 hours. Full PE structural &amp; electrical engineering stamps across all 50 states for installers and EPC contractors.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/request-permit"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 hover:brightness-110 shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-3 text-base group"
            >
              <FileCheck className="w-5 h-5 text-slate-950" />
              Request Permit Planset Form
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/submit-company"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all flex items-center justify-center gap-3 text-base"
            >
              <Building2 className="w-5 h-5 text-cyan-400" />
              Submit Company Details
            </Link>
          </motion.div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 50-State Licensed PE Engineers
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24-Hr Express CAD Turnaround
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 99.8% First-Pass AHJ Approval
            </span>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* Dribbble Shot 25889080 Solar Analytics Dashboard Floating Glass Panel */}
        {/* ------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-2xl border border-slate-800/90 bg-[#0A0F1D]/95 p-4 sm:p-7 shadow-2xl shadow-emerald-500/10 backdrop-blur-2xl"
        >
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Activity className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  Solar Analytics &amp; Live Telemetry Dashboard
                  <span className="px-2.5 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-400 rounded-full font-bold border border-emerald-500/30">
                    REAL-TIME STREAM
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Solar generation performance yield, active planset velocity &amp; AHJ approval metrics
                </p>
              </div>
            </div>

            {/* Controls & Tab Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRefreshData}
                title="Refresh Live Telemetry Data"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-emerald-400" : ""}`} />
              </button>

              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab("yield")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "yield"
                      ? "bg-emerald-500 text-slate-950 font-extrabold shadow-md shadow-emerald-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Solar Production Yield
                </button>
                <button
                  onClick={() => setActiveTab("permits")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "permits"
                      ? "bg-emerald-500 text-slate-950 font-extrabold shadow-md shadow-emerald-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Permit Queue Velocity
                </button>
                <button
                  onClick={() => setActiveTab("ahj")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "ahj"
                      ? "bg-emerald-500 text-slate-950 font-extrabold shadow-md shadow-emerald-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  AHJ Compliance
                </button>
              </div>
            </div>
          </div>

          {/* Quick Metrics KPI Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all group">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-xs font-semibold">Total Plansets Completed</span>
                <FileCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-extrabold text-white">52,490+</div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1 font-medium">
                <TrendingUp className="w-3 h-3" /> +14.2% this month
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all group">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-xs font-semibold">Avg CAD Turnaround Speed</span>
                <Clock className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-extrabold text-white">18.4 Hrs</div>
              <div className="flex items-center gap-1 text-[11px] text-cyan-400 mt-1 font-medium">
                <Zap className="w-3 h-3" /> 24-hr express SLA guaranteed
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-all group">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-xs font-semibold">First-Pass AHJ Pass Rate</span>
                <ShieldCheck className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-extrabold text-white">99.8%</div>
              <div className="flex items-center gap-1 text-[11px] text-amber-400 mt-1 font-medium">
                <CheckCircle2 className="w-3 h-3" /> Zero revision guarantee
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all group">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-xs font-semibold">PE Stamp Coverage</span>
                <Building2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-extrabold text-white">50 States</div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1 font-medium">
                Structural &amp; Electrical PE Stamps
              </div>
            </div>
          </div>

          {/* Main Visualizer Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            
            {/* Chart Area */}
            <div className="lg:col-span-2 p-5 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    {activeTab === "yield" && "Real-Time Solar Generation Output vs Baseline (MW)"}
                    {activeTab === "permits" && "Permit Planset Drafting Velocity (Units/Hour)"}
                    {activeTab === "ahj" && "AHJ Approval Distribution Metrics"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Production Output
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" /> Baseline Target
                  </span>
                </div>
              </div>

              {/* Recharts Analytics Visualization */}
              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  {activeTab === "yield" ? (
                    <AreaChart data={yieldData}>
                      <defs>
                        <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.45} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                        </linearGradient>
                        <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" stroke="#475569" fontSize={11} tickLine={false} />
                      <YAxis stroke="#475569" fontSize={11} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0D1424",
                          borderColor: "#1E293B",
                          borderRadius: "12px",
                          color: "#FFF",
                          fontSize: "12px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="production"
                        stroke="#10B981"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorProduction)"
                        name="Production (MW)"
                      />
                      <Area
                        type="monotone"
                        dataKey="baseline"
                        stroke="#06B6D4"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        fillOpacity={1}
                        fill="url(#colorBaseline)"
                        name="Baseline Target"
                      />
                    </AreaChart>
                  ) : activeTab === "permits" ? (
                    <BarChart data={yieldData}>
                      <XAxis dataKey="time" stroke="#475569" fontSize={11} tickLine={false} />
                      <YAxis stroke="#475569" fontSize={11} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0D1424",
                          borderColor: "#1E293B",
                          borderRadius: "12px",
                          color: "#FFF",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="permits" fill="#10B981" radius={[4, 4, 0, 0]} name="Queue Capacity" />
                    </BarChart>
                  ) : (
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0D1424",
                          borderColor: "#1E293B",
                          borderRadius: "12px",
                          color: "#FFF",
                          fontSize: "12px",
                        }}
                      />
                    </PieChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sidebar Active Queue Board */}
            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    Live Planset Queue Board
                  </h4>
                  <Link href="/track-permit" className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1 font-semibold">
                    View All <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-3">
                  {activePermitsList.map((permit) => (
                    <div
                      key={permit.id}
                      className="p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{permit.id}</span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${permit.badgeColor}`}>
                            {permit.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium">{permit.location}</p>
                        <p className="text-[10px] text-slate-500">{permit.system}</p>
                      </div>
                      <span className="text-[10px] text-slate-500 whitespace-nowrap">{permit.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Permit Quick Tracking Lookup Box */}
              <div className="mt-4 pt-3 border-t border-slate-800">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchTrackingId) {
                      window.location.href = `/track-permit?id=${encodeURIComponent(searchTrackingId)}`;
                    }
                  }}
                  className="relative"
                >
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTrackingId}
                    onChange={(e) => setSearchTrackingId(e.target.value)}
                    placeholder="Enter Tracking ID (e.g. SP-89412)..."
                    className="w-full pl-9 pr-14 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-[10px] font-bold rounded-md transition-all"
                  >
                    Track
                  </button>
                </form>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
