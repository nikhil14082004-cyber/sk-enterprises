
import "./App.css";

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <a href="#home" className="logo">
          SK<span> ENTERPRISES</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            
<p className="eyebrow">PROFESSIONAL ELECTRICAL CONTRACTING</p>

<h1>
  Powering Buildings.
  <br />
  <span>Connecting Futures.</span>
</h1>

<p className="hero-description">
  SK Enterprises provides professional electrical contracting
  services for large buildings and commercial construction
  projects. We focus on electrical installation, building wiring,
  lighting systems, and quality workmanship with safety in mind.
</p>


            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">
                Explore Services ↗
              </a>
              <a href="#about" className="btn btn-outline">
                Discover More
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core">
              <span>SK</span>
              <small>ENTERPRISES</small>
            </div>
          </div>

          <div className="hero-bottom">
            <span>QUALITY</span>
            <span>·</span>
            <span>TRUST</span>
            <span>·</span>
            <span>INNOVATION</span>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-label">01 — ABOUT US</div>
          
<h2>
  Expertise in Every Connection.
  <br />
  <span>Quality in Every Project.</span>
</h2>

<p>
  SK Enterprises specializes in electrical contracting for
  large buildings and commercial construction projects. We
  undertake electrical installation, building wiring, lighting
  systems, and related electrical work according to project
  requirements.

  Our focus is on quality workmanship, safe working practices,
  and reliable coordination with contractors and site teams
  throughout the project.
</p>

        </section>

        <section className="services section" id="services">
          <div className="section-label">02 — WHAT WE DO</div>
          <h2>Our <span>Services</span></h2>
          <p className="section-description">
            Reliable solutions, designed around your business needs.
          </p>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-number">01</div>
              <div className="service-icon">◇</div>
              
<h3>Building Electrical Installation</h3>
<p>
  Professional electrical installation, building wiring,
  conduit work, and cable routing for large buildings and
  commercial construction projects.
</p>

              <a href="#contact">Learn more ↗</a>
            </article>

            <article className="service-card">
              <div className="service-number">02</div>
              <div className="service-icon">⌘</div>
              
<h3>Electrical Panels & Distribution</h3>
<p>
  Electrical panel installation, power distribution,
  and electrical connections according to project
  requirements and applicable safety standards.
</p>

              <a href="#contact">Learn more ↗</a>
            </article>

            <article className="service-card">
              <div className="service-number">03</div>
              <div className="service-icon">↗</div>
              
<h3>Lighting & Electrical Fittings</h3>
<p>
  Installation of lighting systems, switches, sockets,
  and electrical fixtures for commercial buildings
  and construction projects.
</p>

              <a href="#contact">Learn more ↗</a>
            </article>
          </div>
        </section>
{/* PROJECT GALLERY */}

<section className="projects section" id="projects">
 <div className="section-label">03 — OUR PROJECTS</div>
<h2>
  Our Work.
  <br />
  <span>Our Commitment.</span>
</h2>
<p className="projects-intro">
  Explore our electrical installation, power distribution, and lighting work for commercial buildings and construction projects.
</p>

  <div className="projects-grid">

    {/* Project 1 */}
    <article className="project-card">
      <div className="project-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfl04mKAkiQc6j4lV58sed24NGoZ4uy_-lXuSAB4z0A&s=10"
          alt="Construction work at a building project"
          loading="lazy"
        />
        <span className="project-tag">01 / INSTALLATION</span>
      </div>

      <div className="project-info">
        <p className="project-category">ELECTRICAL CONTRACTING</p>
        <h3>Building Electrical Installation</h3>
        <p>
          Electrical installation, conduit routing, wiring,
          and cable management for large building projects.
        </p>
      </div>
    </article>

    {/* Project 2 */}
    <article className="project-card">
      <div className="project-image">
        <img
          src="https://djelectrocontrols.com/wp-content/uploads/2026/03/Industrial-Power-Distribution-System.jpg"
          alt="Engineering and technical work"
          loading="lazy"
        />
        <span className="project-tag">02 / DISTRIBUTION</span>
      </div>

      <div className="project-info">
        <p className="project-category">POWER SYSTEMS</p>
        <h3>Electrical Panels & Distribution</h3>
        <p>
          Electrical panel installation and power distribution
          work based on project requirements.
        </p>
      </div>
    </article>

    {/* Project 3 */}
    <article className="project-card">
      <div className="project-image">
        <img
          src="https://www.ankurlighting.com/cdn/shop/articles/things-to-remember-while-designing-a-lighting-plan-for-an-office-ankur-lighting.jpg?v=1695131102"
          alt="Modern commercial office interior"
          loading="lazy"
        />
        <span className="project-tag">03 / LIGHTING</span>
      </div>

      <div className="project-info">
        <p className="project-category">COMMERCIAL ELECTRICAL WORK</p>
        <h3>Lighting & Electrical Fittings</h3>
        <p>
          Lighting systems, switches, sockets, and electrical
          fittings for commercial spaces.
        </p>
      </div>
    </article>

  </div>

  <div className="projects-cta">
    <p>Planning electrical work for a building project?</p>
    <a href="#contact" className="btn btn-primary">
      Discuss Your Project ↗
    </a>
  </div>
</section>
        <section className="contact section" id="contact">
          <div className="section-label">03 — GET IN TOUCH</div>
          
<h2>
  Have an Electrical Project?
  <br />
  <span>Let's Discuss It.</span>
</h2>

<p>
  Looking for a reliable electrical contractor for your
  commercial building or construction project? Contact
  SK Enterprises to discuss your electrical work requirements.
</p>

          <a
            className="btn btn-primary"
            href="mailto:info@skenterprises.com"
          >
            Request a Project Enquiry ↗
          </a>
          <p className="email-note">
            Please replace the sample email with your actual business email.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          SK<span> ENTERPRISES</span>
        </a>
        <p>© {new Date().getFullYear()} SK Enterprises. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
