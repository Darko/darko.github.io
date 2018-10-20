import styled from 'styled-components';
import Lines from 'components/Lines/Lines';
import Name from 'home-screen/components/Name/Name';
import PageWrapper from 'components/Page/Wrapper';

export const Wrapper = PageWrapper.extend`
  grid-template-areas:
    "title-lines title-lines"
    "title title"
    "content content"
    "navigation navigation";
`;

export const UnSelectableLines = styled(Lines)`
  user-select: none;
  position: relative;
  z-index: 2;
`;

export const UnSelectableName = styled(Name)`
  user-select: none;
  position: relative;
  z-index: 2;
`;

export const Content = styled.div`
  grid-area: content;
`;