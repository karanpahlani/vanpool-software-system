import React from 'react';


class Register extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: '',
            name: '',
            type: 'passenger',
            question1: '',
            question2: '',
            errors: {}
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    };

    onTypeChange = (event) =>{
        console.log("user type:", event.target.value)
        this.setState( {type: event.target.value})
    };

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    onPasswordChange = (event) => {

        this.setState({password: event.target.value})
    };

    onQuestion1Change = (event) => {
        this.setState({question1: event.target.value})
    };

    onQuestion2Change = (event) => {
        this.setState({question2: event.target.value})
    };

    onSubmitSignUp = () => {

        if (this.validateForm()) {
            console.log(this.validateForm());
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
    };

    validateForm() {
        let name = this.state.name;
        let password = this.state.password;
        let email = this.state.email;
        let question1 = this.state.question1;
        let question2 = this.state.question2;

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

        if (!question1) {
            formIsValid = false;
            errors["question1"] = "*Please enter a response to the first security question.";
        }

        if (!question2) {
            formIsValid = false;
            errors["question2"] = "*Please enter a response to the first security question.";
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }

    render() {


        return (
            <div className={" w-80 mw7 tc bg-light-gray dib br3 pa2 ma5 mv6 bw2 shadow-5"}>
                <div>
                    <div className="pa2 w-100 tl">
                        <article className="w-100 m3 center bg-white br3 mb1 pa2 ba b--black-20">
                            <main className="pa4 black-80">
                                <form className="measure center">
                                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                        <legend className="f4 fw6 ph0 mh0">Create Account</legend>
                                        <div className="mt3">
                                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter name"
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
                                                placeholder="Enter email address"
                                                onChange={this.onEmailChange}
                                            />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.email}</div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                onChange={this.onPasswordChange}
                                            />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.password}</div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor="password">Security Question 1: Where were you born?</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="question1"
                                                name="question1"
                                                id="question1"
                                                placeholder="Question 1"
                                                onChange={this.onQuestion1Change}
                                            />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.question1}</div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor="password">Security Question 2: What is your favorite color?</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="question2"
                                                name="question2"
                                                id="question2"
                                                placeholder="Question 2"
                                                onChange={this.onQuestion2Change}
                                            />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.question2}</div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor="types">Select user type</label>
                                            <select id="types"
                                                    className="w-40 db h2 f6 bg-white b--black"
                                                    name="type"
                                                    onChange={this.onTypeChange}>

                                                <option className="bg-light-gray" value="passenger">Passenger</option>
                                                <option className="bg-light-gray" value="driver">Driver</option>
                                            </select>
                                        </div>

                                    </fieldset>
                                    <div className="">
                                        <input
                                            className="b ph3 pv2 mv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                            type="submit"
                                            value="Sign up"
                                            onClick={this.onSubmitSignUp}
                                        />
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

export default Register;
