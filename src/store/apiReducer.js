import { GET_BOOKS, GET_BOOK_SEARCH } from './actionsType';

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

const apiReducerSearch = (state = [], action) => {
  switch (action.type) {
    case GET_BOOK_SEARCH:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};

export { apiReducer, apiReducerSearch };
