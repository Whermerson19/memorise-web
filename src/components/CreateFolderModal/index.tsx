import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useRef } from "react";
import { useCreateFolder } from "../../hooks/createFolderModal";
import Button from "../Button";
import Input from "../Input";

import { Container, Modal, Overlay } from "./styles";

export default function CreateFolderModal() {
  const formRef = useRef<FormHandles>(null);

  const { handleModalVisibility, isVisible } = useCreateFolder()

  const handleSubmit = useCallback(() => {}, []);

  return (
    <Container isVisible={isVisible} >
      <Modal>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <p onClick={() => handleModalVisibility(false)} >sair</p>
          <Input name="title" placeholder="Título" />
          <Button>Criar</Button>
        </Form>
      </Modal>
      <Overlay />
    </Container>
  );
}
