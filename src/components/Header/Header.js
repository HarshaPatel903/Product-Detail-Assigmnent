import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person4Icon from '@mui/icons-material/Person4';
import SearchIcon from '@mui/icons-material/Search';

import './Header.css';


const Header = ({count}) => {
  return (
    <header className="header">
      <img className="header__logo"  src='https://cdn.shopify.com/s/files/1/0565/8021/0861/files/supertails-logo-for-dark-theme_200x_2x_59a36949-1934-4494-b180-9ff4bcb2cb35_230x.webp?v=1659207740' />
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <button className="header__search-icon">
          <SearchIcon  style={{marginTop:2, color:'black'}}/>
        </button>
      </div>
      <div className="header__profile">
        <Person4Icon />
      </div>
      <div className="header__cart">
        <div className="header__cart_count">
            {count}
        </div>
        <ShoppingCartIcon />
      </div>
    </header>
  );
};

export default Header;
