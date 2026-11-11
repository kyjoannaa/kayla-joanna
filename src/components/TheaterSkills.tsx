"use client";

import { useState } from "react";
import { museumCatalog } from "@/data/museumCatalog";

export function TheaterSkills() {
  const { theaterSkills } = museumCatalog;
  const [activeSeat, setActiveSeat] = useState<{ name: string; role: string } | null>(null);

  const tiers = [
    { label: "Tier I: Orchestra (Silicon & Languages)", seats: theaterSkills.orchestra, radius: "max-w-2xl" },
    { label: "Tier II: Mezzanine (AI & Data Frameworks)", seats: theaterSkills.mezzanine, radius: "max-w-3xl" },
    { label: "Tier III: Balcony (Hardware & Networks)", seats: theaterSkills.balcony, radius: "max-w-4xl" },
    { label: "Tier IV: Royal Gallery (Leadership & Methods)", seats: theaterSkills.gallery, radius: "max-w-5xl" },
  ];

  return (
    <section style={{ maxWidth: "1100px", margin: "60px auto 40px auto", padding: "0 20px", textAlign: "center" }}>
      {/* Arena Stage Title */}
      <div style={{ marginBottom: "28px" }}>
        <span style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#e8c872" }}>
          Curatorial Masteries
        </span>
        <h2 style={{ fontSize: "28px", color: "#fff", fontWeight: "normal", marginTop: "4px" }}>
          The Amphitheater of Skills
        </h2>
        <p style={{ fontSize: "13px", color: "#bdae9c", fontStyle: "italic", marginTop: "4px" }}>
          Hover over any amphitheater seat to inspect the technical apparatus
        </p>
      </div>

      {/* Amphitheater Curved Seating Arena */}
      <div
        style={{
          position: "relative",
          padding: "40px 24px",
          borderRadius: "32px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(212, 175, 55, 0.25)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* Stage Center Pod */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 24px",
            borderRadius: "9999px",
            background: "linear-gradient(to right, #691726, #3b0911)",
            border: "1px solid rgba(232, 200, 114, 0.5)",
            boxShadow: "0 0 25px rgba(232, 200, 114, 0.25)",
            marginBottom: "36px",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#e8c872", boxShadow: "0 0 10px #e8c872" }} />
          <span style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>
            {activeSeat ? `${activeSeat.name} — ${activeSeat.role}` : "Curator's Podium • Center Stage"}
          </span>
        </div>

        {/* Concentric Tiers */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {tiers.map((tier, tIdx) => (
            <div key={tIdx} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#d4af37", marginBottom: "8px", opacity: 0.85 }}>
                {tier.label}
              </span>

              {/* Curved Row of Seats */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "6px 12px",
                }}
              >
                {tier.seats.map((seat, sIdx) => {
                  const isHovered = activeSeat?.name === seat.name;
                  return (
                    <div
                      key={sIdx}
                      onMouseEnter={() => setActiveSeat(seat)}
                      onMouseLeave={() => setActiveSeat(null)}
                      style={{
                        padding: "8px 18px",
                        borderRadius: "14px",
                        background: isHovered
                          ? "linear-gradient(135deg, #c59b35 0%, #785215 100%)"
                          : "rgba(255, 255, 255, 0.08)",
                        border: isHovered
                          ? "1px solid #ffeebb"
                          : "1px solid rgba(255, 255, 255, 0.15)",
                        color: isHovered ? "#ffffff" : "#f0eae1",
                        fontSize: "13px",
                        cursor: "pointer",
                        transform: isHovered ? "translateY(-8px) scale(1.15)" : "translateY(0) scale(1)",
                        boxShadow: isHovered
                          ? "0 15px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(232, 200, 114, 0.5)"
                          : "0 4px 12px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        position: "relative",
                        zIndex: isHovered ? 20 : 1,
                      }}
                    >
                      <span style={{ fontWeight: isHovered ? "bold" : "normal" }}>{seat.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}