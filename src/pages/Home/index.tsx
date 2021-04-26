import { useState, useEffect, useCallback } from "react";

import CardMiniature from "../../components/CardMiniature";

import api from "../../services/api";

import Folder from "../../assets/folder.svg";
import {
  LoadContainer,
  Container,
  Content,
  SectionContainer,
  HeaderList,
  CardsContainer,
} from "./styles";
import { useHistory } from "react-router";

export interface IListData {
  id: string;
  title: string;
  user: {
    id: string;
    username: string;
    avatarURL: string;
  };
  folderId: string;
}

export interface IFolderData {
  id: string;
  title: string;
}

export interface ICardsData {
  id: string;
  front: string;
  versus: string;
  user: {
    id: string;
    username: string;
    avatarURL: string;
  };
  list: {
    id: string;
    title: string;
    folderId: string;
  };
}

export default function Home() {
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  const [lists, setLists] = useState<IListData[]>([]);
  const [folders, setFolders] = useState<IFolderData[]>([]);
  const [cards, setCards] = useState<ICardsData[]>([]);

  useEffect(() => {
    async function fetchAPI() {
      const listResponse = await api.get("/list");
      const foldersResponse = await api.get("/folders");
      const cardsResponse = await api.get("/cards");

      setLists(listResponse.data);
      setFolders(foldersResponse.data);
      setCards(cardsResponse.data);

      setLoading(false);
    }

    fetchAPI();
  }, []);

  const termsOfList = useCallback(
    (list_id: string) => {
      return cards.filter((curr) => curr.list.id === list_id).length;
    },
    [cards]
  );

  const termsOfFolder = useCallback(
    (folder_id: string) => {
      return lists.filter((curr) => curr.folderId === folder_id).length;
    },
    [lists]
  );

  return (
    <>
      {loading ? (
        <LoadContainer>
          <h1>Carregando ...</h1>
        </LoadContainer>
      ) : (
        <Container>
          <Content>
            <SectionContainer>
              <HeaderList>
                <h1>Listas</h1>
                <p onClick={() => history.push("/my-lists")}>ver todas ...</p>
              </HeaderList>

              <CardsContainer>
                {!!lists.length ? (lists.map((current) => (
                  <CardMiniature
                    key={current.id}
                    title={current.title}
                    isList
                    image={current.user.avatarURL}
                    terms={termsOfList(current.id)}
                  />
                ))) : ( <h1>Você ainda não possui listas...</h1> )}
              </CardsContainer>
            </SectionContainer>

            <SectionContainer>
              <HeaderList>
                <h1>Pastas</h1>
                <p>ver todas ...</p>
              </HeaderList>

              <CardsContainer>
                {!!folders.length ? (folders.map((current) => (
                  <CardMiniature
                    key={current.id}
                    title={current.title}
                    isList={false}
                    image={Folder}
                    terms={termsOfFolder(current.id)}
                  />
                ))) : ( <h1>Você ainda não possui pastas...</h1> )}
              </CardsContainer>
            </SectionContainer>
          </Content>
        </Container>
      )}
    </>
  );
}
