import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "ROYAL FIND AI | جستجوی هوشمند کسب‌وکارها", template: "%s | ROYAL FIND AI" },
  description: "کسب‌وکارها و خدمات محلی را در نزدیکی خود پیدا کنید.",
  applicationName: "ROYAL FIND AI",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
