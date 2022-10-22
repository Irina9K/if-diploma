import { createAction } from 'redux-actions';

const logInAction = createAction('LOG_IN', (isAuth = true) => {
  console.log(isAuth);
  return {
    isAuth,
  };
});

const logOutAction = createAction('LOG_OUT', (isAuth = false) => ({
  isAuth,
}));

// const showLogInActions = createAction('SHOW_LOGIN', (isWindowlogIn = true) => ({
//   isWindowlogIn,
// }));
//
// const dontShowLogInActions = createAction('SHOW_LOGIN', (isWindowlogIn = false) => ({
//   isWindowlogIn,
// }));

export { logInAction, logOutAction };
