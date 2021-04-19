import { useRef, useCallback } from "react";
import { useAuth } from "../../hooks/auth";

import * as yup from "yup";

import { Link } from "react-router-dom";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { FiUser, FiLock, FiMail } from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo from "../../assets/logo.svg";
import {
  Container,
  InfoContainer,
  FormContainer,
  FormLogoContainer,
} from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";

interface IRegisterFormData {
  username: string;
  email: string;
  password: string;
}

export default function Register() {
  const formRef = useRef<FormHandles>(null);

  const { createUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: IRegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = yup.object().shape({
          username: yup.string().required("Campo obrigatório"),
          email: yup
            .string()
            .required("Campo obrigatório")
            .email("Formato de email inválido"),
          password: yup
            .string()
            .required("Campo obrigatório")
            .min(8, "Senha deve conter pelo menos 8 caracteres"),
        });

        await schema.validate(data, { abortEarly: false });

        await createUser({
          username: data.username,
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        alert("failed");
      }
    },
    [createUser]
  );

  return (
    <Container>
      <FormContainer>
        <FormLogoContainer>
          <img src={Logo} alt="Logo" />
        </FormLogoContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>CADASTRO</h1>
          <Input name="username" icon={FiUser} placeholder="Username" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />

          <div />

          <Button type="submit">CADASTRAR</Button>

          <p>
            Já tem uma conta? <Link to="/">Faça Login.</Link>
          </p>
        </Form>
      </FormContainer>

      <InfoContainer>
        <img src={Logo} alt="Logo" />
        <h1>
          Crie uma conta
          <br />
          para aproveitar todos os recursos.
        </h1>
      </InfoContainer>
    </Container>
  );
}
