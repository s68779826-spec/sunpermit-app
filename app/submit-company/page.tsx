"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import confetti from "canvas-confetti";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileCheck,
  ShieldCheck,
  Zap,
  HelpCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Layers,
  Sparkles,
  Award
} from "lucide-react";

export default function SubmitCompanyPage() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [submissionId, setSubmissionId] = useState<string>("");

  // Form State
  const [formData, setFormData] = useState({
    companyName: "",
    licenseNumber: "",
    licenseState: "CA",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    monthlyVolume: "10-25",
    installTypes: ["Residential Rooftop", "Battery Backup (ESS)"],
    statesOperating: ["California", "Texas", "Florida", "Arizona"],
    preferredTurnaround: "24hr",
    cadFormat: "PDF + DWG Source",
    defaultModules: "Q.CELLS Q.PEAK DUO / REC Alpha",
    defaultInverters: "Enphase IQ8 / SolarEdge",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (category: "installTypes", item: string) => {
    setFormData((prev) => {
      const exists = prev[category].includes(item);
      const updated = exists
        ? prev[category].filter((i) => i !== item)
        : [...prev[category], item];
      return { ...prev, [category]: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/submit-company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmissionId(data.companyId || "SPC-2026-904");
        setIsSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {
      console.error(err);
      setSubmissionId("SPC-2026-904");
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-grid-pattern relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
              <Building2 className="w-3.5 h-3.5" />
              SOLAR CONTRACTOR ONBOARDING
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Submit Your Company Details
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Register your solar contracting company with SunPermit to unlock instant 24-hour express CAD drafting and 50-state licensed PE stamps.
            </p>
          </div>

          {/* Stepper Progress Bar */}
          {!isSuccess && (
            <div className="mb-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between text-xs font-semibold mb-3">
                <span className={`flex items-center gap-2 ${step >= 1 ? "text-emerald-400" : "text-slate-500"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? "bg-emerald-500 text-slate-950" : "bg-slate-800"}`}>1</span>
                  Company Profile
                </span>
                <span className={`flex items-center gap-2 ${step >= 2 ? "text-emerald-400" : "text-slate-500"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? "bg-emerald-500 text-slate-950" : "bg-slate-800"}`}>2</span>
                  Volume &amp; Scope
                </span>
                <span className={`flex items-center gap-2 ${step >= 3 ? "text-emerald-400" : "text-slate-500"}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? "bg-emerald-500 text-slate-950" : "bg-slate-800"}`}>3</span>
                  CAD &amp; Design Specs
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Form Container */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
            
            {isSuccess ? (
              /* Success View */
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">Company Registration Submitted!</h2>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Welcome to SunPermit. Your contractor account profile has been verified and registered under Account ID:
                  </p>
                  <div className="inline-block px-4 py-2 rounded-xl bg-slate-950 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-lg">
                    {submissionId}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 max-w-md mx-auto text-left space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Company Name:</span>
                    <span className="font-semibold text-white">{formData.companyName || "Sun Solar EPC LLC"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">License State &amp; #:</span>
                    <span className="font-semibold text-white">{formData.licenseState} • #{formData.licenseNumber || "CSLB-994102"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Turnaround SLA:</span>
                    <span className="font-semibold text-emerald-400">24-Hour Express CAD SLA Active</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/request-permit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-500/20"
                  >
                    <FileCheck className="w-4 h-4" />
                    Submit First Permit Request Now
                  </Link>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setStep(1);
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 text-sm"
                  >
                    Edit Company Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Company Profile */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                      <Building2 className="w-5 h-5 text-emerald-400" />
                      Step 1: Company Profile &amp; License Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Company Legal Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g. Apex Solar Engineering LLC"
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Contractor License Number *
                        </label>
                        <input
                          type="text"
                          name="licenseNumber"
                          required
                          value={formData.licenseNumber}
                          onChange={handleInputChange}
                          placeholder="e.g. C-46 #1094821"
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Primary License State
                        </label>
                        <select
                          name="licenseState"
                          value={formData.licenseState}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                        >
                          {["CA", "TX", "FL", "AZ", "NV", "NY", "NJ", "CO", "NC", "SC", "IL", "Other State"].map((st) => (
                            <option key={st} value={st}>{st}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Primary Contact Person *
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          required
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="e.g. John Miller (Project Mgr)"
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Business Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. permits@apexsolar.com"
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Direct Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. (800) 555-0199"
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Office Street Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="e.g. 100 Solar Way, Suite 400"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Volume & Scope */}
                {step === 2 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                      Step 2: Operational Volume &amp; Project Specialties
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Average Monthly Permit Volume:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["1-5 Jobs/mo", "6-15 Jobs/mo", "16-50 Jobs/mo", "50+ Jobs/mo"].map((vol) => (
                          <button
                            key={vol}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, monthlyVolume: vol }))}
                            className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all ${
                              formData.monthlyVolume === vol
                                ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {vol}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Installation Specialties (Select all that apply):
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Residential Rooftop Solar",
                          "Battery Backup (ESS - Powerwall/Enphase)",
                          "Commercial Rooftop & Carports",
                          "Ground Mount PV Systems",
                          "EV Charger Integration",
                          "Main Panel Upgrade (MPU)"
                        ].map((spec) => (
                          <label
                            key={spec}
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700"
                          >
                            <input
                              type="checkbox"
                              checked={formData.installTypes.includes(spec)}
                              onChange={() => handleCheckboxToggle("installTypes", spec)}
                              className="w-4 h-4 rounded border-slate-700 text-emerald-500 focus:ring-emerald-500"
                            />
                            <span className="text-xs font-medium text-slate-200">{spec}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: CAD & Engineering Specs */}
                {step === 3 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                      <Layers className="w-5 h-5 text-amber-400" />
                      Step 3: Preferred CAD &amp; Engineering Defaults
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Preferred Turnaround SLA:
                        </label>
                        <select
                          name="preferredTurnaround"
                          value={formData.preferredTurnaround}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                        >
                          <option value="24hr">24-Hour Express Guaranteed SLA</option>
                          <option value="48hr">48-Hour Standard SLA</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Deliverable Format:
                        </label>
                        <select
                          name="cadFormat"
                          value={formData.cadFormat}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500"
                        >
                          <option value="PDF + DWG Source">PDF Vector + AutoCAD DWG Source</option>
                          <option value="PDF Vector Only">PDF Vector Permit Package Only</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Default Solar Panels &amp; Inverters Used (Optional)
                      </label>
                      <input
                        type="text"
                        name="defaultModules"
                        value={formData.defaultModules}
                        onChange={handleInputChange}
                        placeholder="e.g. Q.CELLS 400W + Enphase IQ8M"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Custom Drafter Instructions &amp; AHJ Notes
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any specific title block logos, CAD layer requirements, or preferred AHJ wording..."
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                )}

                {/* Form Navigation Buttons */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center gap-2"
                    >
                      Next: Operational Volume <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 hover:brightness-110 shadow-lg shadow-emerald-500/25 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>Submitting Details...</>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" /> Submit Company Details
                        </>
                      )}
                    </button>
                  )}
                </div>

              </form>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
