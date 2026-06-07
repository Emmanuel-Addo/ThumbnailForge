type Testimonial = {
  id: number
  description: string
  image: string
  name: string
  role: string
}

type Column = {
  start: number
  end: number
  className: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    description: "I went from spending 45 minutes on each thumbnail in Photoshop to getting a polished result in under 10 seconds. My CTR jumped from 3.2% to 7.8% in the first two weeks.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Alex Turner",
    role: "Gaming Creator — 420K subs"
  },
  {
    id: 2,
    description: "ThumbnailForge nailed the cinematic look I was going for on my travel channel. The style presets are dialed in — I barely had to tweak anything before exporting.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Harry Mensah",
    role: "Travel Vlogger — 210K subs"
  },
  {
    id: 3,
    description: "As a finance creator, standing out is hard. ThumbnailForge generates thumbnails that look premium without looking overproduced. My views have never been this consistent.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jason Kim",
    role: "Finance Educator — 95K subs"
  },
  {
    id: 4,
    description: "I manage thumbnails for 6 different channels. ThumbnailForge cut my workflow in half. Each style preset feels intentional — not like a random AI filter slapped on top.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    name: "Sofia Martinez",
    role: "Content Agency Owner"
  },
  {
    id: 5,
    description: "Honestly I was skeptical. But after seeing my first thumbnail pop out of the renderer — I was sold. It captured the exact energy of my tech review videos perfectly.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    name: "Marcus Webb",
    role: "Tech Reviewer — 580K subs"
  },
  {
    id: 6,
    description: "The 4K export quality is unreal for an AI tool. My editor couldn't believe these weren't hand-designed. ThumbnailForge has completely changed how we produce content.",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    name: "Emily Karter",
    role: "Lifestyle Creator — 340K subs"
  },
  {
    id: 7,
    description: "My click-through rate on Shorts went from 5% to 12% after I started using ThumbnailForge. The bold text and contrast choices it makes are just on another level.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60",
    name: "Chris Levin",
    role: "Shorts Creator — 1.1M subs"
  },
  {
    id: 8,
    description: "Every thumbnail I used to make felt like a guess. ThumbnailForge gives me confidence — I know it's going to perform before I even upload it.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    name: "Priya Nair",
    role: "Productivity Creator — 180K subs"
  },
  {
    id: 9,
    description: "I described my video in one sentence and got a thumbnail that looked like a Netflix poster. The AI actually understands context — it blew my mind.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60",
    name: "Nathan Cole",
    role: "Documentary Creator — 73K subs"
  }
]

const columns: Column[] = [
  { start: 0, end: 3, className: "animate-scroll-up-1" },
  { start: 3, end: 6, className: "hidden md:block animate-scroll-up-2" },
  { start: 6, end: 9, className: "hidden lg:block animate-scroll-up-3" }
]

type TestimonialsProps = {
  darkMode: boolean
}

const renderCard = (testimonial: Testimonial, index: number, darkMode: boolean) => (
  <div
    key={`${testimonial.id}-${index}`}
    className={`p-6 mb-4 rounded-2xl border transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.06)]
      ${darkMode
        ? "bg-gradient-to-b from-[#0d0d12] to-[#0f0b1c] border-slate-800/60"
        : "bg-white border-gray-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
      }`}
  >
    {/* Quote icon */}
    <div className="mb-4">
      <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#22c55e" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z" />
        </g>
      </svg>
    </div>

    {/* Review text */}
    <p className={`text-sm mb-5 leading-relaxed ${darkMode ? "text-slate-300" : "text-gray-600"}`}>
      {testimonial.description}
    </p>

    {/* User info */}
    <div className={`flex items-center gap-3 border-t pt-4 ${darkMode ? "border-slate-800/50" : "border-gray-100"}`}>
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-9 h-9 rounded-full object-cover border border-green-500/20"
      />
      <div>
        <p className={`text-sm font-bold ${darkMode ? "text-slate-200" : "text-gray-850"}`}>{testimonial.name}</p>
        <p className="text-xs text-slate-500">{testimonial.role}</p>
      </div>
    </div>
  </div>
)

const Testimonials = ({ darkMode }: TestimonialsProps) => {
  return (
    <div className={`flex flex-col items-center justify-center py-20 px-4 overflow-hidden transition-colors duration-300
      ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block border bg-green-500/10 border-green-500/20 text-green-400">
          Creator Love
        </span>
        <h2 className={`text-4xl md:text-5xl font-black mb-4 mt-3 tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
          Creators Who <span className="text-green-500 italic">Forge. Win.</span>
        </h2>
        <p className={`text-sm max-w-md mx-auto leading-relaxed ${darkMode ? "text-slate-400" : "text-gray-500"}`}>
          Real stories from YouTubers, agencies, and content teams using ThumbnailForge to dominate the click-through game.
        </p>
      </div>

      {/* Scrolling Columns Grid */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        {/* Top fade */}
        <div className={`absolute top-0 left-0 right-0 h-28 z-10 pointer-events-none bg-gradient-to-b
          ${darkMode ? "from-gray-950 to-transparent" : "from-white to-transparent"}`}
        />
        {/* Bottom fade */}
        <div className={`absolute bottom-0 left-0 right-0 h-28 z-10 pointer-events-none bg-gradient-to-t
          ${darkMode ? "from-gray-950 to-transparent" : "from-white to-transparent"}`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-hidden">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className={col.className}>
              {[
                ...testimonials.slice(col.start, col.end),
                ...testimonials.slice(col.start, col.end)
              ].map((testimonial, index) => renderCard(testimonial, index, darkMode))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials