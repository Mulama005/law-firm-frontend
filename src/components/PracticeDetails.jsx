// src/components/PracticeDetails.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUniversity, FaBuilding, FaGavel } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import "../CSS/PracticeDetails.css"; 

const practiceAreas = [
  {
    title: "Property & Real Estate",
    description:
      "We handle real estate transactions, property disputes, leasing, and conveyancing with a focus on protecting clients’ investments.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    link: "/practice/property-real-estate",
    icon: <FaBuilding className="card-icon" />,
  },
  {
    title: "Banking Law & Debt Collection",
    description:
      "Assisting banks, corporates, and individuals with debt recovery, credit management, and compliance with financial regulations.",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80",
    link: "/practice/banking-law",
    icon: <FaUniversity className="card-icon" />,
  },
  {
    title: "Corporate Law & Intellectual Property",
    description:
      "From company registration to mergers, acquisitions, and IP protection, we ensure businesses thrive in Kenya’s competitive environment.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "/practice/corporate-law",
    icon: <MdOutlineBusinessCenter className="card-icon" />,
  },
  {
    title: "Procurement & Asset Disposal ",
    description:
      "Guiding corporates and government institutions on fair and transparent procurement and disposal of assets in compliance with Kenyan law.",
    image:
      "https://i.postimg.cc/T3zdwP0K/photo-1743385779347-1549dabf1320.avif",
    link: "/practice/procurement-asset-disposal",
    icon: <FaGavel className="card-icon" />,
  },
];

function PracticeDetails() {
  return (
    <section className="practice-section">
      {/* Background image overlay */}
      <div className="background"></div>

      <div className="content">
        <h2 className="practice-heading">Our Practice Area Details</h2>

        <div className="practice-grid">
          {practiceAreas.map((area, index) => (
            <div className="practice-card" key={index}>
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${area.image})` }}
              ></div>
              <div className="card-overlay"></div>

              <div className="card-content">
                {area.icon}
                <h3 className="card-title">{area.title}</h3>
                <p className="card-description">{area.description}</p>
                <Link to={area.link} className="card-link">
                  See All Practice Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <Link to="/practice-areas">
            <button className="cta-button">Explore More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PracticeDetails;
