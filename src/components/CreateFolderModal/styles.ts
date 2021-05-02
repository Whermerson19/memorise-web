import styled from 'styled-components'

interface IContainerProps {
  isVisible: boolean;
}

export const Container = styled.main<IContainerProps>`
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  display: ${ props => props.isVisible ? "flex" : "none" };

  align-items: center;
  justify-content: center;

  z-index: 2;

`;

export const Modal = styled.div`
  width: 100%;
  max-width: 500px;

  height: 500px;

  border: 2px solid white;

  z-index: 3;

  background: #080808;
`;

export const Overlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, .8);

`