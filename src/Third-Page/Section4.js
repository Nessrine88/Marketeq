import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap'; // Import Bootstrap components
import Section4Img1 from '../assets/Section4Img1.jpg';
import Section4Img2 from '../assets/Section4Img2.jpg';
import Section4Img3 from '../assets/Section4Img3.jpg';
import Section4Img4 from '../assets/Section4Img4.jpg';
import Section4Img5 from '../assets/Section4Img5.jpg';
import Section4Img7 from '../assets/Section4Img7.jpg';
import Section4Img8 from '../assets/Section4Img8.jpg';
import './styling/Section4.css';

const Section4 = () => (
  <Container className="section4">
    {' '}
    {/* Use Bootstrap Container */}
    <h2>Get to know us better</h2>
    <Row className="knowUsBetter">
      {' '}
      {/* Use Bootstrap Row */}
      <Col md={4} className="part1">
        {' '}
        {/* Use Bootstrap Col */}
        <img src={Section4Img1} alt="diversity" />
        <h4>Why wavering customer confidence could stall the energy transition</h4>
        <p>
          The Energy Consumer Confidence Index reveals that the impact of the energy
          transition is hitting home. How can we boost customer confidence?
        </p>
      </Col>
      <Col md={4} className="part2">
        <img src={Section4Img2} alt="diversity" />
        <h4>The PHE is ending: What it means for COVID-19</h4>
        <p>
          The end of the Public Health Emergency (PHE) will have real financial,
          operational and compliance impacts for consumers, providers, and manufacturers.
        </p>
      </Col>
      <Col md={4} className="part3">
        <img src={Section4Img3} alt="diversity" />
        <h4>Why automotive OEMs need to adapt</h4>
        <p>
          As technology continues to expand what’s possible,
          the original automotive franchise model has remained largely unchanged.
        </p>
      </Col>
    </Row>
    <Row className="contactBanner">
      <Col md={6} className="text">
        <h2>Find the right career opportunity</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis mollitia et totam ipsum odio, commodi ex quia vitae
          amet ab facere ullam nam fugit accusantium explicabo asperiores
          consequatur assumenda deserunt.
        </p>
      </Col>
      <Col md={6} className="img">
        <img src={Section4Img4} alt="diversity" />
      </Col>
    </Row>
    <Row className="learnMore">
      <Col md={6}>
        <h3>Learn More About Us</h3>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Vel iusto beatae modi ratione?
          Est fuga corporis ut nostrum minima
          reiciendis placeat corrupti, perspiciatis
          accusamus sunt rem voluptates! Illum, cumque numquam.
        </p>
      </Col>
      <Col md={6}>
        <img src={Section4Img5} alt="diversity" />
        <img src={Section4Img7} alt="diversity" />
        <img src={Section4Img5} alt="diversity" />
      </Col>
    </Row>
    <Row className="transformation">
      <Col md={6} className="imgDivi">
        <img src={Section4Img8} alt="diversity" />
      </Col>
      <Col md={6} className="textDivi">
        <h2>Transformation starts here</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eos officiis laboriosam consequatur quo saepe quam eius harum commodi sunt,
          pariatur in minima quisquam maxime autem consequuntur ipsa minus dicta quos.
          <span>connect with us</span>
        </p>
      </Col>
    </Row>
  </Container>
);

export default Section4;
