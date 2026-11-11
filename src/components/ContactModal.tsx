"use client";

import { museumCatalog } from "@/data/museumCatalog";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;
  const { curator } = museumCatalog;

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
          maxWidth: "520px",
          backgroundColor: "#1c0608",
          border: "1px solid rgba(212, 175, 55, 0.5)",
          borderRadius: "24px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.95)",
          padding: "32px",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            color: "#fff",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <span style={{ fontSize: "11px", letterSpacing: "0.25em", color: "#e8c872", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
          Inquiries & Dispatches
        </span>
        <h3 style={{ fontSize: "26px", color: "#ffffff", fontWeight: "normal", marginBottom: "8px" }}>
          The Curator’s Desk
        </h3>
        <p style={{ fontSize: "13px", color: "#c5beb3", fontStyle: "italic", marginBottom: "24px" }}>
          Direct channels for engineering consultancy, client negotiations, and acquisitions.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* LinkedIn */}
          <a
            href={curator.contacts.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">{curator.contacts.linkedin.label} ↗</span>
          </a>

          {/* Gmail */}
          <a href={curator.contacts.gmail.url} className="contact-item">
            <span className="contact-label">Gmail</span>
            <span className="contact-value">{curator.contacts.gmail.label}</span>
          </a>

          {/* Phone */}
          <a href={curator.contacts.phone.url} className="contact-item">
            <span className="contact-label">Phone</span>
            <span className="contact-value">{curator.contacts.phone.label}</span>
          </a>

          {/* Instagram */}
          <a
            href={curator.contacts.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">Instagram</span>
            <span className="contact-value">@{curator.contacts.instagram.label} ↗</span>
          </a>

          {/* Line */}
          <div className="contact-item">
            <span className="contact-label">LINE ID</span>
            <span className="contact-value">{curator.contacts.line.label}</span>
          </div>

          {/* GitHub */}
          <a
            href={curator.contacts.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/{curator.contacts.github.label} ↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}