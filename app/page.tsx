"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import GoalForm from "@/components/GoalForm";
import NavigatorPanel from "@/components/NavigatorPanel";
import TopNavBar from "@/components/TopNavBar";
import AboutCreator from "@/components/AboutCreator";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";
import StoryModal from "@/components/StoryModal";

export default function Home() {
  const [roadmap, setRoadmap] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (goal: string) => {
    setIsLoading(true);
    setError(null);
    setRoadmap("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate roadmap.");
      }

      setRoadmap(data.result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] ambient-glow-primary -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] ambient-glow-secondary translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>

      <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto w-full relative z-10 flex flex-col gap-12 items-center">
        
        <Hero />
        
        <GoalForm onSubmit={handleGenerate} isLoading={isLoading} />
        
        {error && (
          <div className="mt-4 p-4 bg-error-container/20 border border-error/30 text-error rounded-xl text-center text-sm animate-fade-in w-full">
            {error}
          </div>
        )}

        {roadmap && (
          <div className="w-full">
            <NavigatorPanel content={roadmap} />
          </div>
        )}

      </main>

      <StoryModal />
    </>
  );
}
