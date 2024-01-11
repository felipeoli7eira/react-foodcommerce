import { Routes, Route } from 'react-router-dom';

// import pages
import MainPage from './pages/Main';
import Burguers from './pages/Main/Burguers';
import Pizzas from './pages/Main/Pizzas';
import Drinks from './pages/Main/Drinks';
import IceCream from './pages/Main/IceCream';
import Cart from './pages/Main/Cart';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burguers />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/ice-cream' element={<IceCream />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  );
};
