import { createAction } from 'redux-actions';
import { GET_BOOK_SEARCH, GET_BOOKS } from './actionsType';

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

const getBooks = (apiBooks) => ({
  type: GET_BOOKS,
  payload: apiBooks,
});

const getBooksSearch = (apiBooksSearch) => ({
  type: GET_BOOK_SEARCH,
  payload: apiBooksSearch,
});

export default {
  getBooks, getBooksSearch,
};

export {
  logInAction, logOutAction, showContent, dontShowContent, signUpAction, dontSignUpAction,
};
