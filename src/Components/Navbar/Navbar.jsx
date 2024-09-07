import React, { useState, useEffect, useRef, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/image.png';  // Default logo
import smallLogo from '../Assets/smimage.png'; // New logo for smaller screens
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import nav_dropdown from '../Assets/dropdown_icon1.png';

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const [currentLogo, setCurrentLogo] = useState(logo); // State to hold the current logo

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  // Function to check screen width and change the logo
  const checkScreenWidth = () => {
    if (window.innerWidth <= 425) {
      setCurrentLogo(smallLogo);  // Set new logo for small screens
    } else {
      setCurrentLogo(logo);  // Use the default logo for larger screens
    }
  };

  useEffect(() => {
    checkScreenWidth(); // Check once on component mount
    window.addEventListener('resize', checkScreenWidth); // Add event listener to update on resize

    return () => window.removeEventListener('resize', checkScreenWidth); // Cleanup listener on unmount
  }, []);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={currentLogo} alt="Logo" /> {/* Dynamic logo */}
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
