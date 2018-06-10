import React from 'react';
import styled from 'styled-components';
import Lines from '../components/Lines/Lines';
import Name from '../home-screen/components/Name/Name';
import PageWrapper from '../components/Page/Wrapper';
import { Copy, Link } from '../components/Text/Text';
import Nav from '../components/Navigation/Navigation';

const Wrapper = PageWrapper.extend`
  grid-template-areas:
    "title-lines title-lines"
    "title title"
    "content content"
    "navigation navigation";
`;

const Content = styled.div`
  grid-area: content;
`;

const Text = styled(Copy)`
  margin-bottom: 1em;
  font-size: 1.18rem;
`;

const Navigation = styled(Nav)`
  margin-top: 2.3em;
`;

const routes = [
  {
    route: '/',
    name: 'Intro',
    direction: 'backward'
  }
];

const HomeScreen = () => (
  <Wrapper>
    <Lines />
    <Name>Bio</Name>
    <Content>
      <Text>
        Here, have something to talk about when you see me next time.
      </Text>
      <Text>
        I’m a 22-year-old Front-end developer, wanna-be digital nomad, and an amateur fitness enthusiast.
      </Text>
      <Text>
        I dropped out of Computer Science studies after 6/8 semesters to go and build cool stuff at StreamElements.
      </Text>
      <Text>
        Before that, I graduated high school and got myself a diploma in “Electricity, Electronics and Telecommunications”.
      </Text>
      <Text>
        I don’t have many public things to present on this website, but you can take a look at some of my small coding projects on <Link href="https://github.com/darko" target="blank">Github</Link>, my adventures on <Link href="https://github.com/darko" target="blank">Instagram</Link>, and thoughts on <Link href="https://github.com/darko" target="blank">Twitter</Link>.
      </Text>
    </Content>
    <Navigation links={routes} />
  </Wrapper>
);

export default HomeScreen;
