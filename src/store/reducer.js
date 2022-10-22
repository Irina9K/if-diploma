import { combineActions, handleActions } from 'redux-actions';
import { logInAction, logOutAction } from './actions';

const defaultState = {
  isLogin: false,
};

const reducer = handleActions(
  {
    [combineActions(logInAction, logOutAction)]: (state, { payload: { isAuth } }) => ({
      ...state,
      isLogin: isAuth,
    }),
  },
  defaultState,
);

export { reducer, defaultState };
