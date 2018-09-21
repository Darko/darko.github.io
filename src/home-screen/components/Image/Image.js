import React from 'react';
import { Wrapper, ImageDiv, Shadow } from './elements';

class Image extends React.Component {
  constructor() {
    super();

    this.state = {
      calculatedStyle: {
        transition: 'transform 0.2s linear',
        transform: 'rotateX(0) rotateY(0)'
      }
    }
  }

  setRef = div => {
    this.div = div;
  }

  getX = e => {
    const { top, height } = this.pos;
    const { clientY } = e;
    const pos = clientY - top;
    const x = pos  / (height / 2);
    return (x < 1 ? (1 - x) * -1 : x - 1) * -2;
  }

  getY = e => {
    const { left, width } = this.pos;
    const { clientX } = e;
    const pos = clientX - left;
    const y = pos  / (width / 2);
    return (y < 1 ? (1 - y) * -1 : y - 1) * 2;
  }

  getShadowTransform = (x, y) => {
    const _y = x * 20;
    const _x = (y * 20) * -1;
    return {
      x: _x * 1.2,
      y: _y * 1.1
    }
  }

  update = e => {
    const x = this.getX(e);
    const y = this.getY(e);
    const { x: _x, y: _y } = this.getShadowTransform(x, y);

    this.setState(state => ({
      ...state,
      calculatedStyle: {
        ...state.calculatedStyle,
        transform: `rotateX(${x}deg) rotateY(${y}deg)`,
        WebkitTransform: `rotateX(${x}deg) rotateY(${y}deg)`,
        msTransform: `rotateX(${x}deg) rotateY(${y}deg)`,
      },
      shadowStyles: {
        ...state.shadowStyles,
        transform: `translate(${_x}px, ${_y}px) rotateX(${x}deg) rotateY(${y}deg)`,
        WebkitTransform: `translate(${_x}px, ${_y}px) rotateX(${x}deg) rotateY(${y}deg)`,
        msTransform: `translate(${_x}px, ${_y}px) rotateX(${x}deg) rotateY(${y}deg)`,
      }
    }));
  }

  onMouseOver = e => {
    e.persist();
    this.setState({
      rotating: true
    });
    this.pos = this.div.getBoundingClientRect();
    this.update(e);
  }

  onMouseMove = e => {
    this.update(e);
  }

  onMouseLeave = () => {
    this.setState(state => ({
      ...state,
      calculatedStyle: {
        ...state.calculatedStyle,
        rotating: false,
        transform: 'rotateX(0) rotateY(0)',
        WebkitTransform: 'rotateX(0) rotateY(0)',
        msTransform: 'rotateX(0) rotateY(0)',
      },
      shadowStyles: {
        transform: 'translate(0)',
        WebkitTransform: 'translate(0)',
        msTransform: 'translate(0)',
      }
    }));
  }

  render() {
    const events = {
      onMouseMove: this.state.rotating ? this.onMouseMove : null,
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseLeave
    }

    return (
      <Wrapper innerRef={this.setRef} {...this.props} {...events} style={this.state.calculatedStyle}>
        <Shadow style={this.state.shadowStyles}/>
        <ImageDiv/>
      </Wrapper>
    );
  }
}

export default Image;
