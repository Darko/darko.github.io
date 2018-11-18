import React from 'react';
import styled from 'styled-components';

const StyledSpot = styled.div`
  background-color: ${props => props.isEmpty ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.8)'};
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:before {
    content: "";
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 1px #fff dashed;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

class Spot extends React.Component {
  state = {
    isEmpty: true
  }

  render() {
    return (
      <StyledSpot {...this.state}/>
    );
  }
}

export default Spot;