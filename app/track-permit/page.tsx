"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  CheckCircle2,
  Clock,
  FileText,
  Stamp,
  Download,
  Building2,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Layers,
  Compass
} from "lucide-react";

const mockPermits: Record<string, any> = {
  "SP-89412": {
    id: "SP-89412",
    customer: "Austin Resident (Job #JOB-9941)",
    address: "3402 Solar Ridge Dr, Austin, TX 78746",
    ahj: "City of Austin Building Dept",
    utility: "Austin Energy",
    system: "14.8 kW DC PV + Tesla Powerwall 3",
    status: "PE Structural & Electrical Stamped",
    stage: 4,
    turnaround: "14.2 Hours (Completed)",
    submittedAt: "Sep 29, 2026 08:30 AM",
    peStamps: ["Texas Electrical PE #89401", "Texas Structural PE #77210"],
    timeline: [
      { step: "Order Received", done: true, time: "08:30 AM" },
      { step: "Site Survey Review", done: true, time: "09:15 AM" },
      { step: "Single-Line CAD Drafting", done: true, time: "11:45 AM" },
      { step: "PE Structural & Electrical Stamps", done: true, time: "03:10 PM" },
      { step: "Permit Package Ready for AHJ", done: true, time: "04:42 PM" }
    ]
  },
  "SP-89411": {
    id: "SP-89411",
    customer: "San Diego Commercial (Job #SD-2201)",
    address: "9102 Pacific Heights Blvd, San Diego, CA",
    ahj: "City of San Diego DSD",
    utility: "SDG&E",
    system: "22.4 kW Commercial Rooftop",
    status: "Electrical SLD CAD Review",
    stage: 3,
    turnaround: "In Progress (ETA 2.5 hrs)",
    submittedAt: "Sep 29, 2026 11:15 AM",
    peStamps: ["California Electrical PE"],
    timeline: [
      { step: "Order Received", done: true, time: "11:15 AM" },
      { step: "Site Survey Review", done: true, time: "11:50 AM" },
      { step: "Single-Line CAD Drafting", done: true, time: "01:20 PM" },
      { step: "PE Structural & Electrical Stamps", done: false, time: "Pending" },
      { step: "Permit Package Ready for AHJ", done: false, time: "Pending" }
    ]
  }
};

