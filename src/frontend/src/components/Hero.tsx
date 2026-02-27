import { useEffect, useRef, useState, useCallback } from "react";

const TYPING_STRINGS = [
  "Computer Science Undergraduate",
  "Web Developer",
  "AI Enthusiast",
  "Full-Stack Builder",
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [typedText, setTypedText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const delay = isDeleting ? 50 : charIndex === current.length ? 1800 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setTypedText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setStringIndex((s) => (s + 1) % TYPING_STRINGS.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex]);

  // Canvas particles
  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const COLORS = ["#00d4ff", "#7c3aed", "#00f5ff", "rgba(0,212,255,0.5)"];
    const count = Math.floor((canvas.width * canvas.height) / 14000);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles(canvas);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [initParticles]);

  // Cursor glow
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice || !cursorRef.current) return;

    const el = cursorRef.current;
    el.style.display = "block";

    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      className="section-primary"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="cursor-glow"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="particle-canvas"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      />

      {/* Floating blobs */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />
      <div className="blob blob-4" aria-hidden="true" />

      {/* Content */}
      <div
        className="section-container"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          paddingTop: "7rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Greeting */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#00d4ff",
            marginBottom: "1rem",
            fontWeight: 500,
          }}
        >
          👋 Hello, World! I am
        </p>

        {/* Name */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="gradient-text">Nadar Gijendar</span>
          <br />
          <span className="gradient-text">Alagendran</span>
        </h1>

        {/* Typing subtitle */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            minHeight: "2.2rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {typedText}
          </span>
          <span className="typing-cursor" aria-hidden="true" />
        </div>

        {/* Power statement */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "600px",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          I build <strong style={{ color: "rgba(255,255,255,0.8)" }}>intelligent, scalable</strong> and production-ready digital solutions with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <button
            type="button"
          className="btn-glow btn-pulse"
          onClick={() => {
            const el = document.getElementById("projects");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            padding: "0.75rem 1.75rem",
            borderRadius: "999px",
            fontSize: "0.95rem",
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          <span>View Projects →</span>
        </button>
        <a
          href="/assets/Gijendar_Resume.pdf"
          download="Nadar_Gijendar_Resume.pdf"
          aria-label="Download Resume PDF"
          className="btn-glass"
            style={{
              padding: "0.75rem 1.75rem",
              borderRadius: "999px",
              fontSize: "0.95rem",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.01em",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/gijendar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.7)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.borderColor = "#00d4ff";
              t.style.color = "#00d4ff";
              t.style.boxShadow = "0 0 15px rgba(0,212,255,0.4)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.borderColor = "var(--glass-border)";
              t.style.color = "rgba(255,255,255,0.7)";
              t.style.boxShadow = "none";
            }}
          >
            <span className="sr-only">GitHub</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:nadargijendar@gmail.com"
            aria-label="Email"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.7)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.borderColor = "#00d4ff";
              t.style.color = "#00d4ff";
              t.style.boxShadow = "0 0 15px rgba(0,212,255,0.4)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.borderColor = "var(--glass-border)";
              t.style.color = "rgba(255,255,255,0.7)";
              t.style.boxShadow = "none";
            }}
          >
            <span className="sr-only">Email</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gijendar-nadar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.7)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              t.style.borderColor = "#00d4ff";
              t.style.color = "#00d4ff";
              t.style.boxShadow = "0 0 15px rgba(0,212,255,0.4)";
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              t.style.borderColor = "var(--glass-border)";
              t.style.color = "rgba(255,255,255,0.7)";
              t.style.boxShadow = "none";
            }}
          >
            <span className="sr-only">LinkedIn</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        {/* Scroll hint */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll to explore</span>
          <div
            style={{
              width: "1px",
              height: "50px",
              background: "linear-gradient(180deg, #00d4ff, transparent)",
              borderRadius: "1px",
              animation: "slideDown 2s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.4; transform: scaleY(0.5); }
        }
      `}</style>
    </section>
  );
}
