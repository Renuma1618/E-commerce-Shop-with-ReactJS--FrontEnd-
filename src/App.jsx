import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner_mens from './assets/banner_mens.png';
import banner_women from './assets/banner_women.png';
import banner_kids from './assets/banner_kids.png';
import Product from './pages/Product';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<Shopcategory banner={banner_mens} category="men"/>}></Route>
          <Route path='/womens' element={<Shopcategory  banner={banner_women}category="women"/>}></Route>
          <Route path='/kids' element={<Shopcategory banner ={banner_kids} category="kid"/>}></Route>
          <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}></Route>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route  path ='login' element={<LoginSignup/>}></Route>
        </Routes>
        </BrowserRouter>
        <Footer/>
        
      </div>
      
    </>
  )
}

export default App
