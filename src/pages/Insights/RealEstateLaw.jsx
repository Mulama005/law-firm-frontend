import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";   // ✅ corrected path
import Footer from "../../components/Footer";   // ✅ corrected path
import "../../CSS/InsightPage/RealEstateLaw.css";// ✅ Styling

function RealEstate() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="realestate-hero">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Navigating Kenya’s Real Estate Law
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A comprehensive guide to property ownership, land rights, and
            transactions in Kenya’s evolving legal framework.
          </motion.p>
        </div>
      </section>

      {/* Body Content */}
      <section className="realestate-content">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Understanding Real Estate Law in Kenya
        </motion.h2>

        <p>
          Real estate law in Kenya is primarily governed by the Constitution of
          Kenya (2010), the Land Act (2012), the Land Registration Act (2012),
          the Land Control Act, and related statutes. These laws collectively
          regulate ownership, transfer, leasing, and development of land.
        </p>

        <h3>1. Land Ownership</h3>
        <p>
          Kenya recognizes both public and private land ownership. Foreigners
          can own property through leases not exceeding 99 years, while
          freehold titles are restricted to Kenyan citizens and entities wholly
          owned by them. The Ministry of Lands oversees registration through
          the **Land Registration Act (2012)**.
        </p>

        <h3>2. Title Registration</h3>
        <p>
          The government has digitized land records under the **Ardhisasa
          Platform** to enhance transparency and reduce fraud. Buyers must
          ensure due diligence by conducting an official search at the land
          registry before completing any transaction.
        </p>

        <h3>3. Land Control Boards</h3>
        <p>
          Agricultural land transactions require approval from local **Land
          Control Boards**. Failure to obtain consent renders transactions
          void. This is crucial for investors looking to acquire farmland for
          development or agribusiness.
        </p>

        <h3>4. Property Transactions & Stamp Duty</h3>
        <p>
          Purchasers must pay **stamp duty** (2% for rural land, 4% for urban
          land) before transfer can be registered. In addition, legal fees,
          valuation costs, and consent charges may apply.
        </p>

        <h3>5. Mortgages & Charges</h3>
        <p>
          Financial institutions in Kenya commonly secure loans against land
          titles. The **Land Act (2012)** outlines the rights of lenders and
          borrowers, including foreclosure procedures in case of default.
        </p>

        <h3>6. Dispute Resolution</h3>
        <p>
          Disputes relating to land are handled by the **Environment and Land
          Court (ELC)**, a specialized court under Article 162(2)(b) of the
          Constitution. Alternative Dispute Resolution (ADR) methods, such as
          mediation and arbitration, are also encouraged.
        </p>

        <h3>7. Emerging Issues</h3>
        <ul>
          <li>Digitization of land records via **Ardhisasa**</li>
          <li>Community land rights under the **Community Land Act (2016)**</li>
          <li>Environmental concerns in real estate development</li>
          <li>Foreign investment and regulatory restrictions</li>
        </ul>

        <p>
          Kenya’s real estate sector continues to expand, driven by urbanization,
          infrastructural growth, and foreign investment. However, legal
          compliance remains essential to safeguard property rights and ensure
          smooth transactions.
        </p>
      </section>

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

export default RealEstate;
