const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"],
    accentColor: "#00d4ff",
  },
  {
    title: "Tools & Platforms",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: ["Git", "GitHub", "VS Code", "Render", "AI Tools"],
    accentColor: "#7c3aed",
  },
  {
    title: "Concepts",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
        <path d="M9 18h6"/><path d="M10 22h4"/>
      </svg>
    ),
    skills: ["Responsive Design", "Debugging", "UI/UX Basics"],
    accentColor: "#00f5ff",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-primary"
      style={{ padding: "6rem 0" }}
    >
      <div className="section-container">
        {/* Heading */}
        <div data-aos="fade-up" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <h2 className="section-heading gradient-text" style={{ display: "inline-block" }}>
            Skills & Technologies
          </h2>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "500px",
              margin: "0.75rem auto 0",
            }}
          >
            Technologies and tools I work with to build production-ready solutions
          </p>
        </div>

        {/* Skill cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SKILL_CATEGORIES.map((category, i) => (
            <div
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
              className="glass-card"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${category.accentColor}22, ${category.accentColor}44)`,
                    border: `1px solid ${category.accentColor}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: category.accentColor,
                    flexShrink: 0,
                  }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "rgba(255,255,255,0.95)",
                      margin: 0,
                    }}
                  >
                    {category.title}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>
                    {category.skills.length} items
                  </p>
                </div>
              </div>

              {/* Gradient divider */}
              <div
                style={{
                  height: 1,
                  background: `linear-gradient(90deg, ${category.accentColor}55, transparent)`,
                  borderRadius: 1,
                }}
                aria-hidden="true"
              />

              {/* Skills badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{
                      borderColor: `${category.accentColor}33`,
                      color: "rgba(200, 220, 240, 0.85)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
