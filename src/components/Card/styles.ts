import styled from "styled-components";

interface IContainerProps {
  isFront: boolean;
}

export const Container = styled.main<IContainerProps>`
  width: 100%;
  height: 350px;

  margin: 1rem 0;

  position: relative;
  background: var(--gray);

  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  transform: ${ props => props.isFront ? "rotateY(180deg)" : "rotateY(0)" };

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 3px solid var(--purple);

`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  backface-visibility: hidden;
  transform: rotateY(180deg);

  display: flex;
  align-items: center;
  justify-content: center;

  border: 3px solid var(--white);

`;
