// src/pages/AboutUs.jsx
import React, { useEffect, useState } from "react";
import "../CSS/AboutPage/about.css";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".progress div, .firm-role, .card, .circle, .skill-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("firm-role")) {
              entry.target.classList.add("visible");
            } else if (entry.target.classList.contains("card")) {
              setTimeout(() => {
                entry.target.classList.add("show");
              }, index * 200);
            } else if (entry.target.classList.contains("skill-card")) {
              setTimeout(() => {
                entry.target.classList.add("fade-in");
              }, index * 150);
            } else if (entry.target.classList.contains("circle")) {
              const percent = entry.target.getAttribute("data-percent");
              const circle = entry.target.querySelector("svg circle:nth-child(2)");
              const radius = 70;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (circumference * percent) / 100;

              circle.style.strokeDasharray = circumference;
              circle.style.strokeDashoffset = circumference;

              setTimeout(() => {
                circle.style.strokeDashoffset = offset;
              }, 100);

              const percentageEl = entry.target.querySelector(".percentage");
              if (percentageEl) {
                let count = 0;
                const target = parseInt(percent, 10);
                const step = Math.ceil(target / 40);

                const interval = setInterval(() => {
                  count += step;
                  if (count >= target) {
                    count = target;
                    clearInterval(interval);
                  }
                  percentageEl.textContent = `${count}%`;
                }, 30);
              }
            } else if (entry.target.getAttribute("data-width")) {
              entry.target.style.width = entry.target.getAttribute("data-width");
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <header className="about-hero parallax">
        <div className="overlay"></div>

        {/* Navbar */}
        <div className="navbar">
          <div className="logo">Eredi and Mulama Law Co. Advocates</div>

          {/* Desktop nav */}
          <nav className="desktop-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/practice-areas">Practice Areas</Link>
            <Link to="/insights-page">Insights</Link>
            <Link to="/contact-us">Contact</Link>
          </nav>

          {/* Call Button */}
          <a href="tel:0712345678" className="call-btn">
            Call: 0712345678
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mobile-nav"
            >
              <ul className="mobile-nav-list">
                <li>
                  <Link to="/" onClick={() => setIsOpen(false)} className="mobile-link">Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="mobile-link">About Us</Link>
                </li>
                <li>
                  <Link to="/practice-areas" onClick={() => setIsOpen(false)} className="mobile-link">Practice Areas</Link>
                </li>
                <li>
                  <Link to="/insights-page" onClick={() => setIsOpen(false)} className="mobile-link">Insights</Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={() => setIsOpen(false)} className="mobile-link">Contact</Link>
                </li>
                <li className="mobile-btn">
                  <Link to="/contact-us" onClick={() => setIsOpen(false)} className="btn-outline">
                    Get Started
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        <div className="hero-text animate-hero">
          <h1>About Us</h1>
          <p>Your trusted legal partner for business growth and protection.</p>
        </div>
      </header>
      {/* Firm Role */}
      <section className="firm-role">
        <div className="floating-icon">⚖️</div>
        <h2>The legal partner for your business.</h2>
        <p>
          At Eredi and Mulama Law Co. Advocates, we are committed to delivering
          exceptional legal services that empower businesses and individuals.
          With a client-first philosophy, we focus on practical solutions,
          professionalism, and building lasting partnerships.
        </p>
      </section>

      {/* Commitment Diagram */}
      <section className="commitment-diagram">
        <h2>Our Commitment to Clients</h2>
        <div className="diagram">
          <div className="service-delivery-diagram">
            <div className="center-pill">⚖️Service Delivery</div>

            <div className="pillar efficiency">
              ⚡ Efficiency
              <p>
                We streamline processes and use smart solutions to ensure that
                our clients receive fast and reliable legal support without
                unnecessary delays.
              </p>
            </div>

            <div className="pillar expertise">
              🎓 Expertise
              <p>
                Our team brings years of experience in corporate, banking, and
                litigation, offering deep knowledge and tailored strategies for
                every client.
              </p>
            </div>

            <div className="pillar dedication">
              🤝 Dedication
              <p>
                We go beyond legal advice by building lasting relationships and
                standing by our clients to achieve long-term business success.
              </p>
            </div>

            {/* Animated connecting lines */}
            <div className="line line-efficiency">
              <span className="dot"></span>
            </div>
            <div className="line line-expertise">
              <span className="dot"></span>
            </div>
            <div className="line line-dedication">
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Gallery */}
      <section className="commitment-gallery">
        <h2>Our Commitment</h2>
        <div className="gallery">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
              alt="Team in Action"
            />
            <div className="overlay">
              <h3>Team in Action</h3>
              <p>
                Our dedicated team collaborates seamlessly to deliver solutions
                that ensure client success and satisfaction.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
              alt="Modern Office"
            />
            <div className="overlay">
              <h3>Modern Office</h3>
              <p>
                We embrace innovation and comfort, creating an environment that
                fosters productivity and forward-thinking ideas.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
              alt="Happy Clients"
            />
            <div className="overlay">
              <h3>Happy Clients</h3>
              <p>
                Building long-term partnerships based on trust, excellence, and
                consistent results for our valued clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
  <h2>Why Choose Us?</h2>
  <h3>Our Values</h3>
  <div className="values-container">
    <div className="value-card">
      <div className="icon">👩‍⚖️</div>
      <h4>Our People</h4>
      <p>We nurture top legal talent, ensuring our clients always receive expert and reliable representation.</p>
    </div>
    <div className="connector"></div>

    <div className="value-card">
      <div className="icon">🌍</div>
      <h4>Our Communities</h4>
      <p>We actively engage with and support communities, creating positive impact beyond the legal world.</p>
    </div>
    <div className="connector"></div>

    <div className="value-card">
      <div className="icon">⚖️</div>
      <h4>Integrity</h4>
      <p>We uphold the highest ethical standards, ensuring fairness, transparency, and trust in every case.</p>
    </div>
    <div className="connector"></div>

    <div className="value-card">
      <div className="icon">💡</div>
      <h4>Innovation</h4>
      <p>We embrace technology and forward-thinking strategies to deliver efficient, modern legal solutions.</p>
    </div>
  </div>
