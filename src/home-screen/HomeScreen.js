import React from 'react';
import styled from 'styled-components';
import Lines from '../components/Lines/Lines';
import { Bold } from '../components/Text/Text';
import Image from '../home-screen/components/Image/Image';
import Name from '../home-screen/components/Name/Name';
import Position from '../home-screen/components/Position/Position';
import Github from '../components/Icons/Github';
import Instagram from '../components/Icons/Instagram';
import Twitter from '../components/Icons/Twitter';
import Navigation from '../components/Navigation/Navigation';
import PageWrapper from '../components/Page/Wrapper';

const Wrapper = PageWrapper.extend`
  grid-template-areas:
    "title-lines title-lines"
    "title title"
    "position position"
    "image social"
    "navigation navigation";

  @media screen and (min-width: 42em) {
    grid-template-areas:
    "image social"
    "title-lines title-lines"
    "title title"
    "position position"
    "navigation navigation";
  }
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
);

export default HomeScreen;
