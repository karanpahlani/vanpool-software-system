import React from 'react';


class Register extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: '',
            name: '',
            type: 'passenger'
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onTypeChange = (event) =>{
        console.log("user type:", event.target.value)
        this.setState( {type: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {

        this.setState({password: event.target.value})
    }

    onSubmitSignUp = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                type: this.state.type
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.loggedIn) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }



    render() {


        return (
            <div>
                <article className="br3 ba dark-gray  b--black-10 mv4 w-100 w-70-m w-25-l mw7 center">
                    <main className="pa4 black-80">
                        <div className="measure center">

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
                            <div>

                                <select id="types" className="w-100 db h2 f6 bg-near-white ba b--sliver gray" name="type" onChange={this.onTypeChange}>
                                    <option value="passenger">Passenger</option>
                                    <option value="driver">Driver</option>

                                </select>

                            </div>


                            </fieldset>

                            <div className="">
                                <input
                                    onClick={this.onSubmitSignUp}
                                    className="b ph3 pv2 input-reset ba b--black bg-gray grow pointer f6 dib"
                                    type="submit"
                                    value="Sign Up"

                                />
                            </div>
                        </div>

                    </main>
                </article>
            </div>


        );
    }
}

export default Register;
