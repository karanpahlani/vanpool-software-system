import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      input: '',
      route: 'signin'

    }

  }

  onRouteChange = (route) =>{
    this.setState({route: route});
  }


  render() {
    return (
      <div className="App">

        {this.state.route === 'home' ?
            <SignIn onRouteChange={this.onRouteChange}/>

            : <div>
              <Navigation onRouteChange={this.onRouteChange}/></div>

        }

      </div>
    );
  }
}

export default App;
