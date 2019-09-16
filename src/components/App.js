import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import createTheme from '../theme';
import HomeScreen from '../home-screen/HomeScreen';
import Bio from '../bio/Bio';
import Where from '../where-screen/Where';
import Resume from '../resume/Resume';

class App extends React.Component {
  constructor() {
    super();

    const time = new Date().getHours();
    const themeType = time > 20 || time < 6 ? 'dark' : 'light';

    this.state = {
      themeType,
      theme: createTheme(themeType),
      lastClick: undefined,
    }
  }

  setBodyBg = () => {
    document.body.style.backgroundColor = this.state.theme.colors.background;
  }

  toggleTheme = () => {
    const themeType = this.state.themeType === 'light' ? 'dark' : 'light';
    this.setState({
      themeType,
      theme: createTheme(themeType)
    });
  }

  changeTheme = e => {
    const { target } = e;
    const isLink = target.nodeName === 'A' || target.parentNode.nodeName === 'A';

    if (isLink) { // no links
      return;
    }

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
  }

  componentDidMount() {
    this.setBodyBg();

    window.addEventListener('keypress', event => {
      if (event.key.toLowerCase() === 'n') {
        this.toggleTheme();
        this.setBodyBg();
      }
    });

    window.addEventListener('touchstart', this.changeTheme);
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/where" component={Where} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
