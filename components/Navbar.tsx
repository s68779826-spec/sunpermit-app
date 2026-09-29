"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sun, 
  FileText, 
  Building2, 
  Search, 
  BarChart3, 
  Menu, 
  X, 
  Zap, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Solar Analytics", href: "/#analytics", icon: BarChart3 },
    { label: "Services & Pricing", href: "/#services", icon: Zap },
    { label: "Company Registration", href: "/submit-company", icon: Building2 },
    { label: "Request Planset", href: "/request-permit", icon: FileText },
    { label: "Track Permit", href: "/track-permit", icon: Search },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#070A12]/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-500 to-emerald-600 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090E1A] rounded-[11px] flex items-center justify-center">
              <Sun className="w-6 h-6 text-emerald-400 animate-pulse-slow" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                SUN<span className="text-emerald-400">PERMIT</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                QUICK
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-wider uppercase">
              Solar Analytics & Permit Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/submit-company"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-all flex items-center gap-2"
          >
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            Company Details
          </Link>

          <Link
            href="/request-permit"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2 group"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950" />
            Request Permit Planset
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090E1A] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-emerald-400"
              >
                <Icon className="w-4 h-4 text-emerald-400" />
                {item.label}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="/submit-company"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-800 text-slate-200"
            >
              Submit Company Details
            </Link>
            <Link
              href="/request-permit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 text-slate-950"
            >
              Request Permit Planset
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
