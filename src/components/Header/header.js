import React, { useState } from 'react';
import LogoSearch from './LogoSearch/logoSearch';
import NavMenu from './NavMenu/navMenu';
import LogIn from '../LogIn/logIn';
import SignUp from '../SignUp/signUp';
import './header.css';
import '../../assets/css/style.css';
import IconsSVG from '../../assets/img/sprite.svg';

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <header>
      <LogIn />
      <SignUp />
      <div className="container header_container">
        <LogoSearch />
        <NavMenu showBurgerMenu={showBurgerMenu} setShoeBurgerMenu={setShowBurgerMenu} />
      </div>
      <div
        onClick={() => setShowBurgerMenu(!showBurgerMenu)}
        className="wrapper_menu-icon"
      >
        <svg className={!showBurgerMenu ? 'menu_iconBlock' : 'menu_iconNone'}>
          <use xlinkHref={`${IconsSVG}#menu`} />
        </svg>
        <svg className={showBurgerMenu ? 'menu_close-iconBlock' : 'menu_close-iconNone'}>
          <use xlinkHref={`${IconsSVG}#menu_close`} />
        </svg>
      </div>
    </header>
  );
};

export default Header;
