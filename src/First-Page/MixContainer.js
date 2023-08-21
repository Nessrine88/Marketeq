import React from 'react';
import card1 from '../assets/card1.svg';
import Arrow from '../assets/readmoreArrow.svg';
import '../styles/MixContainer.css';

const MixContainer = () => (
  <section className="MixContainer">
    <div className="card">
      <img className="projectImage" src={card1} alt="" />
      <div className="TitleContainer white">
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
      <img src={card1} alt="" />
      <span>Egestas ac hac quam laoreet.</span>
      <h3>Integer maecenas commodo fermentum quis hac ornare.</h3>
      <p>
        Donec id nisi eget lacus, accumsan, est a adipiscing. Viverra aliquet posuere tempus a.
        Neque sed lacus eleifend amet accumsan mauris dictum.
        Erat porta purus pellentesque egestas fringilla dolor convallis.
        Scelerisque gravida ac amet libero fermentum. Ipsum tellus ultricies vestibulum
      </p>
      <span className="readButton">
        Read More
        <img className="black" src={Arrow} alt="" />
      </span>
    </div>
  </section>
);

export default MixContainer;
