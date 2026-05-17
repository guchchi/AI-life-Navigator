"use client";

import React, { useState, useEffect } from "react";

interface GoalFormProps {
  onSubmit: (goal: string) => Promise<void>;
  isLoading: boolean;
}

const THINKING_STEPS = [
  "Understanding Goal...",
  "Designing Strategy...",
  "Structuring Milestones...",
  "Building Roadmap..."
];

const STARTER_PROMPTS = [
  "Build a robotics portfolio for college in 6 months",
  "Transition from hardware to AI development",
  "Start a tech agency while in university"
];

export default function GoalForm({ onSubmit, isLoading }: GoalFormProps) {
  const [goal, setGoal] = useState("");
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setStepIndex(0);
      interval = setInterval(() => {
        setStepIndex((prev) => (prev < THINKING_STEPS.length - 1 ? prev + 1 : prev));
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim() || isLoading) return;
    await onSubmit(goal);
  };

  return (
    <section className="relative w-full mt-2 flex flex-col gap-4">
      
      {/* Empty State Intelligence */}
      {goal.length === 0 && !isLoading && (
        <div className="flex flex-wrap justify-center gap-2 animate-fade-in">
          {STARTER_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setGoal(prompt)}
              className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary/20 border border-white/5 hover:border-primary/50 text-xs font-mono text-on-surface-variant hover:text-primary transition-all shadow-sm"
            >
              "{prompt}"
            </button>
          ))}
        </div>
      )}

      {/* Form Container */}
      <div className="relative group">
        {/* Outer subtle glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
        
        <form onSubmit={handleSubmit} className="relative bg-surface-container-lowest border border-white/10 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden flex flex-col">
          <div className="p-6">
            <textarea 
              className="w-full bg-transparent border-none text-on-surface font-body-md text-body-md placeholder-on-surface-variant/50 focus:ring-0 focus:outline-none resize-none min-h-[120px]" 
              placeholder="E.g., I am a high school student interested in AI and Robotics. I want to build a portfolio for top engineering colleges in 2 years. Where should I start?..."
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              disabled={isLoading}
              required
            ></textarea>
          </div>
          <div className="bg-surface-container-low px-6 py-4 border-t border-white/5 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
            
            <div className="flex gap-2 items-center w-full sm:w-auto">
              {isLoading ? (
                <div className="flex items-center gap-2 font-mono text-[12px] text-primary">
                  <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
                  <span className="animate-pulse">{THINKING_STEPS[stepIndex]}</span>
                </div>
              ) : (
                <>
                  <button type="button" className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-surface-container-high" title="Attach context">
                    <span className="material-symbols-outlined">attach_file</span>
                  </button>
                  <button type="button" className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-lg hover:bg-surface-container-high" title="Use constraints">
                    <span className="material-symbols-outlined">tune</span>
                  </button>
                </>
              )}
            </div>
            
            <button 
              type="submit"
              disabled={isLoading || !goal.trim()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-inverse-primary to-secondary-container hover:from-primary-container hover:to-secondary-container text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg shadow-[0_0_15px_rgba(86,141,255,0.3)] transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Generating...' : 'Generate'}
              {!isLoading && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
