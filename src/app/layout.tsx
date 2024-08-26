import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React from "react";

const roboto = Roboto(
  {
    subsets: ['latin'],
    weight:['100','300','400','500','700','900'],
    variable:'--font-roboto'
  }
);

export const metadata: Metadata = {
  title: "Framer Motion",
  description: "Framer Motion use cases",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
