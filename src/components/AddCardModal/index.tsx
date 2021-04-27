import Modal from "react-modal";
import * as yup from 'yup'
import { FiX } from "react-icons/fi";
import Button from "../Button";

import { FormHandles, useField } from "@unform/core";
import { Form } from "@unform/web";

import { InputContainer, Textarea as TextAreaContainer } from "./styles";
import { TextareaHTMLAttributes, useCallback, useEffect, useRef } from "react";
import api from "../../services/api";
import { useToast } from "../../hooks/toast";

interface IAddCardModal {
  isOpen: boolean;
  handleCloseModal(): void;
  list_id: string;
}

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

interface IFormData {
  front: string;
  versus: string;
}

export function TextArea({ name, ...rest }: ITextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: "value",
    });
  }, [registerField, fieldName]);

  return (
    <TextAreaContainer
      ref={textareaRef}
      name={name}
      maxLength={200}
      placeholder="Digite aqui..."
      {...rest}
    />
  );
}

Modal.setAppElement("#root");
export default function AddCardModal({
  isOpen,
  handleCloseModal,
  list_id
}: IAddCardModal) {
  const { showToast } = useToast()
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async(data: IFormData) => {
    try {
      const schema = yup.object().shape({
        front: yup.string().required().max(200),
        versus: yup.string().required().max(200)
      });

      await schema.validate(data, { abortEarly: false });

      await api.post(`/cards/list/${list_id}`, {
        front: data.front,
        versus: data.versus
      });

      formRef.current?.reset()

      showToast({
        type: "success",
        message: "Cartão criado com sucesso!"
      });
    } catch(err) {

      const { data } = err.response

      alert(data.message)
    }
  }, [list_id, showToast])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="Modal"
      overlayClassName="Overlay"
    >
      <FiX size={25} className="close-modal" onClick={handleCloseModal} />

      <Form ref={formRef} onSubmit={handleSubmit} >
        <InputContainer>
          <h1>Frente</h1>
          <TextArea name="front" />
        </InputContainer>

        <InputContainer>
          <h1>Verso</h1>
          <TextArea name="versus" />
        </InputContainer>

        <Button type="submit" >Adicionar</Button>
      </Form>
    </Modal>
  );
}
