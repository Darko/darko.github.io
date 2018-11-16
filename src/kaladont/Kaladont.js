import React from 'react';
import config from 'config';
import styled from 'styled-components';
import Logo from './components/logo/Logo';
import Button from './components/button/Button';
import { backgroundGenerator } from './utils/canvas';
import { loadFont } from './utils/fonts';
import bounce from './components/animations/bounce';

const Wrapper = styled.div`
  font-family: 'Bangers';
  width: 100%;
  height: 100%;
  background-color: rgb(102, 34, 204);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 265px;
`;

const StyledLogo = styled(Logo)`
  opacity: ${props => props.fadeIn ? 1 : 0};
  transform: scale(1);
  transform-origin: center;
  animation: .4s linear;
  animation-name: ${props => props.fadeIn ? bounce : null};
`;
class WhereScreen extends React.Component {
  state = {
    fadeIn: false
  }
  componentDidMount() {
    fetch(`${config.api}/v1/games/hTHct`)
    .then(r => r.json())
    .then(console.log);

    this.fontLink = loadFont();
    this.fontLink.onload = this.onFontLoaded;
    this.initCanvas();
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
    const { parentNode } = this.canvas;
    this.canvas.setAttribute('width', parentNode.offsetWidth);
    this.canvas.setAttribute('height', parentNode.offsetHeight);
    this.paintBg();
  }

  paintBg = () => {
    const ctx = this.canvas.getContext('2d');
    backgroundGenerator(ctx);
  }

  render() {
    return (
      <Wrapper>
        <link href="https://fonts.googleapis.com/css?family=Bangers" rel="stylesheet"></link>
        <canvas ref={c => this.canvas = c}></canvas>
        <Content>
          <StyledLogo fadeIn={this.state.fadeIn}/>
          <Button><span className="text">Create Game</span></Button>
        </Content>
        
      </Wrapper>
    );
  }
}

export default WhereScreen;
