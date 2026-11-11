"use client";

export function MuseumVectorBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* 1. Base Crimson Gallery Ambience */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#2a0509",
          backgroundImage: `
            radial-gradient(circle at 50% 12%, rgba(165, 26, 42, 0.65) 0%, transparent 60%),
            radial-gradient(circle at 10% 85%, rgba(100, 10, 22, 0.7) 0%, transparent 50%),
            radial-gradient(circle at 90% 85%, rgba(65, 5, 12, 0.85) 0%, transparent 50%)
          `,
        }}
      />

      {/* 2. Vector Barrel Vault Ceiling & Arch Ribs (From Reference Photo) */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "380px",
          opacity: 0.28,
        }}
        viewBox="0 0 1440 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Outer Vault Arch */}
        <path
          d="M0 0 C400 240, 1040 240, 1440 0 L1440 0 L0 0 Z"
          fill="rgba(212, 175, 55, 0.08)"
        />
        {/* Coffered Arch Ribs */}
        <path
          d="M0 0 C420 200, 1020 200, 1440 0"
          stroke="rgba(232, 200, 114, 0.4)"
          strokeWidth="3"
        />
        <path
          d="M0 30 C440 230, 1000 230, 1440 30"
          stroke="rgba(232, 200, 114, 0.25)"
          strokeWidth="2"
        />
        <path
          d="M0 70 C470 260, 970 260, 1440 70"
          stroke="rgba(232, 200, 114, 0.18)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />

        {/* Vertical Transverse Rib Columns */}
        <line x1="280" y1="0" x2="280" y2="280" stroke="rgba(212, 175, 55, 0.12)" strokeWidth="1.5" />
        <line x1="480" y1="0" x2="480" y2="240" stroke="rgba(212, 175, 55, 0.12)" strokeWidth="1.5" />
        <line x1="720" y1="0" x2="720" y2="220" stroke="rgba(212, 175, 55, 0.18)" strokeWidth="2" />
        <line x1="960" y1="0" x2="960" y2="240" stroke="rgba(212, 175, 55, 0.12)" strokeWidth="1.5" />
        <line x1="1160" y1="0" x2="1160" y2="280" stroke="rgba(212, 175, 55, 0.12)" strokeWidth="1.5" />

        {/* Downlight Spotlights on Ceiling (White/Gold glow nodes) */}
        {[280, 400, 520, 640, 720, 800, 920, 1040, 1160].map((x, idx) => (
          <g key={idx}>
            <circle cx={x} cy={70 + (idx % 2) * 20} r="3" fill="#ffeebb" />
            <circle cx={x} cy={70 + (idx % 2) * 20} r="12" fill="rgba(255, 238, 187, 0.15)" />
          </g>
        ))}
      </svg>

      {/* 3. Spotlights Beaming Down onto the Wall */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(255, 225, 140, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* 4. Polished Marble Floor with Light Reflection (Bottom) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "220px",
          background: "linear-gradient(to bottom, transparent, rgba(12, 2, 4, 0.85) 60%, rgba(5, 1, 2, 0.98) 100%)",
          borderTop: "1px solid rgba(212, 175, 55, 0.2)",
        }}
      >
        {/* Floorboard / Parquet Perspective Lines */}
        <svg
          style={{ width: "100%", height: "100%", opacity: 0.2 }}
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          {[-200, 0, 200, 400, 550, 720, 890, 1040, 1240, 1440, 1640].map((x, i) => (
            <line
              key={i}
              x1="720"
              y1="0"
              x2={x}
              y2="220"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
            />
          ))}
          <line x1="0" y1="50" x2="1440" y2="50" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1" />
          <line x1="0" y1="120" x2="1440" y2="120" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}