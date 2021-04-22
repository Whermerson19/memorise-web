import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

`;

export const Header = styled.header`
  width: 100%;

  padding: 10px 20px;

  > svg {
    &:hover {
      filter: brightness(.6);
      cursor: pointer;
    }
  }
`;