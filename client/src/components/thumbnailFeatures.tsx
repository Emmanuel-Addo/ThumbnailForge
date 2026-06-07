import thumb1 from "../assets/thumbnail (1).png"
import thumb2 from "../assets/thumbnail (2).png"
import thumb3 from "../assets/thumbnail (3).png"
import thumb4 from "../assets/thumbnail (4).png"
import thumb5 from "../assets/thumbnail (5).png"
import thumb6 from "../assets/thumbnail (6).png"
import thumbMain from "../assets/thumbnail.png"
import thumbJ1 from "../assets/thumbnail_1.jpg"
import thumbJ2 from "../assets/thumbnail_2.jpg"

type Card = {
  thumbnailUrl: string
  prompt: string
  creatorName: string
  creatorAvatar: string
  category: string
  ctr: string
}

type CreateCardProps = {
  card: Card
  darkMode: boolean
}

const CreateCard = ({ card, darkMode }: CreateCardProps) => (
  <div className={`p-4 rounded-3xl mx-4 transition-all duration-300 w-80 shrink-0 border flex flex-col gap-4 group
    ${darkMode
      ? "bg-gray-900/60 border-gray-800/80 hover:bg-gray-900 text-white shadow-xl shadow-black/30 hover:border-green-500/50"
      : "bg-white border-gray-100/90 hover:bg-gray-50/50 text-gray-900 shadow-lg shadow-gray-100/40 hover:border-green-500/40"
    }`}
  >
    {/* Thumbnail Image Container */}
    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200/10">
      <img
        src={card.thumbnailUrl}
        alt={card.prompt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Category Badge */}
      <span className="absolute top-2.5 left-2.5 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-green-600 text-white shadow-sm">
        {card.category}
      </span>
    </div>

    {/* Prompt description */}
    <div className="flex-1 flex flex-col gap-1 min-h-[52px]">
      <span className={`text-[9px] font-bold uppercase tracking-wider ${darkMode ? "text-gray-500" : "text-gray-400"}`}>AI Prompt</span>
      <p className={`text-xs font-semibold line-clamp-2 leading-relaxed italic ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
        "{card.prompt}"
      </p>
    </div>

    {/* Creator Footer info */}
    <div className={`flex items-center justify-between border-t pt-3 ${darkMode ? "border-gray-800/60" : "border-gray-100"}`}>
      <div className="flex items-center gap-2 min-w-0">
        <img className="w-7 h-7 rounded-full object-cover border border-green-500/20" src={card.creatorAvatar} alt={card.creatorName} />
        <div className="flex flex-col min-w-0">
          <p className="text-[10px] font-bold truncate leading-none mb-1">{card.creatorName}</p>
          <span className="text-[8px] text-gray-400">Forged in 8s</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-[9px] text-green-500 bg-green-500/10 dark:bg-green-500/5 px-2 py-1 rounded-full border border-green-500/15 shrink-0">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-500">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        <span className="font-extrabold">{card.ctr}</span>
      </div>
    </div>
  </div>
);

const ThumbnailFeatures = ({ darkMode }: { darkMode: boolean }) => {
  const cardsData: Card[] = [
    {
      thumbnailUrl: thumbMain,
      category: "Gaming",
      prompt: "Epic 100 days survival in minecraft, cinematic lighting, neon colors, 4k",
      creatorName: "Avery J.",
      creatorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      ctr: "CTR +14%"
    },
    {
      thumbnailUrl: thumb1,
      category: "Coding",
      prompt: "I built a fully autonomous AI agent coding assistant, matrix background, futuristic setup",
      creatorName: "Briar M.",
      creatorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      ctr: "CTR +18%"
    },
    {
      thumbnailUrl: thumb2,
      category: "Tech",
      prompt: "Secret tech gadgets you didn't know you needed, moody neon lighting, close up view",
      creatorName: "Jordan L.",
      creatorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
      ctr: "CTR +12%"
    },
    {
      thumbnailUrl: thumb3,
      category: "Finance",
      prompt: "How I retired at 22 with dividend investing, clean graph, premium atmosphere",
      creatorName: "Sarah K.",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      ctr: "CTR +21%"
    },
    {
      thumbnailUrl: thumb4,
      category: "Design",
      prompt: "Photoshop tips that will save you 100 hours, vibrant 3D elements, high contrast",
      creatorName: "Alex R.",
      creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      ctr: "CTR +15%"
    },
    {
      thumbnailUrl: thumb5,
      category: "Travel",
      prompt: "I spent 50 hours inside an underwater glass bedroom, turquoise ocean, cinematic scale",
      creatorName: "Emily W.",
      creatorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      ctr: "CTR +19%"
    },
    {
      thumbnailUrl: thumb6,
      category: "Lifestyle",
      prompt: "Morning routine of a high-performance software engineer, minimalist design",
      creatorName: "David C.",
      creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      ctr: "CTR +11%"
    },
    {
      thumbnailUrl: thumbJ1,
      category: "Challenge",
      prompt: "Surviving 24 hours in a complete blackout room, night-vision style, creepy expression",
      creatorName: "Nathan T.",
      creatorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      ctr: "CTR +25%"
    },
    {
      thumbnailUrl: thumbJ2,
      category: "Science",
      prompt: "What actually happens when you enter a black hole, space time warping, vibrant graphics",
      creatorName: "Elena P.",
      creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
      ctr: "CTR +17%"
    }
  ];

  const row1Data = cardsData.slice(0, 5);
  const row2Data = cardsData.slice(5);

  return (
    <div className="w-full mt-3 mb-8 space-y-4">
      {/* Row 1: Left to Right Scroll */}
      <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
        {/* Left side gradient overlay */}
        <div className={`absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r ${darkMode ? "from-gray-950" : "from-white"} to-transparent`}></div>

        <div className="animate-marquee flex flex-row flex-nowrap w-max py-4">
          {[...row1Data, ...row1Data, ...row1Data].map((card, index) => (
            <CreateCard key={`r1-${index}`} card={card} darkMode={darkMode} />
          ))}
        </div>

        {/* Right side gradient overlay */}
        <div className={`absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l ${darkMode ? "from-gray-950" : "from-white"} to-transparent`}></div>
      </div>

      {/* Row 2: Right to Left Scroll */}
      <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
        {/* Left side gradient overlay */}
        <div className={`absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r ${darkMode ? "from-gray-950" : "from-white"} to-transparent`}></div>

        <div className="animate-marquee-reverse flex flex-row flex-nowrap w-max py-4">
          {[...row2Data, ...row2Data, ...row2Data].map((card, index) => (
            <CreateCard key={`r2-${index}`} card={card} darkMode={darkMode} />
          ))}
        </div>

        {/* Right side gradient overlay */}
        <div className={`absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l ${darkMode ? "from-gray-950" : "from-white"} to-transparent`}></div>
      </div>
    </div>
  )
}

export default ThumbnailFeatures;