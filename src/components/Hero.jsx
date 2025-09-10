import React, { useState, useEffect } from "react";
import "../CSS/Herosection.css";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


const practiceAreas = [
  "Property & Real Estate",
  "Banking Law & Debt Collection",
  "Corporate Law & Intellectual Property",
  "Procurement & Asset Disposal",
];


const heroImages = [
  "https://i.postimg.cc/k4S43Ld0/photo-1589216532372-1c2a367900d9.avif",
  "https://i.postimg.cc/BZD8dPSj/photo-1528747008803-f9f5cc8f1a64.avif",
  "https://i.postimg.cc/k4S43Ld0/photo-1589216532372-1c2a367900d9.avif",
  "https://i.postimg.cc/qBnmcRSQ/photo-1701790644702-292e25180524.avif",
  "https://i.postimg.cc/L8yhzzTb/photo-1589994284978-c98238e44443.avif",
  "https://i.postimg.cc/QxhMw6Yz/photo-1700038778332-5a563b6d8644.avif",
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  // Change practice areas
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % practiceAreas.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  // Change background images
  useEffect(() => {
    const bgInterval = setInterval(
      () => setBgIndex((prev) => (prev + 1) % heroImages.length),
      7000
    );
    return () => clearInterval(bgInterval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`hero-bg ${i === bgIndex ? "visible" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Company Law & Corporate Advocates Advisory
        </motion.h1>

        <motion.h2
          key={index}
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {practiceAreas[index]}
        </motion.h2>

        <p className="hero-description">
          We are a trusted legal partner in Kenya, helping businesses navigate
          corporate law with confidence, precision, and integrity.
        </p>

        <div className="hero-buttons">
          <motion.a
            href="#consultation"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Consultation
          </motion.a>
         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Link to="/contact-us" className="btn-outline">
    Contact Us
  </Link>
</motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#services"
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={36} strokeWidth={2.5} />
      </motion.a>
    </section>
  );
}

export default Hero;
