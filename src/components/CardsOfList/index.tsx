import { useEditCardModalContext } from "../../hooks/editCardModal";
import { Container } from "./styles";

interface ICardsOfListProps  {
  id: string;
  front: string;
  versus: string;
  user: {
    id: string; 
  };
}

export default function CardsOfList({
  id,
  front,
  versus,
}: ICardsOfListProps) {

  const { handleModalVisibility } = useEditCardModalContext();

  return (
    <Container onClick={() => handleModalVisibility({ id, front, versus })} >
      {<p>{front}</p>}
    </Container>
  );
}
