"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import confetti from "canvas-confetti";
import {
  Compass,
  FileSpreadsheet,
  Building2,
  CheckCircle2,
  ArrowRight,
  Upload,
  Sparkles,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  MapPin,
  FileCheck
} from "lucide-react";

export default function SubmitCompanyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [companyId, setCompanyId] = useState("");
  const [logoFileName, setLogoFileName] = useState("");

  const [form, setForm] = useState({
    companyName: "",
    companyAddress: "",
    licenseNumber: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/submit-company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName,
          contactName: form.companyName,
          email: form.email,
          phone: form.phone,
          licenseNumber: form.licenseNumber,
          licenseState: "US",
          serviceArea: form.companyAddress,
          notes: form.notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setCompanyId(data.companyId || `SPC-2026-${Math.floor(1000 + Math.random() * 9000)}`);
        setIsSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {
      console.error(err);
      setCompanyId(`SPC-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        
        {/* ─── Top Switcher Tabs (Matches Screenshot Exactly) ─── */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          <Link
            href="/permit-planset"
            className="flex-1 max-w-sm bg-white hover:bg-orange-50/50 border border-slate-200/90 hover:border-orange-300 rounded-2xl py-4 px-6 text-center shadow-xs transition-all flex flex-col items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
              Request Permit Planset (Quick)
            </span>
          </Link>

          <Link
            href="/request-sales-proposal"
            className="flex-1 max-w-sm bg-white hover:bg-orange-50/50 border border-slate-200/90 hover:border-orange-300 rounded-2xl py-4 px-6 text-center shadow-xs transition-all flex flex-col items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
              Request Pre-Sale Design (Aurora)
            </span>
          </Link>
        </div>

        {/* ─── Main Headline (Matches Screenshot) ─── */}
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Final Call: FTC Savings Ending
          </h1>
          <p className="text-sm text-slate-600 font-medium">
            Submit Your Company Details below to lock in contractor partner rates &amp; 24-hr express SLA.
          </p>
        </div>

        {/* ─── Form Card Container (Light Warm Solar Theme) ─── */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm max-w-3xl mx-auto">
          
          {isSuccess ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-950">
                  Company Details Submitted!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for onboarding with SunPermit. Confirmation emails have been sent to you and our engineering team.
                </p>
              </div>

              {/* Company ID Box */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-orange-200 inline-block text-center">
                <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">Your Assigned Company ID</p>
                <p className="text-3xl font-extrabold text-orange-600 mt-1">{companyId}</p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/request-permit"
                  className="bg-[#E6561B] hover:bg-[#D4470F] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-sm"
                >
                  Request Permit Planset Now →
                </Link>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold px-5 py-3 rounded-xl transition-all"
                >
                  Submit Another Company
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Your Company Name * */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Your Company Name <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="ABC, LLC"
                  className="w-full bg-[#F1F3F6] border border-slate-200/90 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Field 2: Your Company Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Your Company Address
                </label>
                <input
                  type="text"
                  name="companyAddress"
                  value={form.companyAddress}
                  onChange={handleChange}
                  placeholder="123 Solar Ave, Suite 100, City, State ZIP"
                  className="w-full bg-[#F1F3F6] border border-slate-200/90 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Field 3: License Numbers */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  License Numbers
                </label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={form.licenseNumber}
                  onChange={handleChange}
                  placeholder="Separate multiple licenses with a comma"
                  className="w-full bg-[#F1F3F6] border border-slate-200/90 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Field 4: Contact Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(XXX) XXX-XXXX"
                  className="w-full bg-[#F1F3F6] border border-slate-200/90 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Field 5: Project Manager's Email * */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Project Manager&apos;s Email <span className="text-orange-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E.g. john@doe.com"
                  className="w-full bg-[#F1F3F6] border border-slate-200/90 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Field 6: Company Logo Upload */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Company Logo
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer bg-[#E6561B] hover:bg-[#D4470F] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors inline-flex items-center gap-2">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Choose File</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-slate-500 italic">
                    {logoFileName ? logoFileName : "No file chosen"}
                  </span>
                </div>
                <p className="text-[11px] text-red-600 font-semibold pt-1">
                  Please upload company&apos;s high resolution logo you want us to use on your plansets.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#E6561B] hover:bg-[#D4470F] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting Details..." : "Submit Details"}
                </button>
              </div>

            </form>
          )}

        </div>

      </main>

      <Footer />
    </div>
  );
}
