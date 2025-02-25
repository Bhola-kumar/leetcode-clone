"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Navbar from "@/components/Navbar/Navbar";
import AuthModal from "@/components/Modals/AuthModal";

const AuthPage: React.FC = () => {
  const authModal = useSelector((state: RootState) => state.auth);

  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <Image src="/hero.png" alt="Hero Img" width={1000} height={500} />
        </div>

        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};

export default AuthPage;
