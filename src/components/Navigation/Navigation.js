import React from 'react';
import Logo from '../Logo/Logo.js';

const Navigation = ({onRouteChange, isSignedIn}) =>{
        if(isSignedIn){
            return(
                <nav style={{display: 'flex', justifyContent: 'space-between'}}>
                <Logo/>
                <p onClick ={() => onRouteChange('signout') } className='f3 link dim dark-blue pa3 pointer'>Sign Out</p>
                </nav>
            )

        } else{
           return(
            <nav style={{display: 'flex', justifyContent: 'space-between'}}>
                <Logo/>
                <p onClick ={() => onRouteChange('signin')} className='f3 link dim dark-blue pa3 pointer'>Sign In</p>
                <p onClick ={() => onRouteChange('signup')} className='f3 link dim dark-blue pa3 pointer'>Sign Up</p>


            </nav>
    )
   }
}

export default Navigation;