import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../CSS/InsightPage/DebtRecovery.css";

function DebtRecovery() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="debt-hero">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Debt Recovery & Banking Law
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Strategies for efficient debt collection and understanding banking
            laws in Kenya’s financial sector.
          </motion.p>
        </div>
      </section>

      {/* Body Content */}
      <section className="debt-content">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Understanding Debt Recovery in Kenya
        </motion.h2>

        <p>
          Debt recovery in Kenya involves a combination of contractual rights,
          statutory remedies, and litigation mechanisms. The **Banking Act,
          Insolvency Act (2015), and the Civil Procedure Act** form the core
          legal framework.
        </p>

        <h3>1. Demand Letters & Negotiation</h3>
        <p>
          Before litigation, creditors must issue formal demand letters. Many
          debts are resolved through negotiation or settlement to avoid lengthy
          court processes.
        </p>

        <h3>2. Court Litigation</h3>
        <p>
          Where settlement fails, creditors can file suits in the Magistrate’s
          Court, High Court, or Commercial & Admiralty Division depending on
          claim size. Courts may issue garnishee orders, asset attachment, or
          liquidation proceedings.
        </p>

        <h3>3. Insolvency & Restructuring</h3>
        <p>
          The Insolvency Act (2015) allows restructuring of distressed
          businesses. Creditors may initiate liquidation or administration
          depending on the financial state of the debtor.
        </p>

        <h3>4. Banking Law Compliance</h3>
        <p>
          Lenders must comply with Central Bank of Kenya (CBK) regulations on
          interest rates, loan classification, and customer protection.
        </p>

        <p>
          Effective debt recovery requires balancing creditor rights with debtor
          protections to ensure fairness and financial stability.
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

export default DebtRecovery;
