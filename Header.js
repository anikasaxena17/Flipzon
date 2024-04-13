import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import logo from './pngimg.com - amazon_PNG25.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header(props) {
  const [{basket}] = useStateValue();
  console.log(props);
  return (
    <div class='header'>
      <Link to="/">
      <img /*src={logo}*/ src="https://th.bing.com/th/id/OIG2.vN47LAHJ.SrFrph2I92D?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" className="header_logo" />;
      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <Link to="/login">
          <div className='header_option'>
            <span className='header_optionlineOne'>
              Hello {props?`${props.name}`:'Guest'}
            </span>
            <span className='header_optionlineTwo'>
              { props?'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionlineOne'>
            Returns
          </span>
          <span className='header_optionlineTwo'>
            & Orders
          </span>
        </div>
        <div className='header_option'>
          <span className='header_optionlineOne'>
            Your
          </span>
          <span className='header_optionlineTwo'>
            Prime
          </span>
        </div>

        <Link to="/checkout">
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionlineTwo
            header_basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header

//<img /*src={logo}*/ src="https://th.bing.com/th/id/OIG2.vN47LAHJ.SrFrph2I92D?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" className="header_logo" />;

