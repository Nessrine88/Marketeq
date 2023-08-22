import Navbar from './Navbar';
import logo from '../assets/logo.svg';
import BookCall from '../assets/BookCall.svg';
import Contact from '../assets/Contact.svg';
import OurStoryImg from '../assets/OurStoryImg.PNG';
import OurStoryImg2 from '../assets/OurStoryImg2.PNG';
import globe from '../assets/globe.png';
import Person1 from '../assets/Person1.jpg';
import Person2 from '../assets/Person2.jpg';
import Person3 from '../assets/Person3.jpg';
import ArrowDown from '../assets/ArrowDown.svg';
import './styling/Home.css';
import search from '../assets/search.svg';
import ProfileIcon from '../assets/ProfileIcon.png';
import ArrowDownWhite from '../assets/ArrowDownWhite.svg';

const Home = () => (
  <section className="Home-section">
    <header>
      <Navbar />
      <nav className="navbar">
        <div className="navContainer">
          <div className="leftNav">
            <div className="navbar-logo">
              <img src={logo} alt="Logo" />
              <span>Marketeq</span>
            </div>

            <ul className="navbar-links">
              <li><a href="./">Home</a></li>
              <li><a href="./">About</a></li>
              <li><a href="./">Services</a></li>
              <li><a href="./">Contact</a></li>
            </ul>
          </div>
          <div className="rightNav">
            <ul>
              <li>
                {' '}
                <img src={search} alt="search icon" />
                Search
                {' '}
              </li>
              <li>
                <img src={ProfileIcon} alt="profile" />
                Login
              </li>
              <li>
                <img src={globe} alt="globe" />
                Global &nbsp;/ &nbsp;English
                <img src={ArrowDownWhite} alt="arrow down" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
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

    <div className="Home-ContacInfo">
      <h3 className="para">
        Category
        <img className="arrowDown" src={ArrowDown} alt="" />
      </h3>
      <ul>
        <li><a href="./">Overview</a></li>
        <li><a href="./">Our People</a></li>
        <li><a href="./">Our Values</a></li>
      </ul>
      <img src={Contact} alt="Contact Us Button" />
      <img src={BookCall} alt="Book a call Button" />
    </div>
    <div className="Our-Story">
      <h2>Our Story</h2>
      <div className="part1Story">

        <div className="leftPart1">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Commodi quod aliquam magni alias aut! Voluptas,
            incidunt id doloribus consectetur earum repellat? Iure,
            rem quis minima laborum sit omnis ea eius?
          </p>
        </div>
        <div className="rightPart1">
          <img src={OurStoryImg} alt="Our Story" />
        </div>
      </div>

      <div className="part1Story">
        <div className="leftPart1">
          <img src={OurStoryImg2} alt="Our Story 2" />
        </div>
        <div className="rightPart1">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Commodi quod aliquam magni alias aut!
            Voluptas,
            incidunt id doloribus consectetur earum repellat? Iure,
            rem quis minima laborum sit omnis ea eius?
            incidunt id doloribus consectetur earum repellat? Iure,
            rem quis minima laborum sit omnis ea eius?
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
