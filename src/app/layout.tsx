import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Providers from "./services/provider";

export const metadata: Metadata = {
  title: "Museum",
  description: "Louvre landing page",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
  style: "normal",
});

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <Providers>
        <body className={roboto.className}>
          {children}
          {modal}
        </body>
      </Providers>
    </html>
  );
}
