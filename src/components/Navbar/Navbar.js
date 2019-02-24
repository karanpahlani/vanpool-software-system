import React from 'react';
//import Logo from '../Logo/Logo.js';


const Navigation = ({onRouteChange, isSignedIn}) =>{
        if(isSignedIn){
            return(
                <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                    <nav className="f6 fw6 ttu tracked">
                        <a onClick ={() => onRouteChange('signout')}  className="link dim white dib mr3" href="#" title="Sign Out">Sign Out</a>
                    </nav>
                </header>
            );
        } else{
           return(
               <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                   <nav className="f6 fw6 ttu tracked">
                       <a onClick ={() => onRouteChange('signout')}  className="link dim white dib mr3" href="#" title="Sign In">Sign In</a>
                       <a onClick ={() => onRouteChange('signout')}  className="link dim white dib mr3" href="#" title="Sign Up">Sign Up</a>
                   </nav>
               </header>
           );
        }
};

export default Navigation;