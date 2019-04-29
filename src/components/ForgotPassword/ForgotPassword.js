import React from 'react';


class ForgotPassword extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            question1Response: '',
            question2Response: '',
            errors: {}
        }
    }

    onQuestion1ResponseChange = (event) => {
        this.setState({question1Response: event.target.value})
    };

    onQuestion2ResponseChange = (event) => {
        this.setState({question1Response: event.target.value})
    };

    validateResponses() {
        let question1Response = this.state.question1Response;
        let question2Response = this.state.question2Response;

        let errors = {};
        let formIsValid = true;

        if (!question1Response) {
            formIsValid = false;
            errors["question1Response"] = "*Please enter your answer.";
        }

        if (typeof question1Response !== "undefined") {
            /*if (!question1Response.toString().equals("test")){
                formIsValid = false;
                errors["question1Response"] = "*Response doesn't match.";
            }*/
        }

        if (!question2Response) {
            formIsValid = false;
            errors["question2Response"] = "*Please enter your answer.";
        }

        if (typeof question2Response !== "undefined") {
            /*if (!question2Response.toString().equals("test")){
                formIsValid = false;
                errors["question1Response"] = "*Response doesn't match.";
            }*/
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }

    /*onSubmit(){
        if(this.validateResponses){
            this.props.onRouteChange('changePassword');
        }
    }*/

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
                                        <legend className="f4 fw6 ph0 mh0">Forgot Password</legend>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor="password">Security Question 1: Where were you born?</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="question1response"
                                                name="question1response"
                                                id="question1response"
                                                placeholder="Question 1"
                                                onChange={this.onQuestion1ResponseChange}
                                            />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.question1Response}</div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6" htmlFor="password">Security Question 2: What's your favorite color?</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="question2response"
                                                name="question2response"
                                                id="question2response"
                                                placeholder="Question 2"
                                                onChange={this.onQuestion2ResponseChange}
                                            />
                                        </div>
                                        <div className="errorMsg">{this.state.errors.question1Response}</div>
                                    </fieldset>
                                    <div className="">
                                        <input
                                            className="b ph3 pv2 mv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                            type="submit"
                                            onClick={() => onRouteChange('changePassword')}
                                            value="Submit"
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

export default ForgotPassword;
