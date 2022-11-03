import { GET_BOOKS } from './actionsType';

const apiReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};
export default apiReducer;
