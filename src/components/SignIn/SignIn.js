import React from 'react';

class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            signInEmail:'',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        //alert("onEmailChange Called = " + event.target.value);
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        //alert("onPasswordChange Called = " + event.target.value);
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        //alert("attempting to log in");
        fetch('http://localhost:3000/signin', {

            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })

                 .then(response => response.json())
                 .then(user => {

                      if (user.id){
                         console.log("signIn button", user);
                         this.props.loadUser(user);
                         this.props.onRouteChange('home');

                     }
                 })
    }

    render() {
        const {onRouteChange} = this.props;
        return (
            <div>
                <article className="br3 ba dark-gray  b--black-10 mv4 w-100 w-70-m w-25-l mw7 center">
                    <main className="pa4 black-80">
                        <form className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent  ph0 mh0">
                                <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 ba bg-transparent hover-bg-black hover-white w-100"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me
                                </label>
                            </fieldset>

                            <div className="">
                                <input
                                    onClick={this.onSubmitSignIn}
                                    className="b ph3 pv2 input-reset ba b--black bg-gray grow pointer f6 dib"
                                    type="submit"
                                    value="Sign in"
                                />
                            </div>

                            <div className="lh-copy mt3">
                                <p onClick={() => onRouteChange('signup')} className="f4 link bg-gray dim black db">Sign up</p>
                                <a href="#0" className="f4 link bg-gray dim black db">Forgot your password?</a>
                            </div>
                        </form>

                    </main>
                </article>
            </div>

        );

     }
}

export default SignIn;