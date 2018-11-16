import React from 'react';
import config from 'config';
import Button from './components/button/Button';
import { backgroundGenerator } from './utils/canvas';
import { loadFont } from './utils/fonts';
import { Wrapper, StyledLogo, Content } from './styles'
import { throttle } from '../utils/not.lodash';
import { withRouter } from "react-router";


class WhereScreen extends React.Component {
  state = {
    fadeIn: false
  }
  componentDidMount() {
    this.fontLink = loadFont();
    this.fontLink.onload = this.onFontLoaded;
    this.initCanvas();
    window.addEventListener('resize', throttle(this.initCanvas.bind(this), 200))
  }

  componentWillUnmount() {
    document.head.removeChild(this.fontLink);
  }

  onFontLoaded = () => {
    setTimeout(() => {
      this.setState({
        fadeIn: true
      })
    }, 400);
  }

  initCanvas = () => {
    window.xd = this;
    this.resizeCanvas();
    this.paintBg();
  }

  resizeCanvas = () => {
    const { parentNode } = this.canvas;
    this.canvas.setAttribute('width', parentNode.offsetWidth);
    this.canvas.setAttribute('height', parentNode.offsetHeight);
  }

  paintBg = () => {
    const ctx = this.canvas.getContext('2d');
    backgroundGenerator(ctx);
  }

  createGame = () => {
    let name = prompt("What should the others call you?");

    if (!name) {
      return
    }

    fetch(`${config.api}/v1/games`, {
      method: 'post',
      body: JSON.stringify({
        name
      })
    })
    .then(r => r.json())
    .then(game => {
      const { id } = game.room;
      this.props.history.push(`/kaladont/${id}`)
    });
  }

  render() {
    return (
      <Wrapper>
        <link href="https://fonts.googleapis.com/css?family=Bangers" rel="stylesheet"></link>
        <canvas ref={c => this.canvas = c}></canvas>
        <Content>
          <StyledLogo fadeIn={this.state.fadeIn}/>
          <Button onClick={this.createGame}><span className="text">Create Game</span></Button>
        </Content>
      </Wrapper>
    );
  }
}

export default withRouter(WhereScreen);
