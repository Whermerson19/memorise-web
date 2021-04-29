import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  overflow-y: auto;

  padding: 3rem;

`;

export const Header = styled.header`
  width: 100%;

  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;

  padding: 10px 20px;

  > svg {
    &:hover {
      filter: brightness(.6);
      cursor: pointer;
    }
  }
`;