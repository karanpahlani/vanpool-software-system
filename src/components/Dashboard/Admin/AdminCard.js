import React from 'react';



const DriverCard = (props) => {
    const {name, username, id , email} = props;
    return(
        <div className={"  w-70 mw7 tc bg-light-gray dib br3 pa5 ma5 grow bw2 shadow-5"}>
            <div>
                <p><h2>Admin Dashboard</h2></p>
                <p className ="center"><h4>Logged in as userName</h4></p>

                <article className="center mw3 mw5-ns br3 hidden ba b--black-10 mv4">
                    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Actions</h1>
                    <div className="pa3 bt b--black-10">
                        <p className="f4 f5-ns lh-copy measure center">

                                <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Create Ride</a>
                                <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Manage Users</a>
                                <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Manage Vehicles</a>
                                <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Driving Data</a>

                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default DriverCard;