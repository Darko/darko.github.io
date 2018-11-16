import React from 'react';
import config from 'config';
import styled from 'styled-components';
import { backgroundGenerator } from './utils/canvas';
import { loadFont } from './utils/fonts';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(102, 34, 204);
  flex: 1;
`;

class WhereScreen extends React.Component {
  componentDidMount() {
    fetch(`${config.api}/v1/games/hTHct`)
    .then(r => r.json())
    .then(console.log);

    this.fontLink = loadFont();
    this.initCanvas();
  }

  componentWillUnmount() {
    document.head.removeChild(this.fontLink);
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
      </Wrapper>
    );
  }
}

export default WhereScreen;
