import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IconsSVG from '../../assets/img/sprite.svg';
import { users } from '../../constants/user-credentials.constants';
import { logInAction, showContent } from '../../store/actions';
import '../../assets/css/formAuth.css';

const LogIn = ({ setshowNavigation }) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const loginCondition = useSelector((state) => state.reducerLogIn.isLogin);
  const userInfo = useSelector((state) => state.reducerUserInf.userInfo);

  if (userInfo) {
    console.log(Object.values(userInfo));
    console.log(userInfo.userName);
  }

  function clickLogInForm() {
    if (userName && password) {
      users.forEach((item) => {
        if (item.userName === userName.toString() && item.password === password.toString()) {
          dispatch(logInAction());
          dispatch(showContent());
          setshowNavigation(true);
        }
      });
    }
    if (userName && password) {
      if (userName === (userInfo && userInfo.userName) && password === (userInfo && userInfo.password)) {
        dispatch(logInAction());
        dispatch(showContent());
        setshowNavigation(true);
      }
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
    <div className={loginCondition ? 'container_backgroundNone' : 'container_backgroundBlock'}>
      <div className="container_sign">
        <div className="title__sign">Log In to Fox Library</div>
        <form className="wrapper__input--value">
          <div className="loginBlock">
            <label className="label_username">Username</label>
            <input
              onChange={(e) => checkUserName(e)}
              className="input_username"
              name="username"
              id="username"
              type="text"
            ></input>
            <label className="label_username">Password</label>

            <input onChange={(e) => checkPassword(e)} className="input__password"></input>
            <button onClick={clickLogInForm} className="btn btn__sign--up" type="reset">
              <Link to={'books'}>Log in</Link>
            </button>
            <div /* onClick={closeWindowAuth} */ className="wrapper-close-icon">
              <svg className="close_icon">
                <use xlinkHref={`${IconsSVG}#close`} />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
