import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1220px;

  > button {
    padding: 0.7rem 2rem;
    background: var(--purple);
    color: var(--white);
    transition: 0.2s;
    border: 0;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-around;

  margin: 50px 0;
`;

export const CardButton = styled.div`
  width: 150px;

  font-size: 1rem;
  font-weight: bold;

  background: var(--gray);
  border: 2px solid var(--white);

  text-align: center;
  transition: 0.2s;
  padding: 1rem 2rem;

  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
    border: 2px solid var(--purple);
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;

  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  overflow-y: scroll;

  @media (min-width: 1055px) {
    justify-content: flex-start;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray);
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: var(--purple);
  }
`;
