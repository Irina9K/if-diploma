import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_BOOKS, setBooks } from '../../store/booksReducer';

const fetchBooksFromApi = () => fetch('https://fox-library-api.herokuapp.com/api/library');

function* fetchBooksWorker() {
  const data = yield call(fetchBooksFromApi);
  // eslint-disable-next-line no-promise-executor-return
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setBooks(json));
}

export function* booksWatcher() {
  yield takeEvery(FETCH_BOOKS, fetchBooksWorker);
}
