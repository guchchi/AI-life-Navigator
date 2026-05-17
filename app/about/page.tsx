import React from 'react';

export default function AboutPage() {
  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto w-full relative z-10">
      
      <h1 className="font-display text-display text-on-surface mb-8 text-center">About Life Navigator</h1>
      
      {/* What is it */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-inverse-primary/10 to-secondary-container/10 border border-white/10 rounded-2xl p-8 text-center">
          <p className="font-headline-md text-primary leading-relaxed">
            An AI engine that converts ambitious goals into step-by-step life execution plans.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="mb-16">
        <h2 className="font-headline-lg text-on-surface mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-error">warning</span>
          The Problem
        </h2>
        <div className="bg-surface-container-lowest border border-white/5 rounded-xl p-6 font-body-md text-on-surface-variant space-y-4 shadow-lg">
          <p>Today's students and builders face a unique set of challenges:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-on-surface">Confusion:</strong> Not knowing where to start.</li>
            <li><strong className="text-on-surface">Information Overload:</strong> Infinite tutorials, but no structure.</li>
            <li><strong className="text-on-surface">No Roadmap:</strong> Missing the sequential link between where they are and where they want to be.</li>
          </ul>
          <p className="mt-4 pt-4 border-t border-white/10 text-primary font-medium">
            Navigator converts raw ambition into structured action.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="font-headline-lg text-on-surface mb-8 flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary">account_tree</span>
          How It Works
        </h2>
        
        <div className="space-y-4">
          {[
            { step: '1', title: 'User describes goal', desc: 'Provide context about your current skills and timeline.' },
            { step: '2', title: 'Gemini analyzes context', desc: 'Our AI parses constraints and identifies required knowledge.' },
            { step: '3', title: 'System builds roadmap', desc: 'The engine generates a structured, phased markdown execution plan.' },
            { step: '4', title: 'User executes phases', desc: 'Follow the concrete timeline to achieve your objective.' }
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-6 p-4 bg-surface-container rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-headline-sm text-on-surface">{item.title}</h4>
                <p className="font-body-sm text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why This Exists */}
      <section>
        <h2 className="font-headline-lg text-on-surface mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-tertiary">psychology</span>
          Why This Exists
        </h2>
        <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
          This platform was built as a personal experiment by Ayush Paul to merge three distinct domains: <strong>AI</strong>, <strong>Career Planning</strong>, and <strong>Productivity Systems</strong>.
        </p>
        <p className="font-body-md text-on-surface-variant leading-relaxed">
          It exists to prove that AI shouldn't just write code or text for us—it should act as a strategic mentor that empowers human execution.
        </p>
      </section>

    </main>
  );
}
