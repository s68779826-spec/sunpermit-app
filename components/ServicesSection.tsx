"use client";

import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  FileText, 
  Stamp, 
  Battery, 
  Zap, 
  Clock, 
  ShieldAlert, 
  ArrowRight,
  Sparkles,
  Building
} from "lucide-react";

const services = [
  {
    id: "residential",
    title: "Residential Solar Permit Planset",
    badge: "Most Popular",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    price: "$149",
    turnaround: "24 – 48 Hours",
    description: "Complete permit-ready solar drafting package for residential rooftop & ground mount installations.",
    features: [
      "Full Electrical Single-Line Diagram (SLD)",
      "Site Plan, Roof Layout & Structural Attachment",
      "NEC 2020 & NEC 2023 Code Compliance",
      "Safety Placard & Warning Label Layouts",
      "Equipment Datasheet Package Included",
      "Unlimited Revisions until AHJ Approval"
    ],
    cta: "Request Planset Now",
    href: "/request-permit?service=residential",
    popular: true,
  },
  {
    id: "pe-stamps",
    title: "Licensed PE Engineering Stamps",
    badge: "50 States Covered",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    price: "$199",
    turnaround: "24 Hours Express",
    description: "Professional Engineer (PE) structural & electrical stamps signed by licensed engineers.",
    features: [
      "50-State PE Engineer Network",
      "Structural Rooftop Load & Wind Calculations",
      "Electrical Circuit & Voltage Drop Verification",
      "Digital Cryptographic Signature & Seal",
      "Hardcopy Wet Stamps Available (Physical Mail)",
      "Instant PDF Download for AHJ Submission"
    ],
    cta: "Get PE Stamps",
    href: "/request-permit?service=pe-stamps",
    popular: false,
  },
  {
    id: "battery-ess",
    title: "Battery Storage & ESS Integration",
    badge: "Tesla / Enphase / Sol-Ark",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    price: "+$99",
    turnaround: "Added to Planset",
    description: "Full battery backup single-line diagrams, load center schedules, and rapid shutdown specs.",
    features: [
      "Tesla Powerwall 3 / Enphase 5P / FranklinWH",
      "Whole-Home & Partial Backup Load Calculations",
      "Smart Transfer Switch & Gateway Diagrams",
      "Fire Code (NFPA 855) Setback Compliance",
      "Utility Interconnection Package",
      "Generator & EV Charger Integration Options"
    ],
    cta: "Add Battery Plan",
    href: "/request-permit?service=battery",
    popular: false,
  },
  {
    id: "commercial",
    title: "Commercial & Industrial (C&I)",
    badge: "Custom Engineering",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    price: "Custom",
    turnaround: "48 – 72 Hours",
    description: "Enterprise solar engineering packages for commercial roofs, carports, and utility-scale projects.",
    features: [
      "Medium & High Voltage Electrical Single-Lines",
      "3D Shading Simulation & Helioscope Exports",
      "Transformer & Switchgear Engineering",
      "Title 24 & Energy Code Compliance Reports",
      "Interconnection Application Assistance",
      "Dedicated Senior CAD Project Manager"
    ],
    cta: "Consult Commercial Team",
    href: "/submit-company",
    popular: false,
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#070A12] border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            SUNPERMIT QUICK SERVICES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Permit Plansets &amp; Engineering Packages
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Transparent flat-rate pricing for solar installers. Delivered with 24-hour express speed and guaranteed first-pass AHJ approval.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-6 transition-all flex flex-col justify-between ${
                service.popular
                  ? "bg-gradient-to-b from-[#0F1B2D] to-[#0A1220] border-2 border-emerald-500/50 shadow-xl shadow-emerald-500/10 scale-[1.02]"
                  : "bg-slate-900/60 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 text-[11px] font-extrabold tracking-wide uppercase shadow-md">
                  ★ RECOMMENDED CHOICE
                </div>
              )}

              <div>
                {/* Badge & Turnaround */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {service.turnaround}
                  </span>
                </div>

                {/* Title & Price */}
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-extrabold text-white">{service.price}</span>
                  {service.price.startsWith("$") && <span className="text-xs text-slate-400">/ per project</span>}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-4">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button CTA */}
              <Link
                href={service.href}
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  service.popular
                    ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/20"
                    : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {service.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
