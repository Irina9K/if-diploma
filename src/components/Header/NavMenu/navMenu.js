import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import IconsSVG from '../../../assets/img/sprite.svg';
import { logOutAction } from '../../../store/actions';
import './navMenu.css';

const NavMenu = ({ showNavigation, setShowSettingsMenu, showSettingsMenu }) => {
  // const isSignUp = useSelector((state) => state.reducerSignUp.isSignUp);
  const dispatch = useDispatch();
  const loginCondition = useSelector((state) => state.reducerLogIn.isLogin);

  function showLogIn() {
    dispatch(logOutAction());
  }

  function showLogOut() {
    dispatch(logOutAction());
  }

  function showSettings() {
    setShowSettingsMenu(!showSettingsMenu);
  }

  return (
    <nav className={loginCondition ? 'nav_headerBlock' : 'nav_headerNone'}>
      <ul className="nav_list">
        <div className={!showNavigation ? 'nav_logoutBlock' : 'nav_logoutNone'}>
          <li onClick={showLogIn} className="nav_item">
            Log In
          </li>
          <li onClick={showLogOut} className="nav_item">
            Sign up
          </li>
        </div>

        <div className={showNavigation ? 'nav_loginBlock' : 'nav_loginNone'}>
          <li className="nav_item">
            <NavLink to={'books'} className={({ isActive }) => isActive && 'active'}>
              All books
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink to={'orders'}>Your orders</NavLink>
          </li>
          <li onClick={showSettings}>
            <svg className="rectangle_user_icon">
              <use xlinkHref={`${IconsSVG}#user`} />
            </svg>
          </li>
          <li>
            <svg className={showSettingsMenu ? 'arrow_iconTop' : 'arrow_iconBottom'}>
              <use xlinkHref={`${IconsSVG}#arrow`} />
            </svg>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavMenu;