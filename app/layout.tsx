import type { Metadata } from "next";
import "./globals.css";
import AuthContextProvider from "@/context/authContextProvider"; // Use the provider
import React from "react";


export const metadata: Metadata = {
  title: "LeetClone",
  description: "LeetClone is a clone of LeetCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the children with AuthContextProvider */}
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
