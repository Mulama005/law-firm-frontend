// src/components/BackToTop.jsx
import React, { useState, useEffect } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // ✅ smooth scroll
    });
  };

  return (
    <>
      {visible && (
        <button className="back-to-top" onClick={scrollToTop}>
          ⬆
        </button>
      )}
    </>
  );
}

export default BackToTop;
