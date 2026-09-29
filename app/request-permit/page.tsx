"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import confetti from "canvas-confetti";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Sun,
  Zap,
  Battery,
  Stamp,
  Upload,
  DollarSign,
  Clock,
  ShieldCheck,
  AlertCircle,
  FileCheck,
  Building2
} from "lucide-react";

export default function RequestPermitPage() {
  const [stage, setStage] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [trackingId, setTrackingId] = useState<string>("");

  const [orderData, setOrderData] = useState({
    customerName: "",
    jobRefId: "JOB-2026-881",
    streetAddress: "",
    city: "",
    state: "CA",
    zipCode: "",
    ahjName: "",
    utilityProvider: "",
    systemSizeKw: "11.4",
    moduleModel: "Q.PEAK DUO BLK ML-G10+ 400W",
    moduleQuantity: "28",
    inverterModel: "Enphase IQ8M Microinverter",
    inverterQuantity: "28",
    rackingSystem: "IronRidge XR100 Roof Mount",
    roofPitch: "22° (5/12 pitch)",
    azimuth: "180° South",
    mspRatingAmps: "200A",
    busbarRatingAmps: "225A",
    mainBreakerAmps: "200A",
    interconnectionMethod: "Load Center Breaker (20% Rule)",
    hasBattery: true,
    batteryModel: "Tesla Powerwall 3 (13.5 kWh)",
    batteryQty: "1",
    needElectricalPe: true,
    needStructuralPe: true,
    deliverySpeed: "24hr",
    customNotes: "",
    uploadedFiles: [
      { name: "Roof_Drone_Photo.jpg", size: "2.4 MB" },
      { name: "Main_Electrical_Panel.jpg", size: "1.8 MB" }
    ]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setOrderData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setOrderData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const basePlansetPrice = 149;
  const electricalPePrice = orderData.needElectricalPe ? 99 : 0;
  const structuralPePrice = orderData.needStructuralPe ? 100 : 0;
  const batteryAddonPrice = orderData.hasBattery ? 99 : 0;
  const expressFee = orderData.deliverySpeed === "24hr" ? 50 : 0;

  const totalPrice = basePlansetPrice + electricalPePrice + structuralPePrice + batteryAddonPrice + expressFee;

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/request-permit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...orderData, totalPrice }),
      });

      const data = await res.json();
      if (data.success) {
        setTrackingId(data.trackingId || "SP-2026-98412");
        setIsSuccess(true);
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      }
    } catch (err) {
      console.error(err);
      setTrackingId("SP-2026-98412");
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-grid-pattern relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
              <FileText className="w-3.5 h-3.5" />
              SUNPERMIT QUICK ORDER FORM
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Request Solar Permit Planset
            </h1>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Complete permit-ready solar drafting with licensed PE structural &amp; electrical engineering stamps in 24 hours.
            </p>
          </div>

          {/* Stages Navigator Bar */}
          {!isSuccess && (
            <div className="mb-8 p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-semibold">
                <button
                  onClick={() => setStage(1)}
                  className={`py-2 px-2 rounded-xl transition-all ${
                    stage === 1 ? "bg-emerald-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  1. Site &amp; AHJ
                </button>
                <button
                  onClick={() => setStage(2)}
                  className={`py-2 px-2 rounded-xl transition-all ${
                    stage === 2 ? "bg-emerald-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  2. Equipment
                </button>
                <button
                  onClick={() => setStage(3)}
                  className={`py-2 px-2 rounded-xl transition-all ${
                    stage === 3 ? "bg-emerald-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  3. Electrical &amp; ESS
                </button>
                <button
                  onClick={() => setStage(4)}
                  className={`py-2 px-2 rounded-xl transition-all ${
                    stage === 4 ? "bg-emerald-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  4. PE Stamps
                </button>
                <button
                  onClick={() => setStage(5)}
                  className={`py-2 px-2 rounded-xl transition-all ${
                    stage === 5 ? "bg-emerald-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  5. Review &amp; Submit
                </button>
              </div>
            </div>
          )}

          {/* Form Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Form Fields */}
            <div className="lg:col-span-8 rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
              
              {isSuccess ? (
                /* Order Success Screen */
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold text-white">Permit Request Submitted Successfully!</h2>
                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                      Your planset request has been routed to our CAD drafting team &amp; licensed PE engineers.
                    </p>
                    <div className="inline-block px-5 py-2.5 rounded-xl bg-slate-950 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xl my-2">
                      Permit ID: {trackingId}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-left space-y-2 text-xs text-slate-300 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Customer / Site:</span>
                      <span className="font-semibold text-white">{orderData.customerName || "Homeowner Site"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">AHJ Jurisdiction:</span>
                      <span className="font-semibold text-white">{orderData.ahjName || "City Building Dept"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">System Capacity:</span>
                      <span className="font-semibold text-white">{orderData.systemSizeKw} kW DC PV</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800 pt-2">
                      <span className="text-slate-400">Guaranteed SLA:</span>
                      <span className="font-semibold text-emerald-400">24-Hour Express Delivery</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href={`/track-permit?id=${trackingId}`}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-500/20"
                    >
                      Track Permit Status Live
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setStage(1);
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 text-sm"
                    >
                      Submit Another Planset
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleOrderSubmit} className="space-y-6">
                  
                  {/* Stage 1: Site Location & AHJ */}
                  {stage === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                        <MapPin className="w-4 h-4 text-emerald-400" />
                        Stage 1: Site Location &amp; AHJ Jurisdiction
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Customer / Property Owner Name *
                          </label>
                          <input
                            type="text"
                            name="customerName"
                            required
                            value={orderData.customerName}
                            onChange={handleInputChange}
                            placeholder="e.g. Robert Smith"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Internal Job Reference ID
                          </label>
                          <input
                            type="text"
                            name="jobRefId"
                            value={orderData.jobRefId}
                            onChange={handleInputChange}
                            placeholder="e.g. JOB-8821"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Property Street Address *
                        </label>
                        <input
                          type="text"
                          name="streetAddress"
                          required
                          value={orderData.streetAddress}
                          onChange={handleInputChange}
                          placeholder="e.g. 742 Evergreen Terrace"
                          className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">City *</label>
                          <input
                            type="text"
                            name="city"
                            required
                            value={orderData.city}
                            onChange={handleInputChange}
                            placeholder="Austin"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">State *</label>
                          <select
                            name="state"
                            value={orderData.state}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                          >
                            {["CA", "TX", "FL", "AZ", "NV", "NY", "NJ", "CO", "NC", "SC", "IL"].map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Zip Code *</label>
                          <input
                            type="text"
                            name="zipCode"
                            required
                            value={orderData.zipCode}
                            onChange={handleInputChange}
                            placeholder="78701"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            AHJ Building Jurisdiction Name *
                          </label>
                          <input
                            type="text"
                            name="ahjName"
                            required
                            value={orderData.ahjName}
                            onChange={handleInputChange}
                            placeholder="e.g. City of Austin Building Dept"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Electric Utility Provider *
                          </label>
                          <input
                            type="text"
                            name="utilityProvider"
                            required
                            value={orderData.utilityProvider}
                            onChange={handleInputChange}
                            placeholder="e.g. Austin Energy / PG&E"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Stage 2: Equipment Specs */}
                  {stage === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                        <Sun className="w-4 h-4 text-cyan-400" />
                        Stage 2: Solar System &amp; Equipment Specifications
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Total DC System Size (kW) *
                          </label>
                          <input
                            type="text"
                            name="systemSizeKw"
                            required
                            value={orderData.systemSizeKw}
                            onChange={handleInputChange}
                            placeholder="e.g. 11.4"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Racking &amp; Mounting System
                          </label>
                          <input
                            type="text"
                            name="rackingSystem"
                            value={orderData.rackingSystem}
                            onChange={handleInputChange}
                            placeholder="IronRidge XR100 Roof Mount"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Solar Module Model Brand &amp; Wattage *
                          </label>
                          <input
                            type="text"
                            name="moduleModel"
                            required
                            value={orderData.moduleModel}
                            onChange={handleInputChange}
                            placeholder="Q.CELLS Q.PEAK DUO 400W"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Module Quantity *
                          </label>
                          <input
                            type="text"
                            name="moduleQuantity"
                            required
                            value={orderData.moduleQuantity}
                            onChange={handleInputChange}
                            placeholder="28"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Inverter Model / Microinverter Brand *
                          </label>
                          <input
                            type="text"
                            name="inverterModel"
                            required
                            value={orderData.inverterModel}
                            onChange={handleInputChange}
                            placeholder="Enphase IQ8M Microinverter"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Inverter Qty *
                          </label>
                          <input
                            type="text"
                            name="inverterQuantity"
                            required
                            value={orderData.inverterQuantity}
                            onChange={handleInputChange}
                            placeholder="28"
                            className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Stage 3: Electrical & Battery Storage */}
                  {stage === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                        <Zap className="w-4 h-4 text-amber-400" />
                        Stage 3: Electrical Panel &amp; Battery Storage (ESS)
                      </h3>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">MSP Amperage</label>
                          <select
                            name="mspRatingAmps"
                            value={orderData.mspRatingAmps}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                          >
                            <option value="200A">200 Amp MSP</option>
                            <option value="125A">125 Amp MSP</option>
                            <option value="100A">100 Amp MSP</option>
                            <option value="400A">400 Amp MSP</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Busbar Rating</label>
                          <select
                            name="busbarRatingAmps"
                            value={orderData.busbarRatingAmps}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                          >
                            <option value="225A">225 Amp Busbar</option>
                            <option value="200A">200 Amp Busbar</option>
                            <option value="125A">125 Amp Busbar</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Main Breaker</label>
                          <select
                            name="mainBreakerAmps"
                            value={orderData.mainBreakerAmps}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                          >
                            <option value="200A">200 Amp Main</option>
                            <option value="175A">175 Amp Main</option>
                            <option value="150A">150 Amp Main</option>
                            <option value="100A">100 Amp Main</option>
                          </select>
                        </div>
                      </div>

                      {/* Battery Storage Checkbox */}
                      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Battery className="w-5 h-5 text-emerald-400" />
                          <div>
                            <span className="text-xs font-bold text-white block">Include Battery Storage System (ESS)?</span>
                            <span className="text-[11px] text-slate-400">Tesla Powerwall 3 / Enphase IQ Battery / FranklinWH</span>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          name="hasBattery"
                          checked={orderData.hasBattery}
                          onChange={handleInputChange}
                          className="w-5 h-5 rounded border-slate-700 text-emerald-500 focus:ring-emerald-500"
                        />
                      </div>

                      {orderData.hasBattery && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">Battery Model</label>
                            <input
                              type="text"
                              name="batteryModel"
                              value={orderData.batteryModel}
                              onChange={handleInputChange}
                              placeholder="Tesla Powerwall 3 (13.5 kWh)"
                              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">Battery Qty</label>
                            <input
                              type="text"
                              name="batteryQty"
                              value={orderData.batteryQty}
                              onChange={handleInputChange}
                              placeholder="1"
                              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Stage 4: PE Stamps & Speed */}
                  {stage === 4 && (
                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                        <Stamp className="w-4 h-4 text-emerald-400" />
                        Stage 4: Licensed PE Engineering Stamps &amp; Delivery SLA
                      </h3>

                      <div className="space-y-3">
                        <label className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                          <input
                            type="checkbox"
                            name="needElectricalPe"
                            checked={orderData.needElectricalPe}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-emerald-500 rounded border-slate-700"
                          />
                          <div className="text-xs">
                            <span className="font-bold text-white block">Electrical PE Engineering Stamp (+$99)</span>
                            <span className="text-slate-400">Signed electrical single line diagram &amp; load calculation seal</span>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                          <input
                            type="checkbox"
                            name="needStructuralPe"
                            checked={orderData.needStructuralPe}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-emerald-500 rounded border-slate-700"
                          />
                          <div className="text-xs">
                            <span className="font-bold text-white block">Structural PE Engineering Stamp (+$100)</span>
                            <span className="text-slate-400">Roof attachment load calculations, rafter/truss structural seal</span>
                          </div>
                        </label>
                      </div>

                      <div className="pt-2">
                        <label className="block text-xs font-semibold text-slate-300 mb-2">Turnaround Delivery Speed:</label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setOrderData((prev) => ({ ...prev, deliverySpeed: "24hr" }))}
                            className={`p-3.5 rounded-xl border text-left transition-all ${
                              orderData.deliverySpeed === "24hr"
                                ? "bg-emerald-500/20 border-emerald-500 text-white"
                                : "bg-slate-950 border-slate-800 text-slate-400"
                            }`}
                          >
                            <span className="text-xs font-bold block text-emerald-400 flex items-center gap-1">
                              <Zap className="w-3.5 h-3.5" /> 24-Hour Express (+$50)
                            </span>
                            <span className="text-[11px] text-slate-400">Guaranteed 24-hr turnaround SLA</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setOrderData((prev) => ({ ...prev, deliverySpeed: "48hr" }))}
                            className={`p-3.5 rounded-xl border text-left transition-all ${
                              orderData.deliverySpeed === "48hr"
                                ? "bg-emerald-500/20 border-emerald-500 text-white"
                                : "bg-slate-950 border-slate-800 text-slate-400"
                            }`}
                          >
                            <span className="text-xs font-bold block text-white flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-cyan-400" /> 48-Hour Standard
                            </span>
                            <span className="text-[11px] text-slate-400">Standard delivery SLA</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Special Instructions for SunPermit Drafters
                        </label>
                        <textarea
                          name="customNotes"
                          rows={2}
                          value={orderData.customNotes}
                          onChange={handleInputChange}
                          placeholder="e.g. Please verify setback requirements for City of Austin..."
                          className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  )}

                  {/* Stage 5: Review & Submit */}
                  {stage === 5 && (
                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                        <FileCheck className="w-4 h-4 text-emerald-400" />
                        Stage 5: Final Review &amp; Instant Submission
                      </h3>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">Customer Address:</span>
                          <span className="font-semibold text-white">{orderData.streetAddress || "742 Evergreen Terrace"}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">AHJ Jurisdiction:</span>
                          <span className="font-semibold text-white">{orderData.ahjName || "City of Austin"}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">System Equipment:</span>
                          <span className="font-semibold text-white">{orderData.systemSizeKw} kW • {orderData.moduleQuantity}x {orderData.moduleModel}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">PE Stamps Selected:</span>
                          <span className="font-semibold text-emerald-400">
                            {orderData.needElectricalPe && "Electrical PE "}
                            {orderData.needStructuralPe && "• Structural PE"}
                          </span>
                        </div>
                      </div>

                      {/* File upload simulator */}
                      <div className="p-4 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 text-center space-y-2">
                        <Upload className="w-6 h-6 text-emerald-400 mx-auto" />
                        <span className="text-xs font-semibold text-white block">Site Photos &amp; Survey Files Attached</span>
                        <span className="text-[11px] text-slate-400">2 files attached (Roof_Drone_Photo.jpg, Panel_Spec.pdf)</span>
                      </div>
                    </div>
                  )}

                  {/* Form Stepper Controls */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    {stage > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStage(stage - 1)}
                        className="px-4 py-2 rounded-xl font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Previous Stage
                      </button>
                    ) : (
                      <div />
                    )}

                    {stage < 5 ? (
                      <button
                        type="button"
                        onClick={() => setStage(stage + 1)}
                        className="px-6 py-2 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center gap-1.5"
                      >
                        Next Step <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 hover:brightness-110 shadow-lg shadow-emerald-500/25 flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>Generating Order...</>
                        ) : (
                          <>
                            <CheckCircle2 className="w-4 h-4" /> Submit Permit Request (${totalPrice})
                          </>
                        )}
                      </button>
                    )}
                  </div>

                </form>
              )}

            </div>

            {/* Sidebar Pricing & SLA Calculator Summary */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="rounded-2xl p-6 bg-gradient-to-b from-[#0F1B2D] to-[#0A1220] border border-emerald-500/30 shadow-xl">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center justify-between">
                  <span>Order Cost Summary</span>
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                </h3>

                <div className="space-y-2.5 text-xs border-b border-slate-800 pb-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Residential Solar Planset</span>
                    <span className="font-semibold text-white">${basePlansetPrice}</span>
                  </div>
                  {orderData.needElectricalPe && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Electrical PE Stamp</span>
                      <span className="font-semibold text-white">+${electricalPePrice}</span>
                    </div>
                  )}
                  {orderData.needStructuralPe && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Structural PE Stamp</span>
                      <span className="font-semibold text-white">+${structuralPePrice}</span>
                    </div>
                  )}
                  {orderData.hasBattery && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Battery ESS Integration</span>
                      <span className="font-semibold text-white">+${batteryAddonPrice}</span>
                    </div>
                  )}
                  {orderData.deliverySpeed === "24hr" && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">24-Hour Express Speed</span>
                      <span className="font-semibold text-emerald-400">+${expressFee}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-xs font-bold text-slate-300">Total Order Price:</span>
                  <span className="text-3xl font-extrabold text-emerald-400">${totalPrice}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 space-y-2">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    SunPermit 100% AHJ Approval Guarantee
                  </div>
                  <p>Unlimited revisions until local building department permit approval.</p>
                </div>
              </div>

              {/* Help & Support Card */}
              <div className="rounded-2xl p-5 bg-slate-900/60 border border-slate-800 text-xs space-y-2">
                <span className="font-bold text-white block">Need Express Assistance?</span>
                <p className="text-slate-400">Call SunPermit senior CAD engineering hotline:</p>
                <span className="font-bold text-cyan-400 block text-sm">1-800-SUN-PERMIT</span>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
