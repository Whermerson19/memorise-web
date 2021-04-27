import { useCallback, useRef, useState } from "react";
import * as yup from "yup";

import { useToast } from "../../hooks/toast";

import { FiTrash } from "react-icons/fi";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { useEditCardModalContext } from "../../hooks/editCardModal";

import Button from "../Button";
import { TextArea } from "../AddCardModal";

import api from "../../services/api";

import {
  Overlay,
  ModalContainer,
  ContainerInput,
  HeaderContainer,
  RemoveOptionsContainer,
} from "./styles";

interface IData {
  front: string;
  versus: string;
}

export default function EditCardModal() {
  const formRef = useRef<FormHandles>(null);

  const [removeContainerVisibility, setRemoveContainerVisibility] = useState(
    false
  );

  const { showToast } = useToast();

  const {
    isVisible,
    handleModalVisibility,
    buttonAvailable,
    handleButtonAvailability,
    cardInfo,
  } = useEditCardModalContext();

  const handleRemoveCard = useCallback(async () => {
    try {
      await api.delete(`/cards/id/${cardInfo.id}`);

      showToast({
        type: "success",
        message: "Cartão deletado!",
      });

      setRemoveContainerVisibility(false);

      handleModalVisibility();
    } catch (err) {
      showToast({
        type: "error",
        message: "error",
      });
    }
  }, [cardInfo.id, handleModalVisibility, showToast]);

  const handleSubmit = useCallback(
    async (data: IData) => {
      try {
        const schema = yup.object().shape({
          front: yup.string().required().max(200),
          versus: yup.string().required().max(200),
        });

        await schema.validate(data, { abortEarly: false });

        await api.put(`/cards/id/${cardInfo.id}`, {
          front: data.front,
          versus: data.versus,
        });

        showToast({
          type: "success",
          message: "Cartão editado!",
        });

        handleModalVisibility();
      } catch (err) {
        console.log(err);

        showToast({
          type: "error",
          message: "Ocorreu algum erro!",
        });
      }
    },
    [cardInfo.id, showToast, handleModalVisibility]
  );

  return (
    <>
      <Overlay
        isVisible={isVisible}
        onClick={() => handleModalVisibility()}
      ></Overlay>
      {isVisible && (
        <ModalContainer>
          <HeaderContainer>
            <FiTrash
              size={25}
              onClick={() => setRemoveContainerVisibility(true)}
            />
            <RemoveOptionsContainer isVisible={removeContainerVisibility}>
              <div>
                <button onClick={() => setRemoveContainerVisibility(false)}>
                  cancelar
                </button>
                <button onClick={handleRemoveCard}>confirmar</button>
              </div>
            </RemoveOptionsContainer>
          </HeaderContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <ContainerInput>
              <p>Frente</p>
              <TextArea
                name="front"
                defaultValue={`${cardInfo?.front}`}
                maxLength={200}
                onChange={handleButtonAvailability}
              />
            </ContainerInput>

            <ContainerInput>
              <p>Verso</p>
              <TextArea
                name="versus"
                defaultValue={`${cardInfo?.versus}`}
                maxLength={200}
                onChange={handleButtonAvailability}
              />
            </ContainerInput>

            {buttonAvailable ? (
              <Button type="submit">Salvar</Button>
            ) : (
              <Button type="button" isAvailable={false}>
                Salvar
              </Button>
            )}
          </Form>
        </ModalContainer>
      )}
    </>
  );
}
