import React from 'react';

export default function ProductRoadmap() {
  const phases = [
    {
      phase: 1,
      title: "AI Planning Engine",
      status: "Current Release",
      desc: "Core generation utilizing Gemini AI. Converts goals into structured markdown timelines.",
      active: true
    },
    {
      phase: 2,
      title: "Personal Memory System",
      status: "In Development",
      desc: "The AI remembers user progress, past goals, and dynamically adjusts future roadmaps based on completion rates.",
      active: false
    },
    {
      phase: 3,
      title: "Skill Tracking Dashboard",
      status: "Planned",
      desc: "Visual analytics for progress tracking. Users can check off daily milestones and view completion graphs.",
      active: false
    },
    {
      phase: 4,
      title: "AI Mentor Mode",
      status: "Planned",
      desc: "Continuous coaching. The system checks in weekly via email/push to ensure the user is executing the roadmap.",
      active: false
    },
    {
      phase: 5,
      title: "Ecosystem Integration",
      status: "Vision",
      desc: "All tools fully connected under the Ayush Paul Labs portfolio with a unified authentication system.",
      active: false
    }
  ];

  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto w-full relative z-10">
      
      <div className="text-center mb-16">
        <h1 className="font-display text-display text-on-surface mb-4">Product Roadmap</h1>
        <p className="font-body-lg text-on-surface-variant">The future architecture of AI Life Navigator.</p>
      </div>

      <div className="relative pl-6 space-y-12 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-transparent">
        
        {phases.map((p, idx) => (
          <div key={p.phase} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            
            <div className={`flex items-center justify-center w-6 h-6 rounded-full border-2 bg-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 left-[-30px] md:left-auto ${p.active ? 'border-primary' : 'border-outline-variant'}`}>
              <div className={`w-2 h-2 rounded-full ${p.active ? 'bg-primary' : 'bg-transparent'}`}></div>
            </div>
            
            <div className={`w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-6 rounded-xl border ${p.active ? 'border-primary/50 bg-primary/5' : 'border-white/10 bg-surface-container-lowest'} transition-colors`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-headline-md font-semibold ${p.active ? 'text-primary' : 'text-on-surface'}`}>
                  Phase {p.phase}: {p.title}
                </h3>
              </div>
              <span className="inline-block px-2 py-1 mb-3 rounded bg-surface-container text-[10px] font-mono text-outline uppercase tracking-wider">
                {p.status}
              </span>
              <p className="font-body-sm text-on-surface-variant">
                {p.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </main>
  );
}
