import { useState, useRef } from "react";

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
  const [progressStep, setProgressStep] = useState(0);
  const [generations, setGenerations] = useState<Generation[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setSourceImage(url);
    }
  };

  const useSampleImage = () => {
    // We can use a colored placeholder SVG or a standard path
    setSourceImage("/gaming_thumbnail.png");
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
        image: "/vlog_thumbnail.png",
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
    <div className="flex-1 p-6 md:p-10 flex flex-col items-center justify-start max-w-5xl mx-auto w-full relative">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Power Badge */}
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-rose-50 dark:bg-rose-950/20 text-rose-500 border border-rose-200 dark:border-rose-900/30 mb-4 animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block animate-ping"></span>
        Powered by Top-Tier AI
      </div>

      {/* Main Title & Description */}
      <h1 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-3">
        Recreate & Transform <span className="text-green-600">Thumbnails</span>
      </h1>
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center mb-10 max-w-lg">
        Upload an existing thumbnail and transform it with AI. Control how much to change.
      </p>

      {/* Transformation Prompt Card */}
      <div className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow mb-12">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-extrabold tracking-widest text-gray-400 dark:text-gray-500">
            TRANSFORMATION PROMPT
          </span>
          {!sourceImage && (
            <button
              onClick={useSampleImage}
              className="text-xs font-semibold text-green-600 dark:text-green-400 hover:underline cursor-pointer"
            >
              Use Sample Thumbnail
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-5 mb-4 items-stretch">
          {/* Upload Area / Preview */}
          <div className="w-full md:w-48 shrink-0 flex">
            {sourceImage ? (
              <div className="relative w-full aspect-video md:h-28 md:w-48 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <img src={sourceImage} alt="Source thumbnail" className="w-full h-full object-cover" />
                <button
                  onClick={() => setSourceImage(null)}
                  className="absolute top-1.5 right-1.5 bg-gray-900/80 hover:bg-red-600 text-white rounded-full p-1 transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full aspect-video md:h-28 md:w-48 bg-gray-50 dark:bg-gray-800/50 hover:bg-green-50/30 dark:hover:bg-green-950/10 border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500/80 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors p-4 group"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-green-500 transition-colors mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 text-center">
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
              disabled={isGenerating}
              placeholder="Describe what changes you want to apply... change background to cyber city theme, make text neon green"
              className="w-full h-full min-h-[90px] bg-transparent text-sm border-none outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-150 leading-relaxed"
            />
          </div>
        </div>

        {/* Input Footer Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-100 dark:border-gray-800/80 pt-4 gap-4">
          <div className="flex items-center gap-2">
            {/* Camera Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/20 dark:hover:text-green-400 border border-gray-100 dark:border-gray-800 cursor-pointer transition-colors relative group"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-850 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                Choose Image
              </span>
            </button>

            {/* Sliders */}
            <button className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/20 dark:hover:text-green-400 border border-gray-100 dark:border-gray-800 cursor-pointer transition-colors relative group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-850 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                Control Settings
              </span>
            </button>

            {/* Wand */}
            <button className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-green-50 hover:text-green-600 dark:hover:bg-green-950/20 dark:hover:text-green-400 border border-gray-100 dark:border-gray-800 cursor-pointer transition-colors relative group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9.813 15.904L9 21L13.688 18.062M9.813 15.904L20 5.717a1.69 1.69 0 00-2.39-2.39L7.425 13.515M9.813 15.904l-2.388-2.389M7.425 13.515L3 12.7l4.425-4.542" />
              </svg>
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-850 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                Enhance Prompt
              </span>
            </button>

            {/* Warning label if no source image is uploaded */}
            {!sourceImage ? (
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 animate-pulse ml-2">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Source Thumbnail Required
              </span>
            ) : (
              <span className="text-[11px] text-gray-400 dark:text-gray-500 font-semibold ml-2">
                {prompt.length} / 500 characters
              </span>
            )}
          </div>

          {/* Action button */}
          <button
            onClick={startRecreation}
            disabled={!prompt.trim() || !sourceImage || isGenerating}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm
              ${prompt.trim() && sourceImage && !isGenerating
                ? "bg-green-600 hover:bg-green-700 hover:shadow-green-100 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
              }`}
          >
            {isGenerating ? "Transforming..." : "Recreate Thumbnail"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>
      </div>

      {/* Generations Section */}
      <div className="w-full flex flex-col items-start justify-start">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl font-bold tracking-tight text-gray-950 dark:text-white">
            My Generations
          </h2>
          <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-bold px-2 py-0.5 rounded-full">
            {generations.length + (isGenerating ? 1 : 0)}
          </span>
        </div>

        {/* Dynamic List */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skeleton Generation Loading State */}
          {isGenerating && (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-4 flex flex-col gap-4 animate-pulse">
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="flex flex-col items-center gap-3">
                  <svg className="animate-spin h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    {progressStep === 1 && "Importing Source Thumbnail..."}
                    {progressStep === 2 && "Analyzing Differences..."}
                    {progressStep === 3 && "Applying Transformations..."}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-3/4"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-1/2"></div>
              </div>
            </div>
          )}

          {/* Active creations */}
          {generations.map((gen) => (
            <div key={gen.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-4 flex flex-col group hover:border-green-300 dark:hover:border-green-800/80 transition-all duration-300 shadow-sm hover:shadow">
              {/* Image Split Compare Container */}
              <div className="w-full aspect-video bg-gray-150 dark:bg-gray-800 rounded-2xl overflow-hidden relative flex">
                <div className="w-1/2 h-full border-r border-gray-200 dark:border-gray-800 relative">
                  <img src={gen.sourceImage} alt="Original source" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-bold bg-gray-900/80 text-white px-2 py-0.5 rounded uppercase">
                    Before
                  </span>
                </div>
                <div className="w-1/2 h-full relative">
                  <img src={gen.image} alt="Transformed target" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-bold bg-green-600/95 text-white px-2 py-0.5 rounded uppercase">
                    After
                  </span>
                </div>
                {/* Overlay details on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2 w-full justify-end">
                    <a
                      href={gen.image}
                      download={`transformed-${gen.id}.png`}
                      className="p-2 rounded-xl bg-white/90 text-gray-800 hover:bg-green-600 hover:text-white transition-colors cursor-pointer shadow-sm animate-fade-in"
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
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 leading-snug">
                    {gen.prompt}
                  </p>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 font-semibold block mt-1.5">
                    Transformed on {gen.date}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800/80 mt-3.5 pt-3">
                  <span className="text-[11px] font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Transformed Successfully
                  </span>
                  <a
                    href={gen.image}
                    download={`transformed-${gen.id}.png`}
                    className="text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 flex items-center gap-1"
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
            <div className="col-span-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-600 flex items-center justify-center mb-4 border border-gray-100 dark:border-gray-800">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 dark:text-gray-250 mb-1">
                No transformations published yet.
              </h3>
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-6 max-w-xs">
                Your transformed images will appear here. Upload a source thumbnail and describe changes to begin.
              </p>
              <button
                onClick={useSampleImage}
                className="bg-green-600 hover:bg-green-700 hover:shadow-green-100 text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
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
    </div>
  );
}
