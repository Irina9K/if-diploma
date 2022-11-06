import React from 'react';

import '../../assets/css/style.css';
import './settingsAcount.css';
import '../../assets/css/button.css';
import { useSelector } from 'react-redux';
import IconsSVG from '../../assets/img/sprite.svg';

const SettingsAccount = () => {
  const userInfo = useSelector((state) => state.reducerUserInf.userInfo);

  return (
    <div className="container settings_container">
      <div className="wrapper_settings-account">
        <div className="settings_header">
          <h2>Settings</h2>
          <svg className="photo_icon">
            <use xlinkHref={`${IconsSVG}#ellipse_user`} />
          </svg>
          <button className="btn btn_order">Change photo</button>
        </div>
        <div className="wrapper__input--value wrapper__input--settings">
          <label className="label__username">Username</label>
          <input value={userInfo && userInfo.userName} className="input__username"></input>
          <label className="label__birthdate">Birthdate</label>
          <input value={userInfo && userInfo.birthdate} className="input__birthdate"></input>
          <label className="label__email">Email</label>
          <input
            value={userInfo && userInfo.email}
            className="input__email input__email-settings"
          ></input>
          <label className="label__password">Password</label>
          <input value={userInfo && userInfo.password} className="input__password"></input>
          <label className="label__new-password">New password</label>
          <input className="input__new-password"></input>
          <button className="btn btn_save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsAccount;
