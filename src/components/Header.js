import React from 'react';
import Navigation from './Navigation'

function Header(){
  return (
    <nav className="border-b p-3 flex justify-between items-center">
      <span className="font-bold">
      AppName
      </span>

      <Navigation />
      
    </nav>
  );
}

export default Header;
