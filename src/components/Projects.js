import React, { useEffect } from "react";
import "./Project.scss";
import "aos/dist/aos.css";
import AOS from "aos";
function Projects() {
  const Project = ({ category, title, description, link, image }) => {
    useEffect(() => {
      AOS.init({
        duration: 2000,
        offset: 300,
      });
    }, []);

    return (
      <div className="project">
        <div className="project-content" data-aos="fade-up">
          <span>{category}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link} target="_black">
            VIEW PROJECT
          </a>
        </div>
        <div className="project-img" data-aos="fade-down">
          <img src={image} alt={title} />
        </div>
      </div>
    );
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <Project
        category="FULL STACK"
        title="E-COMMERCE WEB APP"
        description="This is the ecommerce web app where you can buy things with payment integration"
        link="https://gentle-dawn-86783.herokuapp.com/"
        image="\proj1.png"
      />
      <Project
        category="FRONT END-REACT JS"
        title="DISNEY PLUS HOME"
        description="This is diney plus home clone where data is coming from firebase DB"
        link="https://disney-plus-89e87.web.app/"
        image="\proj2.png"
      />
      <Project
        category="LANDING PAGE"
        title="DATA COMPANY INFO"
        description="This is the landing page for data company from figma design"
        link="https://omgodham.github.io/"
        image="\proj5.png"
      />
      <Project
        category="FRONT END-REACT JS"
        title="TWITTER HOME CLONE"
        description="This the twitter home-clone with functionality of uploading images"
        link="https://twitterhomeclone.web.app/"
        image="\proj4.png"
      />
      <Project
        category="LANDING PAGE"
        title="COMPANY INFO"
        description="This is the landing page for company"
        link="https://comapnyinfo-react.web.app/"
        image="\proj3.png"
      />
    </div>
  );
}

export default Projects;
