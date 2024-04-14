import { useEffect } from 'react';
import SideNav from "./SideNav";

import img1 from "../../src/img/portfolio/1.jpg";
import img2 from "../../src/img/portfolio/2.jpg";
import img3 from "../../src/img/portfolio/3.jpg";
import img4 from "../../src/img/portfolio/4.jpg";
import img5 from "../../src/img/portfolio/5.jpg";
import img6 from "../../src/img/portfolio/6.jpg";
import img7 from "../../src/img/portfolio/7.jpg";
import img8 from "../../src/img/portfolio/8.jpg";
import img9 from "../../src/img/portfolio/9.jpg";
import img10 from "../../src/img/portfolio/10.jpg";
import img11 from "../../src/img/portfolio/11.jpg";
import img12 from "../../src/img/portfolio/12.jpg";
import "./portfolio.css";

// Array of image URLs with their respective categories
const images = [
  { src: img1, category: 'labs' },
  { src: img2, category: 'prs' },
  { src: img3, category: 'prs' },
  { src: img4, category: 'projects' },
  { src: img5, category: 'ts' },
  { src: img6, category: 'prs' },
  { src: img7, category: 'projects' },
  { src: img8, category: 'prs' },
  { src: img9, category: 'labs' },
  { src: img10, category: 'prs' },
  { src: img11, category: 'prs' },
  { src: img12, category: 'ps' },
];

// Function to filter and rearrange the gallery based on category
function filterGallery(category) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Clear the gallery

  images.forEach(img => {
    if (category === 'all' || img.category === category) {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.dataset.category = img.category;
      const image = document.createElement('img');
      image.src = img.src;
      image.alt = img.category;
      div.appendChild(image);
      gallery.appendChild(div);

      // Apply transition effects
      div.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      div.style.opacity = '0';
      div.style.transform = 'scale(0.8)';
      setTimeout(() => {
        div.style.opacity = '1';
        div.style.transform = 'scale(1)';
      }, 100);
    }
  });
}

const Portfolio = () => {

  useEffect(() => {
    // Initialize the gallery with 'all' category
    filterGallery('all');
  }, []); // Ensure this effect runs only once after the initial render

  return (
    <>
      < SideNav />
      <div class="home-section exp-section bounce-right">
        <h1 className="decore">Portfolio.</h1>
        <h1>
          <i className="fa fa-address-card-o"></i> Portfolio
        </h1>

        <div className="tabs">
          <div className="tab" onClick={() => filterGallery('all')}>All</div>
          <div className="tab" onClick={() => filterGallery('labs')}>Labs</div>
          <div className="tab" onClick={() => filterGallery('projects')}>Projects</div>
          <div className="tab" onClick={() => filterGallery('ps')}>Personal Skills</div>
          <div className="tab" onClick={() => filterGallery('ts')}>Technical Skills</div>
          <div className="tab" onClick={() => filterGallery('prs')}>Practical Skills</div>
        </div>

        <div class="gallery .row">
          <div class="container">
            <div class="gallery-item col-md-3" data-category="labs">
              <img src={img1} alt="Nature 1" />
              <div class="details">Labs</div>
            </div>
            <div class="gallery-item col-md-3" data-category="labs">
              <img src={img9} alt="Nature 1" />
              <div class="details">Labs</div>
            </div>
            <div class="gallery-item col-md-3" data-category="projects">
              <img src={img4} alt="Nature 1" />
              <div class="details">projects</div>
            </div>
            <div class="gallery-item col-md-3" data-category="projects">
              <img src={img7} alt="Nature 1" />
              <div class="details">projects</div>
            </div>
            <div class="gallery-item col-md-3" data-category="ps">
              <img src={img12} alt="Nature 1" />
              <div class="details">Personal Skills</div>
            </div>
            <div class="gallery-item col-md-3" data-category="ts">
              <img src={img5} alt="Nature 1" />
              <div class="details">Technical Skills</div>
            </div>
            <div class="gallery-item col-md-3" data-category="prs">
              <img src={img2} alt="Nature 1" />
              <div class="details">Practical Skills</div>
            </div>
            <div class="gallery-item col-md-3" data-category="prs">
              <img src={img3} alt="Nature 1" />
              <div class="details">Practical Skills</div>
            </div>
            <div class="gallery-item col-md-3" data-category="prs">
              <img src={img6} alt="Nature 1" />
              <div class="details">Practical Skills</div>
            </div>
            <div class="gallery-item col-md-3" data-category="prs">
              <img src={img8} alt="Nature 1" />
              <div class="details">Practical Skills</div>
            </div>
            <div class="gallery-item col-md-3" data-category="prs">
              <img src={img11} alt="Nature 1" />
              <div class="details">Personal Skills</div>
            </div>
            <div class="gallery-item col-md-3" data-category="prs">
              <img src={img10} alt="Nature 1" />
              <div class="details">Personal Skills</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
