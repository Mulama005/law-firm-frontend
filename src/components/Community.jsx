import React, { useState, useRef, useEffect } from "react";
import "../CSS/Community.css";
import API_BASE_URL from "../config";

function JoinCommunity() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setMessage("⚠️ Please enter a valid email.");
      setIsError(true);
      return;
    }

    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch(`${API_BASE_URL}/api/subscribe/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
        mode: "cors", // explicit CORS
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        data = { error: "No JSON response" };
      }

      if (response.ok) {
        setMessage("🎉 Thank you for subscribing!");
        setIsError(false);
        setEmail("");
        console.log("✅ Subscription success:", data);

        // Optional: clear message after 5s
        setTimeout(() => setMessage(""), 5000);
      } else {
        setMessage(data.detail || "⚠️ Subscription failed. Please try again.");
        setIsError(true);
        console.error("❌ Subscription failed:", data);
      }
    } catch (error) {
      setMessage("⚠️ Error connecting to server.");
      setIsError(true);
      console.error("🌐 Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (message && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [message]);

  return (
    <section className="community-section fade-in">
      <h2>Join Our Community</h2>
      <form onSubmit={handleSubmit} className="community-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : "Subscribe"}
        </button>
      </form>

      {message && (
        <p
          ref={messageRef}
          className={`feedback-message ${isError ? "error shake" : "success fade-in"}`}
        >
          {message}
        </p>
      )}
    </section>
  );
}

export default JoinCommunity;
