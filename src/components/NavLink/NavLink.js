import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink as ReactNavLink } from 'react-router-dom';
import Forward from '../Icons/Forward';
import Backward from '../Icons/Backward';

const propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  direction: PropTypes.string,
  className: PropTypes.string.isRequired
};

const NavLink = ({
  to, text, direction, className
}) => (
  <ReactNavLink to={to} direction={direction} className={className}>
    { direction === 'forward' ? <Forward /> : <Backward /> } <span>{text}</span>
  </ReactNavLink>
);

NavLink.defaultProps = {
  to: null,
  text: '',
  direction: 'forward',
};
NavLink.propTypes = propTypes;

export default styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin-left: ${props => (props.direction === 'backward' ? 0 : '-0.5rem')};
  color: ${props => props.theme.colors.navLink};
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-right: ${props => (props.direction === 'backwards' ? '.3rem' : '1rem')};
    vertical-align: middle;
    fill: currentColor;
  }

  span {
    display: block;
    height: 25px;
  }
`;
