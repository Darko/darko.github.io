import styled from 'styled-components';
import Logo from './components/logo/Logo';
import bounce from './components/animations/bounce';

export const Wrapper = styled.div`
  font-family: 'Bangers';
  width: 100%;
  height: 100%;
  background: radial-gradient(rgb(122,54,224), rgb(102,34,204));
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 265px;
`;

export const StyledLogo = styled(Logo)`
  opacity: ${props => props.fadeIn ? 1 : 0};
  transform: scale(1);
  transform-origin: center;
  animation: .4s linear;
  animation-name: ${props => props.fadeIn ? bounce : null};
`;