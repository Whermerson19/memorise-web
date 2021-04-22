import { Container, InfoContainer } from "./styles";
import Folder from '../../assets/folder.svg';

interface ICardMiniatureProps {
  isList: boolean;
  image: string;
  title: string;
  terms: number;
}

export default function CardMiniature({
  isList,
  image,
  title,
  terms,
}: ICardMiniatureProps) {
  return (
    <Container isList={isList} >
      <img src={isList ? image : Folder} alt={isList ? "Usuário" : "Pasta"}/>
      <InfoContainer>
        <h1>{title}</h1>
        <p>{terms} items</p> 
      </InfoContainer>
    </Container>
  );
}
