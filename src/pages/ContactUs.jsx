import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../CSS/ContactUs.css";
import API_BASE_URL from "../config";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Error submitting request.");
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Have questions or need legal assistance? Reach out to us today.
          </motion.p>
        </div>
      </section>

     {/* Contact Info Section */}
<section id="contact-us" className="contact-details">
  <div className="contact-card">
    <div className="icon">📍</div>
    <h3>Our Office</h3>
    <p>Nairobi, Kenya</p>
    <a href="https://maps.app.goo.gl/PVeAQ5Znj64StQio9" target="_blank" rel="noopener noreferrer">
      View on Map
    </a>
  </div>

  <div className="contact-card">
    <div className="icon">📞</div>
    <h3>Phone</h3>
    <p>+254 700 000 000</p>
    <a href="tel:+254700000000">Call Us</a>
  </div>

  <div className="contact-card">
    <div className="icon">✉️</div>
    <h3>Email</h3>
    <p>info@lawfirm.co.ke</p>
    <a href="mailto:info@lawfirm.co.ke">Send Email</a>
  </div>
</section>



      {/* Talk to Us Section */}
      <section id="contact" className="contact-form-section">
        <div className="form-container">
          <h2>Talk to Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          <p className="status">{status}</p>
        </div>

        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8451554713274!2d36.79960997363126!3d-1.2655027987224505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17406a859d11%3A0xe8829019d473446a!2sDelta%20Towers%2C%20Waiyaki%20Wy%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1757064892916!5m2!1sen!2ske" 
          width="600" 
          height="450" 
          
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254700000000"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>

      <Footer />
    </>
  );
}

export default ContactUs;
