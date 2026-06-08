import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Generation = {
  id: string;
  prompt: string;
  image: string;
  aspectRatio: string;
  date: string;
};

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const [focused, setFocused] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressStep, setProgressStep] = useState(0);
  const [generations, setGenerations] = useState<Generation[]>([]);
  const [aspectRatio, setAspectRatio] = useState("1x"); // Default as in image "1x >"
  const [showRatioDropdown, setShowRatioDropdown] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.initialPrompt) {
      setPrompt(location.state.initialPrompt);
      // Clean up state
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const tabs = [
    { id: "prompt", label: "Prompt", path: "/generate", icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ) },
    { id: "recreate", label: "Recreate", path: "/recreate", icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ) },
    { id: "analyze", label: "Analyze", path: "/community", icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ) },
    { id: "edit", label: "Edit", path: "/profile", icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ) },
    { id: "title", label: "Title", path: "/settings", icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ) }
  ];

  const handleGenerate = () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setProgressStep(1);

    // Simulate creation process
    setTimeout(() => setProgressStep(2), 1000);
    setTimeout(() => setProgressStep(3), 2000);

    setTimeout(() => {
      const newGen: Generation = {
        id: Date.now().toString(),
        prompt: prompt,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
        aspectRatio: aspectRatio,
        date: new Date().toLocaleDateString("en-US", { 
          month: "short", 
          day: "numeric", 
          hour: "2-digit", 
          minute: "2-digit" 
        })
      };
      setGenerations((prev) => [newGen, ...prev]);
      setIsGenerating(false);
      setProgressStep(0);
      setPrompt("");
    }, 3200);
  };

  const useSamplePrompt = () => {
    setPrompt("A man swimming underwater, looking terrified at the camera while a shark looms menacingly in the background");
  };

  return (
    <div className="flex-1 flex flex-col h-full relative select-none overflow-hidden">

      {/* ── Top: Title + Tab Switcher ── */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-10 pt-10 pb-6 gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight" style={{ color: "#0dfa9d" }}>
            Get Started
          </h2>
        </div>

        {/* Tab Controls Pill */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#121214] border border-zinc-800 overflow-x-auto shadow-inner">
          {tabs.map((tab) => {
            const active = tab.id === "prompt";
            return (
              <button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap border
                  ${active
                    ? "bg-[#161619] border-[#0dfa9d]/30 text-[#0dfa9d] shadow-[0_0_15px_rgba(13,250,157,0.08)] hover:bg-[#1f1f23]"
                    : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-[#1a1a1e]/50"
                  }`}
              >
                <span className={active ? "text-[#0dfa9d]" : "text-zinc-500"}>{tab.icon}</span>
                <span>{tab.label}</span>
                {active && (
                  <svg className="w-3.5 h-3.5 text-[#0dfa9d] ml-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Spacer ── */}
      <div className="flex-1" />

      {/* ── Bottom: Prompt Input Card ── */}
      <div className="px-6 md:px-10 pb-10 w-full max-w-4xl mx-auto">
        <div
          onClick={() => textareaRef.current?.focus()}
          className={`w-full bg-[#0d0d0f]/90 border rounded-[28px] p-6 shadow-2xl transition-all duration-200 cursor-text relative mb-8
            ${focused
              ? "border-[#0dfa9d]/40 ring-4 ring-[#0dfa9d]/5"
              : ""
            }`}
          style={{ borderColor: focused ? undefined : "#1a1a1d" }}
        >
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value.slice(0, 500))}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Describe what you want to generate in detail..."
            className="w-full min-h-[120px] bg-transparent text-sm md:text-base border-none outline-none resize-none placeholder-zinc-600 text-zinc-200 leading-relaxed mb-6"
          />

          {/* Footer controls inside prompt card */}
          <div className="flex items-center justify-between pt-2">
            {/* Left Buttons: Persona, Upload, Image Reference */}
            <div className="flex items-center gap-2.5">
              {/* Person Icon */}
              <button
                onClick={(e) => { e.stopPropagation(); }}
                title="Add Persona"
                className="w-10 h-10 rounded-full bg-[#141416] border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-[#0dfa9d] hover:border-[#0dfa9d]/20 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5a3 3 0 11-6 0 3 3 0 016 0zM12 14.25a8.97 8.97 0 00-7.143 3.562c.163.784.808 1.438 1.618 1.438h11.05c.81 0 1.455-.654 1.618-1.438a8.966 8.966 0 00-4.143-6.27V14.25z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 13h-4m2-2v4" />
                </svg>
              </button>

              {/* Upload Icon */}
              <button
                onClick={(e) => { e.stopPropagation(); }}
                title="Upload Reference"
                className="w-10 h-10 rounded-full bg-[#141416] border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-[#0dfa9d] hover:border-[#0dfa9d]/20 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
              </button>

              {/* Image Variant Icon */}
              <button
                onClick={(e) => { e.stopPropagation(); }}
                title="Image Variants"
                className="w-10 h-10 rounded-full bg-[#141416] border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-[#0dfa9d] hover:border-[#0dfa9d]/20 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </button>
            </div>

            {/* Right Buttons: Mic, Ratio */}
            <div className="flex items-center gap-2.5">
              {/* Microphone Button */}
              <button
                onClick={(e) => { e.stopPropagation(); }}
                title="Describe with voice"
                className="w-10 h-10 rounded-full bg-[#141416] border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-[#0dfa9d] hover:border-[#0dfa9d]/20 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V6a3 3 0 016 0v6.75a3 3 0 01-3 3z" />
                </svg>
              </button>

              {/* Ratio Button */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setShowRatioDropdown(!showRatioDropdown)}
                  title="Aspect ratio"
                  className="w-10 h-10 rounded-full bg-[#141416] border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-[#0dfa9d] hover:border-[#0dfa9d]/20 transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h4.5m0-4.5v4.5M3.75 20.25h4.5m0 4.5v-4.5m12-12h-4.5m0-4.5v4.5m4.5 12h-4.5m0 4.5v-4.5" />
                  </svg>
                </button>

                {showRatioDropdown && (
                  <div className="absolute right-0 bottom-12 bg-[#0c0c0e] border border-zinc-800 rounded-2xl py-1.5 shadow-2xl w-28 z-50">
                    {["1x", "2x", "4x"].map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => {
                          setAspectRatio(ratio);
                          setShowRatioDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-bold hover:bg-[#121214] hover:text-[#0dfa9d] text-zinc-400"
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Central Floating Generate Button ── */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 flex items-center shadow-lg shadow-[#0dfa9d]/10 rounded-full border border-black/40 bg-[#0dfa9d] text-black overflow-hidden divide-x divide-black/15"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="px-6 py-3.5 text-xs font-black uppercase tracking-widest flex items-center gap-2 cursor-pointer border-none bg-transparent hover:bg-black/5 text-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-black" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3.5" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Forging...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L13.688 18.062M9.813 15.904L20 5.717a1.69 1.69 0 00-2.39-2.39L7.425 13.515M9.813 15.904l-2.388-2.389M7.425 13.515L3 12.7l4.425-4.542" />
                  </svg>
                  <span>Generate</span>
                </>
              )}
            </button>

            <button
              disabled={!prompt.trim() || isGenerating}
              onClick={() => setShowRatioDropdown(!showRatioDropdown)}
              className="px-4 py-3.5 text-xs font-black uppercase tracking-wider flex items-center gap-1 cursor-pointer bg-transparent hover:bg-black/5 text-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <span>{aspectRatio}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative neon bottom glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-80 h-10 bg-[#0dfa9d] opacity-20 blur-[50px] pointer-events-none z-0"></div>
    </div>
  );
}

