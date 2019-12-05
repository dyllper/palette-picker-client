import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const IconContainer = styled.div`
  margin: 0 5px;
`

const Footer = () => (
  <FooterContainer>
    <IconContainer>
      <SocialIcon url="https://twitter.com/Dyllper" style={{ height: 50, width: 50 }} />
    </IconContainer>
    <IconContainer>
      <SocialIcon url="https://www.linkedin.com/in/perkinsdylan/" style={{ height: 50, width: 50 }} />
    </IconContainer>
  </FooterContainer>
)

export default Footer;