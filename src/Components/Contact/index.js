import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';

import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if the form is being submitted
    console.log('Form submitted');

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_0al8fz8', // Your service ID
        'template_1z3evrm', // Your template ID
        form.current, // Form reference
        'QS7jMOJeUoFV4cRtjiubZ' // Your user token
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result);
          alert('Message successfully sent!');
          window.location.reload(false); // Reload the page after successful submission
        },
        (error) => {
          console.error('Failed to send email:', error); // Log error to console for debugging
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Multan,
          <br />
          Punjab,
          <br />
          Moeenabad Colony Khanewal Road, 60000 <br />
          Pakistan <br />
          <br />
          <span>csbyhashamm@gmail.com</span>
        </div>

      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
