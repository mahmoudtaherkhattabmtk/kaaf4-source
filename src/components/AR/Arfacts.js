import React, { useEffect } from 'react';
import Arside from './Arside';

import "./arfacts.css";

const Arfacts = () => {
  useEffect(() => {
    function easeOut(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    }

    function countUp(targetElement, end, duration) {
      let start = 0;
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentValue = easeOut(progress, start, end - start, duration);
        targetElement.textContent = Math.floor(currentValue);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          targetElement.textContent = end;
        }
      }

      window.requestAnimationFrame(step);
    }

    const numbers = document.querySelectorAll('.fun-facts .number');
    numbers.forEach(function (number) {
      const endValue = parseInt(number.textContent.replace(/\D/g, ''));
      countUp(number, endValue, 3000); // 3000 milliseconds (3 seconds) duration
    });
  }, []);
  return (
    <div className="arContainer">
      <Arside />

      <div class="section arfacts-section bounce-right">
        <h1 className="decore">حقائق.</h1>
        <h1>
          <i className="fa fa-lightbulb-o"></i>حقائق
        </h1>

        <section class="fun-facts text-center">
          <div class="container">
            <div class="row">
              {/* <div class="col-md-3">
              <i class="fa fa-folder fa-5x"></i>
              <p class="number">20+</p>
              <p>Projects</p>
            </div> */}
              <div class="col-md-3">
                <i class="fa fa-handshake-o fa-3x"></i>
                <p class="number">50+</p>
                <p>عدد العملاء الذين تمت مساعدتهم</p>
              </div>
              <div class="col-md-3">
                <i class="fa fa-code fa-3x"></i>
                <p class="number">200,000,000+</p>
                <p>أسطر الكود</p>
              </div>
              <div class="col-md-3">
                <i class="fa fa-coffee fa-3x"></i>
                <p class="number">200+</p>
                <p>القهوة</p>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="skills-box">
        <h3>
          <i className="fa fa-tags"></i> Graphic Design
        </h3>
        <p>+ Photoshop</p>
        <p>+ Illustrator</p>
      </div>
      <div className="skills-box">
        <h3>
          <i className="fa fa-tags"></i> Web Design
        </h3>
        <p>+ Adobe Xd</p>
        <p>+ Photoshop</p>
        <p>+ Illustrator</p>
        <p>+ Protopie</p>
        <p>+ Figma</p>
      </div>
      <div className="skills-box">
        <h3>
          <i className="fa fa-tags"></i> Web Techs{" "}
        </h3>
        <h4>Front End</h4>
        <p>+ HTML, HTML5</p>
        <p>+ CSS, CSS3</p>
        <p>+ SCSS, SASS, JAD</p>
        <p>+ GULP</p>
        <p>+ BOOTSTRAP</p>
        <p>+ JQUERY</p>
        <p>+ PURE JS</p>
        <p>+ REACT</p>
        <p>+ NEXT.JS</p>
        <h4>Back End</h4>
        <p>+ PHP</p>
        <p>+ MYSQL</p>
        <p>+ LARAVEL</p>
        <p>+ NODE</p>
        <p>+ EXPRESS</p>
        <p>+ MONGODB</p>
      </div>
      <div className="skills-box">
        <h3>
          <i className="fa fa-tags"></i> Digital Marketer
        </h3>
        <p>+ Facebook</p>
        <p>+ Instgram</p>
        <p>+ Youtube</p>
        <p>+ Google Ads</p>
      </div>
      <div className="skills-box">
        <h3>
          <i className="fa fa-tags"></i> Languages
        </h3>
        <p>+ Arabic</p>
        <p>+ English</p>
      </div> */}
      </div>
    </div>
  );
};

export default Arfacts;
