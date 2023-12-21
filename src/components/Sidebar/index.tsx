import { useState } from 'react'

import { Container } from './styles'
import { ReactComponent as BurguerIcon } from '../../assets/svg/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/svg/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/svg/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/svg/ice-cream.svg'
import MenuIcon from '../../assets/svg/menu.svg'
import { NavLink } from 'react-router-dom'

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
            <NavLink to="/" className='active'>
              <BurguerIcon />
              <span>Hambúrguers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="pizzas">
              <PizzaIcon />
              <span>Pizza</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="drinks">
              <SodaPopIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="ice-cream">
              <IceCreamIcon />
              <span>Sobremesas</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
