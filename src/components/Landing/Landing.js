import React from 'react';
import Logo from '../Logo/Logo.js';


const Landing = ({onRouteChange }) =>{
    return(
        <div>
            <article className="br3 ba bg-black-10 dark-gray b--black-20 mv4 w-100 w-70-m w-50-l mw7 center">
                 <main className="pa4 black-80 mv3">
                     <div className="f2 vh3 b--black-30">
                         {/*Logo /><*/}
                         <p><h3>VSS logo centered here</h3></p>
                         <p><h6>Welcome to the VSS Vanpooling Service. <br />More of a description to come.</h6></p>
                     </div>
                     <div className="ph3">
                         <a onClick={() => onRouteChange('signup')} className="w5 f2 link dim mh2 ph3 pv2 mb2 dib white bg-black" href="#0">Join</a>
                         <a onClick={() => onRouteChange('signin')} className="w5 f2 link dim mh2 ph3 pv2 mb2 dib white bg-black" href="#0">Sign In</a>
                     </div>
                 </main>
            </article>
        </div>

        );
}

export default Landing;