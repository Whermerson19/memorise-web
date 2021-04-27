import styled from 'styled-components'

interface IContainerProps {
  isAvailable: boolean;
}

export const Container = styled.button<IContainerProps>`
  background: ${ props => props.isAvailable ? "var(--purple)" : "rgba(187, 134, 252, .3)" };
  font-size: 20px;

  cursor: ${ props => props.isAvailable ? "pointer" : "not-allowed" };

  padding: 30px;

  border: 0;

  min-width: 100%;

  color: var(--white);
  font-weight: bold;
  transition: filter .2s;

  &:hover {
    filter: ${ props => props.isAvailable ? "brightness(.8)" : ""};
  }
`;