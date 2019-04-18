import React from 'react';
import './Register.css';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submitForm(e) {
        e.preventDefault();

        if (this.validateForm()) {
            fetch('http://localhost:3000/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: "m",
                    email: "m@m.com",
                    password: "m",
                    type: "passenger"
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

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Please enter your name.";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["name"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (!fields["type"]) {
            formIsValid = false;
            errors["type"] = "*Please enter Driver or Passenger.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["type"].match(/(Driver)|(Passenger)/)) {
                formIsValid = false;
                errors["type"] = "*Please enter Driver or Passenger.";
            }
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }



    render() {
        return (
            <div class="container">
                <div id="register">
                    <h3>Sign Up</h3>
                    <form method="post"  name="sign_up"  onSubmit= {this.submitForm} >
                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.name}</div>
                        <label>Email:</label>
                        <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  />
                        <div className="errorMsg">{this.state.errors.email}</div>
                        <label>Password:</label>
                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}   />
                        <div className="errorMsg">{this.state.errors.password}</div>
                        <label>Type:</label>
                        <input type="text" name="types" value={this.state.fields.type} onChange={this.handleChange} />
                        <div className="errorMsg">{this.state.errors.type}</div>
                        <input type="submit" className="button"  value="Sign Up"/>
                    </form>
                </div>
            </div>

        );
    }
}

export default Register;