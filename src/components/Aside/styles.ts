import styled from "styled-components";

import { shade } from "polished";

interface IContainerProps {
  isVisible: boolean;
}

export const BlackWindow = styled.div<IContainerProps>`
  position: absolute;
  width: calc(100vw - 250px);
  height: 100%;

  display: ${ prosp => prosp.isVisible ? 'block' : 'none' };
  left: 250px; 

`;

export const Container = styled.aside<IContainerProps>`
  position: relative;
  z-index: 100;
  background: #181818;
  display: flex;
  flex-direction: column;

  width: 250px;
  height: 100vh;

  align-items: center;
  justify-content: space-between;

  position: fixed;
  transition: 500ms;

  top: 0;
  left: ${ props => props.isVisible ? "0" : "-100%" };
  opacity: ${ props => props.isVisible ? "1" : "0" };

  > svg {
    position: absolute;
    top: 10px;
    left: 20px;
    transition: .2s;

    &:hover {
      cursor: pointer;
      filter: brightness(.6);
    }
  }

`;

export const Content = styled.div`
  
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: space-around;

  padding: 1rem 0;

  > img {
    width: 100%;
    max-width: 100%;
    max-height: 4rem;
    padding: 0 2rem;

    margin: 1rem;
  }

  > p {
    font-weight: bold;
    cursor: pointer;
    font-size: 1.5rem;
    transition: 0.2s;
    margin-left: 20px;

    &:hover {
      color: var(--purple);
    }
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 0 1.3rem;
`;

export const UserInfoContainer = styled.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-between;

  > img {
    width: 80px;
    height: 80px;

    border: 4px solid var(--purple);
    border-radius: 50%;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }

  > h1 {
    font-size: 1rem;
    margin-left: 10px;
  }
`;

export const CreateButtonContainer = styled.div`
  
  > button {
    width: 100%;
    background: var(--purple);
    border: 0;
    transition: 0.2s;
    color: var(--white);
    font-weight: bold;
    font-size: 1rem;

    padding: 10px;

    margin-top: 15px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;


interface IOptionsCreateContainerProps {
  isVisible: boolean;
}

export const OptionsCreateContainer = styled.div<IOptionsCreateContainerProps>`
  width: 210px;
  background: var(--gray);

  display: flex;

  visibility: ${ props => props.isVisible ? "visible" : "hidden" };

  > ul {
    width: 100%;

    > li {
      list-style: none;
      font-weight: bold;
      padding: 15px;
      cursor: pointer;
      transition: background-color .2s;

      &:hover {
        background: ${shade(.5, "#242424")};
      }
    }
  }
`;

export const NavContainer = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  color: #fff;

  > ul {
    width: 100%;

    > li {
      width: 100%;

      list-style: none;
      display: flex;

      align-items: center;
      justify-content: flex-start;

      padding: 1rem;

      transition: all 0.2s;

      &:hover {
        cursor: pointer;
        background: ${shade(0.03, "#121212")};
      }

      > svg {
        margin-right: 1rem;
      }

      > p {
        font-weight: bold;
        font-size: 1rem;
        color: var(--white);
      }
    }
  }
`;
