"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
} from "lucide-react";

import SunPermitLogo from "@/components/SunPermitLogo";

export default function SolarAnalyticsHero() {
  const [activeRange, setActiveRange] = useState<
    "daily" | "weekly" | "monthly" | "yearly"
  >("monthly");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FBF8F5] text-slate-950">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main cream → orange gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #FBF9F6 0%, #FAF1E9 22%, #F9D4B8 48%, #F99B59 70%, #F47732 84%, #D94D1C 100%)",
          }}
        />

        {/* Main warm glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 58% at 31% 73%, rgba(255,177,106,0.75) 0%, rgba(247,131,64,0.55) 32%, rgba(233,89,29,0.28) 58%, transparent 80%)",
          }}
        />

        {/* Lower orange glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[42%]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(241,104,35,0.18) 20%, rgba(191,58,19,0.38) 65%, rgba(132,39,14,0.68) 100%)",
          }}
        />

        {/* Very subtle dotted texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:radial-gradient(#111827_0.7px,transparent_0.7px)]
            [background-size:14px_14px]
          "
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <main className="relative z-10 w-full overflow-hidden">
        <div
          className="
            relative
            mx-auto
            min-h-[820px]
            w-full
            max-w-[1460px]
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <section
            className="
              absolute
              left-0
              top-[135px]
              z-30
              w-[540px]
            "
          >
            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              className="
                text-[64px]
                font-extrabold
                leading-[1.14]
                tracking-[-2.8px]
                text-slate-950
              "
            >
              Order solar
              <br />
              design &
              <br />
              engineering
              <br />
              services
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="
                mt-6
                max-w-[520px]
                text-[20px]
                font-normal
                leading-[1.58]
                text-slate-700
              "
            >
              Our goal is to provide reliable service by assisting solar
              industry in every aspect and take part in making the solar
              network stronger. Get assistance and grow seamlessly.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="mt-8"
            >
              <Link
                href="/quick"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-[13px]
                  bg-slate-950
                  px-8
                  py-4
                  text-[16px]
                  font-semibold
                  text-white
                  shadow-[0_12px_25px_rgba(0,0,0,0.16)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-slate-800
                "
              >
                Get started
              </Link>
            </motion.div>

            {/* Trust row */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-10
                flex
                items-center
                gap-7
                whitespace-nowrap
              "
            >
              <div className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-teal-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                </span>
                24-Hr SLA Guarantee
              </div>

              <div className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-teal-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                </span>
                50-State PE Licensed
              </div>

              <div className="flex items-center gap-2 text-[13px] font-medium text-slate-700">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-teal-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                </span>
                99.8% AHJ Pass Rate
              </div>
            </motion.div>
          </section>

          {/* =====================================================
              DASHBOARD

              IMPORTANT:
              left-[640px]
              top-0
              width 880px

              At a 1760px viewport:
              (1760 - 1460) / 2 = 150px
              150 + 640 = 790px
          ===================================================== */}

          <section
            className="
              absolute
              left-[640px]
              top-0
              z-20
              w-[880px]
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: "easeOut",
              }}
              className="relative w-[880px]"
            >
              {/* =================================================
                  TABLET OUTER FRAME
              ================================================= */}

              <div
                className="
                  relative
                  rounded-[34px]
                  border
                  border-slate-700/70
                  bg-gradient-to-b
                  from-[#1B273B]
                  via-[#111A2B]
                  to-[#05070D]
                  p-[19px]
                  shadow-[0_35px_100px_rgba(0,0,0,0.35)]
                  ring-1
                  ring-white/10
                "
              >
                {/* Camera / sensor */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-[10px]
                    z-50
                    flex
                    h-[10px]
                    w-[76px]
                    -translate-x-1/2
                    items-center
                    justify-center
                    gap-[8px]
                    rounded-full
                    bg-[#09101D]
                  "
                >
                  <span className="h-[6px] w-[6px] rounded-full bg-[#17243A]" />
                  <span className="h-[6px] w-[6px] rounded-full bg-[#0D1728]" />
                  <span className="h-[6px] w-[6px] rounded-full bg-[#17243A]" />
                </div>

                {/* =================================================
                    SCREEN
                ================================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[25px]
                    bg-[#080C16]
                    shadow-inner
                  "
                >
                  {/* =================================================
                      TOP BAR
                  ================================================= */}

                  <div
                    className="
                      flex
                      h-[49px]
                      items-center
                      justify-between
                      border-b
                      border-white/[0.06]
                      bg-[#0B1120]
                      px-[20px]
                    "
                  >
                    {/* Breadcrumb */}

                    <div className="flex items-center gap-[10px] text-[11px]">
                      <span className="font-medium text-slate-300">
                        Dashboard
                      </span>

                      <span className="text-slate-600">&gt;</span>

                      <span className="text-slate-600">...</span>

                      <span className="text-slate-600">&gt;</span>

                      <span className="font-semibold text-orange-400">
                        Solar analysis
                      </span>
                    </div>

                    {/* Search */}

                    <div className="relative">
                      <Search
                        className="
                          absolute
                          left-[10px]
                          top-1/2
                          h-[14px]
                          w-[14px]
                          -translate-y-1/2
                          text-slate-500
                        "
                      />

                      <input
                        readOnly
                        placeholder="Search"
                        className="
                          h-[28px]
                          w-[135px]
                          rounded-[7px]
                          border
                          border-white/[0.08]
                          bg-[#070B14]
                          pl-[30px]
                          pr-[10px]
                          text-[10px]
                          text-slate-300
                          outline-none
                          placeholder:text-slate-600
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      BODY
                  ================================================= */}

                  <div className="flex">
                    {/* =================================================
                        SIDEBAR
                    ================================================= */}

                    <aside
                      className="
                        flex
                        w-[56px]
                        shrink-0
                        flex-col
                        items-center
                        justify-between
                        border-r
                        border-white/[0.06]
                        bg-[#090E1A]
                        py-[18px]
                      "
                    >
                      {/* Top */}

                      <div className="flex flex-col items-center">
                        {/* Logo */}

                        <div
                          className="
                            flex
                            h-[28px]
                            w-[28px]
                            items-center
                            justify-center
                            rounded-full
                            bg-gradient-to-tr
                            from-orange-500
                            to-amber-300
                            p-[2px]
                          "
                        >
                          <div
                            className="
                              flex
                              h-full
                              w-full
                              items-center
                              justify-center
                              rounded-full
                              bg-[#090E1A]
                            "
                          >
                            <div className="h-[12px] w-[12px] rounded-full bg-gradient-to-tr from-orange-500 to-amber-300" />
                          </div>
                        </div>

                        {/* Icons */}

                        <div className="mt-[22px] flex flex-col items-center gap-[15px]">
                          <div className="rounded-[9px] p-[7px] text-slate-400">
                            <Home className="h-[17px] w-[17px]" />
                          </div>

                          <div className="rounded-[9px] p-[7px] text-slate-400">
                            <Sun className="h-[17px] w-[17px]" />
                          </div>

                          <div
                            className="
                              rounded-[9px]
                              border
                              border-orange-500/30
                              bg-orange-500/15
                              p-[7px]
                              text-orange-400
                              shadow-[0_0_20px_rgba(249,115,22,0.08)]
                            "
                          >
                            <Sliders className="h-[17px] w-[17px]" />
                          </div>

                          <div className="rounded-[9px] p-[7px] text-slate-400">
                            <Layers className="h-[17px] w-[17px]" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom */}

                      <div className="flex flex-col items-center gap-[16px]">
                        <HelpCircle className="h-[17px] w-[17px] text-slate-500" />

                        <LogOut className="h-[17px] w-[17px] text-slate-500" />
                      </div>
                    </aside>

                    {/* =================================================
                        ANALYTICS
                    ================================================= */}

                    <div className="w-[392px] shrink-0 space-y-[16px] bg-[#0B101D] p-[16px]">
                      {/* =================================================
                          OVERVIEW
                      ================================================= */}

                      <div
                        className="
                          rounded-[14px]
                          border
                          border-white/[0.06]
                          bg-[#101727]
                          p-[16px]
                        "
                      >
                        <h3 className="mb-[14px] text-[14px] font-bold text-white">
                          Overview
                        </h3>

                        <div className="space-y-[12px]">
                          {/* Address */}

                          <div className="flex items-start gap-[10px]">
                            <MapPin className="mt-[2px] h-[16px] w-[16px] shrink-0 text-slate-400" />

                            <div>
                              <p className="text-[9px] uppercase tracking-[1px] text-slate-500">
                                Address
                              </p>

                              <p className="mt-[2px] text-[11px] font-semibold text-slate-200">
                                123 Solar Street, Sunnytown
                              </p>
                            </div>
                          </div>

                          {/* Coordinates */}

                          <div className="flex items-start gap-[10px]">
                            <Compass className="mt-[2px] h-[16px] w-[16px] shrink-0 text-slate-400" />

                            <div>
                              <p className="text-[9px] uppercase tracking-[1px] text-slate-500">
                                GPS Coordinates
                              </p>

                              <p className="mt-[2px] text-[11px] font-semibold text-slate-200">
                                40.7128° N, 74.0060° W
                              </p>
                            </div>
                          </div>

                          {/* Bottom stats */}

                          <div className="grid grid-cols-2 gap-[18px] border-t border-white/[0.05] pt-[11px]">
                            <div>
                              <p className="text-[9px] uppercase tracking-[1px] text-slate-500">
                                Time Zone
                              </p>

                              <p className="mt-[3px] text-[11px] font-semibold text-slate-200">
                                EDT (UTC -4)
                              </p>
                            </div>

                            <div>
                              <p className="text-[9px] uppercase tracking-[1px] text-slate-500">
                                Roof Surface Area
                              </p>

                              <p className="mt-[3px] text-[11px] font-semibold text-slate-200">
                                250 m²
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* =================================================
                          SOLAR ENERGY POTENTIAL
                      ================================================= */}

                      <div
                        className="
                          rounded-[14px]
                          border
                          border-white/[0.06]
                          bg-[#101727]
                          p-[16px]
                        "
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-[14px] font-bold text-white">
                            Solar Energy Potential
                          </h3>

                          <div
                            className="
                              flex
                              rounded-[7px]
                              border
                              border-white/[0.06]
                              bg-[#090E18]
                              p-[3px]
                            "
                          >
                            {(
                              ["daily", "weekly", "monthly", "yearly"] as const
                            ).map((range) => (
                              <button
                                key={range}
                                type="button"
                                onClick={() => setActiveRange(range)}
                                className={`
                                  rounded-[5px]
                                  px-[8px]
                                  py-[4px]
                                  text-[9px]
                                  capitalize
                                  transition-all
                                  ${
                                    activeRange === range
                                      ? "bg-slate-700 font-semibold text-white"
                                      : "text-slate-400 hover:text-slate-200"
                                  }
                                `}
                              >
                                {range}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Histogram */}

                        <div className="mt-[16px]">
                          <div className="flex h-[62px] items-end justify-between gap-[5px] px-[5px]">
                            {[
                              20, 27, 39, 55, 73, 92, 78, 62, 48, 34, 23, 17,
                              29, 42, 62, 80, 100, 86, 66, 46,
                            ].map((height, index) => (
                              <div
                                key={index}
                                style={{
                                  height: `${height}%`,
                                }}
                                className={`
                                  w-[5px]
                                  rounded-t-[3px]
                                  ${
                                    index === 16
                                      ? "bg-gradient-to-t from-orange-500 to-amber-300"
                                      : index >= 14 && index <= 18
                                      ? "bg-slate-400"
                                      : "bg-slate-700/70"
                                  }
                                `}
                              />
                            ))}
                          </div>

                          <div className="mt-[8px] flex justify-between border-t border-white/[0.04] pt-[7px] text-[9px]">
                            <span className="text-slate-400">
                              April - 158 kWh
                            </span>

                            <span className="font-semibold text-orange-400">
                              May - 186 kWh
                            </span>
                          </div>
                        </div>

                        {/* Metrics */}

                        <div className="mt-[13px] grid grid-cols-2 gap-[9px] border-t border-white/[0.04] pt-[13px]">
                          {[
                            ["Irradiance Intensity", "5.1 kWh/m²"],
                            ["Shading Impact", "5% loss"],
                            ["Panel Efficiency", "20.1%"],
                            ["Energy Output", "2.5 MWh/month"],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="
                                rounded-[8px]
                                border
                                border-white/[0.04]
                                bg-[#090E18]
                                p-[10px]
                              "
                            >
                              <p className="text-[8px] text-slate-500">
                                {label}
                              </p>

                              <p className="mt-[4px] text-[12px] font-bold text-slate-100">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* =================================================
                          EFFICIENCY
                      ================================================= */}

                      <div
                        className="
                          rounded-[14px]
                          border
                          border-white/[0.06]
                          bg-[#101727]
                          p-[16px]
                        "
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-[14px] font-bold text-white">
                            Solar Generation Efficiency
                          </h3>

                          <span
                            className="
                              rounded-[6px]
                              border
                              border-emerald-500/20
                              bg-emerald-500/10
                              px-[8px]
                              py-[4px]
                              text-[8px]
                              font-bold
                              text-emerald-400
                            "
                          >
                            Live
                          </span>
                        </div>

                        <div className="relative mt-[10px] h-[80px] w-full">
                          <svg
                            className="h-full w-full overflow-visible"
                            viewBox="0 0 350 80"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient
                                id="orangeLine"
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
                                id="purpleLine"
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

                            {/* Grid */}

                            <line
                              x1="0"
                              y1="20"
                              x2="350"
                              y2="20"
                              stroke="#ffffff"
                              strokeOpacity="0.04"
                            />

                            <line
                              x1="0"
                              y1="45"
                              x2="350"
                              y2="45"
                              stroke="#ffffff"
                              strokeOpacity="0.04"
                            />

                            <line
                              x1="0"
                              y1="70"
                              x2="350"
                              y2="70"
                              stroke="#ffffff"
                              strokeOpacity="0.04"
                            />

                            {/* Purple line */}

                            <path
                              d="
                                M0,61
                                C45,58 65,54 100,49
                                C135,44 160,37 190,36
                                C225,35 240,42 260,51
                                C280,60 296,55 315,43
                                C330,34 342,39 350,27
                              "
                              fill="none"
                              stroke="url(#purpleLine)"
                              strokeWidth="3"
                            />

                            {/* Orange line */}

                            <path
                              d="
                                M0,53
                                C45,47 72,40 110,32
                                C145,25 168,18 200,18
                                C230,18 250,22 275,27
                                C300,32 320,33 335,30
                                C343,28 348,23 350,13
                              "
                              fill="none"
                              stroke="url(#orangeLine)"
                              strokeWidth="3.5"
                            />
                          </svg>

                          {/* 84% badge */}

                          <div
                            className="
                              absolute
                              left-[50%]
                              top-[4px]
                              -translate-x-1/2
                              rounded-full
                              border
                              border-orange-500/40
                              bg-[#080C16]
                              px-[10px]
                              py-[4px]
                              text-[9px]
                              font-extrabold
                              text-orange-400
                            "
                          >
                            84%
                          </div>
                        </div>

                        {/* Legend */}

                        <div className="space-y-[4px] border-t border-white/[0.04] pt-[8px] text-[8px] text-slate-400">
                          <div className="flex items-center gap-[7px]">
                            <span className="h-[6px] w-[6px] rounded-full bg-orange-500" />
                            Expected Solar Generation (MWh)
                          </div>

                          <div className="flex items-center gap-[7px]">
                            <span className="h-[6px] w-[6px] rounded-full bg-indigo-400" />
                            Actual Energy Output (MWh)
                          </div>

                          <div className="flex items-center gap-[7px]">
                            <span className="h-[6px] w-[6px] rounded-full bg-slate-500" />
                            Energy Loss (%)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        3D AREA
                    ================================================= */}

                    <div
                      className="
                        relative
                        min-h-[630px]
                        flex-1
                        overflow-hidden
                        bg-[#060910]
                      "
                    >
                      {/* Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-[radial-gradient(circle_at_center,rgba(239,99,36,0.17),transparent_60%)]
                        "
                      />

                      {/* 3D card */}

                      <div
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          flex
                          h-[325px]
                          w-[325px]
                          -translate-x-1/2
                          -translate-y-1/2
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-[22px]
                          bg-[#080B10]
                          shadow-[0_25px_55px_rgba(234,93,31,0.22)]
                        "
                      >
                        <div
                          className="
                            absolute
                            inset-0
                            opacity-30
                            [background-image:radial-gradient(#475569_0.7px,transparent_0.7px)]
                            [background-size:13px_13px]
                          "
                        />

                        {/* Solar graphic */}

                        <div
                          className="
                            relative
                            z-10
                            h-[185px]
                            w-[185px]
                            rotate-[-7deg]
                          "
                        >
                          {/* Main polygon */}

                          <div
                            className="
                              absolute
                              left-[15px]
                              top-[38px]
                              h-[105px]
                              w-[125px]
                              rotate-[17deg]
                              skew-x-[-8deg]
                              bg-gradient-to-br
                              from-fuchsia-500
                              via-orange-400
                              to-amber-300
                              shadow-[0_15px_40px_rgba(245,100,32,0.35)]
                            "
                            style={{
                              clipPath:
                                "polygon(12% 30%, 68% 0%, 100% 35%, 80% 100%, 35% 83%, 0% 60%)",
                            }}
                          />

                          {/* Inner cutout */}

                          <div
                            className="
                              absolute
                              left-[72px]
                              top-[78px]
                              z-20
                              h-[37px]
                              w-[42px]
                              rotate-[17deg]
                              bg-[#080B10]
                            "
                            style={{
                              clipPath:
                                "polygon(20% 0%, 100% 12%, 78% 100%, 0% 76%)",
                            }}
                          />

                          {/* Top section */}

                          <div
                            className="
                              absolute
                              left-[89px]
                              top-[27px]
                              h-[75px]
                              w-[54px]
                              rotate-[17deg]
                              bg-gradient-to-br
                              from-fuchsia-500
                              to-orange-300
                            "
                            style={{
                              clipPath:
                                "polygon(15% 0%, 100% 22%, 75% 100%, 0% 73%)",
                            }}
                          />

                          {/* Small top-right section */}

                          <div
                            className="
                              absolute
                              left-[127px]
                              top-[35px]
                              h-[57px]
                              w-[44px]
                              rotate-[17deg]
                              bg-gradient-to-br
                              from-orange-400
                              to-amber-300
                            "
                            style={{
                              clipPath:
                                "polygon(25% 0%, 100% 28%, 78% 100%, 0% 65%)",
                            }}
                          />

                          {/* Bottom section */}

                          <div
                            className="
                              absolute
                              left-[83px]
                              top-[104px]
                              h-[65px]
                              w-[74px]
                              rotate-[17deg]
                              bg-gradient-to-br
                              from-orange-400
                              via-orange-500
                              to-fuchsia-500
                            "
                            style={{
                              clipPath:
                                "polygon(22% 0%, 100% 30%, 72% 100%, 0% 65%)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>

        {/* =========================================================
            BOTTOM TRUST / LOGOS
        ========================================================= */}

        <section className="relative z-30 -mt-[15px] px-6 pb-10">
          <div className="mx-auto flex max-w-[1460px] items-center justify-between gap-8">
            {/* Uber */}

            <div className="text-[27px] font-bold tracking-[-1.8px] text-slate-900/65">
              Uber
            </div>

            {/* Amazon */}

            <div className="text-[24px] font-bold tracking-[-1px] text-slate-900/65">
              amazon
            </div>

            {/* Netflix */}

            <div className="text-[25px] font-bold tracking-[-1px] text-slate-900/65">
              NETFLIX
            </div>

            {/* Airbnb */}

            <div className="text-[25px] font-semibold text-slate-900/65">
              ◇ airbnb
            </div>

            {/* Apple */}

            <div className="text-[25px] font-semibold text-slate-900/65">
               Apple
            </div>

            {/* Best Buy */}

            <div className="text-[21px] font-black leading-[0.82] text-slate-900/65">
              BEST.
              <br />
              BUY.
            </div>

            {/* Spotify */}

            <div className="text-[23px] font-semibold text-slate-900/65">
              ◉ Spotify
            </div>

            {/* Target */}

            <div className="text-[22px] font-semibold text-slate-900/65">
              ◉ TARGET
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          RESPONSIVE MOBILE VERSION
      ========================================================= */}

      <style jsx>{`
        @media (max-width: 1100px) {
          .hero-desktop-only {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
