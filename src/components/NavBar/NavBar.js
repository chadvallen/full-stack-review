import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="parent">
      <div className="logo">LOGO</div>

    
      <div ><Link to='/' className="links">Home</Link></div>
      <div ><Link to='/cool-couches' className="links">Couches</Link></div>
      <div ><Link to='/profile' className="links">Profile</Link></div>
    
    </div>
  )
}
