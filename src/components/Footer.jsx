// src/components/Footer.jsx
import React from "react";
import {
  Scale,
  Gavel,
  BookOpen,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Home,
  Info,
  FileText,
  Users,
  Newspaper,
} from "lucide-react";
import "../CSS/Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand + Description */}
        <div className="footer-section">
          <h2 className="footer-brand">
            <Scale className="icon" />
            Eredi & Mulama Advocates
          </h2>
          <p>
            A trusted Kenyan law firm offering expert legal solutions in
            corporate, property, and litigation matters.
            We bring clarity and confidence to your legal journey.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Home className="icon" />
              <Link to="/">Home</Link>
            </li>
            <li>
              <Info className="icon" />
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <FileText className="icon" />
              <Link to="/practice-areas">Practice Areas</Link>
            </li>
            <li>
              <Users className="icon" />
              <Link to="/our-team">Our Team</Link>
            </li>
            <li>
              <Newspaper className="icon" />
              <Link to="/insights-page">Insights</Link>
            </li>
            <li>
              <Mail className="icon" />
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>

       
        {/* Practice Areas */}
       
<div className="footer-section">
  <h3>Practice Areas</h3>
  <ul>
    <li>
      <Link to="/practice/property-real-estate" className="footer-link">
        <Gavel className="icon" /> Property & Real Estate
      </Link>
    </li>
    <li>
      <Link to="/practice/banking-law" className="footer-link">
        <BookOpen className="icon" /> Banking Law & Debt Collection
      </Link>
    </li>
    <li>
      <Link to="/practice/corporate-law" className="footer-link">
        <Scale className="icon" /> Corporate Law & Intellectual Property
      </Link>
    </li>
    <li>
      <Link to="/practice/procurement-asset-disposal" className="footer-link">
        <Gavel className="icon" /> Procurement & Asset Disposal
      </Link>
    </li>
  </ul>
</div>

       

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><MapPin className="icon" /> Nairobi, Kenya</li>
            <li><Phone className="icon" /> +254 712 345 678</li>
            <li><Mail className="icon" /> info@eredimulamaadvocates.ke</li>
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <p>
            Subscribe to our newsletter for the latest legal updates and insights.
          </p>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eredi & Mulama Advocates. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
