import React from 'react';



const createRoute = (props) => {
    return(
        <div className={" w-80 mw7 tc bg-light-gray dib br3 pa2 ma5 mv6 bw2 shadow-5"}>
            <div>


                <article className="cf">
                    <div className="fl pa2 w-100 tc">

                        <article className="w-90 m3 center bg-white br3 pa2 mv2 ba b--black-20">
                            <div className="tc">
                                <h1 className="f3 mb2">Create Route</h1>

                            </div>
                        </article>

                        <article className="w-90 m3 center bg-white br3 pa2 ba b--black-20">
                            <div className="tl">

                                <form>

                                    <div className=" pa2 w-50">
                                        <label htmlFor="routeName" className="tl f7 db mb2">Route Name</label>
                                        <input id="routeName" className="input-reset ba b--black-20 f3 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Enter a route name" />
                                    </div>

                                    <div className=" pl2 w-50">
                                        <h4>Number of stops:
                                        <select name="Number of Stops">
                                            <option value="volvo">1</option>
                                            <option value="saab">2</option>
                                            <option value="fiat">3</option>
                                            <option value="audi">4</option>
                                        </select>
                                        </h4>
                                    </div>

                                </form>

                            </div>
                        </article>


                    </div>

                </article>


            </div>
        </div>
    );
};

export default createRoute;