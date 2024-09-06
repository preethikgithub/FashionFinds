import React, { useState, useRef, useContext } from 'react';
import './Navbar.css';

import logo from '../Assets/image.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import nav_dropdown from '../Assets/dropdown_icon1.png';

const Navbar = () => {

  const [menu, setMenu] = useState("");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("womens") }}><Link to='/womens'>Women</Link>{menu === "womens" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("mens") }}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("kids") }}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : null}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
