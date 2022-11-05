import { SET_USER_INF } from './actionsType';

export const reducerUserInf = (state = [], action) => {
  switch (action.type) {
    case SET_USER_INF:
      return {
        ...state,
        userInfo: action.payload,
        // birthdate: action.payload,
        // email: action.payload,
        // password: action.payload,
        // auth: true,
      };
    default:
      return state;
  }
};

export const setUserInf = (userName, birthdate, email, password) => ({
  type: SET_USER_INF,
  payload: {
    userName,
    birthdate,
    email,
    password,
  },
});

// userName, birthdate, email, password
