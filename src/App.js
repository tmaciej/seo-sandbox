import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      after100: <p className="red">Loading content after 100ms...</p>,
      after1000: <p className="red">Loading content after 1000ms...</p>,
      after10000: <p className="red">Loading content after 10000ms...</p>
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        after100: <p className="green">This was loaded after 100ms.</p>
      });
    }, 100);

    setTimeout(() => {
      this.setState({
        after1000: <p className="green">This was loaded after 1000ms.</p>
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        after10000: <p className="green">This was loaded after 10000ms.</p>
      });
    }, 10000);
  }

  render() {
    return (
      <div>
        <p>Static content.</p>
        {this.state.after100}
        {this.state.after1000}
        {this.state.after10000}
      </div>
    );
  }
}

export default App;
