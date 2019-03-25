import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
import PassengerDashboard from './components/Dashboard/Passenger/PassengerDashboard';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import Landing from "./components/Landing/Landing";
import DriverDashboard from "./components/Dashboard/Driver/DriverDashboard";
import EditRiderAccount from "./components/EditAccount/Passenger/EditRiderAccount";




class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',

      route: 'home',
      isSignedIn: true,
        user:{
            id:'',
            name: 'Marcus',
            email: '',
            entries: 0,
            joined: '',
            type: 'passenger',
            accountBalance: '$10.31',
            profilePictureURL: '',
        }
    }
  }

    loadUser = (data) => {
        this.setState({user:  {
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined,
                type: data.type,
                accountBalance: data.accountBalance,
                profilePictureURL: data.profilePictureURL,
            }})
        alert("home");
        this.state.onRouteChange('home');
    }


    onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false})

    } else if (route === 'home'){
      this.setState({isSignedIn: true} )
    }
      this.setState({route: route})
  };



  render() {

        let component = null
        switch(this.state.route) {
          case 'signin'  :
            component =
                <div>
                    <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                    <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                </div>
            break;

          case 'signout'  :
              //alert("case: signout");
                component =
                    <div>
                        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                        <SignIn onRouteChange={this.onRouteChange}/>
                    </div>
                break;

          case 'home':

              if(this.state.user.type === 'passenger'){
                  //alert("passanger landing");
                  component =
                      <div>
                          <Navbar userName={this.state.user.name} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                          <PassengerDashboard userAccountBalance={this.state.user.accountBalance} userName={this.state.user.name} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                      </div>
              } else if(this.state.user.type === 'driver') {
                  //alert("driver landing");
                  component =
                      <div>
                          <Navbar userName={this.state.user.name} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                          <DriverDashboard userAccountBalance={this.state.user.accountBalance} userName={this.state.user.name} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                      </div>
              } else if(this.state.user.type === 'admin') {
                  //alert("admin landing");
                  component =
                      <div>
                          <Navbar userName={this.state.user.name} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                          <AdminDashboard userName={this.state.user.name}isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
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
