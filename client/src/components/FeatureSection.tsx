const features = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title: "AI Thumbnail Generator",
    desc: "Describe your video idea and our AI instantly produces a bold, eye-catching thumbnail sized and styled for maximum clicks.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Smart Text & Title Overlay",
    desc: "Automatically generates punchy, high-impact title text and overlays it onto your thumbnail with perfect placement and contrast.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "Click-Through Optimisation",
    desc: "Every thumbnail is scored and refined for CTR — ensuring your designs follow proven patterns that get more views and clicks.",
  },
];

type FeatureSectionProps = {
  darkMode: boolean;
};

export default function FeatureSection({ darkMode }: FeatureSectionProps) {
  return (
    <section className={`py-20 px-6 transition-colors duration-300 ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-6xl mx-auto">

        {/* Feature cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 border rounded-2xl overflow-hidden ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-8 flex flex-col gap-4 ${i < features.length - 1 ? (darkMode ? "md:border-r border-gray-800 border-b md:border-b-0" : "md:border-r border-gray-200 border-b md:border-b-0") : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className={darkMode ? "text-gray-400" : "text-gray-500"}>{f.icon}</span>
                <h3 className={`font-semibold text-base ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {f.title}
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}