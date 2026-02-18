// src/pages/PracticeAreas/BankingLaw.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../CSS/PracticeAreaPage/PracticeAreasPages/BankingLaw.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import useInView from "../../hooks/useinView"; 

function BankingLaw() {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  //attach hook for sections
  const [overviewRef, overviewVisible] = useInView();
  const [servicesRef, servicesVisible] = useInView();
  const [whyUsRef, whyUsVisible] = useInView();
  const [faqRef, faqVisible] = useInView();
  const [contactRef, contactVisible] = useInView();

  const faqs = [
    {
      question: "What is debt collection in banking law?",
      answer:
        "Debt collection involves the legal recovery of overdue loans, credit, or outstanding obligations through negotiation, mediation, or court processes.",
    },
    {
      question: "How can banks legally recover unpaid loans?",
      answer:
        "Banks may recover loans through demand letters, debt restructuring, auctioning secured property, or filing suits in court.",
    },
    {
      question: "Do I need a lawyer for debt recovery?",
      answer:
        "Yes, a lawyer ensures compliance with the law, prepares enforceable agreements, and protects your rights during recovery or repayment negotiations.",
    },
    {
      question: "What are my rights as a borrower?",
      answer:
        "Borrowers are entitled to clear loan terms, fair debt collection practices, protection from harassment, and access to dispute resolution.",
    },
    {
      question: "Can debt affect my credit rating in Kenya?",
      answer:
        "Yes, defaulting on a loan negatively impacts your credit score, making it harder to access future credit from financial institutions.",
    },
  ];

  return (
    <>
      <Header />

      <div className="practice-layout">
        {/*Sidebar Navigation */}
        <aside className="practice-sidebar">
          <h3>Practice Areas</h3>
          <ul>
            <li>
              <Link
                to="/practice/property-real-estate"
                className={
                  location.pathname.includes("/practice/property-real-estate") ? "active" : ""
                }
              >
                Property & Real Estate
              </Link>
            </li>
            <li>
              <Link
                to="/practice/banking-law"
                className={
                  location.pathname.includes("/practice/banking-law") ? "active" : ""
                }
              >
                Banking Law & Debt Collection
              </Link>
            </li>
            <li>
              <Link
                to="/practice/corporate-law"
                className={
                  location.pathname.includes("/practice/corporate-law") ? "active" : ""
                }
              >
                Corporate & Commercial Law
              </Link>
            </li>
            <li>
              <Link
                to="/practice/procurement-asset-disposal"
                className={
                  location.pathname.includes("/practice/procurement-asset-disposal") ? "active" : ""
                }
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
                "url('https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="overlay">
              <h1>Banking Law & Debt Collection</h1>
              <p>
                Comprehensive legal expertise in banking, finance, and debt
                recoveries.
              </p>
            </div>
          </section>

          {/* Overview */}
          <section
            ref={overviewRef}
            className={`practice-detail ${overviewVisible ? "fade-in-up" : "hidden"}`}
          >
            <h2>Overview</h2>
            <p>
              We provide trusted legal guidance in banking transactions and debt
              collection, ensuring that financial institutions and clients operate
              within the law. Our lawyers represent both lenders and borrowers,
              focusing on compliance, negotiation, and enforcement.
            </p>
          </section>

          {/* Key Services */}
          <section
            ref={servicesRef}
            className={`practice-detail ${servicesVisible ? "fade-in-up" : "hidden"}`}
          >
            <h2>Key Services</h2>
            <ul>
              <li>Loan agreements & restructuring</li>
              <li>Debt collection & recovery processes</li>
              <li>Banking compliance & regulatory advisory</li>
              <li>Secured transactions & mortgages</li>
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
                <i className="fas fa-university"></i>
                <h3>Banking Expertise</h3>
                <p>
                  Our team understands the complexities of financial law and
                  provides reliable guidance.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-handshake"></i>
                <h3>Negotiation & Mediation</h3>
                <p>
                  We help clients resolve disputes amicably while protecting their
                  interests.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-balance-scale"></i>
                <h3>Legal Compliance</h3>
                <p>
                  Ensuring all transactions comply with Kenya’s banking and
                  financial regulations.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section
            ref={faqRef}
            className={`property-faq ${faqVisible ? "fade-in-up" : "hidden"}`}
          >
            <h2>Frequently Asked Questions – Banking Law</h2>
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

          {/* Call to Action */}
          <section className="consultation">
            <h2>Need Expert Legal Help?</h2>
            <p>
              Contact us today for a consultation and let us protect your financial
              and legal interests.
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

          {/* Contact Us Section */}
          <section
            ref={contactRef}
            className={`contact-us-section ${contactVisible ? "fade-in-up" : "hidden"}`}
          >
            <h2>Get in Touch</h2>
            <p>
              Reach us directly via call, WhatsApp, or visit our Contact Page for
              more details.
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

export default BankingLaw;
