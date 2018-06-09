import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string.isRequired
};

const Forward = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.799 19.799">
    <g transform="translate(-13 -581)">
      <path className="cls-1" d="M-2670,14V0h2.24V11.76H-2656V14Z" transform="translate(-1865.075 -1287.176) rotate(-135)" />
      <path className="cls-2" d="M-2670,14V0h2.24V11.76H-2656V14Z" transform="translate(-1855.075 -1287.176) rotate(-135)" />
      <path className="cls-3" d="M-2670,14V0h2.24V11.76H-2656V14Z" transform="translate(-1845.075 -1287.176) rotate(-135)" />
    </g>
  </svg>
);

Forward.propTypes = propTypes;

export default styled(Forward)`
  width: 40px;
  height: 20px;

  .cls-1 { opacity: 0.26; }
  .cls-2 { opacity: 0.36; }
  .cls-3 { opacity: 0.56; }
`;
