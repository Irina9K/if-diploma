import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import { reducerContent, reducerLogIn } from './store/reducer';
import booksReducer from './store/reducerBooks';
import { booksWatcher } from './components/saga/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducerLogIn,
  reducerContent,
  booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(booksWatcher);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,
);
