import React from 'react';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import App from './App';
import { reducerContent, reducerLogIn, reducerSignUp } from './store/reducer';
import apiReducer from './store/apiReducer';
import booksReducer from './store/reducerBooks';
import { booksWatcher } from './components/saga/saga';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducerLogIn,
  reducerContent,
  reducerSignUp,
  booksReducer,
  apiReducer,
});

// const persistedStore = persistReducer(persistConfig, rootReducer);

const store = createStore(/* persistedStore */ rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(booksWatcher);
// const persistor = persistStore(store);

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </PersistGate> */},
  </Provider>,
);
