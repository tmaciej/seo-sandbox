import './App.css';
import React, { Component } from 'react';
import Navigation from '../Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {React.Children.only(this.props.children)}
      </div>
    );
  }
}

export default App;
