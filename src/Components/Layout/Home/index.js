import LogoTitle from '../../../assets/images/hashamraza.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import Logo from './logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['H', 'a', 's', 'h', 'a', 'm', ' ', 'R', 'a', 'z', 'a'];
    const jobArray = [
        'A', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ',
        'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    
                    <span className={`${letterClass} _12`}>H</span>
                    <span className={`${letterClass} _13`}>i,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    &nbsp;{}
                    <img src={LogoTitle} alt="developer" />
                    {}
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={16}
                    />
                    <br />
                    {}
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={nameArray.length + 16}
                    />
                </h1>
                <h2>Front-end Developer / iOS Developer / UI/UX Designer</h2>
                <Link to="/contact" className="flat-button">
                    Contact Me
                </Link>
                <a href="../../../assets/Hasham Raza's cv 6.pdf" download className="download-cv flat-button">
  Download CV
</a>

        

            </div>
            <Logo />
        </div>
    );
};

export default Home;
