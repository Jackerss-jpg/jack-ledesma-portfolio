import { useState } from "react";
import conslemobile from "./assets/consolemobile.png";
import fundreview from "./assets/fundreview.png";
import payout from "./assets/payout.png";
import recon from "./assets/recon.png";
import wallet from "./assets/wallet3.png";
import walletmobile from "./assets/walletmobile.png";
import accountmobile from "./assets/accountmobile.png";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

function App() {

const [tab,setTab] = useState("home");

return(

<main>

<nav className="navbar navbar-dark border-bottom mb-5">

<div className="container">

<div className="ms-auto d-flex gap-4">

<span
className={`nav-link ${tab==="home"?"active fw-bold":""}`}
style={{cursor:"pointer"}}
onClick={()=>setTab("home")}
>
Home
</span>

<span
className={`nav-link ${tab==="projects"?"active fw-bold":""}`}
style={{cursor:"pointer"}}
onClick={()=>setTab("projects")}
>
Projects
</span>

</div>

</div>

</nav>

<div className="container">

{tab==="home" && <Home/>}
{tab==="projects" && <Projects/>}

</div>

<Footer/>

</main>

)

}

function Home(){

return(

<>

<section className="row align-items-center">

<div className="col-lg-8">

<h1 className="hero-title">
Jack Edwin A. Ledesma
</h1>

<p className="hero-sub">
Full Stack & Mobile Developer
</p>

<p className="text-secondary">
I develop scalable web systems, backend APIs, and mobile
applications using modern technologies such as React,
Blazor, .NET MAUI, and cloud-based services.
</p>

<div className="mt-4 d-flex gap-3 flex-wrap">

<a
className="btn btn-primary"
href="https://www.linkedin.com/in/jack-edwin-ledesma-14373636b/"
target="_blank"
>
<i className="bi bi-linkedin me-2"></i>
LinkedIn
</a>

<a
className="btn btn-outline-light"
href="#contact"
>
<i className="bi bi-envelope me-2"></i>
Contact Me
</a>

</div>

</div>

</section>

<section>

<h2 className="mb-4">Experience</h2>

<div className="card p-4 mb-4">

<h5 className="fw-bold">
Full Stack & Mobile Developer — Infotouch System Inc
</h5>

<p className="text-secondary">
July 2025 – February 2026
</p>

<p>
Developed and maintained web and mobile applications
using .NET MAUI, Blazor, MySQL, MongoDB, and API integrations.
</p>

</div>

<div className="card p-4">

<h5 className="fw-bold">
OJT / Internship — Full Stack Developer — Infotouch System Inc
</h5>

<p className="text-secondary">
February 2025 – April 2025 (300 hours)
</p>

<p>
Assisted in developing web application features using
Blazor and .NET technologies while supporting API
integration and database tasks involving MySQL and MongoDB.
</p>

</div>

</section>

<section>

<h2 className="mb-4">Tech Stack</h2>

<div className="row g-3 mb-4">

<Tech icon="bi-code-slash" name="Java"/>
<Tech icon="bi-braces" name="JavaScript"/>
<Tech icon="bi-terminal" name="Python"/>
<Tech icon="bi-cpu" name="C++ / C#"/>
<Tech icon="bi-filetype-html" name="HTML"/>
<Tech icon="bi-bootstrap" name="Bootstrap"/>
<Tech icon="bi-phone" name=".NET MAUI"/>
<Tech icon="bi-server" name="Node.js"/>
<Tech icon="bi-database" name="MySQL"/>
<Tech icon="bi-database-fill" name="MongoDB"/>
<Tech icon="bi-git" name="Git"/>
<Tech icon="bi-github" name="GitHub"/>

</div>

<p><strong>Programming Languages:</strong> Java, JavaScript, Python, C++, C#, HTML, Tailwind CSS</p>
<p><strong>Frameworks & Development:</strong> Blazor, React, Bootstrap, .NET MAUI , .NET</p>
<p><strong>Backend Development:</strong> Minimal API (.NET), Node.js / Express</p>
<p><strong>Database Technologies:</strong> MySQL, MongoDB, Dapper, Supabase</p>
<p><strong>Version Control & Tools:</strong> Git, GitHub, Azure DevOps, Postman, Insomnia</p>
<p><strong>API & Security:</strong> CRUD Operations, Request Validation, JWT Authentication, OTP Login, Token Validation & Refresh Tokens</p>
<p><strong>Methodologies:</strong> Agile, Waterfall</p>

</section>

<section id="contact">

<h2 className="mb-4">Contact Me</h2>

<div className="card p-4">

<form action="https://formsubmit.co/ledesmajack3@gmail.com" method="POST">

<div className="mb-3">
<label className="form-label text-white">Name</label>
<input type="text" className="form-control" name="name" required/>
</div>

<div className="mb-3">
<label className="form-label text-white">Email</label>
<input type="email" className="form-control" name="email" required/>
</div>

<div className="mb-3">
<label className="form-label text-white">Message</label>
<textarea className="form-control" rows="4" name="message" required/>
</div>

<button className="btn btn-primary">
<i className="bi bi-send me-2"></i>
Send Message
</button>

</form>

</div>

</section>

</>

)

}

