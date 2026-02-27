const CONTACT_INFO = [
  {
    label: "Email",
    value: "nadargijendar@gmail.com",
    href: "mailto:nadargijendar@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: "#00d4ff",
  },
  {
    label: "Phone",
    value: "+91 7249662336",
    href: "tel:+917249662336",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    color: "#7c3aed",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gijendar-nadar",
    href: "https://www.linkedin.com/in/gijendar-nadar",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: "#0077b5",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/gijendar",
    href: "https://github.com/gijendar",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: "#e2e8f0",
    external: true,
  },
  {
    label: "Location",
    value: "Bhiwandi, Maharashtra, India",
    href: "https://maps.google.com/?q=Bhiwandi,Maharashtra,India",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    color: "#00f5ff",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-secondary"
      style={{ padding: "6rem 0 0" }}
    >
      <div className="section-container">
        {/* Heading */}
        <div data-aos="fade-up" style={{ marginBottom: "3.5rem" }}>
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "0.5rem" }}>
            Open to opportunities, collaborations, and conversations
          </p>
        </div>

        {/* Contact info grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            maxWidth: "860px",
          }}
        >
          {CONTACT_INFO.map((info) => (
            <a
              key={info.label}
              href={info.href}
              target={info.external ? "_blank" : undefined}
              rel={info.external ? "noopener noreferrer" : undefined}
              className="glass-card"
              style={{
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.borderColor = `${info.color}44`;
                t.style.background = `${info.color}08`;
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.borderColor = "var(--glass-border)";
                t.style.background = "var(--glass-bg)";
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  background: `${info.color}15`,
                  border: `1px solid ${info.color}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: info.color,
                  flexShrink: 0,
                }}
              >
                {info.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.4)",
                    margin: "0 0 2px 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {info.label}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.8)",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer
          className="footer-glow"
          style={{
            marginTop: "5rem",
            padding: "2rem 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.4)",
              margin: 0,
            }}
          >
            © 2026 Nadar Gijendar Alagendran | Built with passion & precision
          </p>
        </footer>
      </div>
    </section>
  );
}
