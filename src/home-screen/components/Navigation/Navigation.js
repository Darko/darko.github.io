import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavLink from '../../../components/NavLink/NavLink';

const propTypes = {
  links: PropTypes.arrayOf(Object)
};

const defaultProps = {
  links: []
};

const Wrapper = styled.div`
  grid-area: navigation;
  margin-top: 4.7rem;
`;

const Navigation = ({ links }) => (
  <Wrapper>
    { links.map(link => <NavLink key={link.name} to={link.route} text={link.name} direction={link.direction} />) }
  </Wrapper>
);

Navigation.defaultProps = defaultProps;
Navigation.propTypes = propTypes;

export default Navigation;
