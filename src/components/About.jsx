// src/components/AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { Scale, Users, Landmark, Globe2 } from "lucide-react";
import "../CSS/AboutUs.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-overlay">
        <div className="about-container">
          {/* Heading */}
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get to Know Us
          </motion.h2>

          <p className="about-description">
            We are a team of passionate and highly skilled legal practitioners,
            proudly serving businesses and individuals across Kenya with
            professionalism, integrity, and commitment to excellence. Our firm
            was established on the belief that <strong>justice and legal
            guidance should be accessible, practical, and solutions-driven</strong>.
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left side description */}
          <div className="about-text">
            <p>
              Over the years, we have positioned ourselves as a trusted partner
              in <strong>corporate law, property transactions, commercial
              disputes, debt recovery, and intellectual property</strong>. With
              a deep understanding of Kenya’s dynamic legal and business
              landscape, we help our clients navigate complex matters with
              confidence.
            </p>
            <p>
              Our approach is simple yet powerful: we combine <em>global
              standards of legal practice</em> with a keen appreciation of the
              unique realities of the Kenyan market. Whether it’s safeguarding
              investments, negotiating corporate deals, or defending your rights,
              we stand firmly by your side.
            </p>
            <p>
              Beyond the courtroom and boardroom, we see ourselves as <em>
              partners in growth</em>. We believe that every client we serve
              contributes to shaping Kenya’s vibrant economy — from SMEs and
              family businesses to multinationals and government agencies.
            </p>
            <p>
              Our philosophy is anchored on four core pillars: <strong>
              Integrity</strong>, <strong>Excellence</strong>, <strong>
              Client-Centered Service</strong>, and <strong>Global Outlook</strong>.
            </p>
          </div>

          {/* Right side pillars */}
          <div className="about-pillars">
            <motion.div
              className="pillar-card"
              whileHover={{ scale: 1.05 }}
            >
              <Scale className="pillar-icon" />
              <h4 className="pillar-title">Integrity</h4>
              <p className="pillar-text">
                We uphold honesty, transparency, and accountability in all
                dealings.
              </p>
            </motion.div>

            <motion.div
              className="pillar-card"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="pillar-icon" />
              <h4 className="pillar-title">Client First</h4>
              <p className="pillar-text">
                Your success is our priority — every solution is tailored to
                your unique needs.
              </p>
            </motion.div>

            <motion.div
              className="pillar-card"
              whileHover={{ scale: 1.05 }}
            >
              <Landmark className="pillar-icon" />
              <h4 className="pillar-title">Excellence</h4>
              <p className="pillar-text">
                We combine deep legal expertise with innovation to deliver
                outstanding results.
              </p>
            </motion.div>

            <motion.div
              className="pillar-card"
              whileHover={{ scale: 1.05 }}
            >
              <Globe2 className="pillar-icon" />
              <h4 className="pillar-title">Global Outlook</h4>
              <p className="pillar-text">
                We benchmark against international best practices while staying
                true to Kenyan realities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
