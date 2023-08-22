import Navbar from './Navbar';
import NavbarDesktop from './NavbarDesktop';
import './styling/footer.css';
import facebook from '../assets/facebook.svg';
import twiter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.jpg';

const Footer = () => (
  <footer>
    <div>
      <Navbar />
      <NavbarDesktop />
    </div>
    <div className="socialMedia">
      <img src={facebook} alt="" srcSet="facebook" />
      <img src={twiter} alt="" srcSet="twiter" />
      <img src={instagram} alt="" srcSet="instagram" />
      <img src={linkedin} alt="" srcSet="linkedin" />

    </div>
    <div className="list">
      <ul>
        <li />
      </ul>
    </div>
    <div className="copyRight">
      <h4>© 2022 Marketeq. All Rights Reserved.</h4>
      <p>
        Eget tortor, commodo massa faucibus cursus.
        Mi orci neque, lectus sagittis.
        Phasellus nec viverra facilisis nam senectus.
        Aenean pulvinar quis magnis magna praesent mattis tempor.
        At eu, eu volutpat neque. Urna risus, sed habitant commodo imperdiet nulla nec.
        Vitae malesuada mi sed vitae mattis ultrices scelerisque eu ut.
        Eget vel vitae diam quis. In sed justo dolor in sagittis.
        Egestas mattis id in neque, porttitor. Sem mauris sed eu ornare nibh.
        Pretium augue enim euismod eget amet, blandit lorem molestie neque.
        Eget tortor, commodo massa faucibus cursus. Mi orci neque, lectus sagittis.
        Phasellus nec viverra facilisis nam senectus.
        Aenean pulvinar quis magnis magna praesent mattis tempor.
        At eu, eu volutpat neque. Urna risus, sed habitant commodo imperdiet nulla nec.
        Vitae malesuada mi sed vitae mattis ultrices scelerisque eu ut.
        Eget vel vitae diam quis. In sed justo dolor in sagittis.
        Egestas mattis id in neque, porttitor. Sem mauris sed eu ornare nibh.
        Pretium augue enim euismod eget amet, blandit lorem molestie neque.
      </p>
    </div>
  </footer>

);

export default Footer;
