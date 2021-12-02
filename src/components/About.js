import React, { useEffect, useRef } from "react";
import "./About.scss";
import "aos/dist/aos.css";
import { TweenLite, TimelineLite, Power3 } from "gsap";
import AOS from "aos";

function About() {
  let img = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 600,
    });
  }, []);

  const handleMouseOver = () => {
    TweenLite.to(img, 1, { scale: 1.1, ease: Power3.ease });
  };

  const handleMouseOut = () => {
    TweenLite.to(img, 1, { scale: 1.0, ease: Power3.ease });
  };

  return (
    <div className="about">
      <div className="about-container">
        <div className="container-content" data-aos="fade-right">
          <p>Expert Web Dveloper</p>
          <h1>About Me</h1>
          <div className="stripe"></div>
          <div className="description">
            <p>
              I'm Omkar a Full Stack Web Developer It has been more than a year
              I'm working in this field. The technology stack I mostly used is
              MERN which is the combination of MongoDB, ExpressJS, ReactJS, and
              NodeJS.From the stack you must have understood how much I love
              JavaScript. I am now very familiar with web development tools. I
              usually do static websites, dynamic websites, web applications,
              etc.
            </p>
            <p>
              I've completed some projects related to the MERN stack, still
              improving and trying to learn new every day.
            </p>
          </div>
        </div>
        <div
          className="container-img"
          data-aos="zoom-in-up"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="\image.JPG" alt="omkar" ref={(el) => (img = el)} />
        </div>
      </div>
    </div>
  );
}

export default About;
