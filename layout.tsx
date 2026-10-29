import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonaro Promotion — Get Your Business Discovered",
  description:
    "Promote your business website to a worldwide audience with Sonaro Promotion.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
