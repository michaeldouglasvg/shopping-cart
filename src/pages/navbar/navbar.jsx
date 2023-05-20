import React from 'react';
import { NavbarSection } from "./navbar.styled"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarSection>
      <div className='Logo'>
        <div className='Img'>Logo</div>
        <div><p>G~Mall</p></div>
      </div>
      
      <div className='Links'>
       <div><Link to='/shopping' className='Link'>Home</Link></div>
       <div><Link to='/about' className='Link'>About</Link></div>
      </div>

      <div className='Buttons'>
       <div><Link to='/' className='Link'>Signup</Link></div>
       <div><Link to='/login' className='Link'>Signin</Link></div>
       <div><Link to='/cart' className='Link'>Cart</Link></div>
      </div>
    </NavbarSection>
  );
}

export default Navbar;
