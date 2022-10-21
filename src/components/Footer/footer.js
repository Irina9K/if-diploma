import React from 'react';
import '../../assets/css/style.css';
import './footer.css';
import IconsSVG from '../../assets/img/sprite.svg';

const Footer = () => (
  <footer>
    <div className="footer_container container">
      <div className="footer_col">
        <nav>
          <ul className="nav_list">
            <li className="footer_nav-item">About Fox Library</li>
            <li className="footer_nav-item"> About us</li>
            <li className="footer_nav-item">Privacy&Security</li>
            <li className="footer_nav-item">Contact us</li>
          </ul>
        </nav>
        <nav>
          <ul className="nav_list">
            <li className="footer_nav-item">Help</li>
            <li className="footer_nav-item">Help center</li>
            <li className="footer_nav-item">FAQs</li>
          </ul>
        </nav>
        <nav>
          <ul className="nav_list">
            <li className="footer_nav-item">My account</li>
            <li className="footer_nav-item">Edit profile</li>
            <li className="footer_nav-item">My orders</li>
          </ul>
        </nav>
      </div>
      <div className="footer_connected">
        <p className='footer_connect'>Stay connected</p>

        <svg className="instagram_icon">
          <use xlinkHref={`${IconsSVG}#instagram`} />
        </svg>
        <svg className="facebook_icon">
          <use xlinkHref={`${IconsSVG}#facebook`} />
        </svg>
      </div>
    </div>
  </footer>
);

export default Footer;
