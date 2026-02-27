import { useRef, useCallback } from "react";

const TECH_TAGS = ["Python", "Flask", "HTML", "CSS", "JavaScript"];
const BULLETS = [
  "Designed and developed full-stack web application independently",
  "Structured academic legal resources for LLB students",
  "Implemented responsive UI for cross-device accessibility",
  "Deployed production-ready version on cloud platform (Render)",
];

export default function Projects() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(e);
  }, [handleMouseMove]);

  return (
    <section
      id="projects"
      className="section-secondary"
      style={{ padding: "6rem 0" }}
    >
      <div className="section-container">
        {/* Heading */}
        <div data-aos="fade-up" style={{ marginBottom: "3.5rem" }}>
          <h2 className="section-heading gradient-text">Projects</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>
            Production-grade applications I've built from scratch
          </p>
        </div>

        {/* Project card wrapper */}
        <div
          className="project-card-wrapper"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: "760px" }}
        >
          <article
            ref={cardRef}
            className="glass-card project-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{ overflow: "hidden" }}
          >
            {/* Gradient image placeholder */}
            <div
              style={{
                height: "185px",
                background: "linear-gradient(135deg, #00d4ff22 0%, #7c3aed44 50%, #00f5ff22 100%)",
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px 16px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Decorative mesh */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `
                    linear-gradient(rgba(0,212,255,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,212,255,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "center",
                }}
              >
                {/* Law/Lexpert logo */}
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                  }}
                >
                  LEXPERT
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>
                  Legal Web Platform
                </div>
              </div>

              {/* Live badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(34, 197, 94, 0.15)",
                  border: "1px solid rgba(34, 197, 94, 0.4)",
                  borderRadius: "999px",
                  padding: "4px 12px",
                  fontSize: "0.75rem",
                  color: "#22c55e",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 6px #22c55e",
                  }}
                  aria-hidden="true"
                />
                LIVE
              </div>
            </div>

            {/* Card content */}
            <div style={{ padding: "2rem" }}>
              {/* Title */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "rgba(255,255,255,0.95)",
                    margin: 0,
                  }}
                >
                  Lexpert – Legal Web Application
                </h3>
                <span
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(124,58,237,0.35)",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    fontSize: "0.75rem",
                    color: "#a78bfa",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                  }}
                >
                  Launched 2025
                </span>
              </div>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(0,212,255,0.1)",
                      border: "1px solid rgba(0,212,255,0.25)",
                      borderRadius: "999px",
                      padding: "4px 12px",
                      fontSize: "0.78rem",
                      color: "#00d4ff",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullet points */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {BULLETS.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.6,
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00d4ff"
                      strokeWidth="2.5"
                      style={{ flexShrink: 0, marginTop: 2 }}
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="https://lexpert.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow"
                  style={{
                    padding: "0.65rem 1.5rem",
                    borderRadius: "999px",
                    fontSize: "0.875rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    textDecoration: "none",
                  }}
                >
                  <span>Live Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/gijendar/lexpert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass"
                  style={{
                    padding: "0.65rem 1.5rem",
                    borderRadius: "999px",
                    fontSize: "0.875rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    textDecoration: "none",
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
