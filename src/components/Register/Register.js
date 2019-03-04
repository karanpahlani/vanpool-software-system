import React from 'react';


class Register extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }



    render() {
        const {onRouteChange} = this.props;
        return (
            <div>
                <article className="br3 ba dark-gray  b--black-10 mv4 w-100 w-70-m w-25-l mw7 center">
                    <main className="pa4 black-80">
                        <form className="measure center">

                            <fieldset id="sign_up" className="ba b--transparent  ph0 mh0">
                                <legend className="f2 fw6 ph0 mh0">Sign Up</legend>

                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="name"
                                        name="name"
                                        id="name"
                                        onChange={this.onNameChange}
                                    />
                                </div>

                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.on}
                                    />
                                </div>

                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"

                                    />
                                </div>

                            </fieldset>

                            <div className="">
                                <input
                                    onClick={() => onRouteChange('home')}
                                    className="b ph3 pv2 input-reset ba b--black bg-gray grow pointer f6 dib"
                                    type="submit"
                                    value="Sign Up"
                                />
                            </div>
                        </form>

                    </main>
                </article>
            </div>

        );
    }
}

export default Register;