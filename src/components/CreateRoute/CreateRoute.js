import React from 'react';



class CreateRoute extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            route: '',
            start: '',
            stop: '',
        }
    }

    onCreateRouteChange = (event) => {
        this.setState({route: event.target.value})
    };

    onCreateRouteStartChange = (event) => {
        this.setState({start: event.target.value})
    };

    onCreateRouteStopChange = (event) => {
        this.setState({stop: event.target.value})
    };

    onSubmitCreateRoute = () => {
        fetch('http://localhost:3000/createRoute', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                route: this.state.route,
                start: this.state.start,
                stop: this.state.stop
            })
        })
    }


    render() {


        return (
            <div className={" w-80 mw7 tc bg-light-gray dib br3 pa2 ma5 mv6 bw2 shadow-5"}>
                <div>


                        <div className="pa2 w-100 tc">

                            <article className="w-100 m3 center bg-white br3 mb1 pa2 ba b--black-20">
                                <div className="tc">
                                    <h1 className="f3 mb2">Create Route</h1>

                                </div>
                            </article>

                            <article className=" w-100 m3 center bg-white br3 mb1 pa2 ba b--black-20">


                                    <fieldset id="create_route" className="ba b--transparent ph0 mh0">

                                        <div className="pa2 w-100">
                                            <label htmlFor="route" className="tc tl f7 db mb2">Route Name</label>
                                            <input
                                                id="route"
                                                className="center input-reset f3 pa2 db w-60"
                                                type="route"
                                                name="route"
                                                aria-describedby="name-desc"
                                                placeholder="Enter a route name"
                                                onChange={this.onCreateRouteChange}
                                            />
                                        </div>

                                        <div className="pa2 w-100">
                                            <label htmlFor="start" className="tc tl f7 db mb2">From:</label>
                                            <input
                                                id="start"
                                                className="center input-reset f3 pa2 db w-60"
                                                type="start"
                                                name="start"
                                                aria-describedby="name-desc"
                                                placeholder="Starting address"
                                                onChange={this.onCreateRouteStartChange}
                                            />
                                        </div>

                                        <div className="pa2 w-100">
                                            <label htmlFor="stop" className="tc tl f7 db mb2">To:</label>
                                            <input
                                                id="stop"
                                                className="center input-reset f3 pa2 db w-60"
                                                type="stop"
                                                name="stop"
                                                aria-describedby="name-desc"
                                                placeholder="Destination address"
                                                n
                                            />
                                        </div>

                                        <label htmlFor="stop" className="tc tl f7 db mt3 mb2">Select Vehicle:</label>
                                        <select className="gray h2 fw5 b--black-30 w-40 f4" name="cars">
                                            <option className="gray fw5 b--black-30 w-40 f4" value="volvo">Volvo</option>
                                            <option className="gray fw5 b--black-30 w-40 f4" value="saab">Saab</option>
                                            <option className="gray fw5 b--black-30 w-40 f4" value="fiat">Fiat</option>
                                            <option className="gray fw5 b--black-30 w-40 f4" value="audi">Audi</option>
                                        </select>

                                    </fieldset>

                                    <div className="pa2 w-100">
                                        <input
                                            onClick={this.onSubmitCreateRoute}
                                            className="br3 white b ph3 pv2 input-reset ba b--black bg-gray pointer f6 dib"
                                            type="submit" value="Create Route"

                                        />
                                    </div>



                            </article>


                        </div>

                </div>
            </div>
        );
    };
}

export default CreateRoute;