import Section3Img1 from '../assets/Section3Img1.jpg';
import Section3Img2 from '../assets/Section3Img2.jpg';
import Section3Img3 from '../assets/Section3Img3.jpg';
import Section3Img4 from '../assets/Section3Img4.jpg';
import Section3Img5 from '../assets/Section3Img5.jpg';
import Section3Img6 from '../assets/Section3Img6.jpg';
import Section3Img7 from '../assets/Section3Img7.jpg';
import Section3Img8 from '../assets/Section3Img8.jpg';
import Section3Img9 from '../assets/Section3Img9.jpg';
import './styling/Section3.css';

const Section3 = () => (
  <section className="section3">
    <div className="diversity">
      <h2>Diversity & Equity</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim, similique! Sunt esse delectus quis eligendi minus
        sit eaque sint voluptatum repellat animi quae, labore alias
        saepe quisquam excepturi quia tenetur.
      </p>
    </div>
    <div className="diversityImgs">
      <div className="part1">
        <img src={Section3Img1} alt="diversity" />
        <h4>Why wavering customer confidence could stall the energy transition</h4>
        <p>
          The Energy Consumer Confidence Index reveals that the impact of the energy
          transition is hitting home. How can we boost customer confidence?
        </p>
      </div>
      <div className="part2">
        <img src={Section3Img2} alt="diversity" />

        <h4>The PHE is ending: What it means for COVID-19</h4>
        <p>
          The end of the Public Health Emergency (PHE) will have real financial,
          operational and compliance impacts for consumers, providers, and manufacturers.
        </p>
      </div>

      <div className="part3">
        <img src={Section3Img3} alt="diversity" />

        <h4>Why automotive OEMs need to adapt</h4>
        <p>
          As technology continues to expand what’s possible,
          the original automotive franchise model has remained largely unchanged.
        </p>
      </div>
    </div>
    <div className="authors">
      <h3>We are the authors of our story</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Ipsam, veniam! Ipsam quos vel accusamus adipisci deleniti cum,
        aperiam suscipit magni voluptatum nam.
        Accusamus quos beatae est consectetur quod. Molestias, distinctio.
      </p>
      <div className="imageContainer">
        <img id="duckImg" src={Section3Img4} alt="diversity" />
        <img src={Section3Img5} alt="diversity" />
        <img src={Section3Img6} alt="diversity" />
      </div>
    </div>
    <div className="weDo">
      <h3>What we do</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In lacus dui, pharetra et turpis sed, blandit mattis velit.
        Fusce hendrerit purus ac purus convallis, sed efficitur quam congue.
      </p>
      <div className="imageGroup">
        <img src={Section3Img7} alt="diversity" className="largeImage" />
        <div className="stackedImages">
          <img src={Section3Img8} alt="diversity" />
          <img src={Section3Img9} alt="diversity" />
        </div>
      </div>
    </div>
  </section>
);

export default Section3;
