import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div
      className="flex w-screen h-screen overflow-hidden font-sans bg-[#0c0c0e] text-white relative"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.045) 1.2px, transparent 1.2px)`,
        backgroundSize: "24px 24px"
      }}
    >
      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto flex flex-col relative">
        
        {/* ── Top Header Bar (matches image reference) ── */}
        <header className="flex items-center justify-between border-b border-zinc-900/60 px-6 md:px-8 py-3.5 shrink-0 bg-[#0c0c0e]/80 backdrop-blur-md">
          {/* Left: Sidebar toggle icon + Free Badge */}
          <div className="flex items-center gap-4">
            {/* Sidebar toggle representation [||] */}
            <button className="w-8 h-8 rounded-lg border border-zinc-800 bg-[#121214] flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Free Badge with shield logo and mint-green text */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#121214] border border-zinc-800">
              <svg className="w-3.5 h-3.5" fill="none" stroke="#0dfa9d" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <span style={{ color: "#0dfa9d" }}>Free</span>
            </div>
          </div>

          {/* Center: CTA Announcement Pill */}
          <div className="hidden md:flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-800/80 bg-[#121214] text-xs font-semibold text-zinc-400">
            <span className="w-4 h-4 rounded-full flex items-center justify-center font-extrabold text-[10px] bg-zinc-800 text-[#0dfa9d]">
              !
            </span>
            <span>Start Creating with Pikzels</span>
            <button className="ml-1 px-3 py-0.5 rounded-full border border-[#0dfa9d] hover:bg-[#0dfa9d]/10 text-[#0dfa9d] text-[10px] font-extrabold transition-colors cursor-pointer">
              Start Creating
            </button>
          </div>

          {/* Right: Empty spacer for balancing flex center */}
          <div className="w-[100px] md:block hidden"></div>
        </header>

        {/* ── Main Outlet ── */}
        <div className="flex-1 flex flex-col min-w-0">
          <Outlet />
        </div>
      </main>

      {/* ── Right-side Vertical tab "Can we help you?" ── */}
      <div 
        className="fixed right-0 top-[40%] translate-y-1/2 z-50 flex items-center justify-center bg-[#0dfa9d] text-black py-4 px-2 rounded-l-xl cursor-pointer shadow-lg hover:bg-[#0cf095] transition-all select-none"
        style={{ writingMode: "vertical-rl" }}
      >
        <div className="flex items-center gap-2.5 rotate-180">
          <svg className="w-3.5 h-3.5 shrink-0 rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.802-.331 48.172 48.172 0 003.068-.369c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          <span className="text-[10px] font-black tracking-widest uppercase">Can we help you?</span>
        </div>
      </div>
    </div>
  );
}
