import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { dontShowContent } from '../../../store/actions';
import '../../../assets/css/style.css';
import './settingsMenu.css';

const SettingsMenu = ({ showSettingsMenu, setShowSettingsMenu }) => {
  const dispatch = useDispatch();

  function logOut() {
    setShowSettingsMenu(false);
    dispatch(dontShowContent());
  }

  function clickItemMenu() {
    setShowSettingsMenu(!showSettingsMenu);
  }

  return (
    <div className={showSettingsMenu ? 'wrapper_settingsBlock' : 'wrapper_settingsNone'}>
      <div className="settings_menu">
        <p className="settings_user-name">Irina</p>
        <p onClick={clickItemMenu} className="settings_item">
          <Link to={'settings'}>Settings</Link>
        </p>
        <hr />
        <p onClick={clickItemMenu} className="settings_item">
          <Link to={'orders'}>My Orders</Link>
        </p>
      </div>

      <div className="wrapper_logout">
        <p onClick={logOut} className="logout">
          <Link to={'/'}>Log out</Link>
        </p>
      </div>
    </div>
  );
};

export default SettingsMenu;
