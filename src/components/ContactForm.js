// src/components/ContactForm.js
import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    console.log("Submitting form data:", formData); // 🔍 Debug

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/contact/",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Server response:", res.data); // 🔍 Debug
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message); // 🔍 Debug
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>

      {status === "success" && (
        <p className="text-green-600 mb-3">✅ Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mb-3">❌ Error sending message. Try again.</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            placeholder="message"
            className="w-full border p-2 rounded"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
