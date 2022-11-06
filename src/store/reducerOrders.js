import { ADD_TO_ORDERS } from './actionsType';

const addOrdersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_ORDERS:
    {
      const item = action.payload;
      return [...state, item];
    }
    default:
      return state;
  }
};

export default addOrdersReducer;
