import type { Metadata } from "next";

import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ether-Explorer",
  description: "Explore the blockchain",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="black-bg min-h-scree vsc-initialized font-inter">
        <div className="bg-ether-blue h-488 w-488 absolute rounded-full blur-4xl -left-200 -top-200 -z-5" />
        <div className="bg-ether-pink-2 h-488 w-488 absolute rounded-full blur-4xl right-485 -top-330 -z-5" />
        <div className="bg-ether-orange h-416 w-416 absolute rounded-full blur-4xl top-620 -left-164 -z-5" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
