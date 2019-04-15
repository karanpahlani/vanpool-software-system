import React from 'react';
import SearchBox from'../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';




class RoutesDropDown extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedOption: '',
            allRoutes: [],
            id: props.personid,
            searchfield: ''
        };
        console.log("these are the props", props.personid)
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

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    onSubmit = () => {
        console.log(this.state.selectedOption);
        console.log(this.state.id);
        fetch('http://localhost:3000/addride', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                route: this.state.selectedOption,
                passid: this.state.id

            })

        })
            .then(response => response.json())
            .then(user=> {
                    this.props.onRouteChange('home');
                    this.props.loadUser(user)
            })

    }



    render() {

        const filroute = this.state.allRoutes.filter(allRoutes => {
            return allRoutes.routename.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return( <div>

                <SearchBox searchChange={this.onSearchChange}/>
                <div className="pv4 dark-gray  f2 lh-title ">

                List of Current Routes:

            </div>
                        <div>
                        {filroute.map(function (route) {

                            return <div className="pa2 flex items-center mb2 mw5  center fn bg-light-red .shadow-3" onChange={this.handleChange.bind(this)}>
                                <input    type="radio" name={route.routename}  checked = {this.state.selectedOption === (route.routeid).toString()}
                                value={route.routeid}/>
                                {route.routename}
                            </div>
                        }, this)}
                        </div>
            <div>
                <div className="pa2">
                    <input
                        onClick={this.onSubmit}
                        className="b ph3 pv2 input-reset ba b--black bg-blue grow pointer f6 dib"
                        type="submit"
                        value="SUBMIT"
                    />
                </div>
            </div>

            </div>
        );
    }
}



export default RoutesDropDown;