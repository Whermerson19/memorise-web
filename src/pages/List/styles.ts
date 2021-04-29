import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  
`;

export const Content = styled.div`
  width: 100%;
  height:100%;

  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.header` 
  margin: 20px 0;
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;

  > h1 {
    color: var(--cyan);
  }
`;