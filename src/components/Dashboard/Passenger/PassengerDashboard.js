import React from 'react';



const DriverCard = (props) => {
    const {username} = props;
    return(
        <div className={" w-80 mw7 tc bg-light-gray dib br3 pa2 ma5 grow bw2 shadow-5"}>
            <div>


                <article className="cf">
                    <div className="fl pa2 w-33 tc">

                        <article className="mw5 m3 center bg-white br3 pa2 ba b--black-20">
                            <div className="tc">
                                <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                                <h1 className="f3 mb2">username</h1>
                                <h2 className="f5 fw4 gray mt0">Rider</h2>
                            </div>
                        </article>

                    </div>
                    <div className="fl w-33 pa2 tc">

                        <article className="center m3 mw5 br3  ba b--black-10 ">
                            <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Balance</h1>
                            <div className="pa2 bt b--black-10">

                                <h1 className="f3 mb2">$10.45</h1>

                                <div className="bt b--black-10 pa3">
                                 <a className="f4 w-90 link dim br3 ph3 pv2 mb1 dib white bg-gray" href="#0">Add Funds</a>
                                </div>

                            </div>
                        </article>


                    </div>
                    <div className="fl w-33 pa2 tc">

                        <article className="center m3 mw5 br3 hidden ba b--black-10 mv">
                            <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Actions</h1>
                            <div className="pa2 bt b--black-10">
                                <p className="f4 f5-ns lh-copy measure center">

                                    <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Search for Ride</a>
                                    <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Payment Details</a>
                                    <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Driving Data</a>
                                    <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Edit Account</a>
                                    <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Delete Account</a>

                                </p>
                            </div>
                        </article>


                    </div>
                </article>



            </div>
        </div>
    );
};

export default DriverCard;