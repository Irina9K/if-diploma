import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../assets/css/style.css';
import './auth.css';
import IconsSVG from '../../assets/img/sprite.svg';
import '../../assets/css/button.css';
import { users } from '../../constants/user-credentials.constants';
import { logInAction } from '../../store/actions';

const Auth = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const conditionReducer = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  function clickLoginForm() {
    if (userName && password) {
      users.forEach((item) => {
        if (item.userName === userName.toString() && item.password === password.toString()) {
          dispatch(logInAction());
        }
      });
    }
  }

  function checkUserName(e) {
    e.preventDefault();
    setUserName(e.target.value);
  }

  function checkPassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <div
        className={conditionReducer ? 'container_backgroundNone' : 'container_backgroundBlock'}
    >
      <div className="container_sign">
        <div className="title__sign">Welcome to Fox Library</div>
        <form className="wrapper__input--value">
          <div className="signupNone">
            <label className="label_username">Username</label>
            <input className="input_username" name="username" id="username" type="text"></input>
            <label className="label__birthdate">Your birthdate</label>
            <input
              className="input_birthdate"
              name="birthdate"
              id="birthdate"
              type="birthdate"
            ></input>
            <label className="label__email" htmlFor="email">
              Email
            </label>
            <input className="input_email" name="email" id="email" type="email"></input>
            <label className="label__password">Password</label>
            <input className="input__password"></input>
            <button className="btn btn__sign--up" type="reset">
              Sign up
            </button>
            <svg className="close_icon">
              <use xlinkHref={`${IconsSVG}#close`} />
            </svg>
          </div>
          <div className="login">
            <label className="label_username">Username</label>
            <input
              onChange={(e) => checkUserName(e)}
              className="input_username"
              name="username"
              id="username"
              type="text"
            ></input>

            <input onChange={(e) => checkPassword(e)} className="input__password"></input>
            <button onClick={clickLoginForm} className="btn btn__sign--up" type="reset">
              Log in
            </button>
            <svg className="close_icon">
              <use xlinkHref={`${IconsSVG}#close`} />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
