import type { Metadata } from "next";
import { geistMono, geistSans, montserrat } from "@/app/components/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcello Crescimbeni Personal Landing",
  description:
    "My personal landing page or portfolio front and backend. Web oriented",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
