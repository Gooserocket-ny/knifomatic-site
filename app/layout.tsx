import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knifomatic — Knife Inventory & Collection Manager",
  description: "Knifomatic is a knife inventory and collection manager for iOS and Android.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
