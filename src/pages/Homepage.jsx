// src/pages/Homepage.jsx
import React from "react";

// Import sections
import Header from "../components/Header";
import Hero from "../components/Hero";
import PracticeDetails from "../components/PracticeDetails";
import CTA from "../components/CTA";
import About from "../components/About";
import Services from "../components/Services";
import Team from "../components/Team";
import Insights from "../components/Insights";
import Footer from "../components/Footer";
import Community from "../components/Community"; 
import Consultation from "../components/Consultation";
function Homepage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* PracticeDetails Section */}
      <section id="practicedetails">
        <PracticeDetails />
      </section>

      {/* CTA Section */}
      <section id="cta">
        <CTA />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <Services />
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <Team />
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <Insights />
      </section>

      {/*Join Community Section (Subscribe form) */}
      <section id="subscribe">
        <Community />
      </section>

        {/* Consultation */}
      <section id="consultation">
        <Consultation />
      </section>

            <footer
        id="footer"
        className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-20"
      >

        {/* Actual Footer */}
        <Footer />
      </footer>
    </div>
  );
}

export default Homepage;
