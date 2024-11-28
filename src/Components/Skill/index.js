import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters"; // Ensure this path is correct
import "./index.scss";

const skillsData = [
  { name: "React", level: 85 },
  { name: "Angular", level: 93 },
  { name: "iOS Development (Swift)", level: 80 },
  { name: "UI/UX Design (Figma)", level: 97 },
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "Swift UI", level: 90 },
  { name: "Git", level: 85 },
];

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="skill-name">
      <h3>{skill.name}</h3>
    </div>
    <div
      className="progress-circle"
      style={{
        background: `conic-gradient(#00aaff ${skill.level}%, #444 ${skill.level}%)`,
      }}
    >
      <div className="inner-circle"></div>
      <p>{skill.level}%</p>
    </div>
  </div>
);

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const titleArray = "My Skills".split("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="skills-page">
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={15} />
      </h1>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Skills;
