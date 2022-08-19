import React from 'react';
import logo from './images/logo.png'

const Navbar = () => {
    return (
        <div className="flex justify-center bg-[#242527]">
         <img className='h-[30px] my-1' src={logo} alt="" /> 
        </div>
    );
};

export default Navbar;