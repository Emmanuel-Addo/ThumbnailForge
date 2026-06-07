import { useState, useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import DashboardLayout from "./components/DashboardLayout"
import Generate from "./pages/Generate"
import Recreate from "./pages/Recreate"
import DashboardPlaceholder from "./pages/DashboardPlaceholder"

const App = () => {
  // Initialize dark mode from localStorage if available
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Keep localStorage in sync with the state
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    // Also toggle standard 'dark' class on root element for Tailwind config compatibility if needed
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />

      {/* Legacy/Shortcut redirects */}
      <Route path="/generate" element={<Navigate to="/dashboard/generate" replace />} />
      <Route path="/recreate" element={<Navigate to="/dashboard/recreate" replace />} />
      <Route path="/dashbaord/*" element={<Navigate to="/dashboard" replace />} /> {/* Catch common typos */}

      {/* Dashboard Nested Routes */}
      <Route path="/dashboard" element={<DashboardLayout darkMode={darkMode} setDarkMode={setDarkMode} />}>
        <Route index element={<Navigate to="/dashboard/generate" replace />} />
        <Route path="generate" element={<Generate />} />
        <Route path="recreate" element={<Recreate />} />
        <Route 
          path="community" 
          element={
            <DashboardPlaceholder 
              title="Community Creations" 
              subtitle="Browse and remix scroll-stopping thumbnails forged by the community. Coming soon!" 
            />
          } 
        />
        <Route 
          path="profile" 
          element={
            <DashboardPlaceholder 
              title="My Gallery" 
              subtitle="View and manage your history of generated and transformed thumbnails. Coming soon!" 
            />
          } 
        />
        <Route 
          path="settings" 
          element={
            <DashboardPlaceholder 
              title="Account Settings" 
              subtitle="Manage your billing plans, API tokens, and workspace preferences. Coming soon!" 
            />
          } 
        />
      </Route>

      {/* Catch-all redirect to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App