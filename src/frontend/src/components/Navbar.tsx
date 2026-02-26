import { useEffect, useState, useCallback } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  theme: "dark" | "light";
  onThemeToggle: () => void;
}

export default function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 80);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    setProgress(scrollPercent);

    // Determine active section
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    let current = "home";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) {
          current = id;
        }
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 1.5rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s ease",
          ...(scrolled
            ? {
                background: isDark ? "rgba(10, 10, 15, 0.9)" : "rgba(240, 244, 255, 0.9)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }
            : {
                background: "transparent",
              }),
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.6rem",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="gradient-text">NGA</span>
        </button>

        {/* Desktop Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
              aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "50%",
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: isDark ? "#00d4ff" : "#7c3aed",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" role="img"><title>Sun icon</title>
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" role="img"><title>Moon icon</title>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="flex md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "8px",
              width: 38,
              height: 38,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: isDark ? "#e2e8f0" : "#1a1a2e",
                borderRadius: 1,
                transition: "all 0.3s ease",
                transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: isDark ? "#e2e8f0" : "#1a1a2e",
                borderRadius: 1,
                transition: "all 0.3s ease",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: isDark ? "#e2e8f0" : "#1a1a2e",
                borderRadius: 1,
                transition: "all 0.3s ease",
                transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: "68px",
          left: 0,
          right: 0,
          zIndex: 999,
          background: isDark ? "rgba(10, 10, 15, 0.97)" : "rgba(240, 244, 255, 0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}
        role="dialog"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              fontSize: "1rem",
              animationDelay: `${i * 40}ms`,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Overlay to close mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            background: "transparent",
          }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
