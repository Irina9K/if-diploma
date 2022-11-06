import React, { useState } from 'react';
import SettingsMenu from '../Settings/SettingsMenu/settingsMenu';
import LogoSearch from './LogoSearch/logoSearch';
import NavMenu from './NavMenu/navMenu';
import LogIn from '../LogIn/logIn';
import SignUp from '../SignUp/signUp';
import './header.css';
import '../../assets/css/style.css';

const Header = () => {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  return (
    <header>
      <uselocalStorage />
      <LogIn />
      <SignUp />
      <div className="container header_container">
        <LogoSearch />
        <NavMenu showSettingsMenu={showSettingsMenu} setShowSettingsMenu={setShowSettingsMenu} />
      </div>
      <SettingsMenu showSettingsMenu={showSettingsMenu} setShowSettingsMenu={setShowSettingsMenu} />
    </header>
  );
};

export default Header;
