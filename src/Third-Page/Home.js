import Navbar from '../First-Page/Navbar';
import BookCall from '../assets/BookCall.svg';
import Contact from '../assets/Contact.svg';
import OurStoryImg from '../assets/OurStoryImg.PNG';
import OurStoryImg2 from '../assets/OurStoryImg2.PNG';
import Arrow from '../assets/Arrow2.png';
import Person1 from '../assets/Person1.jpg';
import Person2 from '../assets/Person2.jpg';
import Person3 from '../assets/Person3.jpg';
import ArrowDown from '../assets/ArrowDown.svg';
import './styling/Home.css';

const Home = () => (
  <section className="Home-section">
    <Navbar />
    <div className="Home-div1">
      <div className="Home-div1-part1">
        <p>
          <a href="./">Home</a>
          {' '}
          / Who We Are
        </p>
      </div>
      <div className="Home-div1-part2">
        <h1>Who We Are</h1>
        <p>Discover more about our values, purpose and what makes us different</p>
      </div>
    </div>

    <div className="Home-ContacInfo">
      <p className="para">
        {' '}
        Category
        <img className="arrowDown" src={ArrowDown} alt="" />
      </p>
      <img src={Contact} alt="Contact Us Button" />
      <img src={BookCall} alt="Book a call Button" />
    </div>
    <div className="Our-Story">
      <h2>Our Story</h2>
      <img src={OurStoryImg} alt="Our Story image" />
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quod aliquam magni alias aut! Voluptas, incidunt id doloribus consectetur earum repellat? Iure, rem quis minima laborum sit omnis ea eius?</p>
      <img src={OurStoryImg2} alt="Our Story image 2" />
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quod aliquam magni alias aut! Voluptas, incidunt id doloribus consectetur earum repellat? Iure, rem quis minima laborum sit omnis ea eius?</p>
      <button className="readButton">
        Read More
        <img src={Arrow} alt="Read More Arrow" />
      </button>
    </div>
    <div className="Our-People">
      <h3>Our People</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae quae eveniet exercitationem asperiores maxime eos voluptatum non. Impedit nostrum necessitatibus totam mollitia repellat praesentium eius cum ad odit harum?</p>
      <img src={Person1} alt="our People person 1 image" />
      <img src={Person2} alt="our People person 2 image" />
      <img src={Person3} alt="our People person 3 image" />
    </div>

  </section>

);

export default Home;
