import { useState, useEffect } from "react";

import CardMiniature from "../../components/CardMiniature";

import api from "../../services/api";

import Folder from '../../assets/folder.svg';
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
}

interface IFolderData {
  id: string;
  title: string;
}

export default function Home() {
  const [lists, setLists] = useState<IListData[]>([]);
  const [folders, setFolders] = useState<IFolderData[]>([])

  useEffect(() => {
    api.get("/list").then((response) => setLists(response.data));
    api.get("/folders").then((response) => setFolders(response.data));
  }, []);

  return (
    <Container>
      <Content>
        <SectionContainer>
          <HeaderList>
            <h1>Listas</h1>
            <p>ver todas ...</p>
          </HeaderList>

          <CardsContainer>
            {(lists.length > 0) ? lists.map((current) => (
              <CardMiniature
                key={current.id}
                title={current.title}
                isList
                image={current.user.avatarURL}
                terms={20}
              />
            )) : <h1>Você não possui listas ...</h1>}
          </CardsContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderList>
            <h1>Pastas</h1>
            <p>ver todas ...</p>
          </HeaderList>

          <CardsContainer>
            {(folders.length > 0) ? folders.map((current) => (
              <CardMiniature
                key={current.id}
                title={current.title}
                isList={false}
                image={Folder}
                terms={20}
              />
            )) : <h1>Você não possui pastas ...</h1>}
          </CardsContainer>
        </SectionContainer>
      </Content>
    </Container>
  );
}
