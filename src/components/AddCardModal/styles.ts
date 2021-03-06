import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  text-align: left;

  align-items: center;
  justify-content: center;

  > h1 {
    width: 100%;
    font-size: 1.5rem;
    align-self: left;
  }
`;

export const Textarea = styled.textarea`
  background: transparent;
  width: 100%;
  max-height: 130px;
  resize: none;
  margin: 20px;
  font-size: 1.2rem;
  color: var(--white);

  padding: .5rem;

  border-width: 0 0 3px 0;
  border-style: solid;
  border-color: var(--purple);
`;
