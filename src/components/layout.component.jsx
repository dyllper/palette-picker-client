import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header.component';
import Footer from './footer.component';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
`

const AppContainer = styled.div`
  width: 80%;
  max-width: 128rem;
  min-height: 85vh;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <AppContainer>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </AppContainer>
)

export default Layout;