import React from 'react';


const Navbar = ({userName, onRouteChange, isSignedIn}) =>{
        if(!isSignedIn){
            return(
                <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                    <nav className="f6 fw6 tracked">

                                <a onClick ={() => onRouteChange('signup')}  className="pointer link dim white dib mr3"  title="Create Account">Create Account</a>

                    </nav>
                </header>
            );
        } else{
           return(
               <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                   <nav className="f6 fw6 tracked">

                       <article className="cf">
                           <div className="fl  w-20 tc">
                                <p></p>
                           </div>
                           <div className="fl  w-30 tc">
                               <a onClick ={() => onRouteChange('home')}  className="pointer link dim white dib mr3" title="Home">Home</a>
                           </div>
                           <div className="fl  w-30 tc">

                               <a onClick ={() => onRouteChange('signout')}  className="pointer link dim white dib mr3" title="Sign In">Sign Out</a>

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

export default Navbar;