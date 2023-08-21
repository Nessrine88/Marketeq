import React from 'react';
import card1 from '../assets/card1.svg';
import Arrow from '../assets/readmoreArrow.svg';
import '../styles/SecondMiddle.css';

const SecondMiddle = () => (
  <section className="SecondMiddleContainer">
    <div className="card">
      <img className="projectImage" src={card1} alt="" />
      <div className="TitleContainer">
        <p>
          How to optimize your pages to get more traffic
          on mobile devices.
        </p>
        <span className="readButton">
          Read More
          <img src={Arrow} alt="" />
        </span>
      </div>
    </div>
    <div className="card">
      <img className="projectImage" src={card1} alt="" />
      <div className="TitleContainer">
        <p>
          How to optimize your pages to get more traffic
          on mobile devices.
        </p>
        <span className="readButton">
          Read More
          <img src={Arrow} alt="" />
        </span>
      </div>
    </div>
    <div className="card">
      <img className="projectImage" src={card1} alt="" />
      <div className="TitleContainer">
        <p>
          How to optimize your pages to get more traffic
          on mobile devices.
        </p>
        <span className="readButton">
          Read More
          <img src={Arrow} alt="" />
        </span>
      </div>
    </div>
  </section>
);

export default SecondMiddle;
