import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 5.4rem;
  line-height: 1.5;
  color: white;
  letter-spacing: 0.2rem;
  transform: rotate(-5deg);
  text-shadow: 0 2px 2px black;
`;

export default ({ className }) => {
  return (<div className={className}>
    <StyledLogo>Kaladont</StyledLogo>
  </div>)
}