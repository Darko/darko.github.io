import React from 'react';
import styled from 'styled-components';
import Lines from '../components/Lines/Lines';
import Name from '../home-screen/components/Name/Name';
import PageWrapper from '../components/Page/Wrapper';
import Path from './components/Path/Path';

const Wrapper = PageWrapper.extend`
  grid-template-areas:
    "title-lines title-lines"
    "title title"
    "content content"
    "navigation navigation";
`;

const UnSelectableLines = styled(Lines)`
  user-select: none;
  position: relative;
  z-index: 2;
`;

const UnSelectableName = styled(Name)`
  user-select: none;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  grid-area: content;
`;

const HomeScreen = () => (
  <Wrapper>
    <UnSelectableLines/>
    <UnSelectableName>Where</UnSelectableName>
    <Content>
      <Path/>
    </Content>
  </Wrapper>
);

export default HomeScreen;
