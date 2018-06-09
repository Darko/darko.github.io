import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import HomeScreen from '../home-screen/HomeScreen';

const App = () => (
  <ThemeProvider theme={theme}>
    <HomeScreen />
  </ThemeProvider>
);

export default App;
