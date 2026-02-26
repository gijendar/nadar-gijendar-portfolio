import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 92.8, suffix: "%", label: "SSC Score", decimals: 1 },
  { value: 1, suffix: "", label: "Live App", decimals: 0 },
  { value: 6, suffix: "+", label: "Languages", decimals: 0 },
  { value: 4, suffix: "", label: "Certifications", decimals: 0 },
];

function useCounter(target: number, decimals: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * eased;
      setCount(parseFloat(current.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target, decimals]);

  return count;
}

function StatCard({ value, suffix, label, decimals, active }: typeof STATS[0] & { active: boolean }) {
  const count = useCounter(value, decimals, active);

  return (
    <div
      className="glass-card"
      style={{
        padding: "1.75rem 1.5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div className="stat-number gradient-text">
        {count.toFixed(decimals)}{suffix}
      </div>
      <div
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.55)",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [countersActive, setCountersActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-secondary"
      style={{ padding: "6rem 0" }}
    >
      <div className="section-container">
        {/* Heading */}
        <div data-aos="fade-up" style={{ marginBottom: "3.5rem" }}>
          <h2 className="section-heading gradient-text">About Me</h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left: Bio */}
          <div data-aos="fade-right">
            <div
              className="glass-card"
              style={{ padding: "2.5rem" }}
            >
              {/* Decorative label */}
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#00d4ff",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                Who I Am
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.75)",
                  marginBottom: "1.75rem",
                }}
              >
                Computer Science undergraduate with strong interest in{" "}
                <strong style={{ color: "#00d4ff" }}>Web Development</strong>,{" "}
                <strong style={{ color: "#7c3aed" }}>Software Engineering</strong>, and{" "}
                <strong style={{ color: "#00f5ff" }}>Artificial Intelligence</strong>.
                Founder and developer of <strong style={{ color: "rgba(255,255,255,0.9)" }}>Lexpert</strong>, a legal academic web platform.
                Quick learner with strong adaptability and capable of delivering high-quality solutions within tight deadlines.
              </p>

              {/* Key traits */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {["Full-Stack Developer", "AI Enthusiast", "Problem Solver", "Quick Learner"].map((trait) => (
                  <span key={trait} className="skill-badge">{trait}</span>
                ))}
              </div>
            </div>

            {/* Location / availability bar */}
            <div
              className="glass-card"
              style={{
                padding: "1.25rem 1.75rem",
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                  flexShrink: 0,
                  animation: "ping 2s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}>
                📍 Bhiwandi, Maharashtra, India — <strong style={{ color: "#22c55e" }}>Open to opportunities</strong>
              </span>
            </div>
          </div>

          {/* Right: Stats */}
          <div data-aos="fade-left">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {STATS.map((stat) => (
                <StatCard key={stat.label} {...stat} active={countersActive} />
              ))}
            </div>

            {/* Extra info card */}
            <div
              className="glass-card"
              style={{
                padding: "1.75rem",
                marginTop: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#7c3aed",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                Current Focus
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "Pursuing B.Sc Computer Science (TYCS)",
                  "Building production-ready web applications",
                  "Exploring AI & Machine Learning",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    <span style={{ color: "#00d4ff", flexShrink: 0, marginTop: 1 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
