import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.jsx';
import Navigation from './routes/navigation/navigation.jsx';
import Authentication from './routes/authentication/authentication.jsx';

const Shop = () => {
  return <h1>Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
