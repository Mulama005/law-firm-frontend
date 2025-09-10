import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Practice Areas", path: "/practice-areas" },
    { label: "Our Team", path: "/our-team" },
    { label: "Legal Insights", path: "/insights-page" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="header-container">
        {/* Logo / Brand */}
        <motion.h1
          className="logo"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Eredi & Mulama Law
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="list-none"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={item.path} className="relative group">
                  {item.label}
                  <span className="underline"></span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="nav-buttons">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact-us" className="btn-outline">
                Get Started
              </Link>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mobile-nav"
          >
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={item.path} className="mobile-link">
                    {item.label}
                  </Link>
                </motion.li>
              ))}

              {/* CTA inside mobile menu */}
              <motion.li
                className="mobile-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact-us" className="btn-outline">
                  Get Started
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
