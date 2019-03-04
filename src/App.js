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
    this.state={
      input: '',
      route: '',
      isSignedIn: false
    }
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

        let component = null;
        switch(this.state.route) {
          case 'signin':
            component =
                <div>
                    <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                    <SignIn onRouteChange={this.onRouteChange} />
                </div>;
          break;

          case 'home':
                component = <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
          break;

          case 'signup':
                component =
                  <div>
                      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                      <Register onRouteChange={this.onRouteChange} />
                  </div>;
          break;

            // default:
            //     component =
            //         <div>
            //             <div>
            //                 <Navbar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
            //                 <PassengerDashboard onRouteChange={this.onRouteChange} />
            //             </div>
            //         </div>

            // default:
            //     component =
            //         <div>
            //             <div>
            //                  <Navbar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
            //                  <AdminDashboard onRouteChange={this.onRouteChange} />
            //             </div>
            //         </div>

            default:
                component =
                    <div>
                        <div>
                            <Navbar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                            <EditRiderAccount onRouteChange={this.onRouteChange} />


                        </div>
                    </div>



            // default:
            //     component =
            //         <div>
            //             <div>
            //                  <Navbar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
            //                  <DriverDashboard onRouteChange={this.onRouteChange} />
            //             </div>
            //         </div>

            // default:
            //   component =
            //       <div>
            //           <Landing onRouteChange={this.onRouteChange} />
            //       </div>

        }



    return (
      <div className="App">
        {component}
      </div>
    );
  }
}

export default App;
