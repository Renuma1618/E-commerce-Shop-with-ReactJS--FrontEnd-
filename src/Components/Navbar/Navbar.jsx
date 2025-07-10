import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/Shopcontext'


const Navbar = () => {
    const[menu,setMenu] = useState("shop")
    const{getTotalCartItems} =useContext(Shopcontext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'> Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>  {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>  {menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link  style={{textDecoration:'none'}}to='/kids'> Kids </Link> {menu==="Kids"?<hr/>:<></>}</li>    
        </ul>
        <div className='nav-login-cart'>
           <Link to='/login'><button>Login</button></Link> 
           <Link to='/cart'><img src={cart_icon} alt=''/></Link> 
            <div className='nav-cart-count'>{getTotalCartItems()}</div>


        </div>
      
    </div>
  )
}

export default Navbar
