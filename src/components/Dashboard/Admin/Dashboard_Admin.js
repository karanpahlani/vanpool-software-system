import React from 'react';




const Dashboard_Admin = ({onRouteChange }) =>{
    return(
        <div>

        <article className="br3 ba dark-gray  b--black-10 mv4 w-100 w-70-m w-25-l mw7 center">
             <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent  ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="password"/>
                            </div>
                            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me </label>
                        </fieldset>
                        <div className="">
                                 <input
                                   onClick={() => onRouteChange('home')}
                                   className="b ph3 pv2 input-reset ba b--black bg-gray grow pointer f6 dib"
                                   type="submit"
                                   value="Sign in"
                                 />
                        </div>
                        <div className="lh-copy mt3">
                                <p onClick={()=> onRouteChange('signup')} className="f4 link bg-gray dim black db">Sign up</p>
                                <a href="#0" className="f4 link bg-gray dim black db">Forgot your password?</a>
                        </div>
                    </form>

             </main>
        </article>
        </div>

        );
}

export default Dashboard_Admin;