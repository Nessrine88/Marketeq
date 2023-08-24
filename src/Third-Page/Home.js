import Navbar from './Navbar';
import BookCall from '../assets/BookCall.svg';
import Contact from '../assets/Contact.svg';
import OurStoryImg from './images/ourstoryImg.jpg';
import OurStoryImg2 from '../assets/OurStoryImg2.PNG';
import Person1 from '../assets/person1.jpg';
import Person2 from '../assets/Person2.jpg';
import Person3 from '../assets/Person3.jpg';
import ArrowDown from '../assets/ArrowDown.svg';
import './styling/Home.css';
import NavbarDesktop from './NavbarDesktop';

const Home = () => (
  <section className="Home-section">
    <header>
      <Navbar />
      <NavbarDesktop />

      <div className="Home-div1">
        <div className="Home-div1-part1">
          <p className="whoPara">
            <a href="./">Home</a>
          &nbsp; &nbsp;/ &nbsp;Who We Are
          </p>
        </div>
        <div className="Home-div1-part2">
          <h1>Who We Are</h1>
          <p>Discover more about our values, purpose and what makes us different</p>
        </div>
      </div>
    </header>
    <div className="Home-ContacInfo">
      <h3 className="para">
        Category
        <img className="arrowDown" src={ArrowDown} alt="" />
      </h3>
      <div className="contactInfoLeftList">
        <ul>
          <li><a href="./">Overview</a></li>
          <li><a href="./">Our People</a></li>
          <li><a href="./">Our Values</a></li>
        </ul>
      </div>
      <div className="contactInfoRightImgs">
        <img src={Contact} alt="Contact Us Button" />
        <img src={BookCall} alt="Book a call Button" />
      </div>
    </div>
    <div className="Our-Story">
      <h2>Our Story</h2>
      <div className=" st1 Story">
        <div className="textLeft">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="imgRight">
          <img src={OurStoryImg} alt="Our Story" />
        </div>
      </div>

      <div className="st2 Story">
        <div className="imgLeft">
          <img src={OurStoryImg2} alt="Our Story 2" />
        </div>
        <div className="textRight">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Commodi quod aliquam magni alias aut!
            Voluptas,
          </p>
        </div>
      </div>

    </div>
    <div className="Our-People">
      <h3>Our People</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iste beatae quae eveniet exercitationem asperiores maxime eos voluptatum non.
        Impedit nostrum necessitatibus totam mollitia repellat praesentium eius cum ad odit harum?
      </p>

      <div className="personImgs">
        <div className="person2">
          <img id="PerImg1" src={Person2} alt="person" />
        </div>

        <img id="PerImg2" src={Person1} alt="person" />
        <div className="person3">
          <img id="PerImg3" src={Person3} alt="person" />
        </div>

      </div>

    </div>

  </section>

);

export default Home;
