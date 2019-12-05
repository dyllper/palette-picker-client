import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`

const Title = styled.h1`
  font-color: #32d2b4;
  margin-bottom: 0;
`

const GithubNav = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  span {
    font-size: 12px;
    opacity: 0.6;
    padding-left: 2px;
    padding-top: 10px;
  }
`

const Header = () => (
  <HeaderContainer>
    <Title>Palette Generator</Title>
    <GithubNav>
      <SocialIcon url="https://github.com/dyllper/palette-picker-client-redux"style={{ height: 25, width: 25 }} />
      <span>Check out the code!</span>
    </GithubNav>
  </HeaderContainer>
)

export default Header;