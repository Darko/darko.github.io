import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string.isRequired
};

const Backward = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.002 20">
    <g transform="translate(-20.346 -693)">
      <g transform="translate(7.894 112)">
        <path className="cls-1" d="M.773.773.353,14.5l2.2-.067L2.9,2.9l11.527-.353L14.5.353Z" transform="translate(30.955 591) rotate(-45)" />
        <path className="cls-2" d="M.773.773.353,14.5l2.2-.067L2.9,2.9l11.527-.353L14.5.353Z" transform="translate(21.454 591) rotate(-45)" />
        <path className="cls-3" d="M.773.773.353,14.5l2.2-.067L2.9,2.9l11.527-.353L14.5.353Z" transform="translate(11.954 591) rotate(-45)" />
      </g>
    </g>
  </svg>
);

Backward.propTypes = propTypes;

export default styled(Backward)`
  width: 40px;
  height: 20px;

  .cls-1 { opacity: 0.26; }
  .cls-2 { opacity: 0.36; }
  .cls-3 { opacity: 0.56; }
`;
