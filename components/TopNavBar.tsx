import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-primary/5">
      <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">explore</span>
          <Link href="/" className="font-display text-headline-md tracking-tighter text-primary hover:opacity-80 transition-opacity">
            Life Navigator
          </Link>
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="/about">About</Link>
          </li>
          <li>
            <Link className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="/creator">Creator</Link>
          </li>
          <li>
            <Link className="text-on-surface-variant font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="/privacy">Privacy</Link>
          </li>
        </ul>

        {/* Right: Parent Ecosystem */}
        <a 
          href="https://ayushpaul.vercel.app/lab" 
          target="_blank" 
          rel="noreferrer" 
          className="font-label-md text-label-md px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface hover:border-primary/50 hover:text-primary transition-colors duration-300 flex items-center gap-2"
        >
          <span className="hidden sm:inline">Back to</span> Ayush Paul Labs
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>
    </nav>
  );
}
