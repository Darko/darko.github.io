import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import themes from '../theme';
import HomeScreen from '../home-screen/HomeScreen';
import Bio from '../bio/Bio';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      theme: new Date().getHours() > 20 ? 'dark' : 'light'
    }
  }

  setBodyBg = () => {
    document.body.style.backgroundColor = themes[this.state.theme].colors.background;
  }

  componentDidMount() {
    this.setBodyBg();

    window.addEventListener('keypress', event => {
      if (event.key.toLowerCase() === 'n') {
        this.setState({
          theme: this.state.theme === 'light' ? 'dark' : 'light'
        });

        this.setBodyBg();
      }
    });
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={themes[theme]}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/bio" component={Bio} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
