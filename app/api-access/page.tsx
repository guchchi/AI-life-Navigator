export default function ApiAccess() {
  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-headline-lg text-on-surface mb-6">API Access</h1>
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl relative">
          <div className="flex items-center gap-4 mb-6">
            <span className="material-symbols-outlined text-primary text-4xl">api</span>
            <div>
              <h2 className="font-headline-md text-on-surface">Developer API Platform</h2>
              <p className="font-mono text-label-sm text-on-surface-variant">Part of the Ayush Paul Ecosystem</p>
            </div>
          </div>
          
          <div className="space-y-6 font-body-md text-on-surface-variant leading-relaxed">
            <p>
              The AI Life Navigator inference engine is currently in closed beta. We are building a robust API wrapper that allows developers to integrate our proprietary prompt-engineering framework and timeline parsing directly into their own applications.
            </p>
            
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-6">
              <h3 className="font-headline-sm text-on-surface mb-4">Beta Access Request</h3>
              <p className="mb-4 text-sm">
                If you are a student developer or an educational institution looking to pilot our API, please reach out directly through the Ayush Paul developer portal.
              </p>
              <a 
                href="https://ayushpaul.vercel.app" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-surface-container-high border border-white/10 text-on-surface hover:text-primary px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Visit Developer Portal
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
