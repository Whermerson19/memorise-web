import { Container, InfoContainer } from "./styles";
import Folder from '../../assets/folder.svg';

interface ICardMiniatureProps {
  isList: boolean;
  image: string;
  title: string;
  terms: number;
  fullWidth?: boolean;
}

export default function CardMiniature({
  isList,
  image,
  title,
  terms,
  fullWidth,
}: ICardMiniatureProps) {
  return (
    <Container isList={isList} fullWidth={fullWidth} >
      <img src={isList ? image : Folder} alt={isList ? "Usuário" : "Pasta"}/>
      <InfoContainer>
        <h1>{title}</h1>
        <p>{terms} items</p> 
      </InfoContainer>
    </Container>
  );
}
