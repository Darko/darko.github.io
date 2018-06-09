import styled from 'styled-components';

const Image = styled.div`
  width: 216px;
  height: 216px;
  position: relative;
  margin: 20px 30px 20px 20px;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 20px;
    left: -20px;
    z-index: 1;
    box-shadow: inset 0px 0px 0px 10px ${props => props.theme.colors.primary(0.6)};
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

export default Image;
