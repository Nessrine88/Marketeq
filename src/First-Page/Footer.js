import React from 'react';
import '../styles/footer.css';
import logo from '../assets/logo.svg';

const Footer = () => (
  <footer>
    <div className="firstContainer">
      <span>888.456.5609</span>
      <label htmlFor="cars">Global / English</label>
      <select name="cars" id="cars">
        <option />
        <option>French</option>
        <option>english</option>
        <option>English</option>
      </select>
    </div>
    <hr />
    <div className="MiddleContainer">
      <ul className="firstList">
        <li className="LogoContainer">
          <img src={logo} alt="Logo" />
          <h3>Marketeq</h3>
        </li>
        <li>
          <p>Marketeq specializes in digital growth strategy and conversion focused web design.</p>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
      </ul>
      <ul className="SecondList">
        <li>
          <span>Career Opportunities</span>
        </li>
        <li>
          <span>Consulting</span>
        </li>
        <li>
          <span>Cloud</span>
        </li>
        <li>
          <span>Security</span>
        </li>
        <li>
          <span>Digital</span>
        </li>
      </ul>
    </div>

    <div className="lastContainer">
      <span>© 2022 Marketeq. All Rights Reserved.</span>
      <p>
        Eget tortor, commodo massa faucibus cursus. Mi orci neque, lectus sagittis.
        Phasellus nec viverra facilisis nam senectus. Aenean pulvinar quis magnis magna praesent mattis tempor.
        At eu, eu volutpat neque. Urna risus, sed habitant commodo imperdiet nulla nec.
        Vitae malesuada mi sed vitae mattis ultrices scelerisque eu ut. Eget vel vitae diam quis.
        In sed justo dolor in sagittis. Egestas mattis id in neque, porttitor. Sem mauris sed eu ornare nibh.
        Pretium augue enim euismod eget amet, blandit lorem molestie neque. Eget tortor, commodo massa faucibus cursus.
        Mi orci neque, lectus sagittis. Phasellus nec viverra facilisis nam senectus. Aenean pulvinar quis magnis magna praesent mattis tempor.
        At eu, eu volutpat neque. Urna risus, sed habitant commodo imperdiet nulla nec. Vitae malesuada mi sed vitae mattis ultrices scelerisque eu ut.
        Eget vel vitae diam quis. In sed justo dolor in sagittis. Egestas mattis id in neque, porttitor.
        Sem mauris sed eu ornare nibh. Pretium augue enim euismod eget amet, blandit lorem molestie neque.
      </p>
      <div className="LastList">
        <span>Terms of Use</span>
        <span>Privacy</span>
        <span>Cookies</span>
      </div>
    </div>

  </footer>
);

export default Footer;
