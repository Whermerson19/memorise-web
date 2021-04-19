import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 100px 0;
`;

export const InfoContainer = styled.div`
  display: none;

  width: 50%;
  height: 100%;


  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    text-align: center;

    > img {
      width: 300px;
      height: 200px
    }

    > h1 {
      margin: 100px 0;
      font-size: 3rem;
    }
  }
`;

const appearFromTop = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const FormContainer = styled.div`
  animation: ${appearFromTop} 1s;

  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > form {
      width: 70%;
      max-width: 500px;

      > h1 {
        text-align: center;   
        margin: 50px 0;     
      }

      > a {
        display: block;
        margin: 40px 0;
        width: 100%;
        text-align: right;
        color: var(--white);

        transition: all .2s;

        &:hover {
          filter: brightness(.6);
        }
      }

      > p {
        text-align: right;

        margin: 15px 0;

        > a {
          font-weight: bold;
          color: var(--purple);
          transition: all .2s;
          margin: 0 5px;
          cursor: pointer;

          &:hover {
            filter: brightness(.7);
          }
        }
      }
    }

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const FormLogoContainer = styled.div`
  display: none;
  
  @media (max-width: 1000px) {
    display: flex;
  }
`;
