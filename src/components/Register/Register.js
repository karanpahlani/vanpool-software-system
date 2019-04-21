import React from 'react';


class Register extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: '',
            name: '',
            type: 'passenger',
            errors: {}
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
        if (this.validateForm()) {
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
    }

    validateForm() {
        let name = this.state.name;
        let password = this.state.password;
        let email = this.state.email;

        let errors = {};
        let formIsValid = true;

        if (!name) {
            formIsValid = false;
            errors["name"] = "*Please enter your name.";
        }

        if (typeof name !== "undefined") {
            if (!name.match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["name"] = "*Please enter alphabet characters only.";
            }
        }

        if (!email) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }

        if (typeof email !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }

        if (!password) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof password !== "undefined") {
            if (!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
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

                                <div className="errorMsg">{this.state.errors.name}</div>

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

                                <div className="errorMsg">{this.state.errors.email}</div>

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

                                <div className="errorMsg">{this.state.errors.password}</div>

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