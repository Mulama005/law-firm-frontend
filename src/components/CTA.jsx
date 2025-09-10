// src/components/CTA.js
import React from "react";
import { Helmet } from "react-helmet"; 
import "../CSS/CTA.css";

function CTA() {
  const scrollToConsultation = () => {
    const section = document.getElementById("consultation");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="cta-section">
      
      <Helmet>
        <title>Searching for the Best Corporate Legal Firm in Kenya? You’ve Found It</title>
        <meta
          name="description"
          content="Discover Kenya’s leading corporate legal firm. Our expert lawyers provide professional services in contracts, compliance, business law, mergers, acquisitions, and dispute resolution. Trusted legal advice tailored for businesses."
        />
      </Helmet>

      <h1 className="cta-title">
        Searching for the Best Corporate Legal Firm in Kenya? You’ve Found It.
      </h1>

      <p className="cta-text">
        At our firm, we pride ourselves on being the go-to corporate legal partner for 
        businesses across Kenya. With years of experience in company law, regulatory 
        compliance, mergers and acquisitions, and contract drafting, we ensure that 
        your business is protected and positioned for sustainable growth. We understand 
        the unique challenges Kenyan businesses face, which is why our solutions are 
        practical, reliable, and tailored to your specific needs. Whether you’re a 
        startup seeking legal guidance, a growing company navigating regulatory 
        requirements, or a large corporation dealing with complex transactions, 
        our dedicated team of expert lawyers is here to provide trusted, 
        results-driven support every step of the way.
      </p>

      {/* ✅ CTA Button */}
      <button className="cta-button" onClick={scrollToConsultation}>
        Chat a Lawyer Near Me Now! Call Us
      </button>
    </section>
  );
}

export default CTA;
