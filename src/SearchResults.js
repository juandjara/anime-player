import React, { Component } from 'react'
import {api} from './config'
import AnimeGridList from './AnimeGridList';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';
import qs from 'query-string';

class SearchResults extends Component {
  state = {
    results: [],
    loading: true
  }
  
  componentDidMount () {
    this.fetchResults();
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.location.search !== nextProps.location.search) {
      this.fetchResults();
    }
  }
  
  fetchResults () {
    this.setState({ loading: true })
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
      <div>
        <Subheader>Resultados de la b&uacute;squeda</Subheader>
        <AnimeGridList shows={this.state.results} />        
      </div>
    )
  }
}

export default SearchResults