import React, { useEffect, useRef } from "react";
import "./Home.scss";
import { TimelineLite, TweenLite, Power3 } from "gsap";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import CSSPlugin from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

function Home() {
  let name = useRef(null);
  let title = useRef(null);

  let btn = useRef(null);
  let gitHub = useRef(null);
  let twitter = useRef(null);
  let instagram = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    const imageInner = CSSRulePlugin.getRule(".image-inner:after");
    console.log(imageInner);

    tl.from(name, 1.5, { x: -50, opacity: 0, ease: Power3.easeOut })
      .from(title, 1.5, { x: -40, opacity: 0, ease: Power3.easeOut }, 0.4)
      .from(btn, 1.5, { x: -30, opacity: 0, ease: Power3.easeOut }, 1)
      .to(imageInner, 3.5, { width: "0%", ease: Power3.easeOut }, 0.7)
      .from(gitHub, 1.5, { y: -50, opacity: 0, ease: Power3.easeOut }, "-=1.5")
      .from(twitter, 1.5, { y: -50, opacity: 0, ease: Power3.easeOut }, "-=1.2")
      .from(
        instagram,
        1.5,
        { y: -50, opacity: 0, ease: Power3.easeOut },
        "-=0.9"
      );
  }, []);

  const handleMouseOver = () => {
    let strip = name.firstElementChild;
    TweenLite.to(strip, 0.8, { x: 20, ease: Power3.easeOut });
  };

  const handleMouseOut = () => {
    let strip = name.firstElementChild;
    TweenLite.to(strip, 0.8, { x: 0, ease: Power3.easeOut });
  };

  return (
    <div className="home" id="home">
      <div className="border-container">
        <div className="container">
          <h1 ref={(el) => (name = el)}>
            I AM OMKAR GODHAM <div></div>
          </h1>
          <div
            className="title"
            ref={(el) => (title = el)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span>WEB DEVELOPER</span>
          </div>
          <a
            href="#contact"
            className="contact-me-btn"
            ref={(el) => (btn = el)}
          >
            CONTACT ME
          </a>
        </div>
      </div>
      <div className="main-image-container">
        <div className="image-inner">
          <img src="\hero-img.png" alt="" />
        </div>
      </div>
      <div className="socials">
        <div></div>
        <a
          target="_black"
          href="https://github.com/omgodham/"
          ref={(el) => (gitHub = el)}
        >
          <GitHubIcon />{" "}
        </a>
        <a
          target="_black"
          href="https://twitter.com/OmGodham"
          ref={(el) => (twitter = el)}
        >
          <TwitterIcon />{" "}
        </a>
        <a
          target="_black"
          href="https://www.linkedin.com/in/omkar-godham-5543b1214/"
          ref={(el) => (instagram = el)}
        >
          <LinkedInIcon />{" "}
        </a>
      </div>
    </div>
  );
}

export default Home;
