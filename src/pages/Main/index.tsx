import Sidebar from '../../components/Sidebar'
import { Container } from './styles'
import LogoImg from '../../assets/svg/logo.svg';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <Container>
      <Sidebar />

      <section>
        <img src={LogoImg} alt="Food" />

        <Outlet />
      </section>
    </Container>
  )
}
