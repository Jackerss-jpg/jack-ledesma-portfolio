import { useState } from "react";
import conslemobile from "./assets/consolemobile.png";
import fundreview from "./assets/fundreview.png";
import payout from "./assets/payout.png";
import recon from "./assets/recon.png";
import wallet from "./assets/wallet3.png";
import walletmobile from "./assets/walletmobile.png";
import accountmobile from "./assets/accountmobile.png";

function App() {
  const [tab, setTab] = useState("home");

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#ffffff",
        color: "#111",
        minHeight: "100vh",
        width: "100%",
        padding: "60px",
        boxSizing: "border-box",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          display: "flex",
          gap: "30px",
          marginBottom: "60px",
          fontSize: "18px",
        }}
      >
        <span style={tabStyle(tab === "home")} onClick={() => setTab("home")}>
          Home
        </span>

        <span
          style={tabStyle(tab === "projects")}
          onClick={() => setTab("projects")}
        >
          Projects
        </span>
      </nav>

      {tab === "home" && <Home />}
      {tab === "projects" && <Projects />}
    </main>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          marginBottom: "90px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "90px",
              lineHeight: "0.95",
              margin: 0,
              letterSpacing: "-3px",
            }}
          >
            Jack Edwin
            <br />
            Ledesma
          </h1>

          <p style={{ fontSize: "24px", marginTop: "20px" }}>
            Full Stack & Mobile Developer
          </p>
        </div>

        <div style={card}>
          <h3>Tech Focus</h3>
          <p style={{ lineHeight: "1.8" }}>
            React • Blazor • .NET MAUI • Node.js • APIs
            <br />
            Automation Systems • Mobile Development
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "34px" }}>Experience</h2>

        <p>
          <strong>Full Stack & Mobile Developer — Infotouch System Inc</strong>
          <br />
          July 2025 – February 2026
        </p>

        <p>
          Developed and maintained web and mobile applications using .NET MAUI,
          Blazor, MySQL, MongoDB, and API integrations.
        </p>
      </section>

      {/* TECH STACK */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "34px" }}>Tech Stack</h2>
        <p>React • Blazor • .NET MAUI • Node.js</p>
        <p>MySQL • MongoDB • Supabase</p>
        <p>JWT Auth • APIs • Automation Systems</p>
      </section>

      {/* CONTACT */}
      <section>
        <h2 style={{ fontSize: "30px" }}>Contact</h2>
        <p>ledesmajack3@gmail.com</p>
        <p>09453055039</p>
        <p>https://www.linkedin.com/in/jack-edwin-ledesma-14373636b/</p>
      </section>
    </>
  );
}

function Projects() {
  return (
    <section>
      <h2 style={{ fontSize: "42px", marginBottom: "50px" }}>Projects</h2>

      {/* THESIS */}
      <div style={{ ...card, marginBottom: "70px" }}>
        <h3 style={{ fontSize: "26px" }}>
          Automated Task Delegation & Management System (Thesis)
        </h3>

        <iframe
          width="100%"
          height="420"
          src="https://www.youtube.com/embed/5UYelvZtlI8"
          title="Thesis Project Demo"
          frameBorder="0"
          allowFullScreen
          style={{ borderRadius: "8px", marginTop: "15px" }}
        ></iframe>

        <p style={{ marginTop: "20px", lineHeight: "1.7" }}>
          Designed and developed an AI-assisted task delegation system that
          automatically distributes tasks based on workload, team member
          skillsets, and task difficulty. The system helps project managers
          reduce manual planning while improving team productivity and task
          balance.
        </p>
      </div>

      {/* WEB / ADMIN SYSTEM */}
      <h3 style={{ fontSize: "28px", marginBottom: "25px" }}>
        Web / Admin System
      </h3>

      <div style={projectGrid}>
        <div style={cardLarge}>
          <img src={fundreview} style={imgLarge} alt="Fund Review System" />
          <p>
            Developed the **fund review dashboard** used by administrators to
            validate and review collected payments from field agents. This
            interface ensures that reported collections match the system
            records before approval.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={payout} style={imgLarge} alt="Payout System" />
          <p>
            Built the **commission payout interface** allowing administrators to
            process and release earnings to agents. Implemented payout tracking
            and validation to prevent incorrect payments.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={recon} style={imgLarge} alt="Reconciliation System" />
          <p>
            Created a **transaction reconciliation dashboard** that compares
            multiple financial records to detect inconsistencies and missing
            entries, improving financial accuracy and transparency.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={wallet} style={imgLarge} alt="Wallet System" />
          <p>
            Implemented the **wallet management page** where administrators can
            monitor agent balances, transaction history, and payment activity
            across the system.
          </p>
        </div>
      </div>

      {/* MOBILE SYSTEM */}
      <h3 style={{ fontSize: "28px", marginTop: "70px", marginBottom: "25px" }}>
        Mobile Application
      </h3>

      <div style={projectGrid}>
        <div style={cardLarge}>
          <img src={conslemobile} style={imgLarge} alt="Mobile Console" />
          <p>
            Developed the **mobile console for field agents** to collect
            payments, monitor commission earnings, and submit transaction
            records directly from their mobile devices.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={walletmobile} style={imgLarge} alt="Mobile Wallet" />
          <p>
            Built the **mobile wallet interface** where agents can track their
            earnings, view payout history, and monitor real-time commission
            balances.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={accountmobile} style={imgLarge} alt="Mobile Account" />
          <p>
            Created the **account management screen** allowing agents to manage
            their personal information, security settings, and profile details
            directly within the mobile application.
          </p>
        </div>
      </div>
    </section>
  );
}

const imgStyle = {
  width: "100%",
  borderRadius: "6px",
  marginBottom: "10px",
};

const tabStyle = (active) => ({
  cursor: "pointer",
  fontWeight: active ? "bold" : "normal",
  borderBottom: active ? "2px solid black" : "none",
  paddingBottom: "5px",
});

const card = {
  border: "1px solid #eee",
  padding: "25px",
  borderRadius: "8px",
};

const projectGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(420px,1fr))",
  gap: "35px",
};

const imgLarge = {
  width: "100%",
  borderRadius: "8px",
  marginBottom: "15px",
};

const cardLarge = {
  border: "1px solid #eee",
  padding: "25px",
  borderRadius: "10px",
};

export default App;