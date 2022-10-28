import React from 'react';

import '../../assets/css/style.css';
import './settings.css';
import { useDispatch } from 'react-redux';
import { logOutAction } from '../../store/actions';

const Settings = ({ showSettingsMenu, setShowSettingsMenu }) => {
  const dispatch = useDispatch();

  function logOut() {
    dispatch(logOutAction());
    setShowSettingsMenu(false);
  }
  return (
    <div className={showSettingsMenu ? 'wrapper_settingsBlock' : 'wrapper_settingsNone'}>
      <div className="settings_menu">
        <p className="settings_user-name">Irina</p>
        <p className="settings_item">Settings</p>
        <hr />
        <p className="settings_item">My Orders</p>
      </div>

      <div className="wrapper_logout">
        <p onClick={logOut} className="logout">
          Log out
        </p>
      </div>
    </div>
  );
};

export default Settings;
