import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LogoS from '../../../../assets/images/mypic.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        opacity: 0, // Animate the opacity of the outline logo
        duration: 20,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );

    // Circle bounce animation and scaling
    gsap.fromTo(
      circleRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.75)', // Elastic bounce effect for the circle
      }
    );

    // Bounce effect for the image after the circle animates
    gsap.fromTo(
      solidLogoRef.current,
      {
        y: 100, // Start below its normal position
      },
      {
        y: 0, // Bounce up to its original position
        duration: 1,
        ease: 'bounce.out',
        delay: 1, // Start after the circle animation
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <div className="circle" ref={circleRef}></div> 

      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M100 0 L100 897 L200 897 L200 0 L100 0 Z M300 0 L300 897 L400 897 L400 0 L300 0 Z M100 448 L400 448"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
