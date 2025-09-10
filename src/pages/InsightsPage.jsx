import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import Header from "../components/Header";
import Footer from "../components/Footer";
import useinView from "../hooks/useinView";
import "../CSS/InsightPage/insightpage.css";

const insights = [
  {
    title: "Navigating Kenya’s Real Estate Law",
    category: "Real Estate",
    slug: "real-estate-law", // ✅ Add slug
    excerpt:
      "Understanding property and land transactions in Kenya is key for both individuals and corporations...",
    image:
      "https://i.postimg.cc/sxCfY8W4/premium-photo-1714618803939-d548250797f9.avif",
  },
  {
    title: "Corporate Compliance in 2025",
    category: "Corporate Law",
    slug: "corporate-compliance", // ✅ Add slug
    excerpt:
      "Stay ahead of evolving compliance requirements and protect your business from regulatory pitfalls...",
    image:
      "https://i.postimg.cc/MHYwyGqz/premium-photo-1661328186940-058bda0be44b.avif",
  },
  {
    title: "Debt Recovery & Banking Law",
    category: "Banking Law",
    slug: "debt-recovery", // ✅ Add slug
    excerpt:
      "Explore strategies for efficient debt collection while maintaining ethical and professional standards...",
    image:
      "https://i.postimg.cc/CLHCqp8J/photo-1594675293766-c0587aaa5b79.avif",
  },
];

/* ✅ Card Component */
function InsightCard({ item, index }) {
  const [cardRef, cardInView] = useinView({ threshold: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      className="insight-card"
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="insight-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="insight-content">
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        {/* ✅ Dynamic link to slug page */}
        <Link to={`/insights-page/${item.slug}`}>Read More →</Link>
      </div>
    </motion.div>
  );
}

function InsightsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Real Estate", "Corporate Law", "Banking Law"];

  const filteredInsights = insights.filter((item) => {
    return (
      (filter === "All" || item.category === filter) &&
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="insights-hero">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Legal Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Stay informed with expert analysis on Kenya’s evolving legal
            landscape.
          </motion.p>
        </div>
      </section>

      {/* Category Badges */}
      <div className="category-badges">
        {categories.map((cat, index) => (
          <span
            key={index}
            className={`badge ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="insights-controls">
        <input
          type="text"
          placeholder="Search insights..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Corporate Law">Corporate Law</option>
          <option value="Banking Law">Banking Law</option>
        </select>
      </div>

      {/* Insights Grid */}
      <div className="insights-grid">
        {filteredInsights.map((item, index) => (
          <InsightCard key={index} item={item} index={index} />
        ))}
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254700000000"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

      <Footer />
    </>
  );
}

export default InsightsPage;
