import React from "react";
import SideNav from "./SideNav";

import "./about.css";
import "./facts.css";
const About = () => {
  return (
    <>
      < SideNav />
      <div class="home-section about-section bounce-right">
        <h1 className="decore">About.</h1>
        <h1> <i className="fa fa-hand-o-right"></i> About Us</h1>
        <p>
          <b>Our Vission</b>
          <hr />
          To be the leading company in empowering recent graduates through distinguished training programs that enhance their technical and personal skills and help them integrate smoothly into the job market
        </p>
        <p>
          <b>Our Mission</b>
          <hr />
          To provide recent graduates with the technical and personal skills necessary to succeed in the job market, through high-quality training programs specifically designed to meet their needs.
        </p>
        <div className="hire-me">
          <i className="fa fa-file-image-o"></i>
          <span>
            Many Years In The Field
            <br />
            With More Than 100 Projects Successfully Done!
          </span>
          <span>
            <i className="fa fa-whatsapp"></i> <a href="https://wa.me/201150666224">Contact Us</a>
          </span>
        </div>

        <h1> <i className="fa fa-hand-o-right"></i> What We Do</h1>
        <div className="skills-box">
          <h3>
            <i className="fa fa-code"></i> Technical Skills
          </h3>
          <b>To develop the technical skills of recent graduates, such as programming, data analysis, and others.</b>
          <p>+ Photoshop</p>
          <p>+ Illustrator</p>
          <p>+ Programming</p>
          <p>+ ...</p>
        </div>
        <div className="skills-box">
          <h3>
            <i className="fa fa-cogs"></i> PRACTICAL Experience
          </h3>
          <b>To help recent graduates gain practical experience through training and mentoring programs.</b>
          <p>+ Instruments</p>
          <p>+ Labs</p>
          <p>+ Experts</p>
          <p>+ ...</p>
        </div>
        <div className="skills-box">
          <h3>
            <i className="fa fa-user"></i> PERSONAL Skills
          </h3>
          <b>To improve the personal skills of recent graduates, such as communication, teamwork, and critical thinking.</b>
          <p>+ Teamwork</p>
          <p>+ Communication Skills</p>
          <p>+ Presentation Skills</p>
          <p>+ ...</p>
        </div>
      </div>
    </>
  );
};

export default About;
