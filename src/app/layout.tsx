import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundVideo } from "@/components/ui/background-video";
import { cn } from "@/lib/utils";

const nunito = Nunito_Sans({ 
  subsets: ["latin", "vietnamese"],
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Agent skills setup for AntiGravity - Hệ điều hành Trí tuệ cho AI Engineers",
  description: "Khung vận hành (Orchestration Framework) giúp biến AI thành Đội ngũ Chuyên gia chuyên nghiệp. Quy trình chuẩn PDCA.",
  icons: {
    icon: "/favicon-rounded.svg",
    shortcut: "/antigravity-ide-logo.png",
    apple: "/antigravity-ide-logo.png",
  },
};

import { LanguageProvider } from "@/contexts/LanguageContext";
import { Footer } from "@/components/layout/Footer";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body 
        className={cn(nunito.className, "min-h-screen font-sans antialiased dark bg-[#05070a]")}
      >
        <LanguageProvider>
          {/* ... background elements ... */}
          <BackgroundVideo />
          
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
             <div className="glow-orb glow-warm -top-48 -left-24 opacity-30 mix-blend-screen" />
             <div className="glow-orb glow-cool top-1/2 -right-24 opacity-20 mix-blend-screen" />
          </div>
          
          <div className="relative flex min-h-screen flex-col z-10">
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
