import React from 'react';
import IconsSVG from '../../assets/img/sprite.svg';
import './header.css';
import '../../assets/css/style.css';

const Header = () => (
  <div className="header_container container">

    <div className="header__logo">
      <svg className="logo_icon">
        <use xlinkHref={`${IconsSVG}#logo_fox_library`} />
      </svg>
    </div>

    <input
      className="input_search"
      type="search"
      name="search"
      placeholder="Search by author, title, name"
    ></input>

    <div className="name_log">
      <p>Log In</p>
      <p>Log Out</p>
    </div>
  </div>
);

export default Header;
