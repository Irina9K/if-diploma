import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './connectors/Layout/Layout';
import MainPage from './components/MainPage/mainPage';
import Books from './components/Books/books';
import Orders from './components/Orders/orders';
import BookDetails from './components/BookDetails/bookDetails';
import SettingsAccount from './components/Settings/settingsAccount';
import SearchBook from './components/SearchBook/searchBook';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path={'/'} element={<MainPage />} />
        <Route path={'/search'} element={<SearchBook />} />
        <Route path={'/books'} element={<Books />} />
        <Route path={'/orders'} element={<Orders />} />
        <Route path={'/books/:bookId'} element={<BookDetails />} />
        <Route path={'/settings'} element={<SettingsAccount />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
