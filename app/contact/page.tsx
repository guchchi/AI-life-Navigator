export default function Contact() {
  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-headline-lg text-on-surface mb-6 text-center">Get in Touch</h1>
        
        <div className="bg-surface-container-lowest border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-surface-container-high mb-2">
              <img 
                alt="Ayush Paul" 
                className="w-full h-full object-cover" 
                src="/ayush-paul-selfie.jpg"
              />
            </div>
            
            <div>
              <h2 className="font-headline-md text-on-surface font-bold">Ayush Paul</h2>
              <p className="font-mono text-label-sm text-primary">Creator & Architect</p>
            </div>
            
            <p className="font-body-md text-on-surface-variant">
              Whether you want to discuss AI integrations, robotics innovations, or just want to chat about building cool things, my inbox is always open.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 border-t border-white/10">
              <a href="https://www.linkedin.com/in/paulayush/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 py-3 bg-surface-container border border-white/5 rounded-xl hover:bg-surface-container-high hover:border-white/20 transition-all text-on-surface font-medium">
                <span className="material-symbols-outlined">work</span>
                LinkedIn
              </a>
              <a href="https://ayushpaul.vercel.app" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 py-3 bg-surface-container border border-white/5 rounded-xl hover:bg-surface-container-high hover:border-white/20 transition-all text-on-surface font-medium">
                <span className="material-symbols-outlined">public</span>
                Portfolio
              </a>
              <a href="https://github.com/guchchi" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 py-3 bg-surface-container border border-white/5 rounded-xl hover:bg-surface-container-high hover:border-white/20 transition-all text-on-surface font-medium sm:col-span-2">
                <span className="material-symbols-outlined">code</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
