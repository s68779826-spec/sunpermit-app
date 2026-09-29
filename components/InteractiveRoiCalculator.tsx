"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, DollarSign, Clock, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";

export default function InteractiveRoiCalculator() {
  const [jobsPerMonth, setJobsPerMonth] = useState<number>(20);
  const [includePeStamps, setIncludePeStamps] = useState<boolean>(true);

  // In-house average CAD drafting cost per permit (~$350/permit overhead + wages + software)
  const inHouseCostPerPlan = 380;
  // SunPermit base plan cost ($149) + optional PE stamp ($199)
  const sunpermitCostPerPlan = includePeStamps ? 149 + 199 : 149;

  const monthlySavings = (inHouseCostPerPlan - sunpermitCostPerPlan) * jobsPerMonth;
  const annualSavings = monthlySavings * 12;
  const daysSavedPerMonth = jobsPerMonth * 4; // Savings ~4 days per plan

  return (
    <section id="roi-calculator" className="py-20 bg-[#0A0F1D] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
              <Calculator className="w-3.5 h-3.5" />
              CONTRACTOR SAVINGS CALCULATOR
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              See How Much Your Solar Company Saves
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed">
              Outsourcing your solar drafting and engineering to SunPermit eliminates CAD software licenses, in-house draftsman overhead, and costly AHJ revision delays.
            </p>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Cut Drafting Expenses by 60%+</span>
                  <span className="text-slate-400">Fixed rate $149/plan vs $380+ in-house cost</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block">Accelerate PTO &amp; Permit Delivery</span>
                  <span className="text-slate-400">Turnaround in 24 hours instead of 7 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right interactive slider card */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
              <span>Calculate Your Monthly ROI</span>
              <span className="text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Interactive Tool
              </span>
            </h3>

            {/* Slider 1: Jobs per month */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs">
                <label className="font-semibold text-slate-300">Monthly Solar Permit Submissions:</label>
                <span className="text-lg font-extrabold text-emerald-400">{jobsPerMonth} Projects/mo</span>
              </div>
              <input
                type="range"
                min="3"
                max="150"
                value={jobsPerMonth}
                onChange={(e) => setJobsPerMonth(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>3 Projects</span>
                <span>50 Projects</span>
                <span>150 Projects</span>
              </div>
            </div>

            {/* Toggle: Include PE Stamps */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-white block">Include 50-State PE Stamps?</span>
                <span className="text-[11px] text-slate-400">Add structural &amp; electrical engineer stamp addon ($199)</span>
              </div>
              <button
                type="button"
                onClick={() => setIncludePeStamps(!includePeStamps)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  includePeStamps ? "bg-emerald-500" : "bg-slate-700"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-slate-950 transition-transform ${
                    includePeStamps ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* ROI Results Display Grid */}
            <div className="grid grid-cols-2 gap-4 p-5 rounded-xl bg-gradient-to-br from-[#0D1829] to-[#0A111F] border border-emerald-500/30 mb-6">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Estimated Monthly Savings
                </span>
                <span className="text-3xl font-extrabold text-emerald-400">
                  ${monthlySavings.toLocaleString()}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Estimated Annual Savings
                </span>
                <span className="text-3xl font-extrabold text-cyan-400">
                  ${annualSavings.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero setup fees • Pay per planset • Instant scale</span>
              </div>

              <Link
                href="/submit-company"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2"
              >
                Submit Company &amp; Start Saving
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
