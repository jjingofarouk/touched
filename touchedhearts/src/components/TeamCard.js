import React from "react";
import "../styles/team.css";

const TeamCard = ({ member, hierarchyLevel }) => {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    affiliation: {
      "@type": "NGO",
      name: "Touched Hearts",
      url: "https://touched.vercel.app"
    },
    image: member.image
  };

  return (
    <div
      className={`team-card ${hierarchyLevel}`}
      role="listitem"
      aria-label={`Team member ${member.name}`}
    >
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      <img
        src={member.image}
        alt={`${member.name}, ${member.role}`}
        className="team-img"
        loading="lazy"
      />
      <div className="team-info">
        <h2 className="team-name">{member.name}</h2>
        <p className="role">{member.role}</p>
        {member.reporting_to && (
          <p className="reporting-to">
            Reports to: {member.reporting_to}
          </p>
        )}
        <p className="bio">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;