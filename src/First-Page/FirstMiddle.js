import React from 'react';
import card1 from '../assets/card1.svg';
import Arrow from '../assets/readmoreArrow.svg';
import '../styles/FirstMiddle.css';

const FirstMiddle = () => (
  <section className="FirstMiddleContainer">
    <div className="card">
      <img src={card1} alt="" />
      <p>
        How to optimize your pages to get more traffic
        on mobile devices.
      </p>
      <span className="readButton">
        Read More
        <img src={Arrow} alt="" />
      </span>
    </div>
    <div className="card">
      <img src={card1} alt="" />
      <p>
        How to optimize your pages to get more traffic
        on mobile devices.
      </p>
      <span className="readButton">
        Read More
        <img src={Arrow} alt="" />
      </span>
    </div>
    <div className="card">
      <img src={card1} alt="" />
      <p>
        How to optimize your pages to get more traffic
        on mobile devices.
      </p>
      <span className="readButton">
        Read More
        <img src={Arrow} alt="" />
      </span>
    </div>
  </section>
);

export default FirstMiddle;
