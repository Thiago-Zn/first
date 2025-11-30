import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/feedback/ToastProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { DevModeIndicator } from "@/components/layout/DevModeIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Saldo Certo",
  description: "Controle financeiro moderno e inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>
        <ToastProvider>
            {children}
            <DevModeIndicator />
        </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
