import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 20px;
  width: 100%;
  max-width: 37.5em;
  margin: 0 auto;

  @media screen and (min-width: 42em) {
    max-width: 44em;
  }
`;

export default Wrapper;