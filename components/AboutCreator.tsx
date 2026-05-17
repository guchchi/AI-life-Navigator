export default function AboutCreator() {
  return (
    <div className="sticky top-32 flex flex-col gap-6">
      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-high mb-4 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <img 
              alt="Ayush Paul Profile" 
              className="w-full h-full object-cover" 
              src="/ayush-paul-awards.png"
            />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] pointer-events-none"></div>
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface mb-1">Ayush Paul</h2>
          <p className="font-mono text-label-sm text-primary mb-6">AI & Hardware Innovator</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/20 font-mono text-[11px] text-on-surface-variant">INSPIRE MANAK</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/20 font-mono text-[11px] text-on-surface-variant">WRO National</span>
            <span className="px-2.5 py-1 rounded bg-surface-container-low border border-outline-variant/20 font-mono text-[11px] text-on-surface-variant">STEM Mentor</span>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            <a href="https://github.com/guchchi" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 bg-surface-container border border-white/5 rounded-lg hover:bg-surface-container-high hover:border-white/10 transition-colors font-label-sm text-label-sm text-on-surface">
              <span className="material-symbols-outlined text-[18px]">code</span>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/paulayush/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 bg-surface-container border border-white/5 rounded-lg hover:bg-surface-container-high hover:border-white/10 transition-colors font-label-sm text-label-sm text-on-surface">
              <span className="material-symbols-outlined text-[18px]">work</span>
              LinkedIn
            </a>
            <a href="https://ayushpaul.vercel.app" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 bg-surface-container border border-white/5 rounded-lg hover:bg-surface-container-high hover:border-white/10 transition-colors font-label-sm text-label-sm text-on-surface">
              <span className="material-symbols-outlined text-[18px]">public</span>
              Portfolio
            </a>
            <a href="https://www.youtube.com/@ALX-17" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 bg-surface-container border border-white/5 rounded-lg hover:bg-surface-container-high hover:border-white/10 transition-colors font-label-sm text-label-sm text-on-surface">
              <span className="material-symbols-outlined text-[18px]">smart_display</span>
              YouTube
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-surface-container-lowest border border-white/5 rounded-xl flex items-center justify-between">
        <span className="font-mono text-label-sm text-outline-variant">System Status</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
          <span className="font-mono text-label-sm text-on-surface">Operational</span>
        </div>
      </div>
    </div>
  );
}
