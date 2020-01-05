import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Link to='/application'>Application</Link>
      <Link to='/policy'>Policy</Link>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </>
  );
};

export default Navbar;
