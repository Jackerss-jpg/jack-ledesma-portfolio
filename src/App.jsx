import { useState } from "react";
import conslemobile from "./assets/consolemobile.png";
import fundreview from "./assets/fundreview.png";
import payout from "./assets/payout.png";
import recon from "./assets/recon.png";
import wallet from "./assets/wallet3.png";
import walletmobile from "./assets/walletmobile.png";
import accountmobile from "./assets/accountmobile.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tab, setTab] = useState("home");

  return (
    <main className="container py-5">

      {/* NAV */}
      <nav className="d-flex gap-4 mb-5 fs-5">
        <span
          style={{ cursor: "pointer" }}
          className={tab === "home" ? "fw-bold border-bottom border-dark pb-1" : ""}
          onClick={() => setTab("home")}
        >
          Home
        </span>

        <span
          style={{ cursor: "pointer" }}
          className={tab === "projects" ? "fw-bold border-bottom border-dark pb-1" : ""}
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
      <section className="row align-items-center mb-5">

        <div className="col-md-7">
          <h1 className="display-2 fw-bold" style={{ letterSpacing: "-2px" }}>
            Jack Edwin A.
            <br />
            Ledesma
          </h1>

          <p className="lead mt-3">
            Full Stack & Mobile Developer
          </p>
        </div>

      

      </section>

      {/* EXPERIENCE */}
      <section className="mb-5">

        <h2 className="mb-4">Experience</h2>

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
      <section className="mb-5">

        <h2 className="mb-4">Tech Stack</h2>

        <p>
          Programming Languages: Java, JavaScript, Python, C++, C#, HTML, Tailwind CSS
        </p>

        <p>
          Frameworks & Development: Blazor, React, Bootstrap, .NET MAUI .NET
        </p>

        <p>
          Backend Development: Minimal API (.NET), Node.js / Express
        </p>

        <p>
          Database Technologies: MySQL, MongoDB, Dapper, Supabase
        </p>

        <p>
          Version Control & Tools: Git, GitHub, Azure DevOps, Postman, Insomnia
        </p>

        <p>
          API & Security: CRUD Operations, Request Validation, JWT Authentication,
          OTP Login, Token Validation & Refresh Tokens
        </p>

        <p>
          Methodologies: Agile, Waterfall
        </p>

      </section>


      {/* CONTACT */}
      <section>

        <h2 className="mb-3">Contact</h2>

        <p>ledesmajack3@gmail.com</p>

        <p>09453055039</p>

        <p>
          https://www.linkedin.com/in/jack-edwin-ledesma-14373636b/
        </p>

      </section>
    </>
  );
}

function Projects() {
  return (
    <section>

      <h2 className="mb-4">Projects</h2>

      {/* NDA NOTICE */}
      <p className="fst-italic mb-5">
        Note: Due to NDA agreements with my previous company, specific client
        names, agent identities, and sensitive operational details cannot be
        displayed. The following examples demonstrate the systems and features I
        developed without exposing confidential data.
      </p>

      {/* THESIS */}
      <div className="card mb-5 shadow-sm">

        <div className="card-body">

          <h3 className="mb-3">
            Automated Task Delegation & Management System (Thesis)
          </h3>

          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/5UYelvZtlI8"
            title="Thesis Project Demo"
            frameBorder="0"
            allowFullScreen
            className="rounded mb-3"
          ></iframe>

          <p>
            Designed and developed an AI-assisted task delegation system that
            automatically assigns tasks based on workload distribution, team
            member skillsets, and task complexity.
          </p>

          <p>
            The system analyzes available personnel and dynamically balances
            assignments to improve productivity and reduce manual project
            planning.
          </p>

          <p>
            <strong>Technologies Used:</strong> Python (AI model training), Task
            prioritization logic, workload scoring algorithm, Node.js backend,
            MongoDB database, REST API integration.
          </p>

        </div>
      </div>

      {/* WEB SYSTEM */}
      <h3 className="mb-4">Web / Admin System</h3>

      <div className="row g-4">

        <ProjectCard
          img={fundreview}
          text="Developed a Fund Review Dashboard used by administrators to validate and audit collection reports submitted by field agents."
          tech="Blazor, ASP.NET Core API, MySQL, Dapper ORM, SQL validation queries."
        />

        <ProjectCard
          img={payout}
          text="Built a Commission Payout Management Interface allowing administrators to process agent commissions."
          tech="Blazor, REST APIs, MySQL, Dapper, transaction validation logic."
        />

        <ProjectCard
          img={recon}
          text="Created a Financial Reconciliation Dashboard that compares multiple transaction sources to detect discrepancies."
          tech="MySQL, SQL joins, discrepancy detection logic, Blazor dashboards."
        />

        <ProjectCard
          img={wallet}
          text="Implemented a Wallet Management System allowing administrators to monitor agent balances and transactions."
          tech="ASP.NET API, MySQL ledger tables, Dapper ORM, financial transaction tracking."
        />

      </div>


      {/* MOBILE SYSTEM */}
      <h3 className="mt-5 mb-4">Mobile Application</h3>

      <div className="row g-4">

        <ProjectCard
          img={conslemobile}
          text="Developed a Mobile Console for Field Agents enabling real-time payment collection and commission tracking."
          tech=".NET MAUI, REST API integration, MySQL backend services."
        />

        <ProjectCard
          img={walletmobile}
          text="Built a Mobile Wallet Interface allowing agents to monitor balances and payout records."
          tech=".NET MAUI, API-based wallet services, transaction history queries."
        />

        <ProjectCard
          img={accountmobile}
          text="Created an Account Management Module where agents can update personal information and security settings."
          tech=".NET MAUI, API authentication, secure profile update endpoints."
        />

      </div>

    </section>
  );
}

function ProjectCard({ img, text, tech }) {
  return (
    <div className="col-md-6">
      <div className="card h-100 shadow-sm">

        <img src={img} className="card-img-top" alt="project" />

        <div className="card-body">

          <p>{text}</p>

          <p>
            <strong>Technologies:</strong> {tech}
          </p>

        </div>

      </div>
    </div>
  );
}

export default App;