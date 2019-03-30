import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import Landing from "./components/Landing/Landing";
import DriverDashboard from "./components/Dashboard/Driver/DriverDashboard";
import EditRiderAccount from "./components/EditAccount/Passenger/EditRiderAccount";
import EditDriverAccount from "./components/EditAccount/Driver/EditDriverAccount";
import EditAdminAccount from "./components/EditAccount/Admin/EditAdminAccount";





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
                type: ''
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
                type: data.type
            }})

        console.log('current user type of the state is: ', this.state.user.type)
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
                        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                        <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    </div>
                break;

            case 'signout'  :
                component =
                    <div>
                        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                        <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    </div>
                break;

           


        let component = null
        switch(this.state.route) {
          case 'signin'  :
            component =
                <div>

                    <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                </div>
            break;

          
          case 'home':

              if(this.state.user.type === 'passenger'){
                  //alert("passanger landing");
                  component =
                      <div>
                          <Navbar isSignedIn={this.state.isSignedIn}  userName={this.state.user.firstName} onRouteChange={this.onRouteChange} />
                          <PassengerDashboard profilePic={this.state.user.profilePictureURL} userAccountBalance={this.state.user.accountBalance} userName={this.state.user.firstName} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                      </div>
              } else if(this.state.user.type === 'driver') {
                  //alert("driver landing");
                  component =
                      <div>
                          <Navbar isSignedIn={this.state.isSignedIn} userName={this.state.user.firstName} onRouteChange={this.onRouteChange} />
                          <DriverDashboard profilePic={this.state.user.profilePictureURL} userAccountBalance={this.state.user.accountBalance} userName={this.state.user.firstName} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                      </div>
              } else if(this.state.user.type === 'admin') {
                  //alert("admin landing");
                  component =
                      <div>
                          <Navbar isSignedIn={this.state.isSignedIn} userName={this.state.user.firstName} onRouteChange={this.onRouteChange} />
                          <AdminDashboard profilePic={this.state.user.profilePictureURL} userName={this.state.user.name}isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                      </div>
              }

              break;

            case 'editAccount':

                if(this.state.user.type === 'passenger'){
                    //alert("passanger landing");
                    component =
                        <div>
                            <Navbar isSignedIn={this.state.isSignedIn}  userName={this.state.user.firstName} onRouteChange={this.onRouteChange} />
                            <EditRiderAccount userName={this.state.user.firstName} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                        </div>
                } else if(this.state.user.type === 'driver') {
                    //alert("driver landing");
                    component =
                        <div>
                            <Navbar isSignedIn={this.state.isSignedIn} userName={this.state.user.firstName} onRouteChange={this.onRouteChange} />
                            <EditDriverAccount userName={this.state.user.firstName} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                        </div>
                } else if(this.state.user.type === 'admin') {
                    //alert("admin landing");
                    component =
                        <div>
                            <Navbar isSignedIn={this.state.isSignedIn} userName={this.state.user.firstName} onRouteChange={this.onRouteChange} />
                            <EditAdminAccount userName={this.state.user.firstName} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                        </div>
                }

                break;

          case 'signup':
            component =
              <div>
                  <Navbar isSignedIn={false} onRouteChange={this.onRouteChange} />
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