const defaultState = {
  books: [],
};

export const SET_BOOKS = 'SET_BOOKS';
export const FETCH_BOOKS = 'FETCH_BOOKS';

export default function booksReducer(state = defaultState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
  }
  return state;
}

export const setBooks = (payload) => ({
  type: SET_BOOKS,
  payload,
});

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
});
