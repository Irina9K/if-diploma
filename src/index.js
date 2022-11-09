import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import App from './App';
import { reducerContent, reducerLogIn, reducerSignUp, reducerConditionBook } from './store/iSreducer';
import { requestReducer, apiReducerSearch } from './store/requestReducer';
import booksReducer from './store/booksReducer';
import { booksWatcher } from './connectors/saga/saga';
import { userInfReducer } from './store/userInfReducer';
import addOrdersReducer from './store/ordersReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  reducerLogIn,
  reducerContent,
  reducerSignUp,
  reducerConditionBook,
  booksReducer,
  apiReducer: requestReducer,
  apiReducerSearch,
  reducerUserInf: userInfReducer,
  addOrdersReducer,
});
const persistedStore = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedStore, /* rootReducer, */ applyMiddleware(sagaMiddleware));

sagaMiddleware.run(booksWatcher);

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
);
