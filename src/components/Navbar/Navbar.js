import React from 'react';
//import Logo from '../Logo/Logo.js';


const Navigation = ({userName, onRouteChange, isSignedIn}) =>{
        if(!isSignedIn){
            return(
                <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                    <nav className="f6 fw6 ttu tracked">
                        <p onClick ={() => onRouteChange('signin')}  className="link dim white dib mr3"  title="Sign In">Sign In</p>
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
                               <p onClick ={() => onRouteChange('home')}  className="link dim white dib mr3" title="Home">Home</p>
                           </div>
                           <div className="fl  w-30 tc">
                               <p onClick ={() => onRouteChange('signin')}  className="link dim white dib mr3" title="Sign In">Sign Out</p>
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