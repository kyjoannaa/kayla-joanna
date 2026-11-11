"use client";

import Image from "next/image";

export function PortraitExhibit() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: 0, padding: 0 }}>
      {/* Flush Gilded Museum Frame (PNG Removed) */}
      <div
        style={{
          width: "290px",
          height: "390px",
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: `
            0 0 0 5px #5e4213,
            0 0 0 9px #c59b35,
            0 0 0 13px #3d290b,
            0 0 0 17px #e8c872,
            0 25px 60px rgba(0, 0, 0, 0.95)
          `,
          backgroundColor: "#110f0e",
          margin: 0,
        }}
      >
        <Image
          src="/images/joanna-portrait.jpg"
          alt="Portrait of Kayla Joanna Irsy Kusumah"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        {/* Warm Canvas Vignette */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 20%, transparent 65%, rgba(0,0,0,0.45) 100%)", pointerEvents: "none" }} />
      </div>

      {/* Brass Wall Plaque */}
      <div className="brass-plaque" style={{ width: "290px", marginTop: "22px" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#e8c872", marginBottom: "4px" }}>
          Portrait of the Curator
        </p>
        <h4 style={{ fontSize: "15px", color: "#f7f4ee", fontWeight: "normal" }}>
          Kayla Joanna Irsy Kusumah
        </h4>
        <p style={{ fontSize: "11px", color: "#a89f91", fontStyle: "italic", marginTop: "3px" }}>
          Universitas Indonesia
        </p>
      </div>
    </div>
  );
}