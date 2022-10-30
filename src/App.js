import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/Main/MainPage/mainPage';
import Books from './components/Main/Books/books';
import Orders from './components/Main/Orders/orders';
import SettingsAccount from './components/Settings/settingsAccount';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/books'} element={<Books />} />
        <Route path={'/orders'} element={<Orders />} />
        {/* <Route path={'/search/:details'} element={<BookDetails />} /> */}
        <Route path={'/settings'} element={<SettingsAccount />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
