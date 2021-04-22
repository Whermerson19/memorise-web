import { shade } from 'polished';
import styled from 'styled-components'

export const Container = styled.main`
  position: relative;

  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 50px;
  
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const HeaderList = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 2rem;
  }

  > p {
    font-size: 1rem;
    color: var(--cyan);
    transition: .1s;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: ${shade(.3, "#03DAC5")};
    }
  }
`;

export const CardsContainer = styled.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: flex-start;

  overflow-x: hidden;
  margin-top: 25px;

  > h1 {
    font-size: 1.5rem;
    color: var(--cyan);
  }
`;