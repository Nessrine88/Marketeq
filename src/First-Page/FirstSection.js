import React from 'react';
import Arrow from '../assets/readmoreArrow.svg';
import '../styles/FirstSection.css';

const FirstSection = () => (
  <div className="FirstContainer">
    <span>Artificial Intelligence</span>
    <h1>
      What's Behind Tesla's Latest
      Self-Driving Vechile Updates
    </h1>
    <span className="readmore">
      Read More
      <img src={Arrow} alt="" />
    </span>
  </div>
);

export default FirstSection;
