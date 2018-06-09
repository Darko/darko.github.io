import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => props.theme.colors.primary()};
  font-family: ${props => props.theme.typography.title.fontFamily};
  font-size: 2.6rem;
  line-height: 3.2rem;
`;

export const Copy = styled.p`
  color: ${props => props.theme.colors.copy};
  font-family: ${props => props.theme.typography.copy.fontFamily};
  font-size: 1.1rem
`;

export const Bold = styled.strong`
  font-weight: 700;
`;
