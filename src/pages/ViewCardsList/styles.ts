import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const RestartButtonContainer = styled.div``;

export const ControllContainer = styled.div`
  width: 100%;

  border: 2px solid var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ArrowContainer = styled.div`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--gray);

  padding: 1rem;
  cursor: pointer;
  transition: .2s;

  &:hover {
    filter: brightness(.8);
  }

`;

export const TotalCardsContainer = styled.div`
  width: 75%;

  padding: 1rem;

  display: flex;
  font-weight: bold;

  align-items: center;
  justify-content: center;

  span {
    margin: 0 10px;
    font-weight: bold;
    font-size: 1rem;
  }

`;

