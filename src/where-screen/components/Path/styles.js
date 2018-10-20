import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: opacity 0.2s linear;
  opacity: ${props => props.fadeIn ? 1 : 0};
`;

export const Anchor = styled.span`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SvgWrapper = styled.div`
  color: ${props => props.theme.colors.primary(1)};
  svg {
    min-width: 665px;
    min-height: 505px;
    max-width: 665px;
    max-height: 505px;
    overflow: visible;
  }
  .st0 {
    fill: none;
    stroke: currentColor;
    stroke-width: 7;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
  .st1 {
    fill: currentColor;
  }
`;