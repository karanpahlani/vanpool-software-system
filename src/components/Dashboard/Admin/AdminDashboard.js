import React from 'react';



const AdminDashboard = (props) => {
    return(
        <div className={" w-80 mw7 tc bg-light-gray dib br3 pa2 ma5 mv6 bw2 shadow-5"}>
            <div>

                <article className="cf">
                    <div className="fl pa2 w-33 tc">

                        <article className="mw5 m3 center bg-white br3 pa2 ba b--black-20">
                            <div className="tc">
                                <img src="https://robohash.org/rob" className="mw4 br-100 h-100 w-100 dib ba b--black-10 pa2" />
                                <h1 className="f3 mb2">{props.userName}</h1>
                                <h2 className="f5 fw4 gray mt0">Admin</h2>
                            </div>
                        </article>

                    </div>
                    <div className="fl w-33 pa2 tc">

                        <article className="center m3 mw5 br3  ba b--black-10 ">
                            <h1 className="f4 bg-white br3  black-60 mv0 pv2 ph3">VSS Site Administration Dashboard</h1>

                        </article>


                    </div>
                    <div className="fl w-34 pa2 tc">

                        <article className="center m3 mw5 br3 hidden ba b--black-10 mv">
                            <h1 className="f4 bg-white br3 br--top black-60 mv0 pv2 ph3">Actions</h1>
                            <div className="pa1 bt b--black-10">
                                <p className="f4 lh-copy measure center">

                                    <a className="pointer f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" onClick ={() => props.onRouteChange('addVan')}>Add Van</a>
                                    <a className="f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" href="#0">Delete Account(s)</a>
                                    <a className="pointer f4 w-90 link dim br3 ph3 pv1 mb1 dib white bg-gray" onClick ={() => props.onRouteChange('addStop')}>Add Stop</a>

                                </p>
                            </div>
                        </article>


                    </div>
                </article>

                <article className="cf">
                    <div className="fl pa2 w-100 tc">

                        <article className="center m3 mw-100 br3  ba b--black-10 ">
                            <h1 className="f4 bg-white br3 br--top black-60 mv0 pv2 ph3">Vans</h1>
                            <div className=" bt b--black-10">


                                <div className="b--black-10 pa2">List vans from DB here</div>
                            </div>
                        </article>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default AdminDashboard;