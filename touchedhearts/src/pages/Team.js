import React from "react";

import TeamCard from "../components/TeamCard";
import teamData from "../data/team.json"; // Team member data

const Team = () => {
  return (
    <div className="team-page">
      {/* Navbar */}


      {/* Team Section */}
      <main>
        <section className="team-grid" aria-label="Meet Our Dedicated Team">
          <h1 className="section-title">Meet Our Team</h1>
          <div className="team-cards" role="list">
            {teamData.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Team;