"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectArtifact } from "@/data/museumCatalog";

export function ProjectCarousel({ projects }: { projects: ProjectArtifact[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 10 }}>
      
      {/* 3D Coverflow Stage */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1150px",
          height: "540px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1200px",
          margin: "0 auto",
        }}
      >
        {projects.map((item, index) => {
          let offset = index - current;
          if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
          if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

          const isCenter = offset === 0;
          const isMid = Math.abs(offset) === 1;
          const isOuter = Math.abs(offset) === 2;

          if (!isCenter && !isMid && !isOuter) return null;

          const x = offset * 250;
          const scale = isCenter ? 1.0 : isMid ? 0.82 : 0.68;
          const rotateY = offset * -25;
          const opacity = isCenter ? 1 : isMid ? 0.75 : 0.35;
          const zIndex = isCenter ? 30 : 20 - Math.abs(offset);

          return (
            <div
              key={item.id}
              onClick={() => setCurrent(index)}
              style={{
                position: "absolute",
                width: "360px",
                height: "500px",
                borderRadius: "24px",
                cursor: "pointer",
                transform: `translateX(${x}px) scale(${scale}) rotateY(${rotateY}deg)`,
                opacity: opacity,
                zIndex: zIndex,
                transition: "all 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.85)",
                overflow: "hidden",
                border: isCenter ? "2px solid rgba(232, 200, 114, 0.8)" : "1px solid rgba(255, 255, 255, 0.2)",
                background: "#18080c",
              }}
            >
              {/* Top Half: Real Project Photo */}
              <div style={{ position: "relative", width: "100%", height: "230px", backgroundColor: "#000", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: "12px", left: "12px", padding: "3px 10px", borderRadius: "9999px", background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.2)", fontSize: "10px", color: "#e8c872", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "monospace" }}>
                  {item.accessionNumber}
                </div>
              </div>

              {/* Bottom Half: Frosted Liquid Glass Description */}
              <div
                style={{
                  height: "270px",
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "linear-gradient(180deg, rgba(25, 8, 12, 0.9) 0%, rgba(10, 3, 5, 0.98) 100%)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                    <h3 style={{ fontSize: "20px", color: "#ffffff", fontWeight: "normal" }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: "11px", color: "#e8c872", fontFamily: "monospace" }}>{item.period}</span>
                  </div>

                  <p style={{ fontSize: "11px", color: "#e8c872", fontStyle: "italic", marginBottom: "8px" }}>
                    {item.aspectQuote}
                  </p>

                  <p style={{ fontSize: "11px", color: "#d5cec3", lineHeight: "1.5", marginBottom: "10px" }}>
                    {item.curatorNote}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px" }}>
                  {item.medium.map((m, idx) => (
                    <span key={idx} style={{ fontSize: "9px", padding: "2px 7px", borderRadius: "9999px", background: "rgba(255,255,255,0.08)", color: "#e8c872", border: "1px solid rgba(255,255,255,0.1)" }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* RESTORED SLIDER CONTROLLER CAPSULE                            */}
      {/* ------------------------------------------------------------- */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "16px" }}>
        
        {/* Previous / Active Project / Next Capsule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px 28px",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
          }}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={prev}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#e8c872",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
          >
            ◀
          </button>

          {/* Active Project Label */}
          <div style={{ textAlign: "center", minWidth: "180px", padding: "0 10px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8c872", display: "block" }}>
              Project {current + 1} of {projects.length}
            </span>
            <span style={{ fontSize: "15px", color: "#ffffff", fontWeight: "normal" }}>
              {projects[current].title}
            </span>
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={next}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#e8c872",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
          >
            ▶
          </button>
        </div>

        {/* Clickable Pagination Dots */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: idx === current ? "24px" : "8px",
                height: "6px",
                borderRadius: "9999px",
                border: "none",
                backgroundColor: idx === current ? "#e8c872" : "rgba(255,255,255,0.25)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}