import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import Button from "../../components/Button";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";

import Card from "../../components/Card";
import {
  Container,
  Content,
  RestartButtonContainer,
  ControllContainer,
  ArrowContainer,
  TotalCardsContainer,
} from "./styles";
import { ICardsData } from "../Home";
import api from "../../services/api";

interface IParams {
  list_id: string;
}

export default function ViewCardsList() {
  const { list_id } = useParams<IParams>();

  const [cards, setCards] = useState<ICardsData[]>([]);
  const [currentCard, setCurrentCard] = useState(0);

  const handleCurrentCard = useCallback(
    (operation: "add" | "sub") => {
      if (operation === "add" && currentCard < cards.length - 1)
        setCurrentCard(currentCard + 1);
      else if (operation === "sub" && currentCard > 0)
        setCurrentCard(currentCard - 1);
    },
    [currentCard, cards.length]
  );

  useEffect(() => {
    api
      .get(`/cards/list/${list_id}`)
      .then((response) => setCards(response.data));
  }, [list_id]);

  return (
    <Container>
      <Content>
        <RestartButtonContainer>
          <Button onClick={() => setCurrentCard(0)}>Recomeçar</Button>
        </RestartButtonContainer>

        <Card
          front={cards[currentCard]?.front}
          versus={cards[currentCard]?.versus}
        />

        <ControllContainer>
          <ArrowContainer onClick={() => handleCurrentCard("sub")}>
            <RiArrowLeftSFill size={35} />
          </ArrowContainer>

          <TotalCardsContainer>
            <span>{currentCard + 1}</span> / <span>{cards?.length}</span>
          </TotalCardsContainer>

          <ArrowContainer onClick={() => handleCurrentCard("add")}>
            <RiArrowRightSFill size={35} />
          </ArrowContainer>
        </ControllContainer>
      </Content>
    </Container>
  );
}
