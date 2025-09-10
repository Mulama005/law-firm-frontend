// src/components/Insights.jsx
import React from "react";
import { motion } from "framer-motion";
import "../CSS/Insights.css";

const insights = [
  {
    title: "Navigating Kenya’s Real Estate Law",
    excerpt:
      "Understanding property and land transactions in Kenya is key for both individuals and corporations...",
    image: "https://i.postimg.cc/sxCfY8W4/premium-photo-1714618803939-d548250797f9.avif",
  },
  {
    title: "Corporate Compliance in 2025",
    excerpt:
      "Stay ahead of evolving compliance requirements and protect your business from regulatory pitfalls...",
    image: "https://i.postimg.cc/MHYwyGqz/premium-photo-1661328186940-058bda0be44b.avif",
  },
  {
    title: "Debt Recovery & Banking Law",
    excerpt:
      "Explore strategies for efficient debt collection while maintaining ethical and professional standards...",
    image: "https://i.postimg.cc/CLHCqp8J/photo-1594675293766-c0587aaa5b79.avif",
  },
];

function Insights() {
  return (
    <section id="insights" className="insights-section">
      <div className="overlay"></div>
      <div className="container">
        {/* Heading */}
<motion.div
  className="insights-heading"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <h2 className="insights-title">
    Legal Insights
  </h2>
  <p className="insights-subtitle">
    Gain fresh perspectives on Kenya’s legal landscape.  
    Our insights keep you informed, empowered, and ahead of the curve.
  </p>
</motion.div>

        {/* Insights Grid */}
        <div className="insights-grid">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              className="insight-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="insight-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="insight-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href="/insights-page">Read More →</a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <motion.div
          className="insights-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="/insights-page" className="insights-btn">
            View All Insights
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Insights;
