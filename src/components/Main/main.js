import React from 'react';

import '../../assets/css/style.css';
import './main.css';
import '../../assets/css/button.css';

import Books from './Books/books';
import MainPage from './MainPage/mainPage';
import Orders from './Orders/orders';
import SettingsAccount from '../Settings/settingsAccount';

const Main = () => (
  <main>
    <MainPage />
    <Books />
    <Orders />
    <SettingsAccount />
  </main>
);
export default Main;
