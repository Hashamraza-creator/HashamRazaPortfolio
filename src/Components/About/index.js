import { useEffect, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImage from '../../assets/hashamport.png';


import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm confident, naturally curious, and perpetually working on improving
            my skills one design problem at a time.
          </p>
          <p>
            If I had to define myself in one sentence, it would be: a family person,
            father of a beautiful daughter, sports fanatic, photography enthusiast,
            and tech-obsessed!
          </p>
          <p>
            Hello! I'm Hasham Raza, a passionate and ambitious Front-End Developer with a strong foundation in web development, UI/UX design, and mobile app development. I specialize in creating engaging and intuitive user experiences using modern technologies like React, Angular, Swift, and Figma.
          </p>
          <br />
          <p>
            I am always eager to learn and grow, constantly refining my skills to stay up-to-date with the latest industry trends. Whether it's crafting pixel-perfect interfaces, optimizing performance, or designing user-friendly solutions, I approach every project with a focus on quality and usability.

            In addition to my technical expertise, I have a keen eye for design, which helps me bridge the gap between function and aesthetics. I believe in creating seamless and visually appealing applications that provide users with smooth and enjoyable experiences.
          </p>
          <br />
          <p>
            I'm excited to collaborate with talented individuals and contribute my skills to innovative projects that push the boundaries.
          </p>
        </div>

       
        <div className="about-image">
        <img src={aboutImage} alt="About Me" />

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" className="loader" />
    </>
  );
};

export default About;
