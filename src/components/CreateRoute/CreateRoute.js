import React from 'react';



class CreateRoute extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            route: '',
            start: '',
            stop: '',
            vans: '',
            allStops: [],
            allVans: [],
        }
    }

    componentDidMount(){
        this.fetchStopsOptions();
        this.fetchVanOptions();
    }

    fetchStopsOptions(){
        fetch('http://localhost:3000/stops')
            .then((res) => {
                const a = res.json();
                console.log("promise resp", a);
                return a;

            }).then((json) => {
            this.setState({allStops: json});
            console.log(this.state.allStops);
        });
    }

    fetchVanOptions(){
        fetch('http://localhost:3000/availableVans')
            .then((res) => {
                const a = res.json();
                console.log("promise resp", a);
                return a;

            }).then((json) => {
            this.setState({allVans: json});
            console.log(this.state.allVans);
        });
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

    onVanSelectChange = (event) => {
        this.setState({vans: event.target.value})
    };

    onSubmitCreateRoute = () => {
        fetch('http://localhost:3000/createRoute', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                route: this.state.route,
                start: this.state.start,
                stop: this.state.stop,
                vans: this.state.vans,
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

                                        <div className="mt4 w-100">
                                            <label htmlFor="start" className="tc tl f7 db mb2">From:</label>
                                            <select onChange={this.onCreateRouteStartChange} className="gray h2 fw5 b--black-30 w-60 f4" name="starts">

                                                {this.state.allStops.map(function (starts) {
                                                    return <option className="gray fw5 b--black-30 w-60 f4" key={starts.name} value={starts.name}>{starts.name}</option>
                                                }, this)}

                                            </select>
                                        </div>

                                        <div className="mt4 w-100">
                                            <label htmlFor="stop" className="tc tl f7 db mb2">To:</label>
                                            <select onChange={this.onCreateRouteStopChange} className="gray h2 fw5 b--black-30 w-60 f4" name="stops">

                                                {this.state.allStops.map(function (stops) {
                                                    return <option className="gray fw5 b--black-30 w-60 f4" key={stops.name} value={stops.name}>{stops.name}</option>
                                                }, this)}

                                            </select>
                                        </div>

                                        <div className="mt4 w-100">
                                        <label htmlFor="vans" className="tc tl f7 db mt3 mb2">Select Vehicle:</label>
                                        <select onChange={this.onVanSelectChange} className="gray h2 fw5 b--black-30 w-60 f4" name="vans">

                                            {this.state.allVans.map(function (van) {
                                                return <option className="black fw5 b--black-30 w-60 f4" key={van.name} value={van.name}>{van.name + " - Seats Avail: " + van.van_capacity} </option>
                                            }, this)}

                                        </select>
                                        </div>
                                    </fieldset>

                                    <div className="pa3 w-100">
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
