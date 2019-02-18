import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <SignIn/>
        {/*
        <ImageLinkForm/>
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
