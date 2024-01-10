import Sidebar from '../../components/Sidebar'
import { Container } from './styles'
import LogoImg from '../../assets/svg/logo.svg';
import { Outlet } from 'react-router-dom';
import MyOrders from '../../components/MyOrders';

export default function Main() {
  return (
    <Container>
      <Sidebar />

      <section>
        <img src={LogoImg} alt="Food" />

        <Outlet />
      </section>

      <MyOrders />
    </Container>
  )
}
