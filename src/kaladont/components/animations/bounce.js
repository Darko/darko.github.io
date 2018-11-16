import { keyframes } from 'styled-components';
const bounce = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.3);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
`;


export default bounce;