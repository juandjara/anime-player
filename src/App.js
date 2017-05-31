import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import LatestEpisodes from './LatestEpisodes'
import SearchResults from './SearchResults'
import Show from './Show'
import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header></Header>
      <h2 style={{textAlign: 'center'}}>Tus capitulos de anime</h2>
      <Route exact path="/" component={LatestEpisodes} />
      <Route path="/search" component={SearchResults} ></Route>
      <Route path="/show/:slug" component={Show}></Route>
    </div>
  </BrowserRouter>
)

export default App;
