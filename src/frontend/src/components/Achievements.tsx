const ACHIEVEMENTS = [
  {
    title: "Academic Excellence",
    description: "Scored 92.80% in SSC from Vivekananda English School, demonstrating exceptional academic performance and discipline.",
    icon: "🏆",
    year: "2022",
    highlight: "92.80% SSC",
  },
  {
    title: "Production Deployment",
    description: "Independently built and deployed Lexpert, a live production web application serving real users — from concept to cloud in record time.",
    icon: "🚀",
    year: "2024",
    highlight: "Lexpert Platform",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-secondary"
      style={{ padding: "6rem 0" }}
    >
      <div className="section-container">
        {/* Heading */}
        <div data-aos="fade-up" style={{ marginBottom: "3.5rem" }}>
          <h2 className="section-heading gradient-text">Achievements</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>
            Milestones that define my journey
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "3rem" }}>
          {/* Vertical line */}
          <div
            className="timeline-line"
            aria-hidden="true"
          />

          {/* Items */}
          {ACHIEVEMENTS.map((achievement, i) => (
            <div
              key={achievement.title}
              data-aos="fade-right"
              data-aos-delay={`${i * 150}`}
              style={{
                position: "relative",
                marginBottom: i < ACHIEVEMENTS.length - 1 ? "3rem" : 0,
              }}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{ top: "1.5rem" }}
                aria-hidden="true"
              />

              {/* Card */}
              <div
                className="glass-card"
                style={{ padding: "2rem", marginLeft: "1rem" }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <span
                      style={{
                        fontSize: "1.75rem",
                        lineHeight: 1,
                        filter: "drop-shadow(0 0 8px rgba(0,212,255,0.4))",
                      }}
                      aria-hidden="true"
                    >
                      {achievement.icon}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        color: "rgba(255,255,255,0.95)",
                        margin: 0,
                      }}
                    >
                      {achievement.title}
                    </h3>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
                    <span
                      style={{
                        background: "rgba(0,212,255,0.1)",
                        border: "1px solid rgba(0,212,255,0.25)",
                        borderRadius: "999px",
                        padding: "4px 12px",
                        fontSize: "0.75rem",
                        color: "#00d4ff",
                        fontWeight: 600,
                      }}
                    >
                      {achievement.year}
                    </span>
                    <span
                      style={{
                        background: "rgba(124,58,237,0.1)",
                        border: "1px solid rgba(124,58,237,0.25)",
                        borderRadius: "999px",
                        padding: "4px 12px",
                        fontSize: "0.75rem",
                        color: "#a78bfa",
                        fontWeight: 600,
                      }}
                    >
                      {achievement.highlight}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.925rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                  }}
                >
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
