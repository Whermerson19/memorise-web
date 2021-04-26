import styled, { keyframes } from 'styled-components'

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

  background: rgba(0, 0, 0, .8);

  display: ${ props => props.isVisible ? "flex" : "none" };
  opacity: ${ props => props.isVisible ? "1" : "0" };
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

  animation: ${fadeIn} .2s;

  transform: translate(-50%, -50%);

  padding: 3rem;

  background: var(--gray);
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
`;