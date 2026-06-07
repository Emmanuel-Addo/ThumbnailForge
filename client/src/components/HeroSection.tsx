
import { useState } from "react";
import ThumbnailFeatures from "./thumbnailFeatures"
import TrustedBrand from "./trustedBrand"

const navLinks = ["Home", "Community", "Generate", "Pricing"];

type HeroSectionProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function LandingPage({ darkMode, setDarkMode }: HeroSectionProps) {
  const [prompt, setPrompt] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className={`font-sans relative overflow-hidden ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>

      {/* Grid background — scoped to HeroSection only */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(${darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)"} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* NAV */}
      <div className="relative z-10 flex justify-center pt-5 px-6">
        <nav className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-2xl border ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} shadow-sm`}>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9">
              {/* Forge/anvil-inspired icon: bold frame + spark */}
              <svg viewBox="0 0 36 36" width="36" height="36" fill="none">
                {/* Outer frame */}
                <rect x="4" y="10" width="28" height="18" rx="3" fill="#16a34a" />
                {/* Inner screen */}
                <rect x="8" y="14" width="20" height="10" rx="1.5" fill="#dcfce7" />
                {/* Spark / play triangle */}
                <polygon points="14,16.5 14,21.5 21,19" fill="#16a34a" />
                {/* Top bolt */}
                <path d="M16 10 L18 5 L20 10" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className={darkMode ? "text-white" : "text-gray-900"}>Thumbnail</span>
              <span className="text-green-600">Forge</span>
            </span>
          </div>

          {/* Links */}
          <ul className="flex items-center gap-1 list-none">
            {navLinks.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors no-underline
                    ${l === "Home"
                      ? "bg-violet-50 text-green-600"
                      : darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${darkMode ? "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700" : "border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100"}`}
            >
              {darkMode ? (
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-semibold cursor-pointer">
              E
            </div>

            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors shadow-md">
              Generate
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-20">

        {/* Decorative corner boxes */}
        <div className={`absolute left-24 top-16 w-14 h-10 border-t-2 border-l-2 ${darkMode ? "border-gray-700" : "border-gray-300"} opacity-60`} />
        <div className={`absolute left-28 top-28 w-10 h-10 border-2 ${darkMode ? "border-gray-700" : "border-gray-300"} opacity-40`} />

        {/* Headline */}
        <h1 className="text-[clamp(40px,6vw,80px)] font-black leading-[1.05] tracking-tight max-w-4xl mb-6">
          <span className={darkMode ? "text-white" : "text-gray-900"}>Forge Thumbnails That</span>
          <br />
          <span className="text-green-600 italic">Command the Click.</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-lg max-w-lg leading-relaxed mb-12 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          Share your vision and our AI will craft a bold, scroll-stopping thumbnail that gets you more views — instantly.
        </p>

        {/* Prompt box */}
        <div
          className={`w-full max-w-2xl rounded-2xl border-2 p-5 pb-4 shadow-sm transition-all duration-200
            ${focused
              ? "border-green-500 shadow-violet-100 shadow-lg"
              : darkMode
                ? "border-gray-700 bg-gray-900"
                : "border-gray-200 bg-white"
            }
            ${darkMode ? "bg-gray-900" : "bg-white"}
          `}
        >
          <textarea
            className={`w-full min-h-[100px] resize-none border-none outline-none text-base leading-relaxed bg-transparent placeholder-gray-400 ${darkMode ? "text-white" : "text-gray-900"}`}
            placeholder="Describe your thumbnail... epic gaming battle"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <div className="flex justify-end mt-3">
            <button
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border
                ${prompt.trim()
                  ? "bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-md"
                  : darkMode
                    ? "bg-gray-800 text-gray-400 border-gray-700 cursor-default"
                    : "bg-gray-100 text-gray-400 border-gray-200 cursor-default"
                }`}
            >
              Generate Free
            </button>
          </div>
        </div>

        {/* thumbnailFeatures */}
        <ThumbnailFeatures darkMode={darkMode} />

        {/* Trusted Brand showcase */}
        <TrustedBrand darkMode={darkMode} />
      </main>
    </div>
  );
}