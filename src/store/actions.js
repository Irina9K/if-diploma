import { createAction } from 'redux-actions';

const logInAction = createAction('LOG_IN', (isAuth = true, isShow = false) => ({
  isAuth,
  isShow,
}));

const logOutAction = createAction('LOG_OUT', (isAuth = false, isShow = true) => ({
  isAuth,
  isShow,
}));

const showContent = createAction('SHOW_LOGIN', (isShow = true) => ({
  isShow,
}));

const dontShowContent = createAction('SHOW_LOGIN', (isShow = false) => ({
  isShow,
}));

const signUpAction = createAction('SIGN_UP', (isSignUp = true) => ({
  isSignUp,
}));

const dontSignUpAction = createAction('DONT_SIGN_UP', (isSignUp = false) => ({
  isSignUp,
}));

export {
  logInAction, logOutAction, showContent, dontShowContent, signUpAction, dontSignUpAction,
};
