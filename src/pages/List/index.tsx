import { useEffect, useState, useCallback } from "react";
import { Container, Content, Title, CardsContainer } from "./styles";

import { IListData, ICardsData } from "../Home";
import api from "../../services/api";
import CardMaximized from "../../components/CardMaximized";

export default function List() {
  const [myLists, setMyLists] = useState<IListData[]>([]);
  const [cards, setCards] = useState<ICardsData[]>([]);

  const terms = useCallback(
    (id: string) => {
      return cards.filter((curr) => curr.list.id === id).length;
    },
    [cards]
  );

  useEffect(() => {
    api.get("/list").then((response) => setMyLists(response.data));
    api.get("/cards").then((response) => setCards(response.data));
  }, []);

  return (
    <Container>
      <Content>
        <Title>
          <h1>Minhas Listas</h1>
        </Title>
        <CardsContainer>
          {myLists.map((curr) => (
            <CardMaximized
              id={curr.id}
              key={curr.id}
              title={curr.title}
              image={curr.user.avatarURL}
              terms={terms(curr.id)}
            />
          ))}
        </CardsContainer>
      </Content>
    </Container>
  );
}
