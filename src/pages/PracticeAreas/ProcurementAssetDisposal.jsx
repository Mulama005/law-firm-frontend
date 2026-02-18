// src/pages/PracticeAreas/ProcurementAssetDisposal.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../CSS/PracticeAreaPage/PracticeAreasPages/ProcurementAssetDisposal.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaGavel, FaClipboardList, FaRecycle } from "react-icons/fa";
import useInView from "../../hooks/useinView";

function ProcurementAssetDisposal() {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  //Scroll Animations
  const { ref: overviewRef, inView: overviewInView } = useInView({ threshold: 0.2 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.2 });
  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({ threshold: 0.2 });
  const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.2 });

  const faqs = [
    {
      question: "What is procurement compliance?",
      answer: "It ensures organizations follow legal and ethical standards when sourcing goods, works, or services.",
    },
    {
      question: "Do you handle government tenders?",
      answer: "Yes, we assist in navigating public procurement processes, including tender drafting, review, and appeals.",
    },
    {
      question: "What is asset disposal?",
      answer: "It involves legally disposing, auctioning, or transferring outdated, surplus, or unused assets.",
    },
    {
      question: "Can you represent us in procurement disputes?",
      answer: "Absolutely. We handle cases before review boards, arbitration, and courts regarding procurement matters.",
    },
    {
      question: "Why is compliance important?",
      answer: "It minimizes risks, ensures transparency, and protects your organization from penalties and legal issues.",
    },
  ];

  return (
    <>
      <Header />

      <div className="practice-layout">
        {/* Sidebar */}
        <aside className="practice-sidebar">
          <h3>Practice Areas</h3>
          <ul>
            <li>
              <Link to="/practice/property-real-estate" className={location.pathname === "/practice/property-real-estate" ? "active" : ""}>
                Property & Real Estate
              </Link>
            </li>
            <li>
              <Link to="/practice/banking-law" className={location.pathname === "/practice/banking-law" ? "active" : ""}>
                Banking & Finance Law
              </Link>
            </li>
            <li>
              <Link to="/practice/corporate-law" className={location.pathname === "/practice/corporate-law" ? "active" : ""}>
                Corporate & Commercial Law
              </Link>
            </li>
            
            <li>
              <Link to="/practice/procurement-asset-disposal" className={location.pathname === "/practice/procurement-asset-disposal" ? "active" : ""}>
                Procurement & Asset Disposal
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="practice-content">
          {/* Hero Section */}
          <section
            className="practice-hero"
            style={{
              backgroundImage: "url('https://i.postimg.cc/wvBT2y1W/photo-1715541275956-4845a5cf74c1.avif')",
            }}
          >
            <div className="overlay">
              <h1>Procurement & Asset Disposal</h1>
              <p>Trusted legal guidance in procurement processes and transparent asset disposal management.</p>
            </div>
          </section>

          {/* Overview */}
          <section ref={overviewRef} className={`practice-detail ${overviewInView ? "visible" : ""}`}>
            <h2>Overview</h2>
            <p>
              Our Procurement & Asset Disposal practice provides strategic legal support to organizations navigating 
              procurement laws, compliance, tendering processes, and disposal of assets. We ensure compliance with 
              statutory frameworks while safeguarding your business interests.
            </p>
          </section>

          {/* Key Services */}
          <section ref={servicesRef} className={`practice-detail ${servicesInView ? "visible" : ""}`}>
            <h2>Key Services</h2>
            <ul>
              <li>Procurement compliance advisory</li>
              <li>Drafting and reviewing tender documents</li>
              <li>Representation in procurement disputes</li>
              <li>Asset disposal planning and compliance</li>
              <li>Appeals before procurement review boards</li>
              <li>Anti-corruption and transparency training</li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section ref={whyChooseRef} className={`practice-detail highlight ${whyChooseInView ? "visible" : ""}`}>
            <h2>Why Choose Us?</h2>
            <div className="features">
              <div className="feature-card">
                <FaClipboardList size={40} className="icon" />
                <h3>Regulatory Expertise</h3>
                <p>We understand the legal intricacies of procurement and asset disposal laws, ensuring full compliance.</p>
              </div>
              <div className="feature-card">
                <FaGavel size={40} className="icon" />
                <h3>Strong Representation</h3>
                <p>Our lawyers advocate for clients in disputes, tenders, and procurement review proceedings.</p>
              </div>
              <div className="feature-card">
                <FaRecycle size={40} className="icon" />
                <h3>Sustainable Practices</h3>
                <p>We promote ethical, sustainable, and transparent approaches to procurement and asset disposal.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section ref={faqRef} className={`procurement-faq ${faqInView ? "visible" : ""}`}>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? "open" : ""}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
            <p>Reach out to us for guidance on procurement compliance, tender disputes, and transparent asset disposal processes.</p>
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

export default ProcurementAssetDisposal;
