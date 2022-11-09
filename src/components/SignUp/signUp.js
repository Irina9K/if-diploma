import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInf } from '../../store/userInfReducer';
import { logOutAction, signUpAction } from '../../store/actions';
import IconsSVG from '../../assets/img/sprite.svg';
import '../../assets/css/formAuth.css';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isSignUp = useSelector((state) => state.reducerSignUp.isSignUp);
  const dispatch = useDispatch();

  function clickSignUpForm() {
    dispatch(signUpAction());
    dispatch(logOutAction());
    dispatch(signUpAction());
    dispatch(setUserInf(userName, birthdate, email, password));
  }

  function closeSignupWindow() {
    dispatch(signUpAction());
  }

  return (
    <div className={isSignUp ? 'container_backgroundNone' : 'container_backgroundBlock'}>
      <div className="container_sign">
        <div className="title__sign">Welcome to Fox Library</div>
        <form className="wrapper__input--value">
          <div className="signupBlock">
            <label className="label_username">Username</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              className="input_username"
              name="username"
              id="username"
              type="text"
            ></input>
            <label className="label__birthdate">Your birthdate</label>
            <input
              onChange={(e) => setBirthdate(e.target.value)}
              className="input_birthdate"
              name="birthdate"
              id="birthdate"
              type="date"
            ></input>
            <label className="label__email" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input_email"
              name="email"
              id="email"
              type="email"
            ></input>
            <label className="label__password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input__password"
            ></input>
            <button onClick={clickSignUpForm} className="btn btn__sign--up" type="button">
              Sign up
            </button>
            <div onClick={closeSignupWindow}>
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

export default SignUp;
