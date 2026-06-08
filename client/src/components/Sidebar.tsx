import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type SidebarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Sidebar({ darkMode, setDarkMode }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const icons = {
    generate: (
      <svg className="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="10" height="10" rx="2" />
        <path d="M9 14h7a2 2 0 0 0 2-2V5" />
        <path d="M12 2v2M12 20v2M20 12h2M2 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" strokeLinecap="round" />
      </svg>
    ),
    settings: (
      <svg className="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    logout: (
      <svg className="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
    ),
  };

  const navItems = [
    { path: "/generate", name: "Generate", desc: "Create from prompt", icon: icons.generate },
    { path: "/recreate", name: "Recreate", desc: "Transform with AI", icon: (
      <svg className="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ) },
  ];

  return (
    /* Outer wrapper provides the gap/spacing around the floating card */
    <div
      className={`p-3 flex flex-col h-full shrink-0 transition-all duration-300
        ${collapsed ? "w-[76px]" : "w-[272px]"}`}
    >
      <div
        className={`flex flex-col justify-between h-full rounded-2xl border overflow-hidden
          ${darkMode
            ? "bg-gray-900 border-gray-800 text-gray-100"
            : "bg-white border-gray-200 text-gray-800"
          }`}
      >
        {/* ── Logo + Collapse Toggle ── */}
        <div>
          <div className={`flex items-center gap-3 px-4 py-4 border-b ${darkMode ? "border-gray-800" : "border-gray-100"} ${collapsed ? "justify-center" : "justify-between"}`}>
            {/* Logo */}
            <div className="flex items-center gap-2.5 min-w-0">
              <svg viewBox="0 0 36 36" width="32" height="32" fill="none" className="shrink-0">
                <rect x="4" y="10" width="28" height="18" rx="3" fill="#16a34a" />
                <rect x="8" y="14" width="20" height="10" rx="1.5" fill="#dcfce7" />
                <polygon points="14,16.5 14,21.5 21,19" fill="#16a34a" />
                <path d="M16 10 L18 5 L20 10" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
              </svg>
              {!collapsed && (
                <span className="text-[14px] font-bold tracking-tight whitespace-nowrap">
                  <span className={darkMode ? "text-white" : "text-gray-900"}>Thumbnail</span>
                  <span className="text-green-600">Forge</span>
                </span>
              )}
            </div>

            {/* Collapse / Expand button */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors cursor-pointer shrink-0
                ${darkMode
                  ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-400"
                  : "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-500"
                }`}
            >
              {collapsed ? (
                /* Chevron right — expand */
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              ) : (
                /* Chevron left — collapse */
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              )}
            </button>
          </div>

          {/* Nav */}
          <div className="px-3 pt-4 space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={collapsed ? item.name : undefined}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 no-underline group relative
                    ${active
                      ? darkMode
                        ? "bg-green-950/50 border-l-[3px] border-green-500"
                        : "bg-green-50 border-l-[3px] border-green-600"
                      : darkMode
                        ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                        : "hover:bg-gray-50 text-gray-500 hover:text-gray-900"
                    }
                    ${collapsed ? "justify-center px-2" : ""}`}
                >
                  <span className={`shrink-0 ${active ? "text-green-600" : ""}`}>
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <div className="flex flex-col min-w-0">
                      <span className={`text-[13px] font-semibold leading-tight truncate ${active ? "text-green-600" : darkMode ? "text-gray-200" : "text-gray-800"}`}>
                        {item.name}
                      </span>
                      <span className={`text-[10px] leading-tight mt-0.5 truncate ${active ? "text-green-500/80" : "text-gray-400"}`}>
                        {item.desc}
                      </span>
                    </div>
                  )}
                  {/* Tooltip when collapsed */}
                  {collapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 rounded-lg bg-gray-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">
                      {item.name}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── User + Controls ── */}
        <div className={`px-3 py-4 border-t space-y-3 ${darkMode ? "border-gray-800" : "border-gray-100"}`}>
          {/* User row */}
          <div className={`flex items-center min-w-0 ${collapsed ? "justify-center" : "gap-2.5"}`}>
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
              E
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-[12px] font-bold truncate ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                    Emmanuel Addo
                  </span>
                  <span className="text-[9px] font-bold bg-green-100 text-green-700 border border-green-200 px-1.5 py-0.5 rounded-full uppercase shrink-0">
                    Free
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 truncate block leading-tight">
                  moviearenarecap@gmail.com
                </span>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className={`flex items-center gap-1.5 ${collapsed ? "flex-col" : ""}`}>
            {/* Dark mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle Dark Mode"
              className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg border text-[11px] font-semibold transition-colors cursor-pointer
                ${collapsed ? "w-8 h-8 p-0" : "flex-1 px-3"}
                ${darkMode
                  ? "border-gray-700 bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
            >
              {darkMode ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
              {!collapsed && <span>Dark Mode</span>}
            </button>

            {/* Settings */}
            <Link
              to="/settings"
              title="Settings"
              className={`flex items-center justify-center rounded-lg border transition-colors cursor-pointer
                ${collapsed ? "w-8 h-8 p-0" : "p-1.5"}
                ${darkMode
                  ? "border-gray-700 bg-gray-800 text-gray-400 hover:text-white"
                  : "border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
            >
              {icons.settings}
            </Link>

            {/* Logout */}
            <Link
              to="/"
              title="Log out"
              className={`flex items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 hover:bg-red-100 transition-colors cursor-pointer
                ${collapsed ? "w-8 h-8 p-0" : "p-1.5"}`}
            >
              {icons.logout}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
