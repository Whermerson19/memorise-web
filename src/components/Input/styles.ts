import styled, { css } from "styled-components";

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: var(--gray);
  border: 2px solid var(--gray);

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 20px 12px;

  color: #484848;

  ${ props => props.isErrored && css`
    border: 2px solid var(--red);
  ` };

  ${ props => props.isFocused && css`
    border: 2px solid var(--purple);
    color: var(--white);
  ` }

  ${ props => props.isFilled && css`
    color: var(--white);
  ` }

  > input {
    background: transparent;
    border: 0;
    flex: 1;
    font-size: 18px;
    color: var(--white);

    ::placeholder {
      color: #484848;
    }
  }

  > svg {
    margin-right: 20px;
  }
`;
