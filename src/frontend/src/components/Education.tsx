const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Pursuing (TYCS)",
    score: "In Progress",
    period: "2024 – Present",
    badge: "Pursuing",
    badgeColor: "#22c55e",
    icon: "🎓",
    academicYear: null,
    passoutYear: null,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Al-Huda College",
    score: "60%",
    period: "2022–23",
    badge: "Completed",
    badgeColor: "#00d4ff",
    icon: "📚",
    academicYear: "2022–23",
    passoutYear: "2023",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Vivekananda English School",
    score: "92.80%",
    period: "2020–21",
    badge: "Distinction",
    badgeColor: "#7c3aed",
    icon: "⭐",
    academicYear: "2020–21",
    passoutYear: "2021",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-primary"
      style={{ padding: "6rem 0" }}
    >
      <div className="section-container">
        {/* Heading */}
        <div data-aos="fade-up" style={{ marginBottom: "3.5rem" }}>
          <h2 className="section-heading gradient-text">Education</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>
            Academic journey and qualifications
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "3rem" }}>
          {/* Vertical line */}
          <div
            className="timeline-line"
            aria-hidden="true"
          />

          {EDUCATION.map((edu, i) => (
            <div
              key={edu.degree}
              data-aos="fade-right"
              data-aos-delay={`${i * 120}`}
              style={{
                position: "relative",
                marginBottom: i < EDUCATION.length - 1 ? "2.5rem" : 0,
              }}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{
                  top: "1.5rem",
                  background: `linear-gradient(135deg, ${edu.badgeColor}, #7c3aed)`,
                  boxShadow: `0 0 12px ${edu.badgeColor}66`,
                }}
                aria-hidden="true"
              />

              {/* Card */}
              <div
                className="glass-card"
                style={{ padding: "1.75rem", marginLeft: "1rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Left content */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span
                      style={{
                        fontSize: "1.5rem",
                        lineHeight: 1,
                        marginTop: "2px",
                        filter: "drop-shadow(0 0 6px rgba(0,212,255,0.3))",
                      }}
                      aria-hidden="true"
                    >
                      {edu.icon}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "rgba(255,255,255,0.95)",
                          margin: "0 0 0.3rem 0",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.5)",
                          margin: 0,
                        }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Right: badges */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem", flexShrink: 0 }}>
                    <span
                      style={{
                        background: `${edu.badgeColor}15`,
                        border: `1px solid ${edu.badgeColor}35`,
                        color: edu.badgeColor,
                        borderRadius: "999px",
                        padding: "3px 12px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {edu.badge}
                    </span>
                    {edu.academicYear && (
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "rgba(255,255,255,0.45)",
                          fontWeight: 500,
                        }}
                      >
                        Academic Year: {edu.academicYear}
                      </span>
                    )}
                    {edu.passoutYear && (
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "rgba(255,255,255,0.45)",
                          fontWeight: 500,
                        }}
                      >
                        Passout Year: {edu.passoutYear}
                      </span>
                    )}
                    {!edu.academicYear && (
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "rgba(255,255,255,0.4)",
                        }}
                      >
                        {edu.period}
                      </span>
                    )}
                    {edu.score !== "In Progress" && (
                      <span
                        className="gradient-text"
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: "1rem",
                        }}
                      >
                        {edu.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
