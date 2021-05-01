import styled from 'styled-components'

export const Container = styled.main`

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 2rem;

  @media (max-width: 1038px) {
    flex-direction: column;
    position: relative;
  }

`;

export const Display = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 400px;

  border: 3px solid var(--purple);
  border-radius: 20px;
  background: var(--gray);

  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-weight: bold;
    font-size: 1.5rem;
  }

  @media (max-width: 1038px) {
    position: absolute;

    top: 20px;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: 400px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1038px) {
    position: absolute;

    top: 450px;
  }
`;

export const AnswerContainer = styled.div`
  width: 100%;
  padding: 1rem;
  height: 100px;
  cursor: pointer;
  border: 2px solid var(--white);
  border-radius: 8px;

  background: var(--gray);

  &:hover {
    border-color: var(--purple);
  }

  & + div {
    margin-top: 8px;
  }

  > p {
    font-size: 1rem;
  }

  overflow-y: hidden;
`;
