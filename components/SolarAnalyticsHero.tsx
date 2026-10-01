"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Sun,
  Sliders,
  Layers,
  HelpCircle,
  LogOut,
  Search,
  MapPin,
  Compass,
} from "lucide-react";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#faf7f3]">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-[#faf7f3]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #faf8f5 0%, #faeee5 28%, #f8b27e 57%, #f47832 78%, #d94b1b 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 31% 68%, rgba(255,191,137,.62) 0%, rgba(247,133,66,.35) 42%, transparent 78%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#111827 .7px, transparent .7px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* =====================================================
          FIXED DESIGN CANVAS

          IMPORTANT:
          This is what fixes the alignment.

          Reference design = 1760px wide.
      ===================================================== */}

      <div className="absolute left-1/2 top-0 h-[883px] w-[1760px] -translate-x-1/2">

        {/* ===================================================
            LEFT TEXT
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute left-[150px] top-[145px] z-30 w-[560px]"
        >
          <h1
            className="
              text-[64px]
              font-extrabold
              leading-[1.15]
              tracking-[-2.7px]
              text-[#080d20]
            "
          >
            Order solar
            <br />
            design &
            <br />
            engineering
            <br />
            services
          </h1>

          <p
            className="
              mt-[25px]
              w-[525px]
              text-[20px]
              leading-[1.58]
              text-[#243750]
            "
          >
            Our goal is to provide reliable service by assisting solar
            industry in every aspect and take part in making the solar
            network stronger. Get assistance and grow seamlessly.
          </p>

          <Link
            href="/quick"
            className="
              mt-[34px]
              inline-flex
              h-[61px]
              items-center
              justify-center
              rounded-[14px]
              bg-[#050b1d]
              px-[32px]
              text-[16px]
              font-semibold
              text-white
              shadow-[0_12px_30px_rgba(0,0,0,.15)]
              transition-transform
              hover:-translate-y-1
            "
          >
            Get started
          </Link>

          {/* Trust indicators */}

          <div className="mt-[46px] flex items-center gap-[30px] whitespace-nowrap">

            <div className="flex items-center gap-[9px] text-[13px] font-medium text-[#31516b]">
              <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full border-2 border-teal-500">
                <span className="h-[5px] w-[5px] rounded-full bg-teal-500" />
              </span>
              24-Hr SLA Guarantee
            </div>

            <div className="flex items-center gap-[9px] text-[13px] font-medium text-[#31516b]">
              <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full border-2 border-teal-500">
                <span className="h-[5px] w-[5px] rounded-full bg-teal-500" />
              </span>
              50-State PE Licensed
            </div>

            <div className="flex items-center gap-[9px] text-[13px] font-medium text-[#31516b]">
              <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full border-2 border-teal-500">
                <span className="h-[5px] w-[5px] rounded-full bg-teal-500" />
              </span>
              99.8% AHJ Pass Rate
            </div>

          </div>
        </motion.div>

        {/* ===================================================
            DASHBOARD

            TARGET:
            x = 790
            y = 57
            width = 880
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            absolute
            left-[790px]
            top-[57px]
            z-20
            w-[880px]
          "
        >

          {/* OUTER DEVICE */}

          <div
            className="
              relative
              w-[880px]
              rounded-[36px]
              border
              border-slate-700/80
              bg-gradient-to-b
              from-[#1c293e]
              via-[#101a2b]
              to-[#03060d]
              p-[19px]
              shadow-[0_35px_100px_rgba(0,0,0,.35)]
            "
          >

            {/* CAMERA */}

            <div
              className="
                absolute
                left-1/2
                top-[11px]
                z-50
                h-[10px]
                w-[76px]
                -translate-x-1/2
                rounded-full
                bg-[#050b18]
              "
            />

            {/* SCREEN */}

            <div
              className="
                overflow-hidden
                rounded-[26px]
                bg-[#070b14]
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
                  border-white/[.06]
                  bg-[#0b1120]
                  px-[20px]
                "
              >

                <div className="flex items-center gap-[9px] text-[11px]">
                  <span className="font-semibold text-slate-300">
                    Dashboard
                  </span>

                  <span className="text-slate-600">
                    &gt;
                  </span>

                  <span className="text-slate-600">
                    ...
                  </span>

                  <span className="text-slate-600">
                    &gt;
                  </span>

                  <span className="font-semibold text-orange-400">
                    Solar analysis
                  </span>
                </div>

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

                  <div
                    className="
                      flex
                      h-[28px]
                      w-[135px]
                      items-center
                      rounded-[7px]
                      border
                      border-white/[.08]
                      bg-[#070b14]
                      pl-[30px]
                      text-[10px]
                      text-slate-600
                    "
                  >
                    Search
                  </div>
                </div>

              </div>

              {/* =================================================
                  SCREEN BODY
              ================================================= */}

              <div className="flex h-[686px]">

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
                    border-white/[.06]
                    bg-[#090e1a]
                    py-[18px]
                  "
                >

                  <div>

                    {/* logo */}

                    <div
                      className="
                        flex
                        h-[28px]
                        w-[28px]
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-orange-500
                        to-amber-300
                      "
                    >
                      <div className="h-[12px] w-[12px] rounded-full bg-[#090e1a]" />
                    </div>

                    <div className="mt-[22px] flex flex-col items-center gap-[14px]">

                      <div className="p-[7px] text-slate-400">
                        <Home className="h-[17px] w-[17px]" />
                      </div>

                      <div className="p-[7px] text-slate-400">
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
                        "
                      >
                        <Sliders className="h-[17px] w-[17px]" />
                      </div>

                      <div className="p-[7px] text-slate-400">
                        <Layers className="h-[17px] w-[17px]" />
                      </div>

                    </div>

                  </div>

                  <div className="flex flex-col gap-[17px] text-slate-500">
                    <HelpCircle className="h-[17px] w-[17px]" />
                    <LogOut className="h-[17px] w-[17px]" />
                  </div>

                </aside>

                {/* =================================================
                    LEFT ANALYTICS COLUMN
                ================================================= */}

                <div
                  className="
                    w-[392px]
                    shrink-0
                    space-y-[16px]
                    bg-[#0b101d]
                    p-[16px]
                  "
                >

                  {/* OVERVIEW */}

                  <div
                    className="
                      rounded-[14px]
                      border
                      border-white/[.06]
                      bg-[#101727]
                      p-[16px]
                    "
                  >

                    <h3 className="text-[14px] font-bold text-white">
                      Overview
                    </h3>

                    <div className="mt-[14px] space-y-[12px]">

                      <div className="flex gap-[9px]">
                        <MapPin className="mt-[1px] h-[16px] w-[16px] text-slate-400" />

                        <div>
                          <div className="text-[9px] uppercase tracking-[1px] text-slate-500">
                            Address
                          </div>

                          <div className="mt-[2px] text-[11px] font-semibold text-white">
                            123 Solar Street, Sunnytown
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-[9px]">
                        <Compass className="mt-[1px] h-[16px] w-[16px] text-slate-400" />

                        <div>
                          <div className="text-[9px] uppercase tracking-[1px] text-slate-500">
                            GPS Coordinates
                          </div>

                          <div className="mt-[2px] text-[11px] font-semibold text-white">
                            40.7128° N, 74.0060° W
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-[20px] border-t border-white/[.05] pt-[11px]">

                        <div>
                          <div className="text-[9px] uppercase tracking-[1px] text-slate-500">
                            Time Zone
                          </div>

                          <div className="mt-[3px] text-[11px] font-semibold text-white">
                            EDT (UTC -4)
                          </div>
                        </div>

                        <div>
                          <div className="text-[9px] uppercase tracking-[1px] text-slate-500">
                            Roof Surface Area
                          </div>

                          <div className="mt-[3px] text-[11px] font-semibold text-white">
                            250 m²
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* SOLAR ENERGY */}

                  <div
                    className="
                      rounded-[14px]
                      border
                      border-white/[.06]
                      bg-[#101727]
                      p-[16px]
                    "
                  >

                    <div className="flex items-center justify-between">

                      <h3 className="text-[14px] font-bold text-white">
                        Solar Energy Potential
                      </h3>

                      <div className="flex gap-[4px] text-[9px]">

                        <span className="px-[5px] text-slate-500">
                          Daily
                        </span>

                        <span className="px-[5px] text-slate-500">
                          Weekly
                        </span>

                        <span
                          className="
                            rounded-[5px]
                            bg-slate-700
                            px-[7px]
                            py-[3px]
                            font-semibold
                            text-white
                          "
                        >
                          Monthly
                        </span>

                        <span className="px-[5px] text-slate-500">
                          Yearly
                        </span>

                      </div>

                    </div>

                    {/* bars */}

                    <div className="mt-[15px] flex h-[60px] items-end justify-between gap-[5px]">

                      {[
                        15, 23, 32, 45, 61, 74, 62, 52, 42, 30,
                        22, 16, 23, 39, 58, 72, 93, 80, 62, 46,
                      ].map((height, i) => (
                        <div
                          key={i}
                          className={`w-[5px] rounded-t ${
                            i === 16
                              ? "bg-orange-400"
                              : i >= 14
                              ? "bg-slate-400"
                              : "bg-slate-700"
                          }`}
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      ))}

                    </div>

                    <div className="mt-[7px] flex justify-between border-t border-white/[.05] pt-[7px] text-[9px]">

                      <span className="text-slate-400">
                        April - 158 kWh
                      </span>

                      <span className="font-semibold text-orange-400">
                        May - 186 kWh
                      </span>

                    </div>

                    {/* stats */}

                    <div className="mt-[12px] grid grid-cols-2 gap-[9px]">

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
                            bg-[#090e18]
                            p-[10px]
                          "
                        >

                          <div className="text-[8px] text-slate-500">
                            {label}
                          </div>

                          <div className="mt-[4px] text-[12px] font-bold text-white">
                            {value}
                          </div>

                        </div>
                      ))}

                    </div>

                  </div>

                  {/* EFFICIENCY */}

                  <div
                    className="
                      rounded-[14px]
                      border
                      border-white/[.06]
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
                          bg-emerald-500/10
                          px-[7px]
                          py-[4px]
                          text-[8px]
                          font-bold
                          text-emerald-400
                        "
                      >
                        Live
                      </span>

                    </div>

                    <div className="relative mt-[12px] h-[80px]">

                      <svg
                        viewBox="0 0 350 80"
                        preserveAspectRatio="none"
                        className="h-full w-full"
                      >

                        <line
                          x1="0"
                          y1="20"
                          x2="350"
                          y2="20"
                          stroke="white"
                          strokeOpacity=".04"
                        />

                        <line
                          x1="0"
                          y1="45"
                          x2="350"
                          y2="45"
                          stroke="white"
                          strokeOpacity=".04"
                        />

                        <line
                          x1="0"
                          y1="70"
                          x2="350"
                          y2="70"
                          stroke="white"
                          strokeOpacity=".04"
                        />

                        <path
                          d="M0 61 C55 56 95 49 135 43 C180 36 220 32 250 47 C280 61 302 53 325 39 C338 31 345 37 350 27"
                          fill="none"
                          stroke="#9b8cff"
                          strokeWidth="3"
                        />

                        <path
                          d="M0 53 C55 46 95 36 135 28 C180 19 210 17 240 20 C275 23 300 31 325 30 C339 29 346 23 350 13"
                          fill="none"
                          stroke="#ff941f"
                          strokeWidth="3.5"
                        />

                      </svg>

                      <div
                        className="
                          absolute
                          left-1/2
                          top-[5px]
                          -translate-x-1/2
                          rounded-full
                          border
                          border-orange-500/40
                          bg-[#080c16]
                          px-[9px]
                          py-[3px]
                          text-[9px]
                          font-bold
                          text-orange-400
                        "
                      >
                        84%
                      </div>

                    </div>

                    <div className="mt-[5px] space-y-[3px] border-t border-white/[.04] pt-[7px] text-[8px] text-slate-500">

                      <div>
                        <span className="mr-[5px] text-orange-500">
                          ●
                        </span>
                        Expected Solar Generation (MWh)
                      </div>

                      <div>
                        <span className="mr-[5px] text-indigo-400">
                          ●
                        </span>
                        Actual Energy Output (MWh)
                      </div>

                      <div>
                        <span className="mr-[5px] text-slate-500">
                          ●
                        </span>
                        Energy Loss (%)
                      </div>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    RIGHT 3D AREA
                ================================================= */}

                <div
                  className="
                    relative
                    flex-1
                    overflow-hidden
                    bg-[#05080f]
                  "
                >

                  {/* orange glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_50%_48%,rgba(239,94,34,.25),transparent_58%)]
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
                      bg-[#080b10]
                    "
                  >

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-30
                      "
                      style={{
                        backgroundImage:
                          "radial-gradient(#475569 .7px, transparent .7px)",
                        backgroundSize: "13px 13px",
                      }}
                    />

                    {/* SOLAR SHAPE */}

                    <div className="relative h-[190px] w-[190px]">

                      <div
                        className="
                          absolute
                          left-[20px]
                          top-[43px]
                          h-[105px]
                          w-[125px]
                          rotate-[17deg]
                          bg-gradient-to-br
                          from-fuchsia-500
                          via-orange-400
                          to-amber-300
                          shadow-[0_20px_45px_rgba(245,100,32,.35)]
                        "
                        style={{
                          clipPath:
                            "polygon(12% 30%,68% 0%,100% 35%,80% 100%,35% 83%,0% 60%)",
                        }}
                      />

                      <div
                        className="
                          absolute
                          left-[76px]
                          top-[82px]
                          z-20
                          h-[36px]
                          w-[43px]
                          rotate-[17deg]
                          bg-[#080b10]
                        "
                        style={{
                          clipPath:
                            "polygon(20% 0%,100% 12%,78% 100%,0% 76%)",
                        }}
                      />

                      <div
                        className="
                          absolute
                          left-[93px]
                          top-[31px]
                          h-[75px]
                          w-[53px]
                          rotate-[17deg]
                          bg-gradient-to-br
                          from-fuchsia-500
                          to-orange-300
                        "
                        style={{
                          clipPath:
                            "polygon(15% 0%,100% 22%,75% 100%,0% 73%)",
                        }}
                      />

                      <div
                        className="
                          absolute
                          left-[131px]
                          top-[39px]
                          h-[58px]
                          w-[43px]
                          rotate-[17deg]
                          bg-gradient-to-br
                          from-orange-400
                          to-amber-300
                        "
                        style={{
                          clipPath:
                            "polygon(25% 0%,100% 28%,78% 100%,0% 65%)",
                        }}
                      />

                      <div
                        className="
                          absolute
                          left-[87px]
                          top-[108px]
                          h-[66px]
                          w-[74px]
                          rotate-[17deg]
                          bg-gradient-to-br
                          from-orange-400
                          via-orange-500
                          to-fuchsia-500
                        "
                        style={{
                          clipPath:
                            "polygon(22% 0%,100% 30%,72% 100%,0% 65%)",
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ===================================================
            BOTTOM LOGOS
        =================================================== */}

        <div
          className="
            absolute
            bottom-[28px]
            left-[150px]
            right-[150px]
            z-40
            flex
            items-center
            justify-between
            opacity-60
          "
        >

          <span className="text-[25px] font-bold text-slate-900">
            Uber
          </span>

          <span className="text-[23px] font-bold text-slate-900">
            amazon
          </span>

          <span className="text-[24px] font-bold text-slate-900">
            NETFLIX
          </span>

          <span className="text-[23px] font-semibold text-slate-900">
            ◇ airbnb
          </span>

          <span className="text-[23px] font-semibold text-slate-900">
             Apple
          </span>

          <span className="text-[19px] font-black leading-[.8] text-slate-900">
            BEST.
            <br />
            BUY.
          </span>

          <span className="text-[21px] font-semibold text-slate-900">
            ◉ Spotify
          </span>

          <span className="text-[21px] font-semibold text-slate-900">
            ◉ TARGET
          </span>

        </div>

      </div>

    </main>
  );
}
