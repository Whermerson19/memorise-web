import { useEditCardModalContext } from "../../hooks/editCardModal";
import { Overlay, ModalContainer } from "./styles";

interface IEditCardModalProps {}

export default function EditCardModal({}: IEditCardModalProps) {
  const { isVisible, handleModalVisibility, cardInfo } = useEditCardModalContext();

  return (
    <>
      <Overlay
        isVisible={isVisible}
        onClick={() => handleModalVisibility()}
      ></Overlay>
      { isVisible && <ModalContainer>
        <h1>teste</h1>
        <p>{cardInfo?.id}</p>
        <p>{cardInfo?.front}</p>
        <p>{cardInfo?.versus}</p>
      </ModalContainer>}
    </>
  );
}
