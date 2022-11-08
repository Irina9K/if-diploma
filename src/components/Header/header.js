import React, { useState } from 'react';
import SettingsMenu from '../Settings/SettingsMenu/settingsMenu';
import LogoSearch from './LogoSearch/logoSearch';
import NavMenu from './NavMenu/navMenu';
import LogIn from '../LogIn/logIn';
import SignUp from '../SignUp/signUp';
import './header.css';
import '../../assets/css/style.css';
import IconsSVG from '../../assets/img/sprite.svg';

const Header = () => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  return (
    <header>
      <LogIn />
      <SignUp />
      <div className="container header_container">
        <LogoSearch />
        <NavMenu showSettingsMenu={showSettingsMenu} setShowSettingsMenu={setShowSettingsMenu} />
      </div>
      <SettingsMenu showSettingsMenu={showSettingsMenu} setShowSettingsMenu={setShowSettingsMenu} />
      <div className="wrapper_menu-icon">
        <svg className="menu_iconBlock">
          <use xlinkHref={`${IconsSVG}#menu`} />
        </svg>
        <svg className="menu_close-iconBlock">
          <use xlinkHref={`${IconsSVG}#menu_close`} />
        </svg>
      </div>
    </header>
  );
};

export default Header;
