import React from 'react';

export default function CreatorPage() {
  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full relative z-10">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-16 text-center md:text-left">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-surface-container-high shadow-2xl shrink-0">
          <img src="/creator.png" alt="Ayush Paul" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center h-full pt-4">
          <h1 className="font-display text-display text-on-surface mb-2">Ayush Paul</h1>
          <h2 className="font-headline-md text-primary mb-4">Robotics Innovator & AI Developer</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <span className="px-3 py-1 bg-surface-container-high border border-outline-variant/30 rounded-full text-xs font-mono text-on-surface-variant">Student Builder</span>
            <span className="px-3 py-1 bg-surface-container-high border border-outline-variant/30 rounded-full text-xs font-mono text-on-surface-variant">Robotics Enthusiast</span>
            <span className="px-3 py-1 bg-surface-container-high border border-outline-variant/30 rounded-full text-xs font-mono text-on-surface-variant">AI Explorer</span>
            <span className="px-3 py-1 bg-surface-container-high border border-outline-variant/30 rounded-full text-xs font-mono text-on-surface-variant">Product Creator</span>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-surface-container border border-white/10 rounded-2xl p-8 mb-16 shadow-lg relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
        <div className="relative z-10">
          <h3 className="font-headline-lg text-on-surface mb-4">The Mission</h3>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            I build tools to provide <strong className="text-primary">clarity for students</strong>. In a world of infinite tutorials, we need <strong className="text-primary">direction over confusion</strong> and <strong className="text-primary">execution over motivation</strong>. AI Life Navigator is the embodiment of this philosophy.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="mb-16">
        <h3 className="font-headline-lg text-on-surface mb-6 border-b border-white/10 pb-4">The Journey</h3>
        <div className="space-y-6 font-body-md text-on-surface-variant leading-relaxed">
          <p>
            My journey began with a deep fascination for how things work, leading me directly into the world of robotics competitions. Competing at a national level taught me the critical importance of an <strong>innovation mindset</strong>—the ability to look at a problem, architect a solution, and iterate relentlessly.
          </p>
          <p>
            I believe in <strong>learning by building</strong>. Every project I create, including this platform, is designed to solve real problems that I and other students face daily. 
          </p>
          <p>
            The transition from robotics hardware to AI software was driven by a desire to scale my impact. Hardware builds physical solutions, but AI scales intelligence.
          </p>
        </div>
      </section>

      {/* Links Section */}
      <section>
        <h3 className="font-headline-lg text-on-surface mb-6 border-b border-white/10 pb-4">Connect & Follow</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <a href="https://ayushpaul.vercel.app" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 bg-surface-container-lowest border border-white/5 rounded-xl hover:bg-surface-container-high hover:-translate-y-1 hover:border-primary/50 transition-all group">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">public</span>
            <span className="font-label-md text-on-surface">Portfolio</span>
          </a>
          <a href="https://github.com/guchchi" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 bg-surface-container-lowest border border-white/5 rounded-xl hover:bg-surface-container-high hover:-translate-y-1 hover:border-primary/50 transition-all group">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">code</span>
            <span className="font-label-md text-on-surface">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/paulayush/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 bg-surface-container-lowest border border-white/5 rounded-xl hover:bg-surface-container-high hover:-translate-y-1 hover:border-primary/50 transition-all group">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">work</span>
            <span className="font-label-md text-on-surface">LinkedIn</span>
          </a>
          <a href="https://www.youtube.com/@ALX-17" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 bg-surface-container-lowest border border-white/5 rounded-xl hover:bg-surface-container-high hover:-translate-y-1 hover:border-primary/50 transition-all group">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">smart_display</span>
            <span className="font-label-md text-on-surface">YouTube</span>
          </a>
        </div>
      </section>

    </main>
  );
}
