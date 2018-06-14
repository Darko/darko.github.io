import React from 'react';
import Name from './components/Name/Name';
import Position from './components/Position/Position';

import Lines from '../components/Lines/Lines';
import Github from '../components/Icons/Github';
import Instagram from '../components/Icons/Instagram';
import Twitter from '../components/Icons/Twitter';
import { Wrapper, Image, SocialIcons, AnchorLink, Navigation } from './styles';
import { Bold } from '../components/Text/Text';
import * as sns from '../constants/sns';

const routes = [
  {
    route: '/bio',
    name: 'More stuff'
  }
];

const HomeScreen = () => (
  <Wrapper>
    <Lines />
    <Name>Darko <span>Efremov</span></Name>
    <Position>Front-End engineer <Bold>@StreamElements</Bold></Position>
    <Image />
    <SocialIcons>
      <AnchorLink href={sns.instagram} target="blank">
        <Instagram className="instagram" />
      </AnchorLink>
      <AnchorLink href={sns.twitter} target="blank">
        <Twitter className="twitter" />
      </AnchorLink>
      <AnchorLink href={sns.github} target="blank">
        <Github className="github" />
      </AnchorLink>
    </SocialIcons>
    <Navigation links={routes} />
  </Wrapper>
);

export default HomeScreen;
