import React from "react";
import { NavLink } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import teamData from "../data/team.json";
import "../styles/team.css";

const Team = () => {
  const { hierarchy } = teamData;

  return (
    <div className="team-page">
      <main>
        <section className="team-grid" aria-label="Meet Our Expert NGO Team">
          <h1 className="section-title">Meet Our Expert NGO Team at Touched Hearts</h1>
          <p className="team-intro">
            Our dedicated NGO leadership team at Touched Hearts drives transformative education, healthcare, and community development initiatives globally, fostering sustainable change in underserved communities.
          </p>

          <div className="team-section" role="region" aria-labelledby="board-heading">
            <h2 id="board-heading" className="subsection-title">Board of Directors</h2>
            <div className="team-cards" role="list">
              {hierarchy.governance.board_of_directors.members.map((member, index) => (
                <TeamCard key={`board-${index}`} member={member} hierarchyLevel="board" />
              ))}
            </div>
          </div>

          <div className="team-section" role="region" aria-labelledby="executive-heading">
            <h2 id="executive-heading" className="subsection-title">Executive Leadership</h2>
            <div className="team-cards" role="list">
              {hierarchy.governance.executive_leadership.members.map((member, index) => (
                <TeamCard key={`executive-${index}`} member={member} hierarchyLevel="executive" />
              ))}
            </div>
          </div>

          {Object.entries(hierarchy.core_departments).map(([deptKey, dept], deptIndex) => (
            <div
              key={`dept-${deptKey}`}
              className="team-section"
              role="region"
              aria-labelledby={`${deptKey}-heading`}
            >
              <h2 id={`${deptKey}-heading`} className="subsection-title">
                {deptKey
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </h2>
              <div className="team-cards" role="list">
                {dept.head && (
                  <TeamCard
                    key={`head-${deptKey}`}
                    member={dept.head}
                    hierarchyLevel="department-head"
                  />
                )}
                {dept.team &&
                  dept.team.map((member, index) => (
                    <TeamCard
                      key={`team-${deptKey}-${index}`}
                      member={member}
                      hierarchyLevel="department-team"
                    />
                  ))}
                {dept.members &&
                  dept.members.map((member, index) => (
                    <TeamCard
                      key={`member-${deptKey}-${index}`}
                      member={member}
                      hierarchyLevel="department-team"
                    />
                  ))}
              </div>
            </div>
          ))}

          <div className="team-cta" role="complementary">
            <NavLink to="/get-involved" className="cta-button">
              Join Our Mission
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;