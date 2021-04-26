import { useRef, useCallback } from "react";
import * as yup from "yup";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import getValidationErrors from "../../utils/getValidationErrors";
import { useToast } from "../../hooks/toast";
import api from "../../services/api";
import { useHistory } from "react-router";

interface IData {
  title: string;
}

export default function CreateList() {
  const { showToast } = useToast();
  const history = useHistory()
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: IData) => {
    try {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        title: yup
          .string()
          .required("Campo obrigatório")
          .max(30, "O título deve conter no máximo 30 caracteres!"),
      });

      await schema.validate(data, { abortEarly: false });

      const response = await api.post("/list", {
        title: data.title,
      });

      const { id } = response.data;

      showToast({
        type: "sucess",
        message: "Lista criada com sucesso!"
      })

      history.push(`/list/${id}`);

    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      const { data } = err.response;

      showToast({
        type: "error",
        message: data.message,
      });
    }
  }, [history, showToast]);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título" />
        <Button type="submit">Criar</Button>
      </Form>
    </Container>
  );
}
