"use client";

import React from "react";
import Link from "next/link";
import SunPermitLogo from "@/components/SunPermitLogo";
import { ArrowUp, Sparkles, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-white text-slate-900 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Main Footer Columns (Matches Screenshot 1 Layout with Screenshot 2 Content) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-100">
          
          {/* ─── Column 1: Value Proposition & Bundle CTA (from Screenshot 2) ─── */}
          <div className="lg:col-span-5 space-y-5">
            <div className="mb-2">
              <SunPermitLogo height={42} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                Volume Bundles
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-2 tracking-tight">
                Got a good work volume?<br />
                Ask about our bundles.
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-md">
              You can subscribe to our bundle packages to offer you one-stop solution for your projects. Our bundle includes design &amp; engineering stamps, interconnection, permitting, rebate, HOA etc.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/request-permit"
                className="bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold px-6 py-3 rounded-full transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Quote
              </Link>
              
              <a
                href="tel:+1-551-291-2786"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-orange-600 px-4 py-3 rounded-full border border-slate-200 hover:border-orange-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                (551) 291-2786
              </a>
            </div>
          </div>

          {/* ─── Column 2: Navigation (Matches Screenshot 1) ─── */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-slate-950">Navigation</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="#about" className="hover:text-slate-950 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-slate-950 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-slate-950 transition-colors">
                  Pricing Calculator
                </Link>
              </li>
              <li>
                <Link href="/request-permit" className="hover:text-slate-950 transition-colors">
                  Permit Plansets
                </Link>
              </li>
              <li>
                <Link href="/submit-company" className="hover:text-slate-950 transition-colors">
                  Company Onboarding
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── Column 3: Follow us (Matches Screenshot 1 & 2) ─── */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-slate-950">Follow us</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="https://instagram.com/sunpermit"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sunpermit"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/sunpermit"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/sunpermit"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950 transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* ─── Column 4: Legal (Matches Screenshot 1) ─── */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-slate-950">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link href="/submit-company" className="hover:text-slate-950 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/submit-company" className="hover:text-slate-950 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/submit-company" className="hover:text-slate-950 transition-colors">
                  Sustainability Policy
                </Link>
              </li>
              <li>
                <Link href="/submit-company" className="hover:text-slate-950 transition-colors">
                  ESG Policy
                </Link>
              </li>
              <li>
                <a href="mailto:support@sunpermit.com" className="hover:text-slate-950 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── Bottom Copyright & Back to Top (Matches Screenshot 1 Exactly) ─── */}
        <div className="pt-8 flex items-center justify-between text-xs font-medium text-slate-500">
          <p>
            Copyright @ SUNPERMIT, LLC {new Date().getFullYear()}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 transition-colors font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
