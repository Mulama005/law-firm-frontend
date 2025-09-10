// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import PracticeDetails from "./components/PracticeDetails";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import "./CSS/BackToTop.css";

import FullPracticePage from "./pages/FullPracticePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurTeam from "./pages/OurTeam";
import InsightsPage from "./pages/InsightsPage";
import RealEstateLaw from "./pages/Insights/RealEstateLaw";
import CorporateCompliance from "./pages/Insights/CorporateCompliance";
import DebtRecovery from "./pages/Insights/DebtRecovery";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Practice Area Pages
import PropertyRealEstate from "./pages/PracticeAreas/PropertyRealEstate";
import BankingLaw from "./pages/PracticeAreas/BankingLaw";
import CorporateLaw from "./pages/PracticeAreas/CorporateLaw";
import ProcurementAssetDisposal from "./pages/PracticeAreas/ProcurementAssetDisposal";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/insights-page" element={<InsightsPage />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Team Page with optional member ID */}
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-team/:id" element={<OurTeam />} />

        {/* ✅ Slug-based routes */}
        <Route path="/insights-page/real-estate-law" element={<RealEstateLaw />} />
        <Route path="/insights-page/corporate-compliance" element={<CorporateCompliance />} />
        <Route path="/insights-page/debt-recovery" element={<DebtRecovery />} />

        {/* Practice Areas */}
        <Route path="/practice-areas" element={<FullPracticePage />} />
        <Route path="/practice/property-real-estate" element={<PropertyRealEstate />} />
        <Route path="/practice/banking-law" element={<BankingLaw />} />
        <Route path="/practice/corporate-law" element={<CorporateLaw />} />
        <Route path="/practice/procurement-asset-disposal" element={<ProcurementAssetDisposal />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;
