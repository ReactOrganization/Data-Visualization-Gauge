import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactD3Gauge from 'react-d3-gauge';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactD3Gauge
          needleColor="blue"
          colors={['green', 'yellow', 'orange', 'red']}
          width={800}
          percent={70}
        />
      </div>
    );
  }
}

export default App;
