// src/pages/Insights/CorporateCompliance.jsx
import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../CSS/InsightPage/CorporateCompliance.css";

function CorporateCompliance() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="compliance-hero">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Corporate Compliance in Kenya (2025)
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Staying ahead of evolving compliance requirements to protect
            businesses from legal, regulatory, and reputational risks.
          </motion.p>
        </div>
      </section>

      {/* Body Content */}
      <section className="compliance-content">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Understanding Corporate Compliance
        </motion.h2>

        <p>
          Corporate compliance refers to a company’s adherence to laws,
          regulations, ethical standards, and internal policies. In Kenya,
          compliance has become increasingly significant as regulatory
          frameworks expand and enforcement becomes more stringent.
        </p>

        <h3>1. Regulatory Framework</h3>
        <p>
          Companies must comply with the **Companies Act (2015)**, Capital
          Markets Authority (CMA) regulations, Kenya Revenue Authority (KRA)
          tax obligations, and anti-money laundering laws under the **Proceeds
          of Crime and Anti-Money Laundering Act (POCAMLA)**.
        </p>

        <h3>2. Corporate Governance</h3>
        <p>
          The **Mwongozo Code of Governance** sets principles for transparency,
          accountability, and ethical leadership. Boards are expected to
          promote sustainability and ensure fair treatment of shareholders.
        </p>

        <h3>3. Tax Compliance</h3>
        <p>
          Tax obligations include PAYE, VAT, and corporate income tax. The KRA
          has automated most services under the **iTax platform**, making tax
          compliance more transparent.
        </p>

        <h3>4. Data Protection & Privacy</h3>
        <p>
          With the enactment of the **Data Protection Act (2019)**, companies
          must ensure secure handling of personal data. The Office of the Data
          Protection Commissioner (ODPC) enforces compliance.
        </p>

        <h3>5. Employment & Labour Laws</h3>
        <p>
          Employers must comply with the **Employment Act (2007)**, labour
          standards, occupational safety, and welfare provisions under NSSF and
          NHIF.
        </p>

        <h3>6. Risk of Non-Compliance</h3>
        <p>
          Non-compliance may result in fines, loss of operating licenses, tax
          penalties, reputational harm, and even criminal liability for
          directors.
        </p>

        <p>
          In today’s competitive economy, robust compliance programs are not
          optional—they are strategic tools for business growth and investor
          confidence.
        </p>
      </section>

      {/* Floating WhatsApp */}
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

export default CorporateCompliance;
