import { Container, InfoContainer } from "./styles";
import Folder from "../../assets/folder.svg";
import { useHistory } from "react-router";

interface ICardMiniatureProps {
  id: string;
  isList: boolean;
  image: string;
  title: string;
  terms: number;
  fullWidth?: boolean;
}

export default function CardMiniature({
  id,
  isList,
  image,
  title,
  terms,
  fullWidth,
}: ICardMiniatureProps) {
  const history = useHistory();

  return (
    <Container
      onClick={() => history.push(`/list/${id}`)}
      isList={isList}
      fullWidth={fullWidth}
    >
      <img src={isList ? image : Folder} alt={isList ? "Usuário" : "Pasta"} />
      <InfoContainer>
        <h1>{title}</h1>
        <p>{terms} items</p>
      </InfoContainer>
    </Container>
  );
}
