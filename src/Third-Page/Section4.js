import Section4Img1 from '../assets/Section4Img1.jpg';
import Section4Img2 from '../assets/Section4Img2.jpg';
import Section4Img3 from '../assets/Section4Img3.jpg';
import Section4Img4 from '../assets/Section4Img4.jpg';
import Section4Img5 from '../assets/Section4Img5.jpg';
import Section4Img7 from '../assets/Section4Img7.jpg';
import Section4Img8 from '../assets/Section4Img8.jpg';
import './styling/Section4.css';

const Section4 = () => (
  <section className="section4">
    <div className="knowUsBetter">
      <div className="part1">
        <img src={Section4Img1} alt="diversity" />
        <h4>Why wavering customer confidence could stall the energy transition</h4>
        <p>
          The Energy Consumer Confidence Index reveals that the impact of the energy
          transition is hitting home. How can we boost customer confidence?
        </p>
      </div>
      <div className="part2">
        <img src={Section4Img2} alt="diversity" />

        <h4>The PHE is ending: What it means for COVID-19</h4>
        <p>
          The end of the Public Health Emergency (PHE) will have real financial,
          operational and compliance impacts for consumers, providers, and manufacturers.
        </p>
      </div>

      <div className="part3" />
      <img src={Section4Img3} alt="diversity" />

      <h4>Why automotive OEMs need to adapt</h4>
      <p>
        As technology continues to expand what’s possible,
        the original automotive franchise model has remained largely unchanged.
      </p>
    </div>
    <div className="contactBanner">
      <h2>Find the right career opportunity</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Omnis mollitia et totam ipsum odio, commodi ex quia vitae
        amet ab facere ullam nam fugit accusantium explicabo asperiores
        consequatur assumenda deserunt.
      </p>
      <img src={Section4Img4} alt="diversity" />

    </div>

    <div className="learnMore">
      <h3>Learn More About Us</h3>
      <p>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Vel iusto beatae modi ratione?
        Est fuga corporis ut nostrum minima
        reiciendis placeat corrupti, perspiciatis
        accusamus sunt rem voluptates! Illum, cumque numquam.
      </p>
      <img src={Section4Img5} alt="diversity" />
      <img src={Section4Img5} alt="diversity" />
      <img src={Section4Img7} alt="diversity" />
    </div>
    <div className="transformation">
      <img src={Section4Img8} alt="diversity" />
      <h2>transformation starts here</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eos officiis laboriosam consequatur quo saepe quam eius harum commodi sunt,
        pariatur in minima quisquam maxime autem consequuntur ipsa minus dicta quos.
        <span>connect with us</span>
      </p>

    </div>
  </section>
);

export default Section4;
