import styled, { keyframes } from "styled-components";

interface IContainerProps {
  isVisible: boolean;
}

export const Overlay = styled.main<IContainerProps>`
  width: 100%;
  height: 100%;

  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);

  display: ${(props) => (props.isVisible ? "flex" : "none")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: 600ms;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 650px;

  z-index: 1001;
  position: absolute;
  top: 50%;
  left: 50%;

  animation: ${fadeIn} 0.2s;

  transform: translate(-50%, -50%);

  padding: 3rem;

  background: var(--gray);
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  > form {
    width: 100%;

    display: flex;
    align-self: auto;
    flex-direction: column;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: flex-end;

  position: relative;

  > svg {
    transition: .2s;

    &:hover {
      cursor: pointer;
      filter: brightness(.7);
    }
  }
`;

interface IRemoveOptionsContainerProps {
  isVisible: boolean;
}

export const RemoveOptionsContainer = styled.div<IRemoveOptionsContainerProps>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};

  animation: ${fadeIn} .2s;

  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: -7.5px;
  right: 0;

  > p {
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: bold;
  }

  > div {
    width: 100%;

    > button {
      padding: 0.3rem;

      :first-child {
        background: transparent;
        color: var(--white);
        border: 0;
        padding: 0.5rem;
        transition: 0.2s;
        font-weight: bold;

        &:hover {
          filter: brightness(0.7);
        }
      }

      :last-child {
        background: var(--purple);
        border: 0;
        color: var(--white);
        padding: 0.5rem;
        transition: 0.2s;
        font-weight: bold;

        &:hover {
          filter: brightness(0.7);
        }
      }
      & + button {
        margin-left: 5px;
      }
    }
  }
`;

export const ContainerInput = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > p {
    width: 100%;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
