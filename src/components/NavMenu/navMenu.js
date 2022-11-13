import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dontSignUpAction, logOutAction } from '../../store/actions';
import SettingsMenu from '../SettingsMenu/settingsMenu';
import IconsSVG from '../../assets/img/sprite.svg';
import './navMenu.css';

const NavMenu = ({ showBurgerMenu }) => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const dispatch = useDispatch();
  const isShowContent = useSelector((state) => state.reducerContent.isShow);

  function showLogIn() {
    dispatch(logOutAction());
  }

  function showSignUp() {
    dispatch(dontSignUpAction());
  }

  function showSettings() {
    setShowSettingsMenu(!showSettingsMenu);
  }

  return (
    <>
      <nav className="nav_headerBlock">
        <ul className="nav_list">
          <div className={!isShowContent ? 'nav_logoutBlock' : 'nav_logoutNone'}>
            <li onClick={showLogIn} className="nav_item">
              Log In
            </li>
            <li onClick={showSignUp} className="nav_item">
              Sign up
            </li>
          </div>

          <div className={isShowContent ? 'nav_loginBlock' : 'nav_loginNone'}>
            <div className="wrapper_nav">
              <li className="nav_item">
                <NavLink to={'books'} className={({ isActive }) => isActive && 'active'}>
                  All books
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to={'orders'}>Your orders</NavLink>
              </li>
            </div>

            <li onClick={showSettings}>
              <svg className="rectangle_user_icon">
                <use xlinkHref={`${IconsSVG}#user2`} />
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
      <div className="wrapper_burger-menuB">
        <div className={showBurgerMenu ? 'wrapper_burger-menuBlock' : 'wrapper_burger-menuNone'}>
          <div className={!isShowContent ? 'menu_navigationBlock' : 'menu_navigationNone'}>
            <p onClick={showLogIn}>Log in</p>
            <p onClick={showSignUp}>Sign up</p>
          </div>
          <div className={isShowContent ? 'menu_navigationBlock' : 'menu_navigationNone'}>
            <p>
              <NavLink to={'books'} className={({ isActive }) => isActive && 'active'}>
                All books
              </NavLink>
            </p>
            <p>
              <NavLink to={'orders'}>Your orders</NavLink>
            </p>
            <p onClick={showSettings}>User</p>
          </div>
        </div>
      </div>
      <SettingsMenu showSettingsMenu={showSettingsMenu} setShowSettingsMenu={setShowSettingsMenu} />
    </>
  );
};

export default NavMenu;
