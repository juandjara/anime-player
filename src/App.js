import React, { Component } from 'react';
import Header from './Header';
import LatestEpisodes from './LatestEpisodes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <h2 style={{textAlign: 'center'}}>Haber anime</h2>
        <LatestEpisodes />
      </div>
    );
  }
}

export default App;
