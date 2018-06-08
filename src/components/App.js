import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Title, Copy, Bold } from './Text/Text';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
                    "a a a"
                    "b b b"
                    "c c d"
                    "e e e";
`;

const Name = Title.extend`
  grid-area: a;
`;

const Position = Copy.extend`
  grid-area: b;
`;

class App extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      booted: false
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Name>Darko Efremov</Name>
          <Position>Front-End engineer <Bold>@StreamElements</Bold></Position>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
