import { useState } from 'react'

import { Container } from './styles'
import { ReactComponent as BurguerIcon } from '../../assets/svg/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/svg/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/svg/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/svg/ice-cream.svg'
import MenuIcon from '../../assets/svg/menu.svg'

export default function Sidebar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenuOpenState() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <button type="button" onClick={toggleMenuOpenState}>
        <img src={MenuIcon} alt="icone de menu, 3 barrinhas" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="" className='active'>
              <BurguerIcon />
              <span>Hambúrguers</span>
            </a>
          </li>
          <li>
            <a href="">
              <PizzaIcon />
              <span>Pizza</span>
            </a>
          </li>
          <li>
            <a href="">
              <SodaPopIcon />
              <span>Bebidas</span>
            </a>
          </li>
          <li>
            <a href="">
              <IceCreamIcon />
              <span>Sobremesas</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
