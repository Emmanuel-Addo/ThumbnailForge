import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

type DashboardLayoutProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function DashboardLayout({ darkMode, setDarkMode }: DashboardLayoutProps) {
  return (
    <div
      className={`flex w-screen h-screen overflow-hidden font-sans transition-colors duration-300
        ${darkMode ? "bg-gray-950" : "bg-gray-100"}`}
    >
      {/* Floating Sidebar */}
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content — no bg, no shadow, just transparent scroll pane */}
      <main className={`flex-1 h-screen overflow-y-auto flex flex-col relative
        ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        <div className="flex-1 flex flex-col min-w-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

