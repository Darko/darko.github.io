import styled from 'styled-components';
import PageWrapper from '../components/Page/Wrapper';
import ProfileImage from './components/Image/Image';
import Anchor from '../components/NavLink/AnchorLink';
import Nav from '../components/Navigation/Navigation';

export const Wrapper = styled(PageWrapper)`
  perspective: 100px;
  grid-template-areas:
    "title-lines title-lines"
    "title title"
    "position position"
    "image social"
    "navigation navigation";

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    grid-template-areas:
    "image social"
    "title-lines title-lines"
    "title title"
    "position position"
    "navigation navigation";
  }
`;

export const SocialIcons = styled.div`
  width: 24px;
  padding-top: 20px;

  svg {
    margin-bottom: 20px;
    fill: currentColor;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    margin-left: auto;
  }
`;

export const Image = styled(ProfileImage)`
  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    margin-bottom: 2.8em;
  }
`;

export const AnchorLink = styled(Anchor)`
  color: ${props => props.theme.colors.primary(0.8)};
  
  svg {
    fill: ${props => props.theme.colors.icon}
  }
  
  &:hover {
    svg {
      fill: currentColor;
      transition: fill .2s linear;
    }
  }
`;

export const Navigation = styled(Nav)`
  display: flex;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    justify-content: flex-end;
  }
`;