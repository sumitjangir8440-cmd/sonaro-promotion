
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonaro Promotion",
  description: "Promote your business worldwide with Sonaro Promotion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#ffffff",
          color: "#111827",
        }}
      >
        {children}
      </body>
    </html>
  );
}
