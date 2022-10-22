import React from 'react';
import IconsSVG from '../../assets/img/sprite.svg';
import './header.css';
import '../../assets/css/style.css';
import Auth from '../Auth/auth';

const Header = () => (
  <header>
    <Auth />
    <div className="header_container container">
      <div className="wrapper_logo_search">
        <div className="header_logo">
          <svg className="logo_icon">
            <use xlinkHref={`${IconsSVG}#logo_fox_library`} />
          </svg>
        </div>

        <svg className="search_icon">
          <use xlinkHref={`${IconsSVG}#search`} />
        </svg>

        <input
          className="input_search"
          type="search"
          name="search"
          placeholder="Search by author, title, name"
        ></input>
      </div>

      <nav>
        <ul className="nav_list">
          <div className="nav_logout">
            <li className="nav_item">Log In</li>
            <li className="nav_item">Sign up</li>
          </div>

          <div className="nav_login">
            <li className="nav_item">All books</li>
            <li className="nav_item">Your orders</li>
            <li>
              <svg className="rectangle_user_icon">
                <use xlinkHref={`${IconsSVG}#rectangle_user`} />
              </svg>
            </li>
            <li>
              <svg className="arrow_icon">
                <use xlinkHref={`${IconsSVG}#arrow`} />
              </svg>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
