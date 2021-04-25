import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddCardModal from "../../components/AddCardModal";
import CardsOfList from "../../components/CardsOfList";
import { useAddCardModal } from "../../hooks/addCardModal";
import api from "../../services/api";
import { ICardsData } from "../Home";

import {
  Container,
  Header,
  ButtonsContainer,
  CardButton,
  Content,
} from "./styles";

interface IParams {
  list_id: string;
}

export default function EspecificList() {
  const { list_id } = useParams<IParams>();
  const { handleOpenModal, isOpen, handleCloseModal } = useAddCardModal()

  const [cards, setCards] = useState<ICardsData[]>([]);

  useEffect(() => {
    api
      .get(`/cards/list/${list_id}/page/1`)
      .then((response) => setCards(response.data));
  }, [list_id]);

  return (
    <Container>
      <AddCardModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
      <Header>
        <h1>List Title</h1>

        <button onClick={handleOpenModal} >Adicionar</button>
      </Header>
      <ButtonsContainer>
        <CardButton>
          Estudar
        </CardButton>
        <CardButton>
          Visualizar
        </CardButton>
      </ButtonsContainer>
      <Content>
        {cards.map((curr) => (
          <CardsOfList
            key={curr.id}
            id={curr.id}
            front={curr.front}
            versus={curr.versus}
            user={curr.user}
          />
        ))}
      </Content>
    </Container>
  );
}
