import React from 'react';
import Logo from '../Logo/Logo.js';


const Landing = ({onRouteChange }) =>{
    return(
        <div>
            <article className="br3 ba dark-gray  b--black-10 mv4 w-100 w-70-m w-70-l mw7 center">
                 <main className="pa4 black-80 mv3">
                     <div className="f2 vh3 b--black-40">
                         <Logo />
                         <p></p>
                     </div>
                     <div className="ph3">
                         <a onClick={() => onRouteChange('signup')} className="f2 link dim mh2 ph3 pv2 mb2 dib white bg-black" href="#0">Sign Up</a>
                         <a onClick={() => onRouteChange('signin')} className="f2 link dim mh2 ph3 pv2 mb2 dib white bg-black" href="#0">Sign In</a>
                     </div>
                 </main>
            </article>
        </div>

        );
}

export default Landing;