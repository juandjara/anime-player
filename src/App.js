import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import LatestEpisodes from './LatestEpisodes'
import SearchResults from './SearchResults';
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <h2 style={{textAlign: 'center'}}>Haber anime</h2>
          <Route exact path="/" component={LatestEpisodes} />
          <Route path="/search" component={SearchResults} ></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
