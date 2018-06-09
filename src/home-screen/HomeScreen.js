import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Lines from '../components/Lines/Lines';
import { Bold } from '../components/Text/Text';
import Image from '../home-screen/components/Image/Image';
import Name from '../home-screen/components/Name/Name';
import Position from '../home-screen/components/Position/Position';
import Github from '../components/Icons/Github';
import Instagram from '../components/Icons/Instagram';
import Twitter from '../components/Icons/Twitter';
import Navigation from './components/Navigation/Navigation';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // grid-template-rows: auto 1fr 3fr;
  grid-template-areas:
    "title-lines title-lines"
    "title title"
    "position position"
    "image social"
    "navigation navigation";
  padding: 40px 20px;
  max-width: 375px;
  margin: 0 auto;
`;

const SocialIcons = styled.div`
  width: 24px;
  padding-top: 20px;

  svg {
    margin-bottom: 20px;
  }
`;

const routes = [
  {
    route: '/bio',
    name: 'Bio'
  }
];

const HomeScreen = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Lines />
      <Name>Darko <span>Efremov</span></Name>
      <Position>Front-End engineer <Bold>@StreamElements</Bold></Position>
      <Image />
      <SocialIcons>
        <Instagram className="instagram" />
        <Twitter className="twitter" />
        <Github className="github" />
      </SocialIcons>
      <Navigation links={routes} />
    </Wrapper>
  </ThemeProvider>
);

export default HomeScreen;
