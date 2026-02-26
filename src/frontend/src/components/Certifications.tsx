const CERTS = [
  {
    name: "Decode Data Science",
    issuer: "GUVI + HCL",
    date: "Jan 23, 2026",
    color: "#00d4ff",
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Feb 06, 2026",
    color: "#7c3aed",
  },
  {
    name: "Customer Engagement: Communication and Personality Dynamics",
    issuer: "IBM",
    date: "Feb 07, 2026",
    color: "#00f5ff",
  },
  {
    name: "Customer Engagement: Problem Solving and Process Controls",
    issuer: "IBM",
    date: "Feb 07, 2026",
    color: "#a855f7",
  },
];

function CertIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`certGrad-${color}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color === "#00d4ff" ? "#7c3aed" : "#00d4ff"} />
        </linearGradient>
      </defs>
      {/* Ribbon / medal shape */}
      <circle cx="20" cy="16" r="11" stroke={`url(#certGrad-${color})`} strokeWidth="2" fill={`${color}15`}/>
      <path d="M14 26 L10 38 L20 33 L30 38 L26 26" stroke={`url(#certGrad-${color})`} strokeWidth="2" fill={`${color}20`}/>
      <path d="M16 16 L18.5 18.5 L24 13" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-primary"
      style={{ padding: "6rem 0" }}
    >
      <div className="section-container">
        {/* Heading */}
        <div data-aos="fade-up" style={{ marginBottom: "3.5rem" }}>
          <h2 className="section-heading gradient-text">Certifications</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>
            Professional credentials and course completions
          </p>
        </div>

        {/* 2x2 Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {CERTS.map((cert, i) => (
            <div
              key={cert.name}
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
              className="glass-card cert-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Icon + date row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "14px",
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CertIcon color={cert.color} />
                </div>

                {/* Date badge */}
                <span
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    color: cert.color,
                    borderRadius: "999px",
                    padding: "4px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {cert.date}
                </span>
              </div>

              {/* Name and issuer */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.95)",
                    margin: "0 0 0.4rem 0",
                    lineHeight: 1.4,
                  }}
                >
                  {cert.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.45)",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: cert.color,
                    }}
                    aria-hidden="true"
                  />
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
