"use client";

import HeroSection from "@/components/auth/HeroSection";
import LoginCard from "@/components/auth/LoginCard";
import Navbar from "@/components/auth/Navbar";
import { useRouter } from "next/navigation";
import Footer from "./Footer";

function Page() {
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    router.push("/home");
  };

  const handleSkip = () => {
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar onJoinClick={handleSkip} />

      <main className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto w-full px-6 md:px-12 py-8 gap-10">
        <HeroSection />
        <LoginCard onLogin={handleLogin} onSkip={handleSkip} />
      </main>

      <Footer />
    </div>
  );
}

export default Page;
