"use client";

import { ExperienceTicket } from "@/data/museumCatalog";
import Image from "next/image";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tickets: ExperienceTicket[];
}

export function TicketModal({ isOpen, onClose, title, tickets }: TicketModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        backgroundColor: "rgba(10, 3, 5, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "880px",
          maxHeight: "85vh",
          backgroundColor: "#200609",
          border: "1px solid rgba(212, 175, 55, 0.4)",
          borderRadius: "24px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 28px",
            borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <div>
            <span style={{ fontSize: "11px", letterSpacing: "0.25em", color: "#e8c872", textTransform: "uppercase" }}>
              Admission Archive • {title}
            </span>
            <h3 style={{ fontSize: "20px", color: "#fff", fontWeight: "normal", marginTop: "2px" }}>
              Curated Experience Tickets ({tickets.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Ticket Deck */}
        <div style={{ padding: "24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "22px" }}>
          {tickets.map((t) => (
            <div
              key={t.id}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#f5f0e6",
                color: "#1a1614",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                border: "1px solid #dcd2c0",
                minHeight: "180px",
              }}
            >
              {/* Left Photo Stub: Real Team Photo */}
              <div
                style={{
                  width: "150px",
                  flexShrink: 0,
                  position: "relative",
                  backgroundColor: t.badgeColor,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={t.image}
                  alt={t.role}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    padding: "10px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#fff", textTransform: "uppercase", fontWeight: "bold" }}>
                    {t.ticketNumber}
                  </span>
                </div>
              </div>

              {/* Main Ticket Body: SCROLLABLE DESCRIPTION */}
              <div
                style={{
                  flex: 1,
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minWidth: 0,
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8b263e", fontWeight: "bold" }}>
                      {t.type} Admission
                    </span>
                    <span style={{ fontSize: "11px", color: "#665e57", fontFamily: "monospace" }}>{t.period}</span>
                  </div>

                  <h4 style={{ fontSize: "18px", color: "#1a1614", marginBottom: "2px" }}>{t.role}</h4>
                  <p style={{ fontSize: "13px", color: "#61574d", fontStyle: "italic", marginBottom: "8px" }}>
                    {t.institution} • {t.location}
                  </p>

                  {/* Scrollable Bullet Points */}
                  <div style={{ maxHeight: "120px", overflowY: "auto", paddingRight: "6px" }}>
                    <ul style={{ paddingLeft: "16px", margin: 0, fontSize: "12px", color: "#3a342f", lineHeight: "1.6" }}>
                      {t.bulletPoints.map((pt, idx) => (
                        <li key={idx} style={{ marginBottom: "6px" }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Perforation Line with Ticket Cutouts */}
              <div
                style={{
                  width: "1px",
                  borderLeft: "2px dashed #b5a996",
                  position: "relative",
                  margin: "8px 0",
                }}
              >
                <div style={{ position: "absolute", top: "-18px", left: "-11px", width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#200609" }} />
                <div style={{ position: "absolute", bottom: "-18px", left: "-11px", width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#200609" }} />
              </div>

              {/* Right Stub: Barcode & Museum Seal */}
              <div
                style={{
                  width: "110px",
                  flexShrink: 0,
                  padding: "16px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#eee7da",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: "bold", color: "#3a342f" }}>
                    MUSEO
                  </p>
                  <p style={{ fontSize: "8px", color: "#776e65" }}>ARCHIVE</p>
                </div>

                <div style={{ display: "flex", gap: "2px", alignItems: "center", height: "42px", margin: "6px 0" }}>
                  {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3].map((w, bIdx) => (
                    <div key={bIdx} style={{ width: `${w}px`, height: "100%", backgroundColor: "#1a1614" }} />
                  ))}
                </div>

                <p style={{ fontSize: "8px", fontFamily: "monospace", color: "#554d46" }}>ADMIT ONE</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}