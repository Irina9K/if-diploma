import React from 'react';

import '../../assets/css/style.css';
import './main.css';
import '../../assets/css/button.css';

import Books from './Books/books';
import MainPage from './MainPage/mainPage';
import Orders from './Orders/orders';
import SettingsAccount from '../Settings/settingsAccount';
import SearchBook from './SearchBook/searchBook';

const Main = () => (
  <main>
    <SearchBook />
    <MainPage />
    <Books />
    <Orders />
    <SettingsAccount />
  </main>
);
export default Main;
