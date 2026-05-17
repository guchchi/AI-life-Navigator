"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

interface NavigatorPanelProps {
  content: string;
}

export default function NavigatorPanel({ content }: NavigatorPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'roadmap.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!content) return null;

  return (
    <section className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 shadow-2xl flex flex-col gap-8 relative overflow-hidden animate-fade-in mt-12">
      {/* Top gradient highlight simulating light */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/5 pb-4">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Generated Roadmap</h2>
          <p className="font-mono text-label-sm text-on-surface-variant">Status: Sync Complete</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleCopy} className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface px-3 py-1.5 rounded border border-white/10 hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[16px]">{copied ? 'check' : 'content_copy'}</span>
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button onClick={handleExport} className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface hover:text-primary px-3 py-1.5 rounded border border-white/10 bg-surface-container hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-[16px]">download</span>
            Export
          </button>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-outline-variant/50 before:to-transparent">
        <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:text-on-surface max-w-none w-full
          [&>h2]:relative [&>h2]:flex [&>h2]:items-center [&>h2]:gap-4 [&>h2]:font-headline-md [&>h2]:text-primary [&>h2]:mt-12 [&>h2]:mb-4
          [&>h3]:text-secondary [&>h3]:font-headline-sm [&>h3]:mt-6 [&>h3]:mb-2
          [&>ul]:pl-4 [&>ul>li]:marker:text-primary [&>ul]:space-y-2
        ">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
