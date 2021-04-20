import { Container } from './styles'

interface IContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: IContentProps) {
  return (
    <Container>
      { children }
    </Container>
  )
}