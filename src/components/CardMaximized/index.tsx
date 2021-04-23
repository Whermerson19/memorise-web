
import { Container, InfoContainer } from './styles'

interface ICardMiniatureProps {
  image: string;
  title: string;
  terms: number;
}

export default function CardMaximized({
  image,
  title,
  terms,
}: ICardMiniatureProps) {
  return (
    <Container >
      <img src={image} alt="Imagem do usuário"/>
      <InfoContainer>
        <h1>{title}</h1>
        <p>{terms} items</p>
      </InfoContainer>
    </Container>
  );
}
