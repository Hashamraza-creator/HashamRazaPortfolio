import React from "react";
import "./index.scss";

const skillsData = [
  { name: "React", level: 90 },
  { name: "Angular", level: 85 },
  { name: "iOS Development (Swift)", level: 80 },
  { name: "UI/UX Design (Figma)", level: 75 },
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "C++", level: 70 },
  { name: "Git", level: 85 }
];

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="skill-name">
      <h3>{skill.name}</h3>
    </div>
  
    <div
      className="progress-circle"
      style={{
        background: `conic-gradient(#00aaff ${skill.level}%, #444 ${skill.level}%)`
      }}
    >
      <div className="inner-circle"></div>
      <p>{skill.level}%</p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="skills-page">
      <h1>My Skills</h1>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
