import { useEffect, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AddCardModal from "../../components/AddCardModal";
import CardsOfList from "../../components/CardsOfList";
import EditCardModal from "../../components/EditCardModal";
import { useAddCardModal } from "../../hooks/addCardModal";
import { useEditCardModalContext } from "../../hooks/editCardModal";
import api from "../../services/api";
import { ICardsData, IListData } from "../Home";

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

  const history = useHistory();

  const { handleOpenModal, isOpen, handleCloseModal } = useAddCardModal();
  const { isVisible } = useEditCardModalContext();

  const [cards, setCards] = useState<ICardsData[]>([]);
  const [lists, setLists] = useState<IListData[]>([]);

  useEffect(() => {
    api
      .get(`/cards/list/${list_id}`)
      .then((response) => setCards(response.data));
  }, [list_id, isOpen, isVisible]);

  useEffect(() => {
    api.get("/list").then((response) => setLists(response.data));
  }, []);

  const currentList = useMemo(() => {
    return lists.filter((curr) => curr.id === list_id);
  }, [list_id, lists]);

  return (
    <Container>
      <AddCardModal
        list_id={list_id}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
      <Header>
        <h1>{currentList[0]?.title}</h1>

        <button onClick={handleOpenModal}>Adicionar</button>
      </Header>
      <ButtonsContainer>
        <CardButton onClick={() => history.push(`/study/list/${list_id}`)} >Estudar</CardButton>
        <CardButton onClick={() => history.push(`/cards/list/${list_id}`)}>
          Visualizar
        </CardButton>
      </ButtonsContainer>
      <Content>
        <EditCardModal />
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
