import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Epeak | Elevate Peak",
  description: "Multilingual growth marketing agency focused on SEO, PPC, SMM, web development, analytics, and international growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
