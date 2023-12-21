import { ReactNode } from 'react';
import { Title } from './styles'

interface TitlePropsInterface {
  children: ReactNode;
}

export default function SnakeTitle({ children }: TitlePropsInterface) {
  return <Title>{children}</ Title>;
}
