import React from 'react';
import Books from '../../components/Books/books';
import MainPage from '../../components/MainPage/mainPage';
import Orders from '../../components/Orders/orders';
import SettingsAccount from '../../components/Settings/settingsAccount';
import SearchBook from '../../components/SearchBook/searchBook';
import '../../assets/css/style.css';
import './main.css';
import '../../assets/css/button.css';

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
