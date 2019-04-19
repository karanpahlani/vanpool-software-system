import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
import RoutesDropDown from './components/RoutesDropDown/RoutesDropDown';
import './App.css';
import PassengerDashboard from "./components/Dashboard/Passenger/PassengerDashboard";
import DriverDashboard from "./components/Dashboard/Driver/DriverDashboard";
import Navbar from "./components/Navbar/Navbar"
import CreateRoute from "./components/CreateRoute/CreateRoute"
import EditRiderAccount from "./components/EditAccount/Passenger/EditRiderAccount"
import EditDriverAccount from "./components/EditAccount/Driver/EditDriverAccount";




class App extends Component {


    constructor(){
        super();
        this.state = {
            input: '',
            route: 'signin',
            isSignedIn: false,
            user:{
                id:'',
                name: '',
                email: '',
                joined: '',
                type: '',
                balance: '',
                routename: ''

            }

        }
    }

    loadUser = (data) => {
        this.setState({user:  {
                id: data.userData.userid,
                name: data.userData.name,
                email: data.userData.email,
                balance: data.userData.user_balance,
                joined: data.userData.joined,
                type: data.type,
                routename: data.routename,

            }})


        console.log('current user type of the state is: ', this.state.user.type)
        console.log('Active Rides: ', this.state.user.routename)
        //console.log(this.state.user);

    }


    onRouteChange = (route) => {
        if(route === 'signout') {
            this.setState({isSignedIn: false})

        } else if (route === 'home'){
            this.setState({isSignedIn: true} )
        }

        this.setState({route: route})

    }

    render() {
        const {isSignedIn, route} = this.state;
        let component = null
        switch(route) {
            case 'routesDropDown' :
                component =
                    <div>
                        <RoutesDropDown  loadUser={this.loadUser} onRouteChange={this.onRouteChange} personid={this.state.user.id}/>
                    </div>
                break;
            case 'signin'  :
                component =
                    <div>
                        <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                        <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    </div>
                break;

            case 'signout'  :
                component =
                    <div>
                        <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                        <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    </div>
                break;
            case 'home':
                if(this.state.user.type === 'passenger'){
                    //alert("passanger landing");
                    component =
                        <div>
                            <Navbar isSignedIn={this.state.isSignedIn}  userName={this.state.user.name} onRouteChange={this.onRouteChange} />

                            <PassengerDashboard activeRide = {this.state.user.routename} userBalance={this.state.user.balance} userType={this.state.user.type} userName={this.state.user.name} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />

                        </div>
                } else if(this.state.user.type === 'driver') {
                    //alert("driver landing");
                    component =
                        <div>
                            <Navbar isSignedIn={this.state.isSignedIn} userName={this.state.user.name} onRouteChange={this.onRouteChange} />
                            <DriverDashboard  userBalance={this.state.user.balance} userType={this.state.user.type} userName={this.state.user.name} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                        </div>
                }

                break;
            case 'signup':
                component =
                    <div>
                        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}  />
                    </div>
                break;

            case 'createRoute':
                component =
                    <div>
                        <Navbar isSignedIn={this.state.isSignedIn} userName={this.state.user.name} onRouteChange={this.onRouteChange} />
                        <CreateRoute onRouteChange={this.onRouteChange} />
                    </div>
                break;

            case 'editRiderAccount':
                component =
                    <div>
                        <Navbar isSignedIn={this.state.isSignedIn} userName={this.state.user.name} onRouteChange={this.onRouteChange} />
                        <EditRiderAccount userType={this.state.user.type} userName={this.state.user.name} onRouteChange={this.onRouteChange} />
                    </div>
                break;

            case 'editDriverAccount':
                component =
                    <div>
                        <Navbar isSignedIn={this.state.isSignedIn} userName={this.state.user.name} onRouteChange={this.onRouteChange} />
                        <EditDriverAccount userType={this.state.user.type} userName={this.state.user.name} onRouteChange={this.onRouteChange} />
                    </div>
                break;



            default:


        }



        return (
            <div className="App">
                {component}
            </div>
        );
    }
}

export default App;
