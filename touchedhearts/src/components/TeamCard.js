import React from "react"
import '../styles/team.css';

const TeamCard = ({ member }) => {
  return (
    <div className="team-card" role="listitem">
      <img src={member.image} alt={member.name} className="team-img" />
      <div className="team-info">
        <h2 className="team-name">{member.name}</h2>
        <p className="role">{member.role}</p>
        <p className="bio">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
