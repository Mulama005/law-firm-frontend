// src/pages/PracticeAreas.jsx
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../CSS/PracticeAreaPage/FullPracticePage.css";

function PracticeAreas() {
  const areas = [
    {
      title: "Property and Real Estate",
      description:
        "Comprehensive legal support for real estate development, transactions, and disputes.",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "/practice/property-real-estate",
    },
    {
      title: "Banking Law & Debt Collection",
      description:
        "Expert legal advice and solutions in banking, finance, and recoveries.",
      image:
        "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "/practice/banking-law",
    },
    {
      title: "Corporate Law",
      description: "Strategic legal support for businesses of all sizes.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      link: "/practice/corporate-law",
    },
    {
      title: "Procurement & Asset Disposal",
      description:
        "Protection of your brand and ideas alongside corporate advisory.",
      image:
        "https://i.postimg.cc/dtPssg9N/photo-1593444285553-28163240e3f1.avif",
      link: "/practice/procurement-asset-disposal",
    },
  ];

  // ✅ Intersection Observer for fade-in animation
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".practice-card, .faq, .consultation"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* ✅ Hero Section */}
      <section
  className="hero"
  style={{
    backgroundImage:
      "url('https://i.postimg.cc/m2Cr7TDG/photo-1591972578732-fc089819c722.avif')", 
  }}
>
  <div className="hero-overlay">
    <h1>Our Practice Areas</h1>
    <p>Trusted legal guidance across property, corporate, and intellectual fields.</p>
    <p className="hero-subtext">
      With decades of combined expertise, we deliver justice, innovation, and protection for our clients.
    </p>

    <div className="hero-buttons">
      <a href="practice/property-real-estate" className="btn-primary">Explore Services</a>
      
    </div>
  </div>
</section>

      {/* ✅ Practice Areas Section (white background) */}
      <section className="practice-areas">
        <div className="content">
          {areas.map((area, index) => (
            <div key={index} className="practice-card">
              <img src={area.image} alt={area.title} />
              <div className="info">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <Link to={area.link} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ FAQ Section with Accordion */}
<section className="faq">
  <h2>Frequently Asked Questions</h2>

  {/* 🔍 Search Bar */}
  <input
    type="text"
    placeholder="Search FAQs..."
    className="faq-search"
    onChange={(e) => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.style.display = item.innerText.toLowerCase().includes(query)
          ? "block"
          : "none";
      });
    }}
  />

  <div className="faq-list">
    {[
      {
        q: "How do I book a consultation with your team?",
        a: "You can book a consultation by calling us directly or scheduling an appointment through our online form.",
      },
      {
        q: "What areas of law does your firm specialize in?",
        a: "We specialize in Property & Real Estate, Corporate Law, Banking Law, Debt Collection, and Intellectual Property.",
      },
      {
        q: "Do you handle cases outside Kenya?",
        a: "Yes, we provide advisory services for international clients, especially in real estate and corporate law.",
      },
      {
        q: "What should I prepare before my first consultation?",
        a: "Bring along any contracts, agreements, or documents related to your case for a more productive session.",
      },
      {
        q: "Do you offer pro bono or discounted services?",
        a: "We occasionally provide pro bono services for public interest cases and offer flexible payment plans.",
      },
      {
        q: "Can I get legal advice online?",
        a: "Yes, we offer online consultations via Zoom, Google Meet, and WhatsApp calls.",
      },
    ].map((faq, i) => (
      <div className="faq-item" key={i}>
        <button
          className="faq-question"
          onClick={(e) => {
            const parent = e.currentTarget.parentElement;
            parent.classList.toggle("open");
          }}
        >
          {faq.q}
          <span className="arrow">▼</span>
        </button>
        <div className="faq-answer">{faq.a}</div>
      </div>
    ))}
  </div>
</section>


      {/* ✅ Consultation Section */}
      <section className="consultation">
        <h2>Schedule a Consultation</h2>
        <p>
          Call us at <strong>+254758743522</strong> or reach us on WhatsApp to
          schedule a meeting with our legal experts.
        </p>
        <a
          href="https://wa.me/254758743522"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          WhatsApp Us
        </a>
      </section>

      <Footer />
    </>
  );
}

export default PracticeAreas;
