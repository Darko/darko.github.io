import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 2.5em;
  background-color: rgb(255, 200, 0);
  box-shadow: -1px 3px 2px -1px black;
  border: none;
  color: black;
  transform: skew(-10deg, 0deg);
  padding: 7px 5px;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
  display: block;
  margin-left: auto;
  transition: .1s linear;
  &:focus {
    outline: none;
  }
  &:active {
    transform: skew(-10deg, 0deg) scale(0.91);
  }
`;

export default StyledButton;