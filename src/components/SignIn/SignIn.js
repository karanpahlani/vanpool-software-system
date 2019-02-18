import React from 'react';


const SignIn = () =>{
    return(
        <main className="pa4 black-80">
          <article className="br2 ba dark-gray shadow-10  b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent  ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                               type="email" name="email-address" id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                               type="password" name="password" id="password"/>
                    </div>
                    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me </label>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-gray grow pointer f6 dib"
                           type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" className="f4 link bg-gray dim black db">Sign up</a>
                    <a href="#0" className="f4 link bg-gray dim black db">Forgot your password?</a>
                </div>
            </form>
          </article>
         </main>


        );
}

export default SignIn;