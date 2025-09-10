// src/pages/OurTeam.jsx
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useinView from "../hooks/useinView"; 
import "../CSS/OurTeamPage/Team.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    id: "emmanuel-eredi",
    name: "Emmanuel Eredi",
    role: "Senior Legal Counsel",
    description: `
      Emmanuel brings extensive expertise in corporate law and litigation, guiding clients with clarity and precision. 

      Eredi is a Partner in charge of Litigation and Dispute Resolution. He was admitted to the bar in 2018 and rose through the ranks to the position of partner in record time on the strength of his abilities as an astute litigator and team leader.

      Prior to joining the firm, Eredi worked with the Office of the Attorney General and Department of Justice from January to August, 2017.

      Eredi attended Moi University School of Law where he graduated with a Bachelor of Laws (Hons) Degree and later attained a Post Graduate Diploma of Law from the Kenya School of Law.

      He is a member of the Law Society of Kenya and the Chartered Institute of Arbitrators – Kenya Branch.

      Eredi is a vibrant, fast-rising litigator with an eye for detail and analytical skills capable of turning any case on its head. His area of specialization is Dispute Resolution, with a specific interest in Alternative Dispute Resolution. He is currently pursuing specializations in Dispute Resolution and Contract Management in the Construction Industry.

      As the partner in charge of litigation and dispute resolution, he is a team leader of a vibrant team of advocates, legal assistants, and support staff that has broken the glass ceiling in terms of innovative approaches to service delivery, with the main aim being to achieve total customer satisfaction by improving the turnaround time in service delivery.

      Eredi has handled numerous high-profile briefs in all levels of our judicial system from tribunals, the magistracy, the High Court, Court of Appeal, and the Supreme Court. Some notable matters include:

      • Laban Gathungu vs. Ernst & Young LLP – A widely reported, potential game changer in the Partnership management realm. The claim is worth Kshs. 455,000,000/- 
      (https://www.standardmedia.co.ke/the-standard-insider/article/2001384705/when-partners-disagree-inside-ernst-youngs-sh450m-dispute).

      • China Wu Yi K. Company Limited vs. Steve Kithi & Co. Advocates – A significant breach of contract claim with the subject matter in excess of Kshs. 2.5 billion 
      (http://kenyalaw.org/caselaw/cases/view/209394/).

      • Evangelical Lutheran Church in Kenya vs. Skair Associate – Successfully argued before the Court of Appeal. 
      (http://kenyalaw.org/caselaw/cases/view/178427).

      • Consulting with clients on various road construction contracts and successfully preparing submissions on critical claims to the DB in excess of Kshs. 300,000,000/- which were decided in our client’s favour.

      • DCF Engineering Limited vs. Johari Ventures and Another – Successfully arguing the matter before the High Court in favour of our client. The claim is worth Kshs. 46,000,000/- inclusive of interest.
    `,
    image: "https://i.postimg.cc/fRbpTT7Y/Eredi-04.jpg",
    phone: "+254700000000",
    email: "emmanuel@example.com",
    whatsapp: "254700000000",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "https://www.instagram.com/eredi_digz?utm_source=ig_web_button_share_sheet&igsh=MXduZm1rb3JyeGZsMQ==",
      linkedin: "https://www.linkedin.com/in/emmanuel-eredi-0071ba118?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaqMdgwQLST%2BTZmxMwMksZg%3D%3D",
    },
  },
  {
    id: "mildred-mulama",
    name: "Mildred Mulama",
    role: "Head of Property & Real Estate",
    description:
      "I am an experienced Corporate Lawyer with a demonstrated history of working in the legal services industry. Skilled in Corporate Law, Commercial Law, Employment and Labour Laws, Legal Advice and Negotiation, Laws Of Contract among others. Experienced and versatile Human Resources. Skilled in all areas of strategic human resources management cycle, Legal management & compliance, corporate governance, Labor/ employment laws, drafting of contracts & policy management and Sustainability. A strategic leader who is a well organised and applies analytical thinking in different situations to achieve desired results.",
    image: "https://i.postimg.cc/jdYMC6NH/1750245816207.png",
    phone: "+254717339928",
    email: "mildred@example.com",
    whatsapp: "254711111111",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "https://www.instagram.com/millykeira?utm_source=ig_web_button_share_sheet&igsh=MWYzbHltZHg2M2Jveg==",
      linkedin: "https://www.linkedin.com/in/mildred-mulama-66a779163?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSJUnFQrfTsuiYvgwBJiP2g%3D%3D",
    },
  },
];

function TeamCard({ member, index }) {
  const [ref, visible] = useinView();

  return (
    <div
      id={member.id}
      ref={ref}
      className={`team-card ${visible ? "fade-in-up" : "hidden"}`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <div className={`team-content ${index % 2 === 1 ? "reverse" : ""}`}>
        {/* Image */}
        <div className="team-image">
          <img src={member.image} alt={member.name} />
        </div>

        {/* Info */}
        <div className="team-info">
          <h2>{member.name}</h2>
          <h4>{member.role}</h4>
          <p>{member.description}</p>

          {/* Buttons */}
          <div className="team-buttons">
            <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn whatsapp">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href={`tel:${member.phone}`} className="btn call">
              <FaPhoneAlt /> Call
            </a>
            <a href={`mailto:${member.email}`} className="btn email">
              <FaEnvelope /> Email
            </a>
          </div>

          {/* Socials */}
          <div className="team-socials">
            <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurTeam() {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, [id, location]);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="team-hero">
        <div className="overlay">
          <h1>Meet Our Legal Team</h1>
          <p>Dedicated professionals working to protect your interests</p>
        </div>
      </section>

      {/* Team Members */}
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.id} member={member} index={index} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default OurTeam;
