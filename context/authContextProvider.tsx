"use client"; // This ensures the file runs as a client component

import { RecoilRoot } from "recoil";
import React from "react";

export default function AuthContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
