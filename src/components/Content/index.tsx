import { FiMenu } from 'react-icons/fi'
import { useLayout } from '../../hooks/layout'
import CreateFolderModal from '../CreateFolderModal'
import { Container, Header } from './styles'

interface IContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: IContentProps) {

  const { handleAsideVisibility } = useLayout()

  return (
    <Container>
      <CreateFolderModal />
      <Header>
        <FiMenu size={30} onClick={handleAsideVisibility} />
      </Header>
      { children }
    </Container>
  )
}