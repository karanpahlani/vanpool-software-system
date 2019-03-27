import React from 'react';
//import Logo from '../Logo/Logo.js';


const Navigation = ({userName, onRouteChange, isSignedIn}) =>{
        if(!isSignedIn){
            return(
                <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                    <nav className="f6 fw6 ttu tracked">
                        <a onClick ={() => onRouteChange('signin')}  className="link dim white dib mr3" href="#" title="Sign In">Sign In</a>
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
                               <a onClick ={() => onRouteChange('home')}  className="link dim white dib mr3" href="#" title="Home">Home</a>
                           </div>
                           <div className="fl  w-30 tc">
                               <a onClick ={() => onRouteChange('signin')}  className="link dim white dib mr3" href="#" title="Sign In">Sign Out</a>
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