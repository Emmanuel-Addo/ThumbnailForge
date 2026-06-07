import { useState } from "react";

type Step = {
  number: string;
  title: string;
  description: string;
};

type ProcessSectionProps = {
  darkMode: boolean;
};

export default function ProcessSection({ darkMode }: ProcessSectionProps) {
  const steps: Step[] = [
    {
      number: "01",
      title: "Cast Your Vision",
      description:
        "Describe your video idea in plain, everyday language. No technical jargon, no prompt engineering — just tell ThumbnailForge what your content is about, who it's for, and the feeling you want to capture. We handle the rest.",
    },
    {
      number: "02",
      title: "Choose Your Style Arsenal",
      description:
        "Dial into one of 10+ hand-crafted style architectures — from cinematic drama to minimal clean — each fine-tuned to hit hard in your specific niche. Gaming, finance, tech, vlog — we've got you covered.",
    },
    {
      number: "03",
      title: "Watch It Come Alive",
      description:
        "Our AI rendering engine gets to work instantly, composing bold text, striking visuals, and eye-catching contrast into a thumbnail that stops the scroll. Fully generated in seconds — not hours.",
    },
    {
      number: "04",
      title: "Ship It to the World",
      description:
        "Export your finished thumbnail in pixel-perfect 4K resolution, or publish it straight to the ThumbnailForge creator gallery to inspire the community and build your brand.",
    },
  ];

  return (
    <section className={`py-20 px-6 transition-colors duration-300 relative overflow-hidden ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Decorative background grid elements */}
      <div className={`absolute inset-0 pointer-events-none opacity-30`} />

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 border ${darkMode ? "bg-gray-900 border-gray-800 text-green-400" : "bg-green-50 border-green-100 text-green-600"}`}>
          Simple 4-Step Process
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center max-w-2xl mb-20 leading-[1.1]">
          Forge High-Click Thumbnails in Just{" "}
          <span className="text-green-600 italic">Four Simple Steps</span>
        </h2>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Center Line */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 top-2 bottom-2 w-0.5 transition-colors duration-300
              ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}
          />

          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-center justify-between w-full relative group`}
                >
                  {/* Left Side Content */}
                  <div className={`w-full md:w-[45%] ${isEven ? "md:text-right text-left" : "md:order-last text-left"} flex flex-col ${isEven ? "md:items-end items-start" : "items-start"}`}>
                    <div className="flex items-center gap-3 mb-2">
                      {isEven && (
                        <span className="text-xs font-mono font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                          Step {step.number}
                        </span>
                      )}
                      <h3 className={`text-xl md:text-2xl font-bold tracking-tight border-b-2 border-transparent group-hover:border-green-500/50 pb-1 transition-all duration-300 ${darkMode ? "text-gray-100 group-hover:text-white" : "text-gray-800 group-hover:text-gray-950"}`}>
                        {step.title}
                      </h3>
                      {!isEven && (
                        <span className="text-xs font-mono font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                          Step {step.number}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed max-w-md ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 my-4 md:my-0">
                    <div
                      className={`w-4 h-4 rotate-45 border-2 transition-all duration-500 rounded-sm
                        ${darkMode
                          ? "bg-gray-900 border-gray-700 group-hover:bg-green-500 group-hover:border-green-400 group-hover:shadow-[0_0_12px_rgba(34,197,94,0.5)]"
                          : "bg-white border-gray-300 group-hover:bg-green-600 group-hover:border-green-500 group-hover:shadow-[0_0_12px_rgba(22,163,74,0.3)]"
                        }`}
                    />
                  </div>

                  {/* Empty Spacer side to balance layout on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
