import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SunPermit - Solar Analytics & Permit Planset Engineering",
  description: "24-Hour Express Solar Permit Plansets & Licensed PE Stamps for Solar Installers across all 50 states.",
  keywords: "solar permit, permit planset, sunpermit, solar engineering, PE stamps, single line diagram, solar drafting, solar analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070A12] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
