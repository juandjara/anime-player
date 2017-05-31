import React, { Component } from 'react'
import {api} from './config'
import AnimeGridList from './AnimeGridList';
import CircularProgress from 'material-ui/CircularProgress';
import qs from 'query-string';

class SearchResults extends Component {
  state = {
    results: [],
    loading: true
  }
  componentDidMount () {
    const urlQuery = this.props.location.search;
    const params = qs.parse(urlQuery);
    fetch(`${api}/search?q=${params.q}`).then(res => res.json())
    .then(json => {
      this.setState({
        loading: false,
        results: json
      })
    })
  }
  
  render () {
    return this.state.loading ? (
      <CircularProgress
        size={100} thickness={8} color="tomato"
        style={{display: 'block', margin: '0 auto'}} />
    ) : (
     <AnimeGridList shows={this.state.results} />
    )
  }
}

export default SearchResults