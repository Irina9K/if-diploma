import { combineActions, handleActions } from 'redux-actions';
import { dontShowContent, dontSignUpAction, logInAction, logOutAction, showContent, signUpAction } from './actions';

// const defaultState = {
//   isLogin: true,
// };

const reducerLogIn = handleActions(
  {
    [combineActions(logInAction, logOutAction)]: (state, { payload: { isAuth } }) => ({
      ...state,
      isLogin: isAuth,
    }),
  },
  {
    isLogin: true,
  },
);

// const initialState = {
//   isShowContent: false,
// };

const reducerContent = handleActions(
  {
    [combineActions(showContent, dontShowContent)]: (state, { payload: { isShow } }) => ({
      ...state,
      isShow,
    }),
  },
  {
    isShow: false,
  },
);

const reducerSignUp = handleActions(
  {
    [combineActions(signUpAction, dontSignUpAction)]: (state, { payload: { isSignUp } }) => ({
      ...state,
      isSignUp,
    }),
  },
  {
    isSignUp: true,
  },
);

export {
  reducerLogIn, reducerContent, reducerSignUp,
};
