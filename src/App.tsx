
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  if (!selectedImage) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage]);
  return (
    <div className="website">
      
<nav className="navbar">

<a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
  <img src="/sk-logo.png" alt="SK Enterprises Logo" className="logo-image" />
</a>



  <button
    type="button"
    className="hamburger"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Gallery</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>
</nav>


      <main>
        <section className="hero" id="home">
          
<div className="hero-content">
  <p className="eyebrow">
    ELECTRICAL CONTRACTING · CONSTRUCTION · INFRASTRUCTURE
  </p>

  <h1>
    Powering Buildings.
    <br />
    <span>Built on Trust.</span>
  </h1>

  <p className="hero-description">
    Reliable electrical solutions for commercial buildings
    and construction projects. From building wiring and
    distribution panels to complete lighting installations,
    SK Enterprises powers spaces with quality and safety.
  </p>

  <div className="hero-buttons">
    <a href="#services" className="btn btn-primary">
      Explore Our Services ↗
    </a>
    <a href="#contact" className="btn btn-outline">
      Get a Project Quote
    </a>
  </div>

  <p className="hero-trust">
    <span>✦</span> Quality Workmanship
    <span className="trust-divider">·</span>
    <span>✦</span> Safety First
  </p>
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
           onClick={() => setSelectedImage("https://st2.depositphotos.com/1005682/12186/i/450/depositphotos_121865862-stock-photo-indian-male-electrician.jpg")}
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
          onClick={() => setSelectedImage("https://www.tritypipes.com/uploads/concealed-wiring-vs-surface-wiring-which-is-better-for-your-building.jpg")}
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
          onClick={() => setSelectedImage("https://www.ankurlighting.com/cdn/shop/articles/things-to-remember-while-designing-a-lighting-plan-for-an-office-ankur-lighting.jpg?v=1695131102")}
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

        <div className="contact-buttons">
  <a
    className="btn btn-call"
    href="tel:+918439184332"
  >
    Call Us ↗
  </a>

  <a
    className="btn btn-primary"
    href="mailto:nikhil14082004@gmail.com"
  >
    Request a Project Enquiry ↗
  </a>

  <a
    className="btn btn-whatsapp"
    href="https://wa.me/918439184332"
    target="_blank"
    rel="noopener noreferrer"
  >
    Chat on WhatsApp ↗
  </a>
</div>
          <div className="business-details">
  <div className="detail-card">
    <span className="detail-icon">📞</span>
    <h3>Call Us</h3>
    <a href="tel:+918439184332">+91 84391 84332</a>
  </div>

  <div className="detail-card">
    <span className="detail-icon">✉️</span>
    <h3>Email Us</h3>
    <a href="mailto:nikhil14082004@gmail.com">
      nikhil14082004@gmail.com
    </a>
  </div>

  <div className="detail-card">
    <span className="detail-icon">📍</span>
    <h3>Our Location</h3>
    <p>
      Amwala Uparla, Karanpur, Near MB Homes,
      Dehradun, Uttarakhand 248013
    </p>
    <a
  className="map-link"
  href="https://www.google.com/maps/search/?api=1&query=Amwala%20Uparla%20Karanpur%20Dehradun%20248013"
  target="_blank"
  rel="noopener noreferrer"
>
  Get Directions ↗
</a>
  </div>

  <div className="detail-card">
    <span className="detail-icon">🕒</span>
    <h3>Working Hours</h3>
    <p>Open 24 Hours · 7 Days a Week</p>
  </div>
</div>
        </section>
      </main>

      
      <footer className="footer">
        <a href="#home" className="logo">
          SK<span> ENTERPRISES</span>
        </a>
        <p>© {new Date().getFullYear()} SK Enterprises. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
        >
          &times;
          </button>

          <img
            src={selectedImage}
            alt="Electrical work enlarged"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
