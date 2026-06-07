import { useState, useRef } from "react";

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="flex-1 p-6 md:p-10 flex flex-col items-center justify-start max-w-5xl mx-auto w-full">

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-3">
        AI <span className="text-green-600">Thumbnail</span> Generator
      </h1>
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center mb-10 max-w-md">
        Describe your vision, pick a style, and let the AI do the rest.
      </p>

      {/* Prompt Card */}
      <div
        onClick={() => textareaRef.current?.focus()}
        className={`w-full bg-white dark:bg-gray-900 border rounded-3xl p-5 md:p-6 shadow-sm transition-all duration-200 cursor-text
          ${focused
            ? "border-green-500 ring-2 ring-green-500/10 shadow-lg shadow-green-500/5"
            : "border-gray-200 dark:border-gray-800 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700"
          }`}
      >
        <span className="text-[10px] font-extrabold tracking-widest text-gray-400 dark:text-gray-500 block mb-2">
          YOUR PROMPT
        </span>

        <textarea
          ref={textareaRef}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value.slice(0, 500))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Describe your thumbnail vision in detail... a cinematic gaming battle with fire and lightning at sunset"
          className="w-full min-h-[120px] bg-transparent text-sm md:text-base border-none outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100 leading-relaxed mb-4"
        />

        {/* Footer Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-100 dark:border-gray-800/80 pt-4 gap-4">
          <div className="flex items-center gap-2">
            {/* Wand / Style */}
            <button className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/20 dark:hover:text-green-400 border border-gray-100 dark:border-gray-800 cursor-pointer transition-colors relative group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9.813 15.904L9 21L13.688 18.062M9.813 15.904L20 5.717a1.69 1.69 0 00-2.39-2.39L7.425 13.515M9.813 15.904l-2.388-2.389M7.425 13.515L3 12.7l4.425-4.542" />
              </svg>
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                Style Preset
              </span>
            </button>

            {/* Sliders */}
            <button className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/20 dark:hover:text-green-400 border border-gray-100 dark:border-gray-800 cursor-pointer transition-colors relative group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                Parameters
              </span>
            </button>

            {/* Image ref */}
            <button className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/20 dark:hover:text-green-400 border border-gray-100 dark:border-gray-800 cursor-pointer transition-colors relative group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                Reference Image
              </span>
            </button>

            <span className="text-[11px] text-gray-400 dark:text-gray-500 font-semibold ml-2">
              {prompt.length === 0 ? "Describe your vision to begin" : `${prompt.length} / 500`}
            </span>
          </div>

          {/* Generate button */}
          <button
            disabled={!prompt.trim()}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1.5 transition-all shadow-sm
              ${prompt.trim()
                ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
              }`}
          >
            Generate Thumbnail
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
