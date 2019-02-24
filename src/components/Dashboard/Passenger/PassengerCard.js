import React from 'react';



const DriverCard = (props) => {
    const {username} = props;
    return(
        <div className={" w-50 mw7 tc bg-light-gray dib br3 pa2 ma5 grow bw2 shadow-5"}>
            <div>
                <p><h2>Rider Dashboard</h2></p>
                <p className ="center"><h4>Logged in as userName</h4></p>

                <article className="center m3 mw5 br3 hidden ba b--black-10 mv">
                    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Actions</h1>
                    <div className="pa3 bt b--black-10">
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
        </div>
    );
}

export default DriverCard;