</section>



            {/* Our Skills */}
      <section className="our-skills">
        <h2>Our Skills</h2>
        <p>We are a leading Business Goal Success.</p>
        <div className="skills-circles">
          <div className="skill-card">
            <div className="circle" data-percent="90">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="percentage">90%</div>
            </div>
            <h3>Corporate Law</h3>
            <p>Expert legal solutions for businesses, mergers, and compliance.</p>
          </div>

          <div className="skill-card">
            <div className="circle" data-percent="85">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="percentage">85%</div>
            </div>
            <h3>Banking & Finance Law</h3>
            <p>Trusted advice for banks, lenders, and financial institutions.</p>
          </div>

          <div className="skill-card">
            <div className="circle" data-percent="80">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="percentage">80%</div>
            </div>
            <h3>Contract Drafting</h3>
            <p>Precise and reliable contracts tailored to protect client interests.</p>
          </div>

          <div className="skill-card">
            <div className="circle" data-percent="75">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="percentage">75%</div>
            </div>
            <h3>Litigation & Dispute Resolution</h3>
            <p>Strong courtroom representation and effective conflict resolution.</p>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="cta">
        <h2>Talk To Us</h2>
        <p>
          Contact us today for professional legal guidance tailored to your
          needs. Benefit from our deep expertise and unwavering dedication to
          client success.
        </p>
       <Link to="/contact-us">
  <button className="cta-btn glow-btn">Get in Touch</button>
</Link>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <h2>Our Main Office Address</h2>
        <p>123 Legal Street, Nairobi, Kenya</p>
        <p>Email: info@eredimulamalaw.com</p>
        <p>Phone: +254 712 345678</p>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.80519712312!2d36.82194611549494!3d-1.2920652990503897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5e1dd3e4d%3A0x54f1e9edb61f12f2!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1692098382234!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Consultation */}
      <section id="consultation">
        <Consultation />
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-20"
      >

        {/* Actual Footer */}
        <Footer />
      </footer>
    </div>
  );
}

export default AboutUs;
