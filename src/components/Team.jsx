import React from "react";
import { useParams, useLocation, Link } from "react-router-dom"; // 👈 import Link

import useinView from "../hooks/useinView"; // 👈 scroll animation hook
import "../CSS/Team.css";

const teamMembers = [
  {
    id: "emmanuel-eredi",
    name: "Emmanuel Eredi",
    role: "Senior Legal Counsel",
    description:
      "Eredi is a Partner in charge of Litigation and Dispute Resolution. Eredi was admitted to the bar in 2018 and rose through the ranks to the position of partner in record time on the strength of his abilities as an astute litigator and team leader.",
    image: "https://i.postimg.cc/PxZ8xc1j/Eredi-06.jpg",
  },
  {
    id: "mildred-mulama",
    name: "Mildred Mulama",
    role: "Head of Property & Real Estate",
    description:
      "I am an experienced Corporate Lawyer with a demonstrated history of working in the legal services industry. Skilled in Corporate Law, Commercial Law, Employment and Labour Laws, Legal Advice and Negotiation, Laws Of Contract among others. ",
    image: "https://i.postimg.cc/XvBrHhHC/Mulama01.png",
  },
];

function OurTeam() {
  const { id } = useParams(); 
  const location = useLocation();

  React.useEffect(() => {
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
     

      <section className="ourteam-hero">
        <div className="overlay">
          <h1>Meet Our Legal Team</h1>
          <p>Dedicated professionals working to protect your interests</p>
        </div>
      </section>

      <div className="ourteam-container">
        {teamMembers.map((member, index) => {
          const [ref, visible] = useinView();
          return (
            <div
              key={member.id}
              id={member.id}
              ref={ref}
              className={`ourteam-card ${visible ? "fade-in-up" : "hidden"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={member.image} alt={member.name} className="ourteam-img" />
              <div className="ourteam-info">
                <h2>{member.name}</h2>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
                {/* Read More Button */}
                <Link to="/our-team" className="ourteam-btn">
                  Read More →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      
    </>
  );
}

export default OurTeam;
