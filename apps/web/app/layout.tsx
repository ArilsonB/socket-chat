import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  authenticated,
  unauthenticated,
}: Readonly<{
  children: React.ReactNode;
  authenticated: React.ReactNode;
  unauthenticated: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen min-w-screen antialiased ${inter.className}`}>
        <Providers>{authenticated}</Providers>
      </body>
    </html>
  );
}
