import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 236px;
  height: 236px;
  margin-top: 20px;
  position: relative;
`;

export const Shadow = styled.div`
  z-index: 1;
  width: 216px;
  height: 216px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  transform: translate(0);
  transition: transform .2s linear;
  opacity: ${({ theme }) => theme.type === 'dark' ? 0.3 : 0.03};

  &:before {
    content: '';
    width: 92%;
    height: 92%;
    position: absolute;
    bottom: -20px;
    left: -20px;
    border: 8px;
    border: 8px solid black;
    filter: blur(1px);
  }
`

export const ImageDiv = styled.div`
  width: 216px;
  height: 216px;
  position: relative;
  margin: 0 30px 20px 20px;
  transition: transform .2s linear;
  z-index: 2;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 20px;
    left: -20px;
    z-index: 1;
    box-shadow: inset 0px 0px 0px 8px ${props => props.theme.colors.primary(0.6)};
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('./assets/alpha.jpg');
    background-repeat: no-repeat;
    background-size: 258px 344px;
    background-position: top center;
  }
`;