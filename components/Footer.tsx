import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest border-t border-outline-variant/20 mt-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-gutter max-w-container-max mx-auto">
        <div className="flex flex-col text-center md:text-left mb-4 md:mb-0">
          <span className="font-mono text-label-md text-on-surface-variant">© 2026 Ayush Paul</span>
          <span className="font-mono text-label-sm text-outline-variant mt-1">
            AI Life Navigator — Powered by Gemini AI. Part of <a href="https://ayushpaul.vercel.app/lab" target="_blank" rel="noreferrer" className="text-primary hover:underline">Ayush Paul Labs</a>.
          </span>
        </div>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100" href="https://ayushpaul.vercel.app" target="_blank" rel="noreferrer">Portfolio</a>
          </li>
          <li>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100" href="https://github.com/guchchi" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/paulayush/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100" href="https://www.youtube.com/@ALX-17" target="_blank" rel="noreferrer">YouTube</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
