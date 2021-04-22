import styled from 'styled-components'

interface IContainerProps {
  isList: boolean;
}

export const Container = styled.main<IContainerProps>`
  min-width: 467px;
  height: 200px;

  background: var(--gray);

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid var(--gray);

  padding: 35px;

  transition: .2s;

  & + main {
    margin-left: 20px;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid var(--purple);
  }

  > img {
    width: 90px;
    height: 90px;
    border-radius: ${props => props.isList ? "50%" : "0%"}; 
    margin-right: 20px;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  > h1 {
    font-size: 1.5rem;
  }

  > p {
    font-size: 1rem;
    font-weight: bold;
    color: var(--purple);
    margin-top: 5px;
  }
`;