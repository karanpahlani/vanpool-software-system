import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';



class RoutesDropDown extends React.Component {

    constructor(){
        super();
        this.state = {
            selectedOption: '',
            value: 0,
            allRoutes: []
        }
    }

    componentDidMount(){
        this.fetchOptions()
    }

    fetchOptions(){
        fetch('http://localhost:3000/routes')
            .then((res) => {
                const a = res.json()
                console.log("promise resp", a);
                return a;

            }).then((json) => {
            this.setState({allRoutes: json});
            console.log(this.state.allRoutes);
        });
    }

    handleChange = (event) => {
        this.setState({
            selectedOption: event.target.value,
            value: event.target.value
        });
    }



    render() {


        return( <div>

            <div>
                List of Current Routes:

            </div>
                        <div>
                        {this.state.allRoutes.map(function (route) {
                            console.log("tf:", this.state.selectedOption === (route.routeid).toString());
                            return<div onChange={this.handleChange.bind(this)}>
                                <input type="radio" name={route.routename}  checked = {this.state.selectedOption === (route.routeid).toString()}
                                value={route.routeid}/>
                                {route.routename}
                            </div>
                        }, this)}
                        </div>
            <div>


            </div>

            </div>
        );
    }
}



export default RoutesDropDown;