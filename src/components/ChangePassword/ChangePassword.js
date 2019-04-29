import React from 'react';


class ChangePassword extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            password: '',
            errors: {}
        }
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    validateResponses() {
        let password = this.state.password;

        let errors = {};
        let formIsValid = true;

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
        const {onRouteChange} = this.props;

        return (
            <div className={" w-80 mw7 tc bg-light-gray dib br3 pa2 ma5 mv6 bw2 shadow-5"}>
                <div>
                    <div className="pa2 w-100 tl">
                        <article className="w-100 m3 center bg-white br3 mb1 pa2 ba b--black-20">
                            <main className="pa4 black-80">
                                <form className="measure center">
                                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                        <legend className="f4 fw6 ph0 mh0">Change Password</legend>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor="password">New Password:</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="New Password"
                                                onChange={this.onPasswordChange}
                                            />
                                        </div>
                                    </fieldset>
                                    <div className="">
                                        <input
                                            className="b ph3 pv2 mv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                            type="submit"
                                            value="Submit"
                                            onClick={() => onRouteChange('signin')}
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

export default ChangePassword;
