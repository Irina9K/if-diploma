import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/Main/MainPage/mainPage';
import Books from './components/Main/Books/books';
import Orders from './components/Main/Orders/orders';
import BookDetails from './components/BookDetails/bookDetails';
import SettingsAccount from './components/Settings/settingsAccount';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path={'/'} element={<MainPage />} />
        <Route path={'/books'} element={<Books />} />
        <Route path={'/orders'} element={<Orders />} />
        <Route path={'/books/:bookId'} element={<BookDetails />} />
        <Route path={'/settings'} element={<SettingsAccount />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
