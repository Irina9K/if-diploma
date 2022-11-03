import React from 'react';
import { useSelector } from 'react-redux';

import '../../assets/css/style.css';
import './auth.css';
import '../../assets/css/button.css';
import LogIn from './LogIn/logIn';
import SignUp from './SignUp/signUp';

const Auth = ({ setshowNavigation }) => {
  // const [infForlogIn, setInfForlogIn] = useState(true);
  const loginCondition = useSelector((state) => state.reducerLogIn.isLogin);
  // const isSignUp = useSelector((state) => state.reducerSignUp.isSignUp);

  // function closeWindowAuth() {
  //   setOpenWindow(!openWindow);
  //   setshowNavigation(true);
  // }

  return (
    <div className={(loginCondition) ? 'container_backgroundNone' : 'container_backgroundBlock'}>
      <div className="container_sign">
        <div className="title__sign">Log In to Fox Library</div>
        <form className="wrapper__input--value">
          <SignUp />
          <LogIn setshowNavigation={setshowNavigation} />
        </form>
      </div>
    </div>
  );
};

export default Auth;
