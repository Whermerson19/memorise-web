import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Container, InfoContainer } from "./styles";

interface ICardMiniatureProps {
  id?: string;
  image: string;
  title: string;
  terms: number;
}

export default function CardMaximized({
  id,
  image,
  title,
  terms,
}: ICardMiniatureProps) {
  const history = useHistory();

  const handleListPage = useCallback(
    (id: string) => {
      history.push(`/list/${id}`);
    },
    [history]
  );

  return (
    <Container onClick={() => handleListPage(id ? id : '')}>
      <img src={image} alt="Imagem do usuário" />
      <InfoContainer>
        <h1>{title}</h1>
        <p>{terms} items</p>
      </InfoContainer>
    </Container>
  );
}
