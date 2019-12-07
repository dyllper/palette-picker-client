import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './header.component';
import Footer from './footer.component';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
`

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </React.Fragment>
)

export default Layout;