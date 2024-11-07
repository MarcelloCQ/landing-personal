import type { Metadata } from "next";
// import { geistMono, geistSans, montserrat } from "@/app/components/fonts";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

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
      <body className={``}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
