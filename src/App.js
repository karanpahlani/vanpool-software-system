import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';
import PassengerDashboard from "./components/Dashboard/Passenger/PassengerDashboard";
import DriverDashboard from "./components/Dashboard/Driver/DriverDashboard";
import Navbar from "./components/Navbar/Navbar"
import CreateRoute from "./components/CreateRoute/CreateRoute"



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
                entries: 0,
                joined: '',
                balance: '',
                type: '',

            }

        }
    }

    loadUser = (data) => {
        this.setState({user:  {
                id: data.userData.id,
                name: data.userData.name,
                email: data.userData.email,
                entries: data.userData.entries,
                joined: data.userData.joined,
                balance: data.userData.balance,
                type: data.type,

            }})

        console.log(this.state.user);
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
                            <PassengerDashboard userBalance={this.state.user.balance} userType={this.state.user.type} userName={this.state.user.name} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
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