import { createAction } from 'redux-actions';
import { ADD_TO_ORDERS, GET_BOOK_SEARCH, GET_BOOKS, REMOVE_TO_ORDERS } from './actionsType';

const logInAction = createAction('LOG_IN', (isAuth = true) => ({
  isAuth,
}));

const logOutAction = createAction('LOG_OUT', (isAuth = false) => ({
  isAuth,
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

const taken = createAction('TAKEN', (isTaken = 'Taken') => ({
  isTaken,
}));

const available = createAction('AVAILABLE', (isTaken = 'Available') => ({
  isTaken,
}));

const getBooks = (apiBooks) => ({
  type: GET_BOOKS,
  payload: apiBooks,
});

const getBooksSearch = (apiBooksSearch) => ({
  type: GET_BOOK_SEARCH,
  payload: apiBooksSearch,
});

const addOrders = (bookId) => ({
  type: ADD_TO_ORDERS,
  payload: bookId,
});

const removeOrders = (bookId) => ({
  type: REMOVE_TO_ORDERS,
  payload: bookId,
});

export default {
  getBooks,
  getBooksSearch,
  addOrders,
  removeOrders,
};

export {
  logInAction,
  logOutAction,
  showContent,
  dontShowContent,
  signUpAction,
  dontSignUpAction,
  available,
  taken,
};
