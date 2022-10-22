import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconsSVG from '../../assets/img/sprite.svg';
import './header.css';
import '../../assets/css/style.css';
import Auth from '../Auth/auth';
import { logOutAction } from '../../store/actions';

const Header = () => {
  const [showNavigation, setshowNavigation] = useState(false);


  const conditionReducer = useSelector((state) => state.isLogin);


  const dispatch = useDispatch();



  function showLogIn() {
    dispatch(logOutAction());
  }

  return (
    <header>
      <Auth setshowNavigation={setshowNavigation}/>
      <div
        className={`container ${
          conditionReducer ? 'header_containerBlock' : 'header_containerNone'
        }`}
      >
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
            <div className={!showNavigation ? 'nav_logoutBlock' : 'nav_logoutNone'}>
              <li onClick={showLogIn} className="nav_item">
                Log In
              </li>
              <li className="nav_item">Sign up</li>
            </div>

            <div className={showNavigation ? 'nav_loginBlock' : 'nav_loginNone'}>
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
};

export default Header;
