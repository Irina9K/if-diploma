import React from 'react';

import Header from '../../containers/Header/header';
import Footer from '../../containers/Footer/footer';

export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
