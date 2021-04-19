import styled from 'styled-components'

export const Container = styled.button`
  background: var(--purple);
  font-size: 20px;

  padding: 30px;

  border: 0;

  min-width: 100%;

  color: var(--white);
  font-weight: bold;
  transition: filter .2s;

  &:hover {
    filter: brightness(.8);
  }
`;