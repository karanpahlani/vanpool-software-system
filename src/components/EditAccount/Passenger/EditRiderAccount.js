import React from 'react';



const EditRiderAccount = (props) => {
    const {username} = props;
    return(
        <div className={" w-80 mw7 tc bg-light-gray dib center br3 pa2 mv6  bw2 shadow-5"}>


                <article className="cf">
                    <div className="fl pa2 w-33 tc">

                        <article className="w-auto center bg-white pa2 br3 ba b--black-20">
                            <div className="tc">
                                <img src="https://robohash.org/gk09" className="mw4 br-100 h-100 w-100 dib ba b--black-10 pa2" title="Photo of a kitty staring at you" />
                                <h1 className="f3 mb2">{props.userName}</h1>
                                <h2 className="f5 fw4 gray mt0">{props.userType}</h2>
                            </div>
                        </article>

                    </div>

                    <div className="fl w-60 pa2 tc">

                        <article className="center m3 mw-100 br3 hidden ba b--black-10 mv">
                            <h1 className="f4 bg-white br3 br--top black-60 mv0 pv2 ph3">Update Account Information</h1>
                            <div className="pa1 bt b--black-10">
                                <p className="f4 lh-copy measure center">

                                    <form className="center">

                                        <div className=" fl pa2 w-50">
                                            <label htmlFor="name" className="tl f7 db mb2">Name</label>
                                            <input id="name" className="input-reset ba b--black-20 f3 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder={props.userName} />
                                        </div>

                                        <br />

                                        <div className="fl pa2 w-100">
                                            <label htmlFor="email" className="tl f7 db mb2">Email Address</label>
                                            <input id="email" className="input-reset ba b--black-20 pa2 f3 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Email" />
                                        </div>

                                        <div className="fl pa2 w-100">
                                            <label htmlFor="password" className="tl f7 db mb2">Change Password</label>
                                            <input id="password"
                                                   className="input-reset ba b--black-20 pa2 f3 mb2 db w-100"
                                                   type="password"
                                                   aria-describedby="password-desc"
                                                   placeholder="Enter new password" />
                                        </div>

                                        <br />
                                        <div className="pa2 w5 center">
                                            <a className="f3 w-100 link dim ph3 pv1 dib white bg-gray" href="#0">Submit</a>
                                        </div>

                                    </form>

                                </p>
                            </div>
                        </article>


                    </div>
                </article>


        </div>
    );
};

export default EditRiderAccount;