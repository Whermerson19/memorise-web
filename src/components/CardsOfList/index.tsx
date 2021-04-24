import { useCallback, useState } from "react";
import { Container } from "./styles";

interface ICardsOfListProps {
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
  user,
}: ICardsOfListProps) {
  const [isFront, setIsFront] = useState(true);

  const flipCard = useCallback(() => setIsFront(!isFront), [isFront])

  return (
    <Container onClick={flipCard} >
      {isFront ? <p>{front}</p> : <p>{versus}</p>}
    </Container>
  );
}
