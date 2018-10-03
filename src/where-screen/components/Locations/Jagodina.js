import styled from 'styled-components';
import { SubTitle } from 'components/Text/Text';

const Location = styled(SubTitle)`
  position: absolute;
  top: 0;
  left: 0;
  span {
    display: block;
    font-size: 0.5em;
    font-family: ${props => props.theme.typography.copy.fontFamily};
    font-weight: 400;
  }
`;

export const Jagodina = styled(Location)`
  transform: translate(563px, 244px);
  top: -0.5em;
  left: -4.8em;
  display: ${props => props.show ? 'block' : 'none'}
`;

export const Ljubljana = styled(Location)`
  top: -55px;
  left: -3em;
  display: ${props => props.show ? 'block' : 'none'}
`;

export const Shtip = styled(Location)`
  top: 100%;
  left: 100%;
  transform: translate(-120px, -40px);
`;