function PermitTrackerContent() {
  const searchParams = useSearchParams();
  const urlId = searchParams.get("id");

  const [searchId, setSearchId] = useState(urlId || "SP-89412");
  const [activePermit, setActivePermit] = useState<any>(mockPermits["SP-89412"]);

  useEffect(() => {
    if (urlId) {
      setSearchId(urlId);
      setActivePermit(mockPermits[urlId.toUpperCase()] || {
        id: urlId.toUpperCase(),
        customer: "Residential Solar Installation",
        address: "742 Evergreen Terrace, Austin, TX",
        ahj: "Austin Energy Building Dept",
        utility: "Austin Energy",
        system: "11.4 kW Solar PV System",
        status: "Engineering Review in Progress",
        stage: 2,
        turnaround: "Processing (ETA 3.5 hrs)",
        submittedAt: "Today",
        peStamps: ["50-State PE Certified"],
        timeline: [
          { step: "Order Received", done: true, time: "09:00 AM" },
          { step: "Site Survey Review", done: true, time: "10:15 AM" },
          { step: "Single-Line CAD Drafting", done: true, time: "In Progress" },
          { step: "PE Structural & Electrical Stamps", done: false, time: "Pending" },
          { step: "Permit Package Ready for AHJ", done: false, time: "Pending" }
        ]
      });
    }
  }, [urlId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = mockPermits[searchId.toUpperCase()] || {
      id: searchId.toUpperCase(),
      customer: "Custom Project Site",
      address: "123 Solar Street, USA",
      ahj: "Local Building Dept",
      utility: "Local Electric Co",
      system: "10.0 kW Solar PV Package",
      status: "In CAD Drafting Queue",
      stage: 2,
      turnaround: "Processing (ETA 4 hrs)",
      submittedAt: "Today",
      peStamps: ["50-State PE Certified"],
      timeline: [
        { step: "Order Received", done: true, time: "09:00 AM" },
        { step: "Site Survey Review", done: true, time: "10:15 AM" },
        { step: "Single-Line CAD Drafting", done: false, time: "In Progress" },
        { step: "PE Structural & Electrical Stamps", done: false, time: "Pending" },
        { step: "Permit Package Ready for AHJ", done: false, time: "Pending" }
      ]
    };
    setActivePermit(found);
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      
      {/* Search Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-orange-700 uppercase tracking-wider mb-4">
          <Compass className="w-3.5 h-3.5 text-orange-600" />
          SUNPERMIT REAL-TIME TRACKER
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
          Track Permit Status
        </h1>
        <p className="mt-3 text-slate-600 text-sm max-w-xl mx-auto font-normal">
          Enter your SunPermit Tracking ID to check live CAD drafting progress, PE engineering stamp verification, and download permit files.
        </p>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="mt-6 max-w-lg mx-auto relative flex items-center">
          <Search className="w-4 h-4 absolute left-4 text-slate-400" />
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Enter Permit ID (e.g. SP-89412)..."
            className="w-full pl-11 pr-28 py-3.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-sm"
          />
          <button
            type="submit"
            className="absolute right-2 px-5 py-2 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-all"
          >
            Lookup
          </button>
        </form>

        {/* Sample ID buttons */}
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
          <span>Try sample IDs:</span>
          {["SP-89412", "SP-89411"].map((id) => (
            <button
              key={id}
              onClick={() => {
                setSearchId(id);
                setActivePermit(mockPermits[id]);
              }}
              className="text-orange-600 hover:underline font-bold"
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      {/* Permit Details Result Card */}
      {activePermit && (
        <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm space-y-8">
          
          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-slate-950">{activePermit.id}</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 border border-orange-200">
                  {activePermit.status}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">{activePermit.customer} • {activePermit.address}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => alert(`Downloading sample permit package PDF for ${activePermit.id}...`)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#E6561B] hover:bg-[#D4470F] flex items-center gap-2 shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Download Permit PDF
              </button>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5">AHJ Jurisdiction</span>
              <span className="font-bold text-slate-900 block">{activePermit.ahj}</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5">Electric Utility</span>
              <span className="font-bold text-slate-900 block">{activePermit.utility}</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5">System Specs</span>
              <span className="font-bold text-slate-900 block">{activePermit.system}</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5">Turnaround Speed</span>
              <span className="font-bold text-emerald-600 block">{activePermit.turnaround}</span>
            </div>
          </div>

          {/* Live Workflow Timeline */}
          <div>
            <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-600" />
              Live Drafting &amp; Engineering Progress
            </h3>

            <div className="relative pl-6 space-y-6 border-l-2 border-slate-200">
              {activePermit.timeline.map((item: any, idx: number) => (
                <div key={idx} className="relative flex items-center justify-between">
                  <div
                    className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 ${
                      item.done
                        ? "bg-emerald-500 border-white shadow-xs"
                        : "bg-slate-200 border-white"
                    }`}
                  />
                  <span className={`text-xs font-semibold ${item.done ? "text-slate-900 font-bold" : "text-slate-400"}`}>
                    {item.step}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PE Engineering Stamps Verification Box */}
          <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0" />
              <div>
                <span className="font-bold text-slate-900 block">PE Engineer Verification</span>
                <span className="text-slate-600">
                  {activePermit.peStamps.join(" • ")}
                </span>
              </div>
            </div>
            <span className="text-emerald-700 font-bold text-[11px] bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
              Verified Seal ✓
            </span>
          </div>

        </div>
      )}

    </div>
  );
}

export default function TrackPermitPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center text-slate-500 py-12">Loading tracker...</div>}>
          <PermitTrackerContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
