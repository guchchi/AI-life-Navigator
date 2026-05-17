export default function Hero() {
  return (
    <section className="flex flex-col gap-6 items-center text-center">
      
      {/* Product Identity Banner */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant/30 text-label-sm font-mono text-primary shadow-sm hover:border-primary/50 transition-colors cursor-default">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        AI Life Navigator — A Product by Ayush Paul Labs
      </div>
      
      <h1 className="font-display text-display text-on-surface tracking-tight">
        Plan Your Future <br/>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">with AI</span>
      </h1>
      
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Describe your aspirations, skills, and timeline. Our intelligence engine will synthesize a concrete, step-by-step roadmap to guide your evolution.
      </p>

    </section>
  );
}
