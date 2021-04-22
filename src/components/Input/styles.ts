import styled, { css } from "styled-components";

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

interface IErrorProps {
  isVisible: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: var(--gray);
  border: 2px solid var(--gray);

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 20px 12px;

  color: #484848;

  & + div {
    margin-top: 20px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `};

  ${(props) =>
    props.isFocused &&
    css`
      border-color: var(--purple);
      color: var(--white);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--white);
    `}

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

export const Error = styled.div<IErrorProps>`
  display: ${ props => props.isVisible ? "flex" : "none" };

  position: relative;

  cursor: pointer;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  > span {
    background: #000;
    padding: 6px;
    border-radius: 10px;
    width: 200px;
    text-align: center;
    visibility: hidden;
    opacity: 0; 
    position: absolute;
    color: white;
    transform: translate(-50%, calc(-50% - 25px));
    transition: all .4s;
  }
`;
