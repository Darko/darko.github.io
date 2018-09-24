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
  opacity: ${props => props.slideIn && !props.hide ? 1 : 0};
  transform: translateY(${props => props.slideIn && !props.hide ? 0 : -30}px);
  transition: opacity .2s linear, transform .2s linear;
`;

const NotificationText = styled(Copy)`
  font-weight: normal;
`;

class Component extends React.Component { 
  state = {
    slideIn: false
  }

  setContext = ctx => {
    this.ctx = ctx;
    const { current, digesting } = ctx;

    if (this.state.slideIn !== digesting) {
      setTimeout(() => {
        this.setState({ slideIn: digesting });
      }, 400);
    }

    return <Wrapper>
      {
        digesting &&
        <NotificationWrapper hide={this.state.slideIn !== digesting} slideIn={this.state.slideIn}>
          <NotificationText>{current.text}</NotificationText>
        </NotificationWrapper>
      }
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