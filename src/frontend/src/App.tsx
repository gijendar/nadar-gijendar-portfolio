import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "@/components/ui/sonner";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
    return "dark";
  });

  // Apply theme class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        color: theme === "dark" ? "#e2e8f0" : "#1a1a2e",
        fontFamily: "'Space Grotesk', sans-serif",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Preloader />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "rgba(13, 17, 23, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            color: "#e2e8f0",
            fontFamily: "'Space Grotesk', sans-serif",
          },
        }}
      />

      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
