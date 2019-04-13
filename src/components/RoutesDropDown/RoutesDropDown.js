import React from 'react';
import SearchBox from'../SearchBox/SearchBox'



class RoutesDropDown extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedOption: '',
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

        });
    }

    onSubmit = () => {
        console.log(this.state.selectedOption);

    }



    render() {


        return( <div>

            <div>
                <SearchBox/>
                List of Current Routes:

            </div>
                        <div>
                        {this.state.allRoutes.map(function (route) {

                            return<div onChange={this.handleChange.bind(this)}>
                                <input type="radio" name={route.routename}  checked = {this.state.selectedOption === (route.routeid).toString()}
                                value={route.routeid}/>
                                {route.routename}
                            </div>
                        }, this)}
                        </div>
            <div>
                <div className="">
                    <input
                        onClick={this.onSubmit}
                        className="b ph3 pv2 input-reset ba b--black bg-gray grow pointer f6 dib"
                        type="submit"
                        value="submit"
                    />
                </div>
            </div>

            </div>
        );
    }
}



export default RoutesDropDown;