export interface ProjectArtifact {
  id: string;
  accessionNumber: string;
  title: string;
  domain: "AI & Data Systems" | "Embedded Systems & Hardware" | "Web & Distributed Systems";
  period: string;
  year?: string; // Add this line
  image: string;
  medium: string[];
  curatorNote: string;
  aspectQuote: string;
  links?: {      // Add this block
    repo?: string;
    demo?: string;
    live?: string;
  };
}

export type Artifact = ProjectArtifact;

export interface ExperienceTicket {
  id: string;
  ticketNumber: string;
  type: "Working" | "Organizational";
  role: string;
  institution: string;
  period: string;
  location: string;
  image: string;
  badgeColor: string;
  bulletPoints: string[];
}

export const museumCatalog = {
  curator: {
    name: "Kayla Joanna Irsy Kusumah",
    alias: "Joanna",
    pronouns: "She/Her",
    headline: "Undergraduate Computer Engineering Student at Universitas Indonesia • Chairman of EXERCISE FTUI 2026",
    location: "Jakarta, Indonesia",
    statement:
      "Computer Engineering undergraduate at Universitas Indonesia building at the intersection of agentic AI and bare-metal systems. From engineering multi-agent surplus food distribution platforms (RePlate) down to cycle-accurate AVR assembly (SleepSync). Currently serving as Chairman of EXERCISE FTUI, directing technical client scoping and engineering cohorts.",
    contacts: {
      linkedin: { label: "Kayla Joanna Irsy Kusumah", url: "https://www.linkedin.com/in/kayla-joanna-irsy-kusumah-169247334/" },
      gmail: { label: "kaylajo1304@gmail.com", url: "mailto:kaylajo1304@gmail.com" },
      phone: { label: "081310678098", url: "tel:081310678098" },
      instagram: { label: "kyjoannaa", url: "https://instagram.com/kyjoannaa" },
      line: { label: "kyjoanna", url: "https://line.me/ti/p/~kyjoanna" },
      github: { label: "kyjoannaa", url: "https://github.com/kyjoannaa" },
    },
  },

  // 1. WORKING EXPERIENCE
  workingExperience: [
    {
      id: "pln-icon-plus",
      ticketNumber: "EXP-WK-01",
      type: "Working",
      role: "Corporate IT Intern",
      institution: "PT PLN Icon Plus",
      period: "Jun 2026 — Aug 2026",
      location: "Jakarta, Indonesia",
      image: "/images/iseatman.jpeg",
      badgeColor: "#7e1c31",
      bulletPoints: [
        "Maintained and enhanced the internal 'I-Seatman' web portal (PHP) to support corporate IT administration, desk management, and internal request tracking.",
        "Conducted daily network performance monitoring, routine speed tests across 10 office floors, and port diagnostics to resolve DHCP lease failures and minimize downtime.",
        "Handled end-user IT support and hardware infrastructure maintenance: configured workstations with SAP and domains, crimped LAN cabling, and integrated network printers.",
      ],
    },
  ] as ExperienceTicket[],

  // 2. ORGANIZATIONAL EXPERIENCE (Includes Backend Intern)
  organizationalExperience: [
    {
      id: "exercise-chairman",
      ticketNumber: "EXP-ORG-01",
      type: "Organizational",
      role: "Chairman",
      institution: "EXERCISE FTUI 2026",
      period: "Jan 2026 — Present",
      location: "Depok, West Java, Indonesia",
      image: "/images/chairman.jpeg",
      badgeColor: "#9c6615",
      bulletPoints: [
        "Conducted 10+ client consultations and IT consulting sessions, negotiating project scope from initial user demands to product expectations and technical specifications for software and hardware products.",
        "Innovated and guided the directive board in fostering a system utilizing data analytics and project-based learning to refine organizational strategies and staff performance.",
        "Led outreach initiatives to secure external collaborative partners, bridging the gap between academic projects and real-world deployment.",
        "Guided the executive board in fostering an ecosystem of innovation, utilizing data analytics to refine organizational strategies and project outputs.",
      ],
    },
    {
      id: "exercise-backend",
      ticketNumber: "EXP-ORG-02",
      type: "Organizational",
      role: "Software Backend Engineering Intern",
      institution: "EXERCISE FTUI",
      period: "Oct 2024 — Nov 2024",
      location: "Depok, West Java, Indonesia",
      image: "/images/student-affairs.jpg",
      badgeColor: "#2a4d69",
      bulletPoints: [
        "Developed a backend component and REST API endpoints for a web platform enabling users to post tweets and interact with microblog feeds.",
        "Engineered secure database queries and structured API responses for seamless front-end communication.",
      ],
    },
    {
      id: "ime-student-affairs",
      ticketNumber: "EXP-ORG-03",
      type: "Organizational",
      role: "Staff of Student Affairs",
      institution: "IME FTUI (Ikatan Mahasiswa Elektro)",
      period: "Feb 2025 — Jan 2026",
      location: "Depok, West Java, Indonesia",
      image: "/images/kema.jpeg",
      badgeColor: "#4f2b45",
      bulletPoints: [
        "Honored as the 'Best Performing Staff of 2025' for driving impactful student development initiatives.",
        "Revamped the IPTEK mentorship syllabus by integrating data-driven research and frameworks with PKM-GFT standards, SDGs, and Indonesia Emas 2045.",
      ],
    },
    {
      id: "exercise-hr",
      ticketNumber: "EXP-ORG-04",
      type: "Organizational",
      role: "Staff of Human Resource",
      institution: "EXERCISE FTUI 2025",
      period: "Feb 2025 — Dec 2025",
      location: "Depok, West Java, Indonesia",
      image: "/images/hrexer.jpeg",
      badgeColor: "#2d5d3b",
      bulletPoints: [
        "Developed a specialized mentorship program focused on UI/UX Development, successfully upskilling entry-level members into proficient designers.",
        "Designed skill competency assessments and tracking frameworks for active engineering members.",
      ],
    },
  ] as ExperienceTicket[],

  // 3. CURATED MASTERPIECE PROJECTS (With Real Photos)
  projects: [
    {
      id: "replate",
      accessionNumber: "CAT-AI-01",
      title: "RePlate",
      domain: "AI & Data Systems",
      period: "2024",
      image: "/images/replate.png",
      medium: ["FastAPI", "LangGraph", "LlamaIndex", "ChromaDB", "Supabase (PostgreSQL)"],
      curatorNote: "An agentic AI food surplus distribution backend and mobile application built for Jakarta to automate temporal and dietary matching of luxury hotel surplus with community recipients.",
      aspectQuote: "“Bridging luxury hospitality surplus with community sustenance through agentic AI.”",
    },
    {
      id: "inailens",
      accessionNumber: "CAT-AI-02",
      title: "INAiLens",
      domain: "AI & Data Systems",
      period: "2024",
      image: "/images/inailens.png",
      medium: ["Agentic RAG", "Clinical Guideline Verification", "Python", "e-Klaim APIs"],
      curatorNote: "An AI-powered real-time BPJS Kesehatan anti-fraud claim validation system combining Agentic RAG with authoritative clinical guideline verification directly at e-Klaim entry points.",
      aspectQuote: "“Safeguarding national healthcare resources via real-time clinical claim intelligence.”",
    },
    {
      id: "sleepsync",
      accessionNumber: "CAT-EMB-01",
      title: "SleepSync (AVR Alarm Timer)",
      domain: "Embedded Systems & Hardware",
      period: "2024",
      image: "/images/timeravr.jpeg",
      medium: ["Pure AVR Assembly", "ATmega328P", "Hardware Timers", "SPI / I2C Protocols"],
      curatorNote: "Bare-metal alarm timer engineered strictly in pure AVR Assembly for the ATmega328P. Employs hardware interrupts, prescaler timer routines, and raw driver protocols for sensor communication.",
      aspectQuote: "“Mastering silicon through cycle-accurate assembly and low-level timer registers.”",
    },
    {
      id: "iseatman",
      accessionNumber: "CAT-EMB-02",
      title: "I-Seatman (PLN Icon Plus)",
      domain: "Embedded Systems & Hardware",
      period: "2026",
      image: "/images/iseatman.jpeg",
      medium: ["PHP", "SQL", "Network Monitoring", "Corporate IT Operations"],
      curatorNote: "Internal management and monitoring web platform developed during corporate internship to track multi-floor network reliability, DHCP lease uptime, and workstation deployments across 10 floors.",
      aspectQuote: "“Synchronizing corporate infrastructure diagnostics across multi-floor enterprises.”",
    },
    {
      id: "echodrop",
      accessionNumber: "CAT-WEB-01",
      title: "EchoDrop",
      domain: "Web & Distributed Systems",
      period: "2024",
      image: "/images/echodrop.jpeg",
      medium: ["PostgreSQL", "Redis", "Distributed Caching", "UML / ERD Architecture"],
      curatorNote: "Anonymous multimedia messaging web project utilizing PostgreSQL alongside Redis for caching and session optimization, designed to handle multimedia metadata efficiently.",
      aspectQuote: "“Ephemeral multimedia exchange fortified with low-latency Redis caching layers.”",
    },
  ] as ProjectArtifact[],

  // 4. THEATER SEATING SKILLS ARENA
  theaterSkills: {
    orchestra: [
      { name: "AVR Assembly", role: "Silicon / Timers" },
      { name: "C / C++", role: "Systems Programming" },
      { name: "Python", role: "AI & Scripting" },
      { name: "PHP", role: "Enterprise Web" },
      { name: "JavaScript", role: "Full-Stack" },
      { name: "SQL", role: "Relational Queries" },
    ],
    mezzanine: [
      { name: "FastAPI", role: "High-Perf APIs" },
      { name: "LangGraph", role: "Agentic Workflows" },
      { name: "LlamaIndex", role: "RAG Pipeline" },
      { name: "ChromaDB", role: "Vector Store" },
      { name: "Redis", role: "Session Caching" },
      { name: "Supabase", role: "Cloud Postgres" },
      { name: "SPI / I2C", role: "Hardware Buses" },
    ],
    balcony: [
      { name: "ATmega328P", role: "Microcontrollers" },
      { name: "DHCP Diagnostics", role: "Network Ops" },
      { name: "Network Security", role: "Multi-floor IT" },
      { name: "Hardware Interfacing", role: "Sensors & Timers" },
      { name: "SAP Workstations", role: "Corporate IT" },
    ],
    gallery: [
      { name: "IT Client Consulting", role: "Scope Negotiation" },
      { name: "Project-Based Learning", role: "Curriculum Design" },
      { name: "Data-Driven Strategy", role: "Decision Making" },
      { name: "German (A2)", role: "Language" },
      { name: "English (Fluent)", role: "Language" },
    ],
  },

  // 5. EDUCATION
  education: [
    {
      institution: "Universitas Indonesia",
      degree: "Undergraduate Computer Engineering",
      period: "Aug 2024 — Present",
      gpa: "3.69 GPA",
      honors: ["Best PDT Final Project Prototype"],
    },
    {
      institution: "Global Prestasi Senior High School",
      degree: "Science & Technology Track",
      period: "July 2021 — May 2024",
      honors: [
        "5th highest accumulative score in Science and Technology",
        "7th highest accumulative score parallel (91.46 score)",
        "Best Student in German, English, and Sociology",
      ],
    },
  ],
};