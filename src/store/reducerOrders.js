import { ADD_TO_ORDERS, REMOVE_TO_ORDERS } from './actionsType';

const initialState = {
  booksOrder: [],
};

const addOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDERS:
      return {
        ...state,
        booksOrder: state.booksOrder.concat(action.payload),
      };

    case REMOVE_TO_ORDERS:
      return {
        ...state,
        booksOrder: [
          ...state.booksOrder.filter((book) => book.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default addOrdersReducer;
