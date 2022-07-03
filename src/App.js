import { Routes, Route } from 'react-router-dom';
import Shop from './routes/shop/shop.jsx';
import Home from './routes/home/home.jsx';
import Navigation from './routes/navigation/navigation.jsx';
import Authentication from './routes/authentication/authentication.jsx';
import Checkout from './routes/checkout/checkout.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
