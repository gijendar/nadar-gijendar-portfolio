import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? "hidden" : ""}`}>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 70, height: 70 }}>
        <div className="spinner-outer" />
        <div className="spinner-inner" style={{ position: "absolute" }} />
        <span className="preloader-logo gradient-text">NGA</span>
      </div>
    </div>
  );
}
