import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
 import { Link } from 'react-router-dom';
 import './Navbar.scss'
 import Cart from '../../components/Cart/Cart'


const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src="./img/en.png" alt=""/>
            <KeyboardArrowDownIcon/>
          </div>

           <div className='item'>
           <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
     
        <div className='item'>
          <Link to="/Products/1" className='link'>Women</Link>
          </div>
        
        <div className='item'>
          <Link to="/Products/2" className='link'>Men</Link>
          </div>

          <div className='item'>
          <Link to="/Products/3" className='link'>Children</Link>
          </div>
</div>
 
 
 
        <div className='center'>

        <Link to="/" className='link'>LAMASTORE</Link>
        </div>
       
       
        <div className='right'>
        
        <div className='item'>
        <Link to="/" className='link'>Homepage</Link>
         </div>

        <div className='item'>
        <Link to="/" className='link'>About</Link>
         </div>

            <div className='item'>
        <Link to="/" className='link'>Contact</Link>
         </div>

            <div className='item'>
        <Link to="/" className='link'>Stores</Link>
         </div>

            <div className='icons'>
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className='cartIcon' onClick={()=>setOpen(!open)}>
               <ShoppingCartOutlinedIcon/>
               <span>0</span>
            </div>
           </div>
     </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar
