import { combineActions, handleActions } from 'redux-actions';
import { dontShowContent, logInAction, logOutAction, showContent } from './actions';

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

export { reducerLogIn, reducerContent };
