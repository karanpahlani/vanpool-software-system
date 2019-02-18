import React from 'react';
import Logo from '../Logo/Logo.js';

const Navigation = () =>{
    return(
      <nav style={{display: 'flex', justifyContent: 'space-between'}}>
          <Logo/>

          <p className='f3 link dim dark-blue pa3 pointer'>Sign Out</p>
      </nav>
    );
}

export default Navigation;