import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 190px;

  background: var(--gray);
  cursor: pointer;

  margin: 10px;

  &:hover {
    border: 2px solid var(--purple);
  }
`;