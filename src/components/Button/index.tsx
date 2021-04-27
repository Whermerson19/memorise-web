import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isAvailable?: boolean;
}

export default function Button({ isAvailable = true, children, ...rest }: IButtonProps) {
  return (
    <Container isAvailable={isAvailable} type="button" { ...rest } >
      { children }
    </Container>
  )
}