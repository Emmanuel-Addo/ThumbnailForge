import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

type Generation = {
  id: string;
  prompt: string;
  image: string;
  sourceImage: string;
  date: string;
};

export default function Recreate() {
  const [prompt, setPrompt] = useState("");
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [focused, setFocused] = useState(false);
  const [progressStep, setProgressStep] = useState(0);
  const [generations, setGenerations] = useState<Generation[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setSourceImage(url);
    }
  };

  const useSampleImage = () => {
    setSourceImage("https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80");
  };

  const startRecreation = () => {
    if (!prompt.trim() || !sourceImage || isGenerating) return;

    setIsGenerating(true);
    setProgressStep(1);

    // Simulate different steps of recreating
    setTimeout(() => setProgressStep(2), 1000);
    setTimeout(() => setProgressStep(3), 2000);

    setTimeout(() => {
      const newGen: Generation = {
        id: Date.now().toString(),
        prompt: prompt,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
        sourceImage: sourceImage,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
      };
      setGenerations((prev) => [newGen, ...prev]);
      setIsGenerating(false);
      setProgressStep(0);
      setPrompt("");
      setSourceImage(null);
    }, 3200);
  };

  return (
    <div className="flex-1 p-6 md:p-10 flex flex-col items-center justify-start max-w-5xl mx-auto w-full relative select-none">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* ── Mode Switcher & Title Row ── */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight flex items-center gap-2" style={{ color: "#0dfa9d" }}>
            Recreate & Transform
            <span className="text-[10px] font-extrabold uppercase tracking-widest bg-zinc-900 border border-zinc-850 text-[#0dfa9d] px-2 py-0.5 rounded-full">
              AI Powered
            </span>
          </h2>
        </div>

        {/* Tab Controls Pill */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#121214] border border-zinc-800 self-stretch md:self-auto overflow-x-auto shadow-inner">
          {tabs.map((tab) => {
            const active = tab.id === "recreate";
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

      {/* ── Transformation Prompt Card ── */}
      <div
        onClick={() => textareaRef.current?.focus()}
        className={`w-full bg-[#0d0d0f]/90 border rounded-[28px] p-6 shadow-2xl transition-all duration-200 cursor-text relative mb-14
          ${focused
            ? "border-[#0dfa9d]/40 ring-4 ring-[#0dfa9d]/5"
            : "border-zinc-850"
          }`}
        style={{ borderColor: focused ? undefined : "#1a1a1d" }}
      >
        <div className="flex items-center justify-between mb-4" onClick={(e) => e.stopPropagation()}>
          <span className="text-[10px] font-extrabold tracking-widest text-zinc-500">
            TRANSFORMATION PROMPT
          </span>
          {!sourceImage && (
            <button
              onClick={useSampleImage}
              className="text-xs font-bold text-green-600 dark:text-[#0dfa9d] hover:underline cursor-pointer"
            >
              Use Sample Thumbnail
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6 items-stretch">
          {/* Upload Area / Preview */}
          <div className="w-full md:w-56 shrink-0 flex" onClick={(e) => e.stopPropagation()}>
            {sourceImage ? (
              <div className="relative w-full aspect-video md:h-32 md:w-56 bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-850">
                <img src={sourceImage} alt="Source thumbnail" className="w-full h-full object-cover" />
                <button
                  onClick={() => setSourceImage(null)}
                  className="absolute top-2 right-2 bg-zinc-950/80 hover:bg-red-650 text-white rounded-full p-1.5 transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full aspect-video md:h-32 md:w-56 bg-[#141416]/50 hover:bg-[#161619] border-2 border-dashed border-zinc-800 hover:border-[#0dfa9d]/40 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors p-4 group"
              >
                <svg className="w-6 h-6 text-zinc-650 group-hover:text-[#0dfa9d] transition-colors mb-2" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[11px] font-extrabold text-zinc-500 text-center">
                  Upload Source Image
                </span>
              </div>
            )}
          </div>

          {/* Text Area */}
          <div className="flex-1 flex flex-col">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value.slice(0, 500))}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              disabled={isGenerating}
              placeholder="Describe what changes you want to apply..."
              className="w-full h-full min-h-[100px] bg-transparent text-sm md:text-base border-none outline-none resize-none placeholder-zinc-650 text-zinc-200 leading-relaxed"
            />
          </div>
        </div>

        {/* Input Footer Controls */}
        <div className="flex items-center justify-between border-t border-zinc-900 pt-4">
          <div className="flex items-center gap-2.5" onClick={(e) => e.stopPropagation()}>
            {/* Choose Image Icon */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-10 h-10 rounded-full bg-[#141416] border border-zinc-850 flex items-center justify-center text-zinc-550 hover:text-[#0dfa9d] hover:border-[#0dfa9d]/20 transition-all cursor-pointer"
            >
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </button>

            {/* Sliders Icon */}
            <button className="w-10 h-10 rounded-full bg-[#141416] border border-zinc-850 flex items-center justify-center text-zinc-550 hover:text-[#0dfa9d] hover:border-[#0dfa9d]/20 transition-all cursor-pointer">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
            </button>

            {/* Wand Icon */}
            <button className="w-10 h-10 rounded-full bg-[#141416] border border-zinc-850 flex items-center justify-center text-zinc-550 hover:text-[#0dfa9d] hover:border-[#0dfa9d]/20 transition-all cursor-pointer">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L13.688 18.062M9.813 15.904L20 5.717a1.69 1.69 0 00-2.39-2.39L7.425 13.515M9.813 15.904l-2.388-2.389M7.425 13.515L3 12.7l4.425-4.542" />
              </svg>
            </button>

            {/* Warning label if no source image is uploaded */}
            {!sourceImage ? (
              <span className="text-[10px] font-extrabold text-amber-500/90 bg-zinc-950 border border-zinc-900 px-3 py-1.5 rounded-full flex items-center gap-1.5 animate-pulse ml-2 select-none">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                SOURCE REQUIRED
              </span>
            ) : (
              <span className="text-[11px] text-zinc-500 font-semibold ml-2">
                {prompt.length} / 500 characters
              </span>
            )}
          </div>
        </div>

        {/* ── Central Floating Recreate Button (matching layout) ── */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 flex items-center shadow-lg shadow-[#0dfa9d]/10 rounded-full border border-black/40 bg-[#0dfa9d] text-black overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={startRecreation}
            disabled={!prompt.trim() || !sourceImage || isGenerating}
            className="px-8 py-3.5 text-xs font-black uppercase tracking-widest flex items-center gap-2 cursor-pointer border-none bg-transparent hover:bg-black/5 text-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin h-3.5 w-3.5 text-black" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3.5" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Transforming...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <span>Recreate</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Generations Section ── */}
      <div className="w-full flex flex-col items-start justify-start mt-6">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-lg font-bold tracking-tight text-white">
            My Generations
          </h2>
          <span className="bg-[#121214] border border-zinc-800 text-[#0dfa9d] text-xs font-black px-2.5 py-0.5 rounded-full">
            {generations.length + (isGenerating ? 1 : 0)}
          </span>
        </div>

        {/* Dynamic List */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skeleton Generation Loading State */}
          {isGenerating && (
            <div className="bg-[#0d0d0f] border border-zinc-900 rounded-3xl p-4 flex flex-col gap-4 animate-pulse">
              <div className="w-full aspect-video bg-[#121214] border border-zinc-850 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="flex flex-col items-center gap-3">
                  <svg className="animate-spin h-8 w-8 text-[#0dfa9d]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span className="text-xs font-bold text-zinc-550">
                    {progressStep === 1 && "Importing Source Thumbnail..."}
                    {progressStep === 2 && "Analyzing Differences..."}
                    {progressStep === 3 && "Applying Transformations..."}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-[#121214] rounded w-3/4"></div>
                <div className="h-3 bg-[#121214] rounded w-1/2"></div>
              </div>
            </div>
          )}

          {/* Active creations */}
          {generations.map((gen) => (
            <div key={gen.id} className="bg-[#0d0d0f] border border-zinc-900 rounded-3xl p-4 flex flex-col group hover:border-[#0dfa9d]/30 transition-all duration-300 shadow-sm">
              {/* Image Split Compare Container */}
              <div className="w-full aspect-video bg-[#121214] border border-zinc-850 rounded-2xl overflow-hidden relative flex">
                <div className="w-1/2 h-full border-r border-zinc-850 relative">
                  <img src={gen.sourceImage} alt="Original source" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-bold bg-black/80 text-white px-2 py-0.5 rounded uppercase">
                    Before
                  </span>
                </div>
                <div className="w-1/2 h-full relative">
                  <img src={gen.image} alt="Transformed target" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-bold bg-[#0dfa9d] text-black px-2 py-0.5 rounded uppercase">
                    After
                  </span>
                </div>
                {/* Overlay details on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2 w-full justify-end">
                    <a
                      href={gen.image}
                      download={`transformed-${gen.id}.png`}
                      className="p-2 rounded-xl bg-white text-black hover:bg-[#0dfa9d] hover:text-black transition-colors cursor-pointer shadow-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-18-5.25L12 21m0 0l9-9.75M12 21V3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Info footer */}
              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-zinc-200 line-clamp-2 leading-snug">
                    {gen.prompt}
                  </p>
                  <span className="text-[10px] text-zinc-500 font-semibold block mt-1.5">
                    Transformed on {gen.date}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-900 mt-3.5 pt-3">
                  <span className="text-[11px] font-bold text-[#0dfa9d] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#0dfa9d]"></span>
                    Transformed Successfully
                  </span>
                  <a
                    href={gen.image}
                    download={`transformed-${gen.id}.png`}
                    className="text-xs font-bold text-zinc-450 hover:text-[#0dfa9d] flex items-center gap-1 transition-colors"
                  >
                    Download HD
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 15V3m0 12l4-4m-4 4l-4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State when no generations exist */}
          {generations.length === 0 && !isGenerating && (
            <div className="col-span-full bg-[#0d0d0f] border border-zinc-900 rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#121214] border border-zinc-850 text-zinc-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-zinc-200 mb-1">
                No transformations published yet.
              </h3>
              <p className="text-xs text-zinc-500 mb-6 max-w-xs leading-relaxed">
                Your transformed images will appear here. Upload a source thumbnail and describe changes to begin.
              </p>
              <button
                onClick={useSampleImage}
                className="bg-[#0dfa9d] hover:bg-[#0cf095] text-black text-xs font-black px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-[#0dfa9d]/5"
              >
                Use Sample to Start
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Decorative neon bottom glow effect */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-80 h-10 bg-[#0dfa9d] opacity-20 blur-[50px] pointer-events-none z-0"></div>
    </div>
  );
}
