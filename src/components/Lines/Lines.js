import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 10px;
  margin-bottom: 14px;
  grid-area: title-lines;

  .line-long, .line-short {
    display: inline-block;
    height: 10px;
    background-color: ${props => props.theme.colors.primary(0.6)};
  }

  .line-long {
    width: 50px;
    margin-right: 10px;
  }

  .line-short {
    width: 20px;
  }
`;

const Lines = ({ className = '' }) => (
  <Wrapper className={className}>
    <span className="line-long" />
    <span className="line-short" />
  </Wrapper>
);

export default Lines;
