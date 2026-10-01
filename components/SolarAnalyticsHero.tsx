"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SunPermitLogo from "@/components/SunPermitLogo";

import {
  Search,
  MapPin,
  Compass,
  Home,
  Sun,
  Layers,
  Sliders,
  LogOut,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

export default function SolarAnalyticsHero() {
  const [activeRange, setActiveRange] = useState<
    "daily" | "weekly" | "monthly" | "yearly"
  >("monthly");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FBF8F5] text-slate-900">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main sunset gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #FBF8F5 0%, #FBF3EA 18%, #FBE2CC 38%, #F8B078 58%, #E85D24 76%, #A83212 91%, #76270F 100%)",
          }}
        />

        {/* Large orange glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 35% 70%, rgba(255,159,82,0.65) 0%, rgba(241,105,35,0.45) 35%, rgba(190,57,15,0.3) 60%, transparent 82%)",
          }}
        />

        {/* Bottom dark orange */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[38%]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(142,43,14,0.18) 25%, rgba(104,34,13,0.55) 70%, rgba(78,27,12,0.85) 100%)",
          }}
        />

        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="relative z-50 px-4 pt-2 sm:px-5 md:px-6">
        <nav
          className="
            mx-auto flex h-[42px] max-w-[820px]
            items-center justify-between
            rounded-[11px]
            border border-white/70
            bg-white/90
            px-3.5
            shadow-[0_4px_18px_rgba(0,0,0,0.06)]
            backdrop-blur-md
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
          >
            <SunPermitLogo height={23} />
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-6 text-[9px] font-medium text-slate-700 md:flex">
            <Link
              href="#products"
              className="transition-colors hover:text-orange-600"
            >
              Products
            </Link>

            <Link
              href="#solutions"
              className="transition-colors hover:text-orange-600"
            >
              Solutions
            </Link>

            <Link
              href="#how-it-works"
              className="transition-colors hover:text-orange-600"
            >
              How it works
            </Link>

            <Link
              href="#pricing"
              className="transition-colors hover:text-orange-600"
            >
              Pricing
            </Link>

            <Link
              href="#blog"
              className="transition-colors hover:text-orange-600"
            >
              Blog
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-[9px] font-medium text-slate-800"
            >
              Login
            </Link>

            <Link
              href="/quick"
              className="
                rounded-[8px]
                bg-slate-950
                px-3
                py-1.5
                text-[9px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                hover:bg-slate-800
              "
            >
              Get started
            </Link>
          </div>
        </nav>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <main className="relative z-10 mx-auto w-full max-w-[1440px]">
        <section
          className="
            relative
            min-h-[535px]
            overflow-visible
            sm:min-h-[560px]
          "
        >
          {/* =====================================================
              LEFT TEXT
          ===================================================== */}
          <div
            className="
              absolute
              left-[34px]
              top-[155px]
              z-30
              w-[370px]
              sm:left-[40px]
              sm:w-[390px]
            "
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                max-w-[360px]
                text-[40px]
                font-extrabold
                leading-[1.02]
                tracking-[-1.8px]
                text-slate-950
                sm:text-[43px]
              "
            >
              Understand
              <br />
              Your Solar Data
              <br />
              in Seconds
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                mt-3.5
                max-w-[345px]
                text-[12px]
                leading-[1.42]
                text-slate-700
                sm:text-[13px]
              "
            >
              Track sunlight, optimize your energy output, and make smarter
              solar decisions — all in one sleek, user-friendly dashboard.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 flex items-center gap-4"
            >
              <Link
                href="/quick"
                className="
                  rounded-[8px]
                  bg-slate-950
                  px-4
                  py-2.5
                  text-[11px]
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-slate-950/15
                  transition-all
                  hover:bg-slate-800
                "
              >
                Get started
              </Link>

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1.5
                  text-[10px]
                  font-semibold
                  text-slate-900
                "
              >
                Watch Demo
                <span
                  className="
                    flex
                    h-3.5
                    w-3.5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-800
                    text-[7px]
                  "
                >
                  ▶
                </span>
              </button>
            </motion.div>
          </div>

          {/* =====================================================
              DASHBOARD
              IMPORTANT ALIGNMENT VALUES:
              left-[440px]
              top-[55px]
              w-[650px]
          ===================================================== */}
          <div
            className="
              absolute
              left-[440px]
              top-[55px]
              z-20
              w-[650px]
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative w-[650px]"
            >
              {/* =================================================
                  TABLET FRAME
              ================================================= */}
              <div
                className="
                  relative
                  rounded-[25px]
                  border
                  border-slate-700/60
                  bg-gradient-to-b
                  from-slate-800
                  via-slate-900
                  to-black
                  p-3
                  shadow-[0_30px_90px_rgba(0,0,0,0.35)]
                  ring-1
                  ring-white/10
                "
              >
                {/* Camera */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1.5
                    z-20
                    flex
                    h-2
                    w-14
                    -translate-x-1/2
                    items-center
                    justify-center
                    gap-1.5
                    rounded-full
                    bg-slate-950
                  "
                >
                  <div className="h-1 w-1 rounded-full bg-slate-700" />
                  <div className="h-1 w-1 rounded-full bg-slate-900" />
                </div>

                {/* =================================================
                    TABLET SCREEN
                ================================================= */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[19px]
                    bg-[#0A0E1A]
                    shadow-inner
                  "
                >
                  {/* Top bar */}
                  <div
                    className="
                      flex
                      h-[31px]
                      items-center
                      justify-between
                      border-b
                      border-white/[0.06]
                      bg-[#0D1322]
                      px-3
                      text-[8px]
                    "
                  >
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-slate-300">
                        Dashboard
                      </span>

                      <span className="text-slate-600">&gt;</span>

                      <span className="text-slate-500">...</span>

                      <span className="text-slate-600">&gt;</span>

                      <span className="font-semibold text-orange-400">
                        Solar analysis
                      </span>
                    </div>

                    <div className="relative">
                      <Search className="absolute left-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 text-slate-500" />

                      <input
                        type="text"
                        readOnly
                        placeholder="Search"
                        className="
                          h-[18px]
                          w-[105px]
                          rounded-[5px]
                          border
                          border-white/[0.08]
                          bg-[#080B14]
                          pl-5
                          pr-2
                          text-[7px]
                          text-slate-300
                          outline-none
                          placeholder:text-slate-600
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      DASHBOARD BODY
                  ================================================= */}
                  <div className="flex">
                    {/* =================================================
                        LEFT ICON RAIL
                    ================================================= */}
                    <aside
                      className="
                        flex
                        w-[37px]
                        shrink-0
                        flex-col
                        items-center
                        justify-between
                        border-r
                        border-white/[0.06]
                        bg-[#090D18]
                        py-3
                      "
                    >
                      <div className="flex flex-col items-center">
                        {/* App logo */}
                        <div
                          className="
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            bg-gradient-to-tr
                            from-orange-500
                            to-amber-400
                            p-[1px]
                          "
                        >
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0A0E1A]">
                            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400" />
                          </div>
                        </div>

                        {/* Icons */}
                        <div className="mt-3 flex flex-col items-center gap-1.5">
                          <div className="rounded-md p-1 text-slate-400">
                            <Home className="h-3 w-3" />
                          </div>

                          <div className="rounded-md p-1 text-slate-400">
                            <Sun className="h-3 w-3" />
                          </div>

                          <div className="rounded-md border border-orange-500/30 bg-orange-500/15 p-1 text-orange-400">
                            <Sliders className="h-3 w-3" />
                          </div>

                          <div className="rounded-md p-1 text-slate-400">
                            <Layers className="h-3 w-3" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom icons */}
                      <div className="flex flex-col items-center gap-2">
                        <HelpCircle className="h-3 w-3 text-slate-500" />
                        <LogOut className="h-3 w-3 text-slate-500" />
                      </div>
                    </aside>

                    {/* =================================================
                        ANALYTICS COLUMN
                    ================================================= */}
                    <div className="w-[235px] shrink-0 space-y-2.5 p-2.5">
                      {/* Overview */}
                      <div className="rounded-[10px] border border-white/[0.06] bg-[#101626] p-2.5">
                        <h4 className="mb-2 text-[9px] font-bold tracking-wide text-white">
                          Overview
                        </h4>

                        <div className="space-y-1.5 text-[7px]">
                          <div className="flex items-start gap-1.5">
                            <MapPin className="mt-0.5 h-2.5 w-2.5 shrink-0 text-slate-400" />

                            <div>
                              <p className="text-[6px] uppercase tracking-wider text-slate-500">
                                Address
                              </p>

                              <p className="font-medium text-slate-200">
                                123 Solar Street, Sunnytown
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-1.5">
                            <Compass className="mt-0.5 h-2.5 w-2.5 shrink-0 text-slate-400" />

                            <div>
                              <p className="text-[6px] uppercase tracking-wider text-slate-500">
                                GPS Coordinates
                              </p>

                              <p className="font-medium text-slate-200">
                                40.7128° N, 74.0060° W
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 border-t border-white/[0.04] pt-1">
                            <div>
                              <p className="text-[6px] uppercase tracking-wider text-slate-500">
                                Time Zone
                              </p>

                              <p className="font-medium text-slate-200">
                                EDT (UTC -4)
                              </p>
                            </div>

                            <div>
                              <p className="text-[6px] uppercase tracking-wider text-slate-500">
                                Roof Surface Area
                              </p>

                              <p className="font-medium text-slate-200">
                                250 m²
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Solar Energy Potential */}
                      <div className="rounded-[10px] border border-white/[0.06] bg-[#101626] p-2.5">
                        <div className="mb-2 flex items-center justify-between">
                          <h4 className="text-[9px] font-bold tracking-wide text-white">
                            Solar Energy Potential
                          </h4>

                          <div className="flex rounded-md border border-white/[0.06] bg-[#090D18] p-0.5 text-[6px]">
                            {(
                              ["daily", "weekly", "monthly", "yearly"] as const
                            ).map((range) => (
                              <button
                                key={range}
                                type="button"
                                onClick={() => setActiveRange(range)}
                                className={`
                                  rounded px-1 py-0.5 capitalize transition-all
                                  ${
                                    activeRange === range
                                      ? "bg-slate-700 font-bold text-white"
                                      : "text-slate-400"
                                  }
                                `}
                              >
                                {range}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Histogram */}
                        <div className="py-1">
                          <div className="flex h-7 items-end justify-between gap-1 px-1">
                            {[
                              20, 25, 40, 55, 75, 95, 80, 60, 45, 30, 20, 15,
                              35, 50, 70, 90, 100, 85, 65, 45,
                            ].map((height, index) => (
                              <div
                                key={index}
                                style={{
                                  height: `${height}%`,
                                }}
                                className={`
                                  w-[3px] rounded-t-sm
                                  ${
                                    index === 16
                                      ? "bg-gradient-to-t from-orange-500 to-amber-300 shadow-sm shadow-orange-500/50"
                                      : index >= 14 && index <= 18
                                      ? "bg-slate-400"
                                      : "bg-slate-700/60"
                                  }
                                `}
                              />
                            ))}
                          </div>

                          <div className="mt-1 flex justify-between border-t border-white/[0.04] px-1 pt-0.5 text-[6px] text-slate-400">
                            <span>April - 158 kWh</span>
                            <span className="font-semibold text-orange-400">
                              May - 186 kWh
                            </span>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="mt-2 grid grid-cols-2 gap-1.5 border-t border-white/[0.04] pt-2">
                          {[
                            ["Irradiance Intensity", "5.1 kWh/m²"],
                            ["Shading Impact", "5% loss"],
                            ["Panel Efficiency", "20.1%"],
                            ["Energy Output", "2.5 MWh/month"],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="rounded-md border border-white/[0.04] bg-[#090D18] p-1.5"
                            >
                              <p className="text-[6px] text-slate-500">
                                {label}
                              </p>

                              <p className="mt-0.5 text-[8px] font-bold text-slate-100">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Efficiency */}
                      <div className="rounded-[10px] border border-white/[0.06] bg-[#101626] p-2.5">
                        <div className="mb-1 flex items-center justify-between">
                          <h4 className="text-[9px] font-bold tracking-wide text-white">
                            Solar Generation Efficiency
                          </h4>

                          <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[6px] font-bold text-emerald-400">
                            Live
                          </span>
                        </div>

                        <div className="relative h-[48px] w-full">
                          <svg
                            className="h-full w-full overflow-visible"
                            viewBox="0 0 200 60"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient
                                id="gradOrange"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#F97316"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#FBBF24"
                                />
                              </linearGradient>

                              <linearGradient
                                id="gradPurple"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#818CF8"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#C084FC"
                                />
                              </linearGradient>
                            </defs>

                            <line
                              x1="0"
                              y1="15"
                              x2="200"
                              y2="15"
                              stroke="#ffffff"
                              strokeOpacity="0.04"
                            />

                            <line
                              x1="0"
                              y1="35"
                              x2="200"
                              y2="35"
                              stroke="#ffffff"
                              strokeOpacity="0.04"
                            />

                            <path
                              d="M0,45 Q30,42 60,36 T120,24 T160,30 T200,20"
                              fill="none"
                              stroke="url(#gradPurple)"
                              strokeWidth="2"
                            />

                            <path
                              d="M0,38 Q40,30 80,18 T140,12 T180,22 T200,10"
                              fill="none"
                              stroke="url(#gradOrange)"
                              strokeWidth="2.5"
                            />
                          </svg>

                          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-orange-500/40 bg-slate-950/90 px-2 py-0.5 text-[7px] font-extrabold text-orange-400">
                            84%
                          </div>
                        </div>

                        <div className="space-y-0.5 border-t border-white/[0.04] pt-1 text-[5.5px] text-slate-400">
                          <div className="flex items-center gap-1">
                            <span className="h-1 w-1 rounded-full bg-orange-500" />
                            Expected Solar Generation
                          </div>

                          <div className="flex items-center gap-1">
                            <span className="h-1 w-1 rounded-full bg-indigo-400" />
                            Actual Energy Output
                          </div>

                          <div className="flex items-center gap-1">
                            <span className="h-1 w-1 rounded-full bg-slate-500" />
                            Energy Loss
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        3D VISUAL
                    ================================================= */}
                    <div className="relative flex min-h-[375px] flex-1 items-center justify-center overflow-hidden bg-[#070A12]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,105,35,0.15),transparent_55%)]" />

                      <img
                        src="/images/hero-3d-cube.jpg"
                        alt="Solar Analytics 3D Model"
                        className="
                          relative
                          z-10
                          w-[235px]
                          max-w-none
                          rounded-[15px]
                          object-contain
                          drop-shadow-[0_20px_40px_rgba(235,94,36,0.45)]
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            LOGO / TRUST ROW
        ========================================================= */}
        <section
          className="
            relative
            z-30
            mt-[5px]
            px-4
            sm:px-8
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-[820px]
              items-center
              justify-between
              gap-5
              overflow-hidden
              opacity-70
            "
          >
            {/* Uber */}
            <div className="text-[21px] font-bold tracking-[-1.5px] text-slate-900/70">
              Uber
            </div>

            {/* Amazon */}
            <div className="text-[19px] font-bold tracking-[-1px] text-slate-900/70">
              amazon
            </div>

            {/* Netflix */}
            <div className="text-[19px] font-bold tracking-[-1px] text-slate-900/70">
              NETFLIX
            </div>

            {/* Airbnb */}
            <div className="text-[19px] font-semibold text-slate-900/70">
              ◇ airbnb
            </div>

            {/* Apple */}
            <div className="text-[19px] font-semibold text-slate-900/70">
               Apple
            </div>

            {/* Best Buy */}
            <div className="text-[16px] font-black leading-[0.8] text-slate-900/70">
              BEST.
              <br />
              BUY.
            </div>

            {/* Spotify */}
            <div className="text-[18px] font-semibold text-slate-900/70">
              ◉ Spotify
            </div>

            {/* Target */}
            <div className="text-[18px] font-semibold text-slate-900/70">
              ◉ TARGET
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
