import { useRef, useCallback } from "react";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { FiUser, FiLock } from 'react-icons/fi'

import Input from "../../components/Input";

import { Container } from "./styles";

export default function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log("submit");
  }, []);

  return (
    <Container>
      <h1>LOGIN</h1>

      <Form ref={formRef} onSubmit={handleSubmit} > 
        <Input name="loginField" icon={FiUser} placeholder="Username / Email" />
      </Form>
    </Container>
  );
}
