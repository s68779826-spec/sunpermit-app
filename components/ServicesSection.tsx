"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HardHat,
  FileSpreadsheet,
  Compass,
  ClipboardCheck,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
  CheckCircle2
} from "lucide-react";

const sunServices = [
  {
    id: "engineering",
    icon: HardHat,
    title: "Engineering",
    description: "Electrical & Structural review and stamps, Structural Analysis Report.",
    linkText: "Discover how",
    href: "/permit-planset",
  },
  {
    id: "proposals",
    icon: FileSpreadsheet,
    title: "Proposal drawings",
    description: "Aurora proposals, Shade Report, Production Report, 3d Roof Design.",
    linkText: "Discover how",
    href: "/request-sales-proposal",
  },
  {
    id: "plansets",
    icon: Compass,
    title: "Permit Plansets",
    description: "CAD Plan as per local codes & regulations, BOM, Safety Plan.",
    linkText: "Discover how",
    href: "/permit-planset",
  },
  {
    id: "project-mgmt",
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Permitting, Interconnection, SREC, HOA, Material.",
    linkText: "Discover how",
    href: "/submit-company",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FBF7F2] text-slate-900 overflow-hidden border-t border-slate-900/5">
      {/* Subtle warm ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-orange-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ─── Top Header (Matches Screenshot 1 Layout with Screenshot 2 Text) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Tag */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-700 uppercase">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
              Take a moment to explore our services
            </div>
            <div className="mt-3">
              <span className="text-[11px] font-bold text-orange-600 tracking-widest uppercase bg-orange-100/80 px-3 py-1 rounded-full border border-orange-200">
                SUN SERVICES
              </span>
            </div>
          </div>

          {/* Right Main Heading */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
              Redefining Solar Design and Engineering
            </h2>
          </div>

        </div>

        {/* ─── Main Content: Left Sunrise Image Card + Right 4 Services ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ─── Left Column: Golden Sunrise Mountain / Solar Reflection Image Card (Matches Screenshot 1) ─── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative rounded-[32px] overflow-hidden shadow-2xl min-h-[420px] lg:min-h-full border border-slate-200/80 group"
          >
            {/* High-Resolution Warm Golden Sunrise Mountain Landscape */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop')`,
              }}
            />
            {/* Warm Golden Sunrise Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 via-orange-500/20 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-transparent to-transparent" />

            {/* Subtle Floating SunPermit Trust Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-200 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Nationwide Solar Engineering
              </div>
              <p className="text-sm font-bold text-white leading-snug">
                Serving solar installers across all 50 states with 24-hr express CAD turnaround.
              </p>
            </div>
          </motion.div>

          {/* ─── Right Column: 4 Services Grid (Matches Screenshot 1 Theme with Screenshot 2 Content) ─── */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {sunServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-slate-200/90 rounded-[24px] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-orange-300/80 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Orange Circular Icon Badge (Matches Screenshot 1) */}
                    <div className="w-12 h-12 rounded-full bg-[#FFF1E8] border border-orange-200/80 text-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-2.5 tracking-tight group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Service Description (Exact content from Screenshot 2) */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Discover How / Action Link (Matches Screenshot 1) */}
                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-950 hover:text-orange-600 transition-colors group/link"
                    >
                      <span>{service.linkText}</span>
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-slate-400 group-hover/link:text-orange-600" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
