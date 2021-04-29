import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  > form {
    width: 40%;
    height: 100%;
    max-height: 200px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;
  }
`;