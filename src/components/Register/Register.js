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
        this.setState({firstName: event.target.value})
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


            return(
                <div className={"w-80 mw7 tc bg-light-gray dib br3 pa2 mv6 bw2 shadow-5"}>
                    <h1 className="f4 bg-white br3 br--top black-60 mv0 pv2 ph3 bt br bl b--black-20">Create New Account</h1>
                    <div>
                        <article className="cf">

                                <div className="tc pa2 ba b--black-10 br--bottom br3">
                                <form className="center">



                                    <div className=" fl pa2 w-50">
                                        <label htmlFor="name" className="tl f7 db mb2">First name <span className="normal black-60">(required)</span></label>
                                        <input
                                               className="input-reset ba b--black-20 f3 pa2 mb2 db w-100"
                                               type="text"
                                               placeholder="First name"
                                               name="name"
                                               id="name"
                                               onChange={this.onNameChange}
                                        />
                                    </div>
                                    <div className="fl pa2 w-50">
                                        <label htmlFor="lastName" className="tl f7 db mb2">Last name <span className="normal black-60">(required)</span></label>
                                        <input id="lastName" className="input-reset ba b--black-20 f3 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Last name" />
                                    </div>

                                    <br />

                                    <div className="fl pa2 w-100">
                                        <label htmlFor="phone" className="tl f7 db mb2">Enter your phone number <span className="normal black-60">(required)</span></label>
                                        <input id="phone" className="input-reset ba b--black-20 pa2 f3 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Phone number" />
                                    </div>

                                    <br />

                                    <div className="fl pa2 w-100">
                                        <label htmlFor="email-address" className="tl f7 db mb2">Enter your email <span className="normal black-60">(required)</span></label>
                                        <input id="email-address"
                                               className="input-reset ba b--black-20 pa2 f3 mb2 db w-100"
                                               type="email"
                                               placeholder="Email"
                                               name="email-address"
                                               onChange={this.onEmailChange}

                                        />
                                    </div>

                                    <div className="fl pa2 w-100">
                                        <label htmlFor="password" className="tl f7 db mb2">Create a password with at least 8 characters <span className="normal black-60">(required)</span></label>
                                        <input className="input-reset ba b--black-20 pa2 f3 mb2 db w-100"
                                               placeholder="Password"
                                               type="password"
                                               id="password"
                                               name="password"
                                               onChange={this.onPasswordChange}

                                        />
                                    </div>

                                    <br />
                                    <div className="pa2 w5 center">
                                        <input
                                            onClick={this.onSubmitSignIn}
                                            className="f3 w-100 link dim ph3 pv1 dib white bg-gray"
                                            type="submit"
                                            value="Sign Up"
                                        />
                                        {/*<a className="f3 w-100 link dim ph3 pv1 dib white bg-gray" href="#0">Signup</a>*/}
                                    </div>



                                </form>
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





                            <div className="">
                                <input
                                    onClick={this.onSubmitSignUp}
                                    className="b ph3 pv2 input-reset ba b--black bg-gray grow pointer f6 dib"
                                    type="submit"
                                    value="Sign Up"




















    // render() {
    //     const {onRouteChange} = this.props;
    //
    //     return (
    //         <div>
    //             <article className="br3 ba dark-gray  b--black-10 mv4 w-100 w-70-m w-25-l mw7 center">
    //                 <main className="pa4 black-80">
    //                     <div className="measure center">
    //
    //                         <fieldset id="sign_up" className="ba b--transparent  ph0 mh0">
    //                             <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
    //
    //                             <div className="mt3">
    //                                 <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
    //                                 <input
    //                                     className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
    //                                     type="name"
    //                                     name="name"
    //                                     id="name"
    //                                     onChange={this.onNameChange}
    //                                 />
    //                             </div>
    //
    //                             <div className="mt3">
    //                                 <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
    //                                 <input
    //                                     className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
    //                                     type="email"
    //                                     name="email-address"
    //                                     id="email-address"
    //                                     onChange={this.onEmailChange}
    //                                 />
    //                             </div>
    //
    //                             <div className="mv3">
    //                                 <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
    //                                 <input
    //                                     className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
    //                                     type="password"
    //                                     name="password"
    //                                     id="password"
    //                                     onChange={this.onPasswordChange}
    //
    //                                 />
    //                             </div>
    //
    //                         </fieldset>
    //
    //                         <div className="">
    //                             <input
    //                                 onClick={this.onSubmitSignIn}
    //                                 className="b ph3 pv2 input-reset ba b--black bg-gray grow pointer f6 dib"
    //                                 type="submit"
    //                                 value="Sign Up"
    //
    //                             />
    //                         </div>
    //                     </div>
    //
    //                 </main>
    //             </article>
    //         </div>
    //
    //
    //     );
    // }
}

export default Register;