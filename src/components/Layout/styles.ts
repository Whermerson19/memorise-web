import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-areas: "aside content";
`;