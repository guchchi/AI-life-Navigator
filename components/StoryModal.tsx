"use client";

import React, { useState } from 'react';

export default function StoryModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-surface-container-high border border-outline-variant/30 text-on-surface hover:border-primary hover:text-primary transition-all px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-40 group"
      >
        <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">history_edu</span>
        <span className="font-label-md text-label-md font-medium">Why I Built This</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl w-full max-w-xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h2 className="font-display text-headline-lg text-on-surface mb-6">The Mission Behind the Code</h2>
            
            <div className="space-y-4 font-body-md text-on-surface-variant leading-relaxed">
              <p>
                As a student navigating the complex world of robotics and AI, I realized how scattered and overwhelming advice can be. We are constantly told to "build projects" or "learn frameworks," but the exact sequence is often a mystery.
              </p>
              <p>
                I built <strong>AI Life Navigator</strong> to solve this exact problem. I wanted a tool that doesn't just give generic advice, but acts as a strategic mentor—synthesizing a concrete, actionable roadmap tailored to individual aspirations.
              </p>
              <p>
                This isn't just an AI wrapper; it's an innovation product engineered to transform confusion into clarity. It's built for students, by a student.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-surface-container-high">
                <img 
                  alt="Ayush Paul" 
                  className="w-full h-full object-cover" 
                  src="/ayush-paul-selfie.jpg"
                />
              </div>
              <div>
                <p className="font-headline-md text-label-md text-on-surface font-semibold">Ayush Paul</p>
                <p className="font-mono text-[11px] text-primary">Creator & Architect</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
