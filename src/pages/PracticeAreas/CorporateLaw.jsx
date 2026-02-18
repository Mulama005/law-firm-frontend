// src/pages/PracticeAreas/CorporateCommercial.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../CSS/PracticeAreaPage/PracticeAreasPages/CorporateLaw.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function CorporateCommercial() {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  const faqs = [
    {
      question: "What services do you provide under corporate law?",
      answer:
        "We handle company formation, governance, mergers & acquisitions, shareholder agreements, and compliance with regulatory frameworks.",
    },
    {
      question: "How do you assist with intellectual property protection?",
      answer:
        "We help with trademark registration, patent applications, copyright protection, and IP dispute resolution.",
    },
    {
      question: "Do you assist startups and SMEs?",
      answer:
        "Yes, we provide tailored legal solutions for startups and SMEs, including business structuring, contracts, and funding agreements.",
    },
    {
      question: "Can you draft and review commercial contracts?",
      answer:
        "Absolutely. We prepare and review contracts such as joint ventures, distribution agreements, NDAs, and licensing contracts.",
    },
    {
      question: "Why is legal compliance important for businesses?",
      answer:
        "Compliance reduces risk, avoids penalties, builds investor confidence, and protects your brand’s reputation.",
    },
  ];

  return (
    <>
      <Header />

      <div className="practice-layout">
        {/*Sticky Sidebar with Active Highlight */}
        <aside className="practice-sidebar">
          <h3>Practice Areas</h3>
          <ul>
            <li>
              <Link
                to="/practice/property-real-estate"
                className={location.pathname === "/practice/property-real-estate" ? "active" : ""}
              >
                Property & Real Estate
              </Link>
            </li>
            <li>
              <Link
                to="/practice/banking-law"
                className={location.pathname === "/practice/banking-law" ? "active" : ""}
              >
                Banking & Finance Law
              </Link>
            </li>
            <li>
              <Link
                to="/practice/corporate-law"
                className={location.pathname === "/practice/corporate-law" ? "active" : ""}
              >
                Corporate & Commercial Law
              </Link>
            </li>
            <li>
              <Link
                to="/practice/procurement-asset-disposal"
                className={location.pathname === "/practice/procurement-asset-disposal" ? "active" : ""}
              >
                Procurement & Asset Disposal
              </Link>
            </li>
          </ul>
        </aside>

        {/*Main Content */}
        <main className="practice-content">
          {/* Hero Section */}
          <section
            className="practice-hero"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/5ydwzvkp/photo-1521791055366-0d553872125f.avif')",
            }}
          >
            <div className="overlay">
              <h1>Corporate & Commercial Law</h1>
              <p>Business-focused legal services with expertise in intellectual property protection</p>
            </div>
          </section>

          {/* Overview */}
          <section className="practice-detail">
            <h2>Overview</h2>
            <p>
              Our corporate and commercial practice provides comprehensive legal solutions to 
              businesses of all sizes. From company registration to complex mergers, we help 
              clients navigate the corporate landscape. We also specialize in intellectual 
              property law, ensuring your innovations, trademarks, and creative works are 
              fully protected.
            </p>
          </section>

          {/* Key Services */}
          <section className="practice-detail">
            <h2>Key Services</h2>
            <ul>
              <li>Company incorporation & governance</li>
              <li>Mergers & acquisitions (M&A)</li>
              <li>Shareholder & partnership agreements</li>
              <li>Drafting & reviewing commercial contracts</li>
              <li>Intellectual property registration & enforcement</li>
              <li>Business compliance & regulatory advisory</li>
              <li>Startups & SME legal advisory</li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section className="practice-detail highlight">
            <h2>Why Choose Us?</h2>
            <div className="features">
              <div className="feature-card">
                <i className="fas fa-briefcase"></i>
                <h3>Business-Centered Solutions</h3>
                <p>
                  We align legal strategies with business objectives, ensuring your 
                  enterprise remains competitive and compliant.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-lightbulb"></i>
                <h3>IP Protection</h3>
                <p>
                  From trademarks to patents, we secure your intellectual assets and 
                  defend them against infringement.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-handshake"></i>
                <h3>Strategic Partnerships</h3>
                <p>
                  We facilitate contracts and negotiations that create lasting and 
                  beneficial business relationships.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="corporate-faq">
            <h2>Frequently Asked Questions – Corporate & IP Law</h2>
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? "open" : ""}`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="faq-question">
                    <h3>{faq.question}</h3>
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-us-section">
            <h2>Get in Touch</h2>
            <p>
              Reach us directly via call, WhatsApp, or visit our Contact Page for more details.
            </p>
            <div className="contact-buttons">
              <a href="tel:+254758743522" className="call-btn">
                <FaPhoneAlt className="icon" /> Call: +254758743522
              </a>
              <a
                href="https://wa.me/254758743522"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <FaWhatsapp className="icon" /> WhatsApp
              </a>
              <a href="/contact-us" className="contact-page-btn">
                <FaEnvelope className="icon" /> Contact Page
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254758743522"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <FaWhatsapp />
      </a>

      <Footer />
    </>
  );
}

export default CorporateCommercial;
