import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Sign from './pages/Sign';
import Login from './pages/Login';
import Cart from './pages/Cart';
import About from './pages/About';
import NotFound from './pages/NotFound';
import BuySell from './pages/BuySell';
import BecomePartner from './pages/BecomePartner';
import Orders from './pages/Orders';
import WishList from './pages/WishList';
import Profile from './pages/Profile';
import Checkout from './pages/CheckOut';
import Pg from './pages/Pg';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About></About>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/college" element={<BuySell></BuySell>} />
          <Route path="/partner" element={<BecomePartner></BecomePartner>} />
          <Route path="/orders" element={<Orders></Orders>} />
          <Route path="/wishlist" element={<WishList></WishList>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/checkout" element={<Checkout></Checkout>} />
          <Route path="/pg" element={<Pg></Pg>} />

        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
