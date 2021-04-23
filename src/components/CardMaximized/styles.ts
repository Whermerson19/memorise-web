import styled from "styled-components";

export const Container = styled.main`
  width: 80%;
  height: 130px;

  background: var(--gray);

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid var(--gray);

  padding: 35px;

  transition: 0.2s;

  & + main {
    margin-top: 20px;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid var(--purple);
  }

  > img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
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
