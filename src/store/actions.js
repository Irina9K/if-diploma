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

export {
  logInAction, logOutAction, showContent, dontShowContent,
};
