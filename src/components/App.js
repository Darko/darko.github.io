import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import theme from '../theme';
import HomeScreen from '../home-screen/HomeScreen';
import Bio from '../bio/Bio';

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/bio" component={Bio} />
    </Switch>
  </ThemeProvider>
);

export default App;
