import React, { Component } from 'react'
import {api} from './config'
import AnimeGridList from './AnimeGridList';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';

class LatestEpisodes extends Component {
  state = {
    latestEps: [],
    loading: true
  }
  componentDidMount () {
    fetch(`${api}/episode/latest`).then(res => res.json())
    .then(json => {
      this.setState({
        loading: false,
        latestEps: json
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
        <Subheader>&Uacute;ltimos episodios actualizados</Subheader>
        <AnimeGridList shows={this.state.latestEps} />
      </div>
    )
  }
}

export default LatestEpisodes