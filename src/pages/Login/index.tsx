import { useRef, useCallback } from "react";

import { useAuth } from "../../hooks/auth";
import { useToast } from '../../hooks/toast'

import * as yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

import { Link } from "react-router-dom";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { FiUser, FiLock } from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo from "../../assets/logo.svg";
import {
  Container,
  InfoContainer,
  FormContainer,
  FormLogoContainer,
} from "./styles";

interface ILoginFormData {
  loginField: string;
  password: string;
}

export default function Login() {
  const formRef = useRef<FormHandles>(null);

  const { logIn } = useAuth();
  const { showToast } = useToast()

  const handleSubmit = useCallback(
    async (data: ILoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = yup.object().shape({
          loginField: yup.string().required("Campo obrigatório"),
          password: yup.string().required("Campo obrigatório"),
        });

        await schema.validate(data, { abortEarly: false });

        await logIn({ loginField: data.loginField, password: data.password });

        showToast({
          message: "Aproveite a aplicação",
          type: "success"
        })
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        const { data } = err.response

        showToast({
          message: data.message,
          type: "error"
        })
      }
    },
    [logIn, showToast]
  );

  return (
    <Container>
      {/* <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnHover
      /> */}
      <InfoContainer>
        <img src={Logo} alt="Logo" />
        <h1>
          Entre na plataforma
          <br />e comece seus
          <br />
          estudos...
        </h1>
      </InfoContainer>
      <FormContainer>
        <FormLogoContainer>
          <img src={Logo} alt="Logo" />
        </FormLogoContainer>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <Input
            name="loginField"
            icon={FiUser}
            placeholder="Username / Email"
          />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />

          <Link to="/forgot-password">Esqueçeu a senha?</Link>

          <Button type="submit">ENTRAR</Button>

          <p>
            Ainda não tem uma conta? <Link to="/register">Crie uma.</Link>
          </p>
        </Form>
      </FormContainer>
    </Container>
  );
}
