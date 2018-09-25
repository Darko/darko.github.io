import React from 'react';
import styled from 'styled-components';
import Context from './Context';
import { Copy } from '../Text/Text';
import { darken } from 'polished';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

const NotificationWrapper = styled.div`
  margin: 8px 8px 0;
  border-radius: 2px;
  background-color: ${props => darken(0.05, props.theme.colors.primary(1, props.theme.type))};
  padding: 12px 8px 8px;
  color: #fff;
  min-width: 280px;
  max-width: 280px;
  opacity: ${props => props.slideIn ? 1 : 0};
  transform: translateY(${props => props.slideIn ? 0 : -30}px);
  transition: opacity .2s linear, transform .2s linear;
`;

const NotificationText = styled(Copy)`
  font-weight: normal;
  color: rgba(255, 255, 255, 0.87);
`;

class Notification extends React.Component {
  state = {
    slideIn: false
  }

  onClose = () => {
    this.setState({
      slideIn: false
    });
    
    setTimeout(() => this.props.onClose(), 200);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        slideIn: true
      });
  
      setTimeout(this.onClose, this.props.data.showTime);
    }, 200);
  }

  render() {
    const { text } = this.props.data;

    return (
      <NotificationWrapper slideIn={this.state.slideIn}>
        <NotificationText>{text}</NotificationText>
      </NotificationWrapper>
    );
  }
}

class Component extends React.Component { 
  state = {
    show: false
  }

  onClose = () => {
    this.setState({
      show: false
    });
  }

  setContext = ctx => {
    this.ctx = ctx;
    const { current, digesting } = ctx;

    if (digesting && !this.state.show) {
      setTimeout(() => {
        this.setState({
          show: true
        });
      }, 0);
    }

    return <Wrapper>
      { this.state.show && <Notification data={current} onClose={this.onClose}/> }
    </Wrapper>
  }

  render() {
    window.xd = this;

    return (
      <React.Fragment>
        <Context.Consumer>{this.setContext}</Context.Consumer>
      </React.Fragment>
    );
  }
}

export default Component;