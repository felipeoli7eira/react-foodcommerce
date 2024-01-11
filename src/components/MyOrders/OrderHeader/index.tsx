import { Link } from 'react-router-dom';
import AppLogo from '../../../assets/svg/logo.svg';
import { HtmlHeaderTag } from './styles';
import { useCart } from '../../../hooks/useCart';
import { ReactComponent as CartIcon } from '../../../assets/svg/shopping-cart.svg';

export function OrderHeader() {

  const { cart } = useCart();

  return (<>
    <HtmlHeaderTag>
      <Link to={'/'}>
        <img src={AppLogo} alt="App logotipo" />
      </Link>

      <div>
        <div>
          <h3>Meus pedidos</h3>
          <span>
            <strong>
              {cart?.length && cart.length.toString().padStart(2, '0') || 0} itens
            </strong>
          </span>
        </div>
        <CartIcon />
      </div>
    </HtmlHeaderTag>
  </>);
};
