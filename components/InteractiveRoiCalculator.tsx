"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Building2,
  FileCheck
} from "lucide-react";

export default function InteractiveRoiCalculator() {
  const [quoteStep, setQuoteStep] = useState(1);
  const [propertyType, setPropertyType] = useState("Residential or Commercial");
  const [includeDroneSurvey, setIncludeDroneSurvey] = useState("Yes or No");
  const [systemType, setSystemType] = useState("With Battery or Without Battery");
  const [systemSizeKw, setSystemSizeKw] = useState(12);
  const [needPeStamps, setNeedPeStamps] = useState(true);
  const [validationError, setValidationError] = useState("");

  // Price calculations
  const isResidential = propertyType.includes("Residential") || propertyType === "Residential";
  const basePrice = isResidential ? 149 : 399;
  const dronePrice = includeDroneSurvey === "Yes" ? 120 : 0;
  const batteryPrice = systemType.includes("With Battery") && !systemType.includes("Without") ? 99 : 0;
  const pePrice = needPeStamps ? 199 : 0;
  const totalPrice = basePrice + dronePrice + batteryPrice + pePrice;

  const handleNextStep = () => {
    if (quoteStep === 1) {
      if (
        propertyType === "Residential or Commercial" ||
        includeDroneSurvey === "Yes or No" ||
        systemType === "With Battery or Without Battery"
      ) {
        setValidationError("This field is required. Please select a value.");
        return;
      }
      setValidationError("");
      setQuoteStep(2);
    }
  };

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] text-slate-900 overflow-hidden border-t border-slate-200/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] bg-orange-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ─── 2-Column Section (Matches Screenshot Layout & Content in Modern Theme) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─── Left Column: NOT A SEPARATE TEAM, WE ARE PART OF YOU! ─── */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-950 uppercase leading-[1.15]">
                NOT A SEPARATE TEAM, WE ARE{" "}
                <span className="text-[#E6561B]">PART OF YOU!</span>
              </h2>
            </motion.div>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal"
            >
              The increasing demand for getting climate-friendly life and the heading toward renewable energy revolutionized the solar industry. Dealing with more clients means more revenue and yes more project management.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal"
            >
              To make sure the increasing number of jobs do not affect the quality of project management, it is an opportunity for all the solar companies to let us take responsibility for the project services such as <strong className="text-slate-950 font-bold">permit plan sets</strong>, <strong className="text-slate-950 font-bold">engineering review &amp; stamps</strong>, <strong className="text-slate-950 font-bold">proposal drawings</strong>, etc so that solar installers can provide quality service to their clients and focus on project management.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 pt-2 text-slate-600 text-sm font-semibold"
            >
              <a
                href="https://www.facebook.com/sunpermit"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-orange-500 hover:text-[#E6561B] flex items-center justify-center transition-colors shadow-xs"
                title="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com/sunpermit"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-orange-500 hover:text-[#E6561B] flex items-center justify-center transition-colors shadow-xs"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="https://twitter.com/sunpermit"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-orange-500 hover:text-[#E6561B] flex items-center justify-center transition-colors shadow-xs"
                title="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://www.linkedin.com/company/sunpermit"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-orange-500 hover:text-[#E6561B] flex items-center justify-center transition-colors shadow-xs"
                title="LinkedIn"
              >
                in
              </a>
            </motion.div>

          </div>

          {/* ─── Right Column: Get a Quote Wizard Form (Matches Screenshot Layout & Style) ─── */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm relative space-y-6"
            >
              {/* Chevron Top Indicator + Title */}
              <div className="text-center space-y-1">
                <ChevronUp className="w-5 h-5 text-[#E6561B] mx-auto animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Get a Quote
                </h3>
              </div>

              {/* Progress Line Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold text-slate-500">
                  <span>Progress</span>
                  <span className="text-[#E6561B]">{quoteStep === 1 ? "0%" : "100%"}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#E6561B] to-amber-500 transition-all duration-300"
                    style={{ width: quoteStep === 1 ? "0%" : "100%" }}
                  />
                </div>
              </div>

              {/* Step 1 Fields (Exact from Screenshot) */}
              {quoteStep === 1 && (
                <div className="space-y-5 pt-2">
                  
                  {/* Field 1: Property Type * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Property Type <span className="text-[#E6561B]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full bg-[#FAF7F2] border-b-2 border-slate-300 focus:border-[#E6561B] py-3 px-4 text-sm font-semibold text-slate-900 focus:outline-none appearance-none rounded-t-lg transition-colors cursor-pointer"
                      >
                        <option value="Residential or Commercial">Residential or Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Field 2: Include Drone Pilot Survey * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Include Drone Pilot Survey <span className="text-[#E6561B]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={includeDroneSurvey}
                        onChange={(e) => setIncludeDroneSurvey(e.target.value)}
                        className="w-full bg-[#FAF7F2] border-b-2 border-slate-300 focus:border-[#E6561B] py-3 px-4 text-sm font-semibold text-slate-900 focus:outline-none appearance-none rounded-t-lg transition-colors cursor-pointer"
                      >
                        <option value="Yes or No">Yes or No</option>
                        <option value="Yes">Yes (+$120)</option>
                        <option value="No">No</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Field 3: System Type * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      System Type <span className="text-[#E6561B]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={systemType}
                        onChange={(e) => setSystemType(e.target.value)}
                        className="w-full bg-[#FAF7F2] border-b-2 border-slate-300 focus:border-[#E6561B] py-3 px-4 text-sm font-semibold text-slate-900 focus:outline-none appearance-none rounded-t-lg transition-colors cursor-pointer"
                      >
                        <option value="With Battery or Without Battery">With Battery or Without Battery</option>
                        <option value="With Battery">With Battery (+$99)</option>
                        <option value="Without Battery">Without Battery</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Validation Error Notice */}
                  {validationError && (
                    <p className="text-xs font-semibold text-red-600 pt-1">
                      {validationError}
                    </p>
                  )}

                </div>
              )}

              {/* Step 2 Fields */}
              {quoteStep === 2 && (
                <div className="space-y-5 pt-2">
                  
                  {/* System Capacity */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-800">
                        Estimated System Size (kW DC)
                      </label>
                      <span className="text-base font-extrabold text-[#E6561B]">
                        {systemSizeKw} kW
                      </span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="50"
                      value={systemSizeKw}
                      onChange={(e) => setSystemSizeKw(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E6561B]"
                    />
                  </div>

                  {/* PE Stamps Toggle */}
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">Include 50-State PE Stamps?</p>
                      <p className="text-[11px] text-slate-500">Structural &amp; Electrical PE Review (+$199)</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={needPeStamps}
                      onChange={(e) => setNeedPeStamps(e.target.checked)}
                      className="w-5 h-5 accent-[#E6561B] rounded cursor-pointer"
                    />
                  </div>

                  {/* Estimated Price Banner */}
                  <div className="p-4 rounded-xl bg-slate-950 text-white flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Calculated Total</span>
                      <span className="text-2xl font-extrabold text-[#E6561B]">${totalPrice}</span>
                    </div>
                    <span className="text-xs text-slate-300 font-medium">24-Hr Express SLA Included</span>
                  </div>

                </div>
              )}

              {/* Buttons Row (Matches Screenshot: Coral/Orange Previous & Next Buttons) */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
                {quoteStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setQuoteStep(1)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#E6561B] hover:bg-[#D4470F] text-white transition-colors shadow-xs"
                  >
                    Previous
                  </button>
                )}

                {quoteStep === 1 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-8 py-2.5 rounded-xl text-xs font-bold bg-[#E6561B] hover:bg-[#D4470F] text-white transition-colors shadow-xs"
                  >
                    Next
                  </button>
                ) : (
                  <Link
                    href={`/request-permit?property=${propertyType}&drone=${includeDroneSurvey}&battery=${systemType}&size=${systemSizeKw}&pe=${needPeStamps}`}
                    className="px-8 py-2.5 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-white transition-colors shadow-md flex items-center gap-2"
                  >
                    Order Planset (${totalPrice})
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                  </Link>
                )}
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
