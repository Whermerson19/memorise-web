import { useEffect, useState } from "react";
import { Container, Content, Title, CardsContainer } from "./styles";

import { IListData } from "../Home";
import api from "../../services/api";
import CardMaximized from "../../components/CardMaximized";

export default function List() {
  const [myLists, setMyLists] = useState<IListData[]>([]);

  useEffect(() => {
    api.get("/list").then((response) => setMyLists(response.data));
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
              key={curr.id}
              title={curr.title}
              image={curr.user.avatarURL}
              terms={20}
            />
          ))}
        </CardsContainer>
      </Content>
    </Container>
  );
}
