import React from 'react';
import '../../assets/css/style.css';
import './signUp.css';
import IconsSVG from '../../assets/img/sprite.svg';

const SignUp = () => (
    <div className='container_background'>
      <div className="container_sign">
        <div className="title__sign">Welcome to Fox Library</div>
        <form className="wrapper__input--value">
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
        </form>
      </div>
    </div>
);

export default SignUp;
