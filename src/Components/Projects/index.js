import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import eCommerceImage from "../../assets/e-commerce.webp"; 
import secondPlaceImage from "../../assets/2ndplace.jpeg";
import image from "../../assets/images.png"; 
import war from "../../assets/warcard.png"; 
import weather from '../../assets/project2.png'
import buzz from '../../assets/diversity.png';
import my from '../../assets/my.jpeg'
import "./index.scss";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    image: my, // Replace with the correct path to your image
    link: "https://github.com/Hashamraza-creator/My-Portfolio-",
  },
  {
    title: "Card War Game",
    description: "A simple iOS card game built using Swift and Xcode.",
    image: war, // Replace with the correct path to your image
    link: "https://github.com/Hashamraza-creator/war-card-game-IOS-",
  },
  {
    title: "buzzTalk",
    description: "A messaging app with a sleek UI and real-time chat features.",
    image: buzz, // Replace with the correct path to your image
    link: "https://github.com/Hashamraza-creator/buzzTalk",
  },
  {
    title: "E-commerce Store Using Angular",
    description: "E-commerce Store on Angular with user authentication and payment gateway integration.",
    image: eCommerceImage,  // Use imported image
    link: "https://github.com/Hashamraza-creator/buy-and-sell-angular",
  },
  {
    title: "Weather App",
    description: "A weather app developed using Swift UI",
    image: weather, // Replace with the correct path to your image
    link: "https://github.com/Hashamraza-creator/weather_App",
  },
  {
    title: "UI designs",
    description: "UI designed for a mobile app and desktop",
    image: image, // Replace with the correct path to your image
    link: "https://www.figma.com/files/team/1318347150435983904/project/177657663?fuid=1318347148478840273",
  },
  {
    title: "2nd place Front End",
    description: "front-end for 2nd place.",
    image: secondPlaceImage,  // Use imported image
    link: "https://github.com/HasnainAli47/2ndPlace_frontend",
  },
];

const ProjectCard = ({ project }) => (
  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
    <div className="project-card-content">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-hover">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  </a>
);

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const titleArray = "My Projects".split("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="projects-page">
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={15} />
      </h1>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Projects;
