"use client";

import { useState } from "react";
import Image from "next/image";
import { museumCatalog } from "@/data/museumCatalog";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { PortraitExhibit } from "@/components/PortraitExhibit";
import { TheaterSkills } from "@/components/TheaterSkills";
import { TicketModal } from "@/components/TicketModal";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const { curator, projects, workingExperience, organizationalExperience, education } = museumCatalog;

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [ticketModalState, setTicketModalState] = useState<{
    isOpen: boolean;
    title: string;
    tickets: typeof workingExperience;
  }>({
    isOpen: false,
    title: "",
    tickets: [],
  });

  return (
    <main style={{ position: "relative", minHeight: "100vh", paddingBottom: "100px", overflowX: "hidden" }}>
      
      {/* ------------------------------------------------------------- */}
      {/* 1. CLASSICAL PAINTINGS HUNG ON THE CRIMSON GALLERY WALL       */}
      {/* ------------------------------------------------------------- */}
      <div className="museum-wall-art" style={{ top: "90px", left: "2%", width: "170px", height: "230px" }}>
        <Image src="/images/rose.jpg" alt="Rose" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="museum-wall-art" style={{ top: "110px", right: "2%", width: "180px", height: "250px" }}>
        <Image src="/images/creation.jpg" alt="Creation" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="museum-wall-art" style={{ top: "540px", left: "3%", width: "200px", height: "150px" }}>
        <Image src="/images/ophelia.jpg" alt="Ophelia" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="museum-wall-art" style={{ top: "580px", right: "2%", width: "170px", height: "250px" }}>
        <Image src="/images/cathedral.jpg" alt="Cathedral" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="museum-wall-art" style={{ top: "1100px", left: "2%", width: "160px", height: "240px" }}>
        <Image src="/images/ballroom.jpg" alt="Ballroom" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="museum-wall-art" style={{ top: "1200px", right: "3%", width: "170px", height: "250px" }}>
        <Image src="/images/swans.png" alt="Swans" fill style={{ objectFit: "cover" }} />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. TOP TASKBAR                                                */}
      {/* ------------------------------------------------------------- */}
      <header className="museum-taskbar">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "#e8c872", letterSpacing: "0.2em", fontSize: "12px" }}>
            THE PORTOFOLIO EXHIBITION
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>joanna.gallery</span>
        </div>

        <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href="#about">Curator</a>
          <a href="#gallery">Exhibits</a>
          <a href="#skills">Skills Arena</a>
          <button
            onClick={() => setIsContactOpen(true)}
            style={{
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "rgba(212, 175, 55, 0.2)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              color: "#e8c872",
            }}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 3. HERO: PHOTO (LEFT) FLUSH WITH FIRST CARD (RIGHT)           */}
      {/* ------------------------------------------------------------- */}
      <section id="about" className="hero-layout">
        
        {/* PHOTO ON LEFT (Flush with top of right column) */}
        <div className="photo-column">
          <PortraitExhibit />
        </div>

        {/* DYNAMIC, HUMAN-CENTERED CARDS ON RIGHT */}
        <div className="descriptions-column">
          
          {/* Card 1: NAME & VERIFIED STATUS (Flush aligned) */}
          <div className="desc-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
              <div>
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#e8c872", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                  Computer Engineering • Universitas Indonesia
                </span>
                <h1 style={{ fontSize: "32px", fontWeight: "normal", color: "#ffffff", marginBottom: "4px" }}>
                  {curator.name}
                </h1>
              </div>
              <span style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "9999px", background: "rgba(212, 175, 55, 0.15)", border: "1px solid rgba(212, 175, 55, 0.4)", color: "#e8c872" }}>
                Active Chairman 2026
              </span>
            </div>

            <p style={{ fontSize: "14px", color: "#f0dfb8", margin: "6px 0 10px 0" }}>
              {curator.headline}
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", fontSize: "12px", color: "#d5cec3" }}>
              <span style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(255,255,255,0.06)" }}>📍 {curator.location}</span>
              <span style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(255,255,255,0.06)" }}>🎓 3.69 GPA</span>
              <span style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(255,255,255,0.06)" }}>{curator.pronouns}</span>
            </div>
          </div>

          {/* Card 2: STATEMENT */}
          <div className="desc-card">
            <h3 style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#e8c872", textTransform: "uppercase", marginBottom: "8px" }}>
              About & Engineering Focus
            </h3>
            <p style={{ fontSize: "14px", color: "#e3ded5", lineHeight: "1.7" }}>
              Undergraduate student at Universitas Indonesia with a track record of turning technical concepts into robust, data-backed systems. 
              My engineering spans from agentic AI workflows and full-stack REST infrastructure down to cycle-accurate AVR assembly routines and corporate network diagnostics. 
              Whether leading 10+ client consulting negotiations or architecting software, I value clear specifications, composed execution under pressure, and measurable outcomes.
            </p>
          </div>

          {/* Card 3: EXPERIENCE (Clickable Tickets) */}
          <div className="desc-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#e8c872", textTransform: "uppercase" }}>
                Experience
              </h3>
              <span style={{ fontSize: "11px", color: "#e8c872", fontStyle: "italic" }}>🎫 Tap admission card to view details</span>
            </div>

            {/* Subsection A: Working Experience */}
            <div
              style={{
                background: "rgba(0,0,0,0.35)",
                padding: "12px 16px",
                borderRadius: "12px",
                marginBottom: "10px",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "all 0.2s",
              }}
              onClick={() =>
                setTicketModalState({
                  isOpen: true,
                  title: "Working Experience",
                  tickets: workingExperience,
                })
              }
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#e8c872")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ fontSize: "13px", fontWeight: "bold", color: "#fff" }}>🏛️ Working Experience</span>
                <span style={{ fontSize: "11px", color: "#e8c872" }}>View Ticket ({workingExperience.length}) →</span>
              </div>
              <p style={{ fontSize: "12px", color: "#cec8bd" }}>
                PT PLN Icon Plus (Corporate IT Intern) • 10-Floor Network Diagnostics & I-Seatman Web Platform
              </p>
            </div>

            {/* Subsection B: Organizational Experience */}
            <div
              style={{
                background: "rgba(0,0,0,0.35)",
                padding: "12px 16px",
                borderRadius: "12px",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "all 0.2s",
              }}
              onClick={() =>
                setTicketModalState({
                  isOpen: true,
                  title: "Organizational Experience",
                  tickets: organizationalExperience,
                })
              }
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#e8c872")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ fontSize: "13px", fontWeight: "bold", color: "#fff" }}>⚜️ Organizational Experience</span>
                <span style={{ fontSize: "11px", color: "#e8c872" }}>View Tickets ({organizationalExperience.length}) →</span>
              </div>
              <p style={{ fontSize: "12px", color: "#cec8bd" }}>
                Chairman (EXERCISE FTUI 2026) • Backend Engineering Intern • Staff of Student Affairs (IME FTUI) • Staff of HR
              </p>
            </div>
          </div>

          {/* Card 4: EDUCATION & HONORS */}
          <div className="desc-card">
            <h3 style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#e8c872", textTransform: "uppercase", marginBottom: "10px" }}>
              Academic Distinctions & Laurels
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {education.map((edu, idx) => (
                <div key={idx} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#fff", fontSize: "14px" }}>{edu.institution}</span>
                    {edu.gpa && <span style={{ color: "#e8c872", fontSize: "12px" }}>{edu.gpa}</span>}
                  </div>
                  <p style={{ color: "#a89f91", fontSize: "12px", fontStyle: "italic" }}>{edu.degree}</p>
                  {edu.honors.map((h, hIdx) => (
                    <p key={hIdx} style={{ color: "#f0dfb8", fontSize: "11px", marginTop: "2px" }}>✦ {h}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. DOWNWARD ARROW */}
      <div className="arrow-container">
        <a href="#gallery" className="downward-arrow-btn">
          ▼
        </a>
      </div>

      {/* 5. "PROJECT GALLERY" HORIZONTAL BAR */}
      <section id="gallery" className="gallery-bar">
        <h2>project gallery</h2>
      </section>

      {/* 6. RESTORED 5-CARD 3D COVERFLOW SLIDER */}
      <ProjectCarousel projects={projects} />

      {/* 7. THEATER SEATING ARENA FOR SKILLS */}
      <section id="skills">
        <TheaterSkills />
      </section>

      {/* MODALS */}
      <TicketModal
        isOpen={ticketModalState.isOpen}
        onClose={() => setTicketModalState((s) => ({ ...s, isOpen: false }))}
        title={ticketModalState.title}
        tickets={ticketModalState.tickets}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}