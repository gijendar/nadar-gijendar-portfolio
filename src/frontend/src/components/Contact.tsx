import { useState } from "react";
import { useActor } from "../hooks/useActor";
import { toast } from "sonner";

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
    value: "linkedin.com/in/nadar-gijendar",
    href: "https://linkedin.com/in/nadar-gijendar",
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
  const { actor } = useActor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitContactMessage(form.name.trim(), form.email.trim(), form.message.trim());
      toast.success("Message sent! I'll get back to you soon. 🚀");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Left: Contact info */}
          <div data-aos="fade-right" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              className="glass-card"
              style={{ padding: "1.75rem", marginBottom: "0.5rem" }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#00d4ff",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  marginTop: 0,
                }}
              >
                Contact Details
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Have a project in mind or want to discuss opportunities? I'm always open to new challenges.
              </p>
            </div>

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

          {/* Right: Form */}
          <div data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="glass-card"
              style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  required
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input"
                  rows={5}
                  required
                  style={{ resize: "vertical", minHeight: "120px" }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-glow"
                style={{
                  padding: "0.9rem 2rem",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  opacity: submitting ? 0.7 : 1,
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {submitting ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ animation: "spin 1s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
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
              margin: "0 0 0.5rem 0",
            }}
          >
            © 2026 Nadar Gijendar Alagendran | Built with passion & precision
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            Built with ♥ using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00d4ff", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
