import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../CSS/PracticeAreaPage/PracticeAreasPages/RealEstate.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import useInView from '../../hooks/useinView'; 

function PropertyRealEstate() {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  // Attach hook to each section
  const [overviewRef, overviewVisible] = useInView();
  const [servicesRef, servicesVisible] = useInView();
  const [whyUsRef, whyUsVisible] = useInView();
  const [faqRef, faqVisible] = useInView();
  const [contactRef, contactVisible] = useInView();

  const faqs = [
    { question: "What documents are required when buying land in Kenya?", answer: "Key documents include the title deed, land search certificate, survey map, and a valid sale agreement prepared by a lawyer." },
    { question: "How can I confirm ownership of a property?", answer: "You can perform an official land search at the Ministry of Lands to verify the registered owner and check for encumbrances." },
    { question: "What is the role of a lawyer in property transactions?", answer: "A lawyer ensures due diligence, drafts legally binding contracts, verifies ownership, and protects your interests during the transaction." },
    { question: "What taxes or fees are payable during property transfer?", answer: "Some of the common payments include stamp duty, legal fees, registration fees, and in some cases, capital gains tax." },
    { question: "Can foreigners own land in Kenya?", answer: "Foreigners cannot own freehold land in Kenya but can hold leasehold titles for a period not exceeding 99 years." },
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
              <Link to="/practice/" className={location.pathname === "/practice/" ? "active" : ""}>
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
              backgroundImage:
                "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="overlay">
              <h1>Property & Real Estate Law</h1>
              <p>Trusted legal expertise to safeguard your property investments</p>
            </div>
          </section>

          {/* Overview */}
          <section
            ref={overviewRef}
            className={`practice-detail ${overviewVisible ? "fade-in-up" : "hidden"}`}
          >
            <h2>Overview</h2>
            <p>
              Our property and real estate practice is dedicated to guiding clients
              through every stage of property ownership, investment, and dispute
              resolution. Whether you are an individual buyer, a property developer,
              or a corporate investor, we ensure that your interests are fully
              protected under the law.
            </p>
          </section>

          {/* Key Services */}
          <section
            ref={servicesRef}
            className={`practice-detail ${servicesVisible ? "fade-in-up" : "hidden"}`}
          >
            <h2>Key Services</h2>
            <ul>
              <li>Property purchase & sales agreements</li>
              <li>Lease & tenancy contracts</li>
              <li>Land registration & title processing</li>
              <li>Property financing & mortgages</li>
              <li>Real estate development advisory</li>
              <li>Dispute resolution & litigation</li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section
            ref={whyUsRef}
            className={`practice-detail highlight ${whyUsVisible ? "fade-in" : "hidden"}`}
          >
            <h2>Why Choose Us?</h2>
            <div className="features">
              <div className="feature-card">
                <i className="fas fa-balance-scale"></i>
                <h3>Experienced Attorneys</h3>
                <p>Our lawyers have decades of experience in property and land law, providing expert guidance on complex transactions.</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Client Protection</h3>
                <p>We prioritize safeguarding your investments with legally binding contracts and due diligence.</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-gavel"></i>
                <h3>Dispute Resolution</h3>
                <p>Whether in court or arbitration, we provide strong representation to resolve property conflicts effectively.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            ref={faqRef}
            className={`property-faq ${faqVisible ? "fade-in-up" : "hidden"}`}
          >
            <h2>Frequently Asked Questions – Property Law</h2>
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
          <section
            ref={contactRef}
            className={`contact-us-section ${contactVisible ? "fade-in-up" : "hidden"}`}
          >
            <h2>Get in Touch</h2>
            <p>Reach us directly via call, WhatsApp, or visit our Contact Page for more details.</p>
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

export default PropertyRealEstate;
