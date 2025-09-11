import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaGavel } from "react-icons/fa";
import "../CSS/Consultation.css";
import API_BASE_URL from "../config";

function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
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
        setStatus("✅ Consultation request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Backend error:", errorData);
        setStatus("❌ Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Error submitting request.");
    }
  };

  return (
    <section id="consultation" className="consultation-section">
      <div className="consultation-header">
        <h2>Schedule a Consultation</h2>
        <p>Fill in your details and let’s help you with the right legal solution.</p>
      </div>

      <div className="consultation-content">
        {/* Map */}
        <div className="consultation-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8451554713274!2d36.799609973631256!3d-1.265502798722441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17406a859d11%3A0xe8829019d473446a!2sDelta%20Towers%2C%20Waiyaki%20Wy%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1757571541923!5m2!1sen!2ske" 
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "14px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="consultation-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>

          <div className="input-group">
            <FaBuilding className="input-icon" />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
            />
          </div>

          <div className="input-group">
            <FaGavel className="input-icon" />
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="">Select Service</option>
              <option>Property & Real Estate</option>
              <option>Banking Law & Debt Collection</option>
              <option>Corporate Law & IP</option>
              <option>Procurement & Asset Disposal</option>
            </select>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            {status === "Submitting..." ? "Submitting..." : "Get Consultation"}
          </button>
        </form>
      </div>

      {status && (
        <p
          className={`status-message ${
            status.includes("✅")
              ? "success"
              : status.includes("❌")
              ? "error"
              : "warning"
          }`}
        >
          {status}
        </p>
      )}
    </section>
  );
}

export default Consultation;
