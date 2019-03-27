import React from 'react';



const EditRiderAccount = (props) => {
    const {username} = props;
    return(
        <div className={" w-80 mw7 tc bg-light-gray dib center br3 pa4 ma5  bw2 shadow-5"}>


                <article className="cf">
                    <div className="fl pa2 w-30 tc">

                        <article className="w-auto center bg-white pa2 br3 ba b--black-20">
                            <div className="tc">
                                <img src="http://tachyons.io/img/avatar_1.jpg" className="mw4 br-100 h-100 w-100 dib ba b--black-10 pa2" title="Photo of a kitty staring at you" />
                                <h1 className="f3 mb2">username</h1>
                                <h2 className="f5 fw4 gray mt0">Rider</h2>
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
                                            <label htmlFor="firstname" className="tl f7 db mb2">First name <span className="normal black-60">(required)</span></label>
                                            <input id="firstname" className="input-reset ba b--black-20 f3 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="First name" />
                                        </div>
                                        <div className="fl pa2 w-50">
                                            <label htmlFor="lastname" className="tl f7 db mb2">Last name <span className="normal black-60">(required)</span></label>
                                            <input id="lastname" className="input-reset ba b--black-20 f3 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Last name" />
                                        </div>

                                        <br />

                                        <div className="fl pa2 w-100">
                                            <label htmlFor="phone" className="tl f7 db mb2">Enter your phone number <span className="normal black-60">(required)</span></label>
                                            <input id="phone" className="input-reset ba b--black-20 pa2 f3 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Phone number" />
                                        </div>

                                        <br />

                                        <div className="fl pa2 w-100">
                                            <label htmlFor="email" className="tl f7 db mb2">Enter your email <span className="normal black-60">(required)</span></label>
                                            <input id="email" className="input-reset ba b--black-20 pa2 f3 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Email" />
                                        </div>



                                        <br />
                                        <div className="pa2 w5 center">
                                            <label htmlFor="email" className="tl f7 db mb2">Update your account</label>

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