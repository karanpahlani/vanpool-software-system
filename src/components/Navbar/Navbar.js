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
                   <nav className="f6 fw6  tracked">

                       <article className="cf">
                           <div className="fl  w-20 tc">
                                <p></p>
                           </div>
                           <div className="fl  w-30 tc">
                               <span className="link white dib "> Logged in as username</span>
                           </div>
                           <div className="fl  w-30 tc">
                               <a onClick ={() => onRouteChange('home')}  className="link dim white dib mr3" href="#" title="Sign Up">Sign Out</a>
                           </div>
                           <div className="fl  w-20 tc">
                               <p></p>
                           </div>
                       </article>

                      </nav>
               </header>
           );
        }
};

export default Navigation;