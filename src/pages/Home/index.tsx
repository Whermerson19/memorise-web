import { useState, useEffect, useMemo, useCallback } from "react";

import CardMiniature from "../../components/CardMiniature";

import api from "../../services/api";

import Folder from "../../assets/folder.svg";
import {
  Container,
  Content,
  SectionContainer,
  HeaderList,
  CardsContainer,
} from "./styles";

interface IListData {
  id: string;
  title: string;
  user: {
    id: string;
    username: string;
    avatarURL: string;
  };
  folderId: string;
}

interface IFolderData {
  id: string;
  title: string;
}

interface ICardsData {
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
  const [lists, setLists] = useState<IListData[]>([]);
  const [folders, setFolders] = useState<IFolderData[]>([]);
  const [cards, setCards] = useState<ICardsData[]>([]);

  useEffect(() => {
    api.get("/list").then((response) => setLists(response.data));
    api.get("/cards").then((response) => setCards(response.data));
    api.get("/folders").then((response) => setFolders(response.data));
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
    <Container>
      <Content>
        <SectionContainer>
          <HeaderList>
            <h1>Listas</h1>
            <p>ver todas ...</p>
          </HeaderList>

          <CardsContainer>
            {lists.map((current) => (
              <CardMiniature
                key={current.id}
                title={current.title}
                isList
                image={current.user.avatarURL}
                terms={termsOfList(current.id)}
              />
            ))}
          </CardsContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderList>
            <h1>Pastas</h1>
            <p>ver todas ...</p>
          </HeaderList>

          <CardsContainer>
            {folders.map((current) => (
              <CardMiniature
                key={current.id}
                title={current.title}
                isList={false}
                image={Folder}
                terms={termsOfFolder(current.id)}
              />
            ))}
          </CardsContainer>
        </SectionContainer>
      </Content>
    </Container>
  );
}
