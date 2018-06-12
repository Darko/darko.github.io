import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  href: PropTypes.string,
  className: PropTypes.string.isRequired,
  children: PropTypes.any
};

const Anchor = ({
  href, className, children, ...props
}) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

Anchor.defaultProps = {
  href: '',
  children: []
};
Anchor.propTypes = propTypes;

export default styled(Anchor)`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.primary()};

  svg {
    fill: currentColor;
    vertical-align: middle;
  }
`;
