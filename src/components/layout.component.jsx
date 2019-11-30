import React from 'react';
import Header from './header.component';
import Footer from './footer.component';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout;