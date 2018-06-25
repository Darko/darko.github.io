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
      theme: new Date().getHours() > 20 ? 'dark' : 'light',
      lastClick: undefined,
    }
  }

  setBodyBg = () => {
    document.body.style.backgroundColor = themes[this.state.theme].colors.background;
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light'
    });
  }

  componentDidMount() {
    this.setBodyBg();

    window.addEventListener('keypress', event => {
      if (event.key.toLowerCase() === 'n') {
        this.toggleTheme();
        this.setBodyBg();
      }
    });

    window.addEventListener('click', e => {
      const { lastClick } = this.state;
      const time = lastClick !== undefined ? Date.now() - lastClick : 0;

      if (time > 0 && time < 400) {
        e.preventDefault();
        this.toggleTheme();
        this.setBodyBg();
        return;
      }

      this.setState({
        lastClick: Date.now()
      });
    })
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
