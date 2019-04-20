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

    onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"email":this.state.signInEmail,
                "password":this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                console.log("USER LOGGED IN ", responseJson.loggedIn);
                if (responseJson.loggedIn) {
                    this.props.loadUser(responseJson);
                    this.props.onRouteChange('home');
                }
            })
    }


    render() {
        const {onRouteChange} = this.props;
        return (
            <div className={" w-80 mw7 tc bg-light-gray dib br3 pa2 ma5 mv6 bw2 shadow-5"}>
                <div>


                    <div className="pa2 w-100 tl">

                        <article className="w-100 m3 center bg-white br3 mb1 pa2 ba b--black-20">


                            <main className="pa4 black-80">
                                <form className="measure center">
                                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                                        <div className="mt3">
                                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="email"
                                                name="email-address"
                                                id="email-address"
                                                placeholder="Email address"
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
                                                placeholder="Password"
                                                onChange={this.onPasswordChange}
                                            />
                                        </div>
                                        {/*<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember*/}
                                            {/*me</label>*/}
                                    </fieldset>
                                    <div className="">
                                        <input
                                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                            type="submit"
                                            value="Sign in"
                                            onClick={this.onSubmitSignIn}
                                        />
                                    </div>
                                    <div className="lh-copy mt3">
                                        <a onClick={() => onRouteChange('signup')} className="pointer f6 link dim black db">Sign up</a>
                                        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                                    </div>
                                </form>
                            </main>


                        </article>

                    </div>
                </div>
            </div>
        );
     }
}

export default SignIn;