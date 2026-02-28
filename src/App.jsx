function App() {
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
            Jack
            <br />
            Ledesma
          </h1>

          <p style={{ fontSize: "24px", marginTop: "20px" }}>
            Full Stack & Mobile Developer building clean web and mobile systems.
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

      {/* PROJECTS */}
      <section style={{ marginBottom: "90px" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "25px",
          }}
        >
          <div style={card}>
            <h3>Automated Task Delegation & Management System (Capstone)</h3>
            <p>
              Developed an AI-powered task management system with automated task
              allocation based on workload, task difficulty, and user skills.
              Implemented skill-based profiling and fairness algorithms to improve
              distribution efficiency.
            </p>
          </div>

          <div style={card}>
            <h3>Mobile App with GPS Tracking</h3>
            <p>
              Built and published a mobile application featuring OTP login,
              commission tracking, wallet monitoring, and activity modules.
              Implemented background GPS tracking with movement-based logging and
              real-time API synchronization.
            </p>
          </div>

          <div style={card}>
            <h3>Agent Commission Collection & Wallet Management System</h3>
            <p>
              Developed a commission collection and reconciliation system with QR
              payment integration and accounting workflows. Implemented automated
              wallet crediting, transaction history, and web-mobile synchronization.
            </p>
          </div>

          <div style={card}>
            <h3>Automated Payroll System</h3>
            <p>
              Created a web-based payroll system automating commission calculations,
              deductions, and payout tracking with accounting comments.
            </p>
          </div>

          <div style={card}>
            <h3>Stock Broker System</h3>
            <p>
              Developed Blazor-based stock trading pages with board lot validation
              and transaction form handling.
            </p>
          </div>
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
          Blazor, MySQL, MongoDB, and API integrations. Implemented automation
          features including commission tracking, wallet management, and payroll
          workflows. Built real-time data synchronization and background services.
        </p>

        <br />

        <p>
          <strong>OJT / Internship — Full Stack Developer</strong>
          <br />
          February 2025 – April 2025
        </p>
        <p>
          Assisted in developing web features using Blazor and .NET technologies.
          Supported API integration and database-related tasks involving MySQL
          and MongoDB.
        </p>
      </section>

      {/* TECH STACK */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "34px" }}>Tech Stack</h2>
        <p>
          Java • JavaScript • Python • C++ • C# • HTML • Tailwind CSS
        </p>
        <p>
          React • Blazor • Bootstrap • .NET MAUI • Node.js / Express
        </p>
        <p>
          MySQL • MongoDB • Dapper • Supabase
        </p>
        <p>
          Git • GitHub • Azure DevOps • Postman • Insomnia
        </p>
        <p>
          JWT Authentication • OTP Login • CRUD APIs • Token Validation
        </p>
      </section>

      {/* EDUCATION */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "34px" }}>Education</h2>
        <p>
          BS Computer Science — Centro Escolar University (2025)
        </p>
        <p>
          Accountancy and Business Management — Centro Escolar University (2021)
        </p>
      </section>

      {/* CONTACT */}
      <section>
        <h2 style={{ fontSize: "30px" }}>Contact</h2>
        <p>ledesmajack3@gmail.com</p>
      </section>
    </main>
  );
}

const card = {
  border: "1px solid #eee",
  padding: "25px",
  borderRadius: "8px",
};

export default App;