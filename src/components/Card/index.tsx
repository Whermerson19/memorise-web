import { useState, useCallback } from "react";
import { Container, FrontCard, BackCard } from "./styles";

interface ICardProps {
  front: string;
  versus: string;
}

export default function Card({ front, versus }: ICardProps) {
  const [isFront, setIsFront] = useState(true);

  const handleFlipCard = useCallback(() => setIsFront(!isFront), [isFront]);

  return (
    <Container onClick={handleFlipCard} isFront={isFront}>
      <FrontCard>{front}</FrontCard>
      <BackCard>{versus}</BackCard>
    </Container>
  );
}
