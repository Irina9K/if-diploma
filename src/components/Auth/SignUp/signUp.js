import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconsSVG from '../../../assets/img/sprite.svg';
import { showContent, signUpAction } from '../../../store/actions';

const SignUp = ({ setInfForlogIn }) => {
  const isSignUp = useSelector((state) => state.reducerSignUp.isSignUp);
  // const loginCondition = useSelector((state) => state.reducerLogIn.isLogin);

  const dispatch = useDispatch();

  function clickSignUpForm() {
    // setInfForlogIn(!infForlogIn);
    dispatch(signUpAction());
    dispatch(showContent());
    setInfForlogIn(false);
  }

  return (
    <div className={(isSignUp) ? 'signupNone' : 'signupBlock'}>
      <label className="label_username">Username</label>
      <input className="input_username" name="username" id="username" type="text"></input>
      <label className="label__birthdate">Your birthdate</label>
      <input className="input_birthdate" name="birthdate" id="birthdate" type="birthdate"></input>
      <label className="label__email" htmlFor="email">
        Email
      </label>
      <input className="input_email" name="email" id="email" type="email"></input>
      <label className="label__password">Password</label>
      <input className="input__password"></input>
      <button onClick={clickSignUpForm} className="btn btn__sign--up" type="reset">
        Sign up
      </button>
      <svg className="close_icon">
        <use xlinkHref={`${IconsSVG}#close`} />
      </svg>
    </div>
  );
};

export default SignUp;
