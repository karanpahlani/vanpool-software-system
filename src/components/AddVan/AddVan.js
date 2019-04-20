import React from 'react';


class AddVan extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name: '',
            van_capacity: 0,
            isSignedIn: true,
            type: 'admin',
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    };

    onCapacityChange = (event) => {
        this.setState({van_capacity: event.target.value})
    };


    onSubmit = () => {
        fetch('http://localhost:3000/addVan', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                van_capacity: this.state.van_capacity,
                name: this.state.name
            })
        })
            .then(
                    this.props.onRouteChange('home')
            )   //TODO MAKE THIS SHOW SUCCESS MESSAGE - POSSIBLY ASK FOR ANOTHER
                //TODO TO ADD AND CLEAR TEXT BOX.

    }


    render() {

        return (
            <div className={" w-80 mw7 tc bg-light-gray dib br3 pa2 ma5 mv6 bw2 shadow-5"}>
                <div>


                    <div className="pa2 w-100 tl">

                        <article className="w-100 m3 center bg-white br3 mb1 pa2 ba b--black-20">


                            <main className="pa4 black-80">
                                <form className="measure center">
                                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                        <legend className="f4 fw6 ph0 mh0">Add Van</legend>
                                        <div className="mt3">
                                            <label className="db fw6 lh-copy f6" htmlFor="name">Van Name</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter van name"
                                                onChange={this.onNameChange}
                                            />
                                        </div>

                                        <div className="mt3">
                                            <label className="db fw6 lh-copy f6" htmlFor="name">Passenger Capacity</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-30"
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter capacity"
                                                onChange={this.onCapacityChange}
                                            />
                                        </div>


                                    </fieldset>

                                    <div className="">
                                        <input
                                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer mt2 f6 dib"
                                            type="submit"
                                            value="Add"
                                            onClick={this.onSubmit}
                                        />
                                    </div>

                                </form>
                            </main>


                        </article>

                    </div>
                </div>
            </div>


        );
    }
}

export default AddVan;
