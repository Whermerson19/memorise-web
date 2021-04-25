import Modal from "react-modal";
import { FiX } from 'react-icons/fi'
import Button from "../Button";

import { InputContainer } from './styles'


interface IAddCardModal {
  isOpen: boolean;
  handleCloseModal(): void;
}

Modal.setAppElement("#root");

export default function AddCardModal({ isOpen, handleCloseModal }: IAddCardModal) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className="Modal"
      overlayClassName="Overlay"
    >
      <FiX size={25} className="close-modal"/>

      <InputContainer>
        <h1>Frente</h1>
        <textarea maxLength={200} placeholder="Digite aqui..." />
      </InputContainer>

      <InputContainer>
        <h1>Verso</h1>
        <textarea placeholder="Digite aqui..." />
      </InputContainer>

      <Button>Adicionar</Button>
    </Modal>
  );
}
