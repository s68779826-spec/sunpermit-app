"use client";

import React from "react";
import Link from "next/link";
import { Sun, ShieldCheck, Mail, Phone, MapPin, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-[#05070D] text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#090E1A] rounded-[11px] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                SUN<span className="text-emerald-400">PERMIT</span> LLC
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SunPermit is the nation&apos;s premier engineering partner for solar installers and EPC contractors. We deliver 24-hour turnaround permit-ready plansets with PE structural &amp; electrical stamps across all 50 states.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Licensed PE Engineers • 50 States Compliance</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Permit Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/request-permit" className="hover:text-emerald-400 transition-colors">
                  Residential Solar Plansets
                </Link>
              </li>
              <li>
                <Link href="/request-permit" className="hover:text-emerald-400 transition-colors">
                  Commercial Engineering Packages
                </Link>
              </li>
              <li>
                <Link href="/request-permit" className="hover:text-emerald-400 transition-colors">
                  PE Electrical &amp; Structural Stamps
                </Link>
              </li>
              <li>
                <Link href="/request-permit" className="hover:text-emerald-400 transition-colors">
                  Battery Storage &amp; ESS Wiring
                </Link>
              </li>
              <li>
                <Link href="/request-permit" className="hover:text-emerald-400 transition-colors">
                  Title 24 &amp; Load Calculations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Contractor Hub
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/submit-company" className="hover:text-emerald-400 transition-colors">
                  Submit Company Details
                </Link>
              </li>
              <li>
                <Link href="/request-permit" className="hover:text-emerald-400 transition-colors">
                  Submit Permit Request
                </Link>
              </li>
              <li>
                <Link href="/track-permit" className="hover:text-emerald-400 transition-colors">
                  Live Permit Tracking Status
                </Link>
              </li>
              <li>
                <Link href="/#analytics" className="hover:text-emerald-400 transition-colors">
                  Solar Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link href="/#roi-calculator" className="hover:text-emerald-400 transition-colors">
                  Savings Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              SunPermit Direct
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>SunPermit, LLC Headquarters<br />United States</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:support@sunpermit.com" className="hover:text-cyan-400">
                  support@sunpermit.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-800-SUN-PERMIT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & badge */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SUNPERMIT, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/submit-company" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/submit-company" className="hover:text-slate-400">Terms of Service</Link>
            <Link href="/track-permit" className="hover:text-slate-400">AHJ Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
