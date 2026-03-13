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
            Jack Edwin A.
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

  <p>
    <strong>OJT / Internship — Full Stack Developer — Infotouch System Inc</strong>
    <br />
    February 2025 – April 2025 (300 hours)
  </p>

  <p>
    • Assisted in developing web application features using Blazor and .NET technologies.
    <br />
    • Supported API integration and database-related tasks involving MySQL and MongoDB.
  </p>
</section>

    

      {/* TECH STACK */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "34px" }}>Tech Stack</h2>
        <p>
Programming Languages: Java, JavaScript, Python, C++, C#, HTML, Tailwind CSS </p>
 <p>Frameworks & Development: Blazor, React, Bootstrap, .NET MAUI </p>
<p>Backend Development: Minimal API (.NET), Node.js / Express </p>
<p>Database Technologies: MySQL, MongoDB, Dapper, Supabase </p>
<p>Version Control & Tools: Git, GitHub, Azure DevOps, Postman, Insomnia </p>
<p>API & Security: CRUD Operations, Request Validation, JWT Authentication, OTP Login, Token Validation & Refresh 
Tokens </p>
<p>Methodologies: Agile, Waterfall</p>
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
      <h2 style={{ fontSize: "42px", marginBottom: "30px" }}>Projects</h2>

      {/* NDA NOTICE */}
      <p style={{ marginBottom: "50px", lineHeight: "1.7", fontStyle: "italic" }}>
        Note: Due to NDA agreements with my previous company, specific client
        names, agent identities, and sensitive operational details cannot be
        displayed. The following examples demonstrate the systems and features I
        developed without exposing confidential data.
      </p>

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
          automatically assigns tasks based on workload distribution, team
          member skillsets, and task complexity. The system analyzes available
          personnel and dynamically balances assignments to improve productivity
          and reduce manual project planning.
        </p>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          <strong>Technologies Used:</strong> Python (AI model training), Task
          prioritization logic, workload scoring algorithm, Node.js backend,
          MongoDB database, REST API integration.
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
            Developed a <strong>Fund Review Dashboard</strong> used by
            administrators to validate and audit collection reports submitted by
            field agents. Implemented validation logic that cross-checks
            submitted collection data against recorded transactions in the
            database before approval.
          </p>

          <p>
            <strong>Technologies:</strong> Blazor, ASP.NET Core API, MySQL,
            Dapper ORM, SQL validation queries.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={payout} style={imgLarge} alt="Payout System" />

          <p>
            Built a <strong>Commission Payout Management Interface</strong> that
            allows administrators to process agent commissions. Implemented
            payout verification logic, transaction tracking, and safeguards to
            prevent duplicate or incorrect payout transactions.
          </p>

          <p>
            <strong>Technologies:</strong> Blazor, REST APIs, MySQL, Dapper,
            transaction validation logic.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={recon} style={imgLarge} alt="Reconciliation System" />

          <p>
            Created a <strong>Financial Reconciliation Dashboard</strong> that
            compares multiple transaction sources to detect discrepancies and
            missing entries. Implemented reconciliation algorithms using SQL
            joins and transaction matching logic.
          </p>

          <p>
            <strong>Technologies:</strong> MySQL, SQL joins, discrepancy
            detection logic, Blazor dashboards.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={wallet} style={imgLarge} alt="Wallet System" />

          <p>
            Implemented a <strong>Wallet Management System</strong> allowing
            administrators to monitor agent balances, transaction history, and
            wallet activity. Developed ledger-based calculations to maintain
            accurate balance updates and transaction auditing.
          </p>

          <p>
            <strong>Technologies:</strong> ASP.NET API, MySQL ledger tables,
            Dapper ORM, financial transaction tracking.
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
            Developed a <strong>Mobile Console for Field Agents</strong> enabling
            real-time payment collection, transaction submission, and commission
            tracking directly from mobile devices.
          </p>

          <p>
            <strong>Technologies:</strong> .NET MAUI, REST API integration,
            MySQL backend services.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={walletmobile} style={imgLarge} alt="Mobile Wallet" />

          <p>
            Built a <strong>Mobile Wallet Interface</strong> allowing agents to
            monitor commission balances, payout records, and financial activity
            in real time.
          </p>

          <p>
            <strong>Technologies:</strong> .NET MAUI, API-based wallet services,
            transaction history queries.
          </p>
        </div>

        <div style={cardLarge}>
          <img src={accountmobile} style={imgLarge} alt="Mobile Account" />

          <p>
            Created an <strong>Account Management Module</strong> where agents
            can update personal information, manage security settings, and edit
            profile details directly from the mobile application.
          </p>

          <p>
            <strong>Technologies:</strong> .NET MAUI, API authentication,
            secure profile update endpoints.
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