function Tech({icon,name}){

return(

<div className="col-md-3 col-lg-2">

<div className="card text-center p-3 h-100">

<i className={`bi ${icon}`} style={{fontSize:"28px",color:"#6c63ff"}}></i>

<p className="mt-2 mb-0">{name}</p>

</div>

</div>

)

}

function Projects(){

return(

<section>

<h2 className="mb-4">Projects</h2>

<p className="text-secondary mb-5">
Note: Due to NDA agreements with my previous company,
specific client names and sensitive operational details
cannot be displayed.
</p>

<div className="card p-4 mb-5">

<h3>Automated Task Delegation & Management System (Thesis)</h3>

<iframe
width="100%"
height="420"
src="https://www.youtube.com/embed/5UYelvZtlI8"
className="rounded mb-3"
></iframe>

<p>
Designed and developed an AI-assisted task delegation system
that automatically assigns tasks based on workload distribution,
team member skillsets, and task complexity.
</p>

<p>
The system analyzes available personnel and dynamically balances
assignments to improve productivity.
</p>

<p>
<strong>Technologies Used:</strong> Python (AI model training),
workload scoring algorithm, Node.js backend,
MongoDB database, REST API integration.
</p>

</div>

<h3 className="mb-4">Web / Admin System</h3>

<div id="webCarousel" className="carousel slide mb-5">

<div className="carousel-indicators">

<button data-bs-target="#webCarousel" data-bs-slide-to="0" className="active"></button>
<button data-bs-target="#webCarousel" data-bs-slide-to="1"></button>
<button data-bs-target="#webCarousel" data-bs-slide-to="2"></button>
<button data-bs-target="#webCarousel" data-bs-slide-to="3"></button>

</div>

<div className="carousel-inner">

<div className="carousel-item active">
<ProjectCard img={fundreview} text="Developed a Fund Review Dashboard used by administrators to validate and audit collection reports." tech="Blazor, ASP.NET Core API, MySQL, Dapper ORM"/>
</div>

<div className="carousel-item">
<ProjectCard img={payout} text="Built a Commission Payout Management Interface allowing administrators to process agent commissions." tech="Blazor, REST APIs, MySQL"/>
</div>

<div className="carousel-item">
<ProjectCard img={recon} text="Created a Financial Reconciliation Dashboard detecting discrepancies across multiple transaction sources." tech="MySQL, SQL joins, Blazor dashboards"/>
</div>

<div className="carousel-item">
<ProjectCard img={wallet} text="Implemented a Wallet Management System monitoring balances and financial transactions." tech="ASP.NET API, MySQL ledger tables"/>
</div>

</div>

<button className="carousel-control-prev" type="button" data-bs-target="#webCarousel" data-bs-slide="prev">
<span className="carousel-control-prev-icon"></span>
</button>

<button className="carousel-control-next" type="button" data-bs-target="#webCarousel" data-bs-slide="next">
<span className="carousel-control-next-icon"></span>
</button>

</div>

<h3 className="mb-4">Mobile Application</h3>

<div id="mobileCarousel" className="carousel slide">

<div className="carousel-inner">

<div className="carousel-item active">
<ProjectCard img={conslemobile} text="Mobile console for field agents enabling real-time payment collection." tech=".NET MAUI, REST APIs, MySQL"/>
</div>

<div className="carousel-item">
<ProjectCard img={walletmobile} text="Mobile wallet interface for monitoring balances and payout records." tech=".NET MAUI, API wallet services"/>
</div>

<div className="carousel-item">
<ProjectCard img={accountmobile} text="Account management module allowing agents to update personal information." tech=".NET MAUI, API authentication"/>
</div>

</div>

<button className="carousel-control-prev" type="button" data-bs-target="#mobileCarousel" data-bs-slide="prev">
<span className="carousel-control-prev-icon"></span>
</button>

<button className="carousel-control-next" type="button" data-bs-target="#mobileCarousel" data-bs-slide="next">
<span className="carousel-control-next-icon"></span>
</button>

</div>

</section>

)

}

function ProjectCard({img,text,tech}){

return(

<div className="card mx-auto shadow-lg project-card">

<img src={img} className="card-img-top project-img"/>

<div className="card-body">

<p>{text}</p>

<p><strong>Technologies:</strong> {tech}</p>

</div>

</div>

)

}

function Footer(){

return(

<footer className="border-top mt-5 py-4">

<div className="container text-center text-secondary">

© {new Date().getFullYear()} Jack Ledesma — Portfolio

</div>

</footer>

)

}

export default App;