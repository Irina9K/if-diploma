import React from 'react';

import '../../assets/css/style.css';
import './settingsAcount.css';
import '../../assets/css/button.css';
import IconsSVG from '../../assets/img/sprite.svg';

const SettingsAccount = () => (
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
        <input className="input__username"></input>
        <label className="label__birthdate">Birthdate</label>
        <input className="input__birthdate"></input>
        <label className="label__email">Email</label>
        <input className="input__email input__email-settings"></input>
        <label className="label__password">Password</label>
        <input className="input__password"></input>
        <label className="label__new-password">New password</label>
        <input className="input__new-password"></input>
        <button className="btn btn_save">Save</button>
      </div>
    </div>
  </div>
);

export default SettingsAccount;
