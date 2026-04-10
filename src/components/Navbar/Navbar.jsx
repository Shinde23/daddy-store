import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <div className="nav-left">
          <button className="mobile-menu-btn" aria-label="Menu">
            <Menu size={24} />
          </button>
          <a href="/" className="logo">
            <span className="logo-icon">▲</span>URA
          </a>
        </div>
        
        <div className="nav-center">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search premium products..." />
          </div>
        </div>

        <div className="nav-right">
          <button 
            className="cart-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge fade-in">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
