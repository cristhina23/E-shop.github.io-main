import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Singleblog from './pages/Singleblog';
import Privacypolice from './pages/Privacypolice';
import Refundpolice from './pages/Refundpolice';
import Shippingpolicy from './pages/Shippingpolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='product' element={<OurStore/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='product/:id' element={<SingleProduct/>} />
          <Route path='blogs' element={<Blog/>} />
          <Route path='blog/:id' element={<Singleblog/>} />
          <Route path='compare-product' element={<CompareProduct/>} />
          <Route path='wishlist' element={<WishList/>} />
          <Route path='login' element={<Login/>} />
          <Route path='forgot-password' element={<Forgotpassword/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path='resetpassword' element={<Resetpassword/>} />
          <Route path='privacy-police' element={<Privacypolice/>} />
          <Route path='refund-police' element={<Refundpolice/>} />
          <Route path='shipping-policy' element={<Shippingpolicy/>}/>
          <Route path='term-conditions' element={<TermAndCondition/>}/>
        </Route>
          
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;
