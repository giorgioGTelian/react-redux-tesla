import React from 'react';
import './header.css';
import logoUrl from '../../asstets/assets/logo.svg';
const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
  </div>
)
export default Header;