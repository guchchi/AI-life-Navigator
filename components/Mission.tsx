export default function Mission() {
  return (
    <section className="bg-surface-container-low border border-white/5 rounded-xl p-8 mt-4">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="p-3 bg-surface border border-white/10 rounded-lg">
          <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
        </div>
        <div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Why this exists</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Students struggle because advice is scattered everywhere. AI Life Navigator exists to transform confusion into structured action plans using AI. The gap between ambition and execution is often just a lack of clarity. By leveraging advanced LLMs, we transform vague goals into actionable, milestone-driven technical roadmaps.
          </p>
        </div>
      </div>
    </section>
  );
}
