import React, { useState } from 'react';

import './header.css';
import '../../assets/css/style.css';
import Auth from '../Auth/auth';
import SettingsMenu from '../Settings/SettingsMenu/settingsMenu';
import LogoSearch from './LogoSearch/logoSearch';
import NavMenu from './NavMenu/navMenu';

const Header = () => {
  const [showNavigation, setshowNavigation] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  // const [booksSearch, setBookSearch] = useState([]);
  // const [bookId, setBookId] = useState([]);
  // const [showSearch, setShowSearch] = useState(false)
  // const [display, setDisplay] = useState('none');
  // const [displayError, setDisplayError] = useState('none');

  return (
    <header>
      <Auth setshowNavigation={setshowNavigation} />
      <div className="container header_container">
        <LogoSearch/>
        <NavMenu
          showNavigation={showNavigation}
          showSettingsMenu={showSettingsMenu}
          setShowSettingsMenu={setShowSettingsMenu}
        />
      </div>
      <SettingsMenu showSettingsMenu={showSettingsMenu} setShowSettingsMenu={setShowSettingsMenu} />
    </header>
  );
};

export default Header;
