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
            Full Stack Developer building clean web and mobile systems.
          </p>
        </div>

        <div style={card}>
          <h3>Tech Focus</h3>
          <p style={{ lineHeight: "1.8" }}>
            React • .NET • Node.js • APIs
            <br />
            Automation Systems
            <br />
            Mobile Development
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
            <h3>Automated Task Delegation</h3>
            <p>AI-based task assignment using workload and skill logic.</p>
          </div>

          <div style={card}>
            <h3>Commission & Wallet System</h3>
            <p>QR payment tracking with automated wallet sync.</p>
          </div>

          <div style={card}>
            <h3>Automated Payroll System</h3>
            <p>Automated payout and deduction workflows.</p>
          </div>

          <div style={card}>
            <h3>Mobile GPS Tracking App</h3>
            <p>OTP login, GPS tracking, and real-time API sync.</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "34px" }}>Experience</h2>
        <p>
          <strong>Full Stack & Mobile Developer</strong> — Infotouch System Inc
        </p>
        <p>Built automation systems, APIs, and mobile applications.</p>
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