import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../../assets/images/asham raza.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEnvelope, faHome, faTools, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFigma, faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link>

    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="black" />
      </NavLink>

      <NavLink exact="true" activeClassName="active" className="skill-link" to="/skills">
        <FontAwesomeIcon icon={faTools} color="black" />
      </NavLink>
      <NavLink exact="true" activeClassName="active" className="project-link" to="/Projects">
        <FontAwesomeIcon icon={faBook} color="black" />
      </NavLink>

      <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="black" />
      </NavLink>

      <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="black" />
      </NavLink>

      <ul>
  <li>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/hasham-raza/"
      className="linkedin-link"
    >
      <FontAwesomeIcon icon={faLinkedin} color="gray" />
    </a>
  </li>
  <li>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/Hashamraza-creator/"
      className="github-link"
    >
      <FontAwesomeIcon icon={faGithub} color="gray" />
    </a>
  </li>
  <li>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://stackoverflow.com/users/27906778/hasham-raza"
      className="stackoverflow-link"
    >
      <FontAwesomeIcon icon={faStackOverflow} color="gray" />
    </a>
  </li>
  <li>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.figma.com/files/team/1318347150435983904/project/177657663?fuid=1318347148478840273"
      className="figma-link"
    >
      <FontAwesomeIcon icon={faFigma} color="gray" />
    </a>
  </li>
  <li>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.facebook.com/hasham.raza.391/?_rdc=2&_rdr"
      className="facebook-link"
    >
      <FontAwesomeIcon icon={faFacebook} color="gray" />
    </a>
  </li>
</ul>

    </nav>
  </div>
);

export default Sidebar;
