import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
import Landing from './components/Landing/Landing';
//import Admin from './components/Dashboard/Admin/Dashboard_Admin';
//import Driver from './components/Dashboard/Driver/Dashboard_Driver';
//import Pssanger from './components/Dashboard/Passanger/Dashboard_Passanger';
import './App.css';
import Logo from "./components/Logo/Logo";


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
                    <SignIn onRouteChange={this.onRouteChange}/>
                </div>;
            break;
          case 'home':
            component = <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />;
            break;

          case 'signup':
            component =
              <div>
              <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
              <Register onRouteChange={this.onRouteChange}/>
              </div>
            break;

          default:
            component =
                <div>
                    <Landing onRouteChange={this.onRouteChange} />
                </div>
                  ;
        }



    return (
      <div className="App">
        {component}
      </div>
    );
  }
}

export default App;
