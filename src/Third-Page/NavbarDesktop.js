import search from '../assets/search.svg';
import ProfileIcon from '../assets/ProfileIcon.png';
import ArrowDownWhite from '../assets/ArrowDownWhite.svg';
import globe from '../assets/globe.png';
import logo from '../assets/logo.svg';

const NavbarDesktop = () => (
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
);

export default NavbarDesktop;
