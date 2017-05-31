import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import {api} from './config'

class Show extends Component {
  state = {
    show: {
      genres: []
    },
    loading: true
  }
  componentDidMount () {
    const slug = this.props.match.params.slug;
    fetch(`${api}/show/${slug}`)
    .then(res => res.json())
    .then(json => {
      console.log("loaded show", json);
      this.setState({
        show: json,
        loading: false
      })
    })
  }
  render () {
    const {loading, show} = this.state;
    return (
      <div>
        {loading && (
          <CircularProgress
            size={100} thickness={8} color="tomato"
            style={{display: 'block', margin: '0 auto'}} />)}
        <main style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <img className="show-image" src={show.image} alt=""/>
          <div style={{flex: 1, minWidth: '400px'}}>
            <h2 style={{margin: '1rem'}}>
              {show.name}
              <br/>
              <small style={{fontSize: '12px'}}>
                {show.genres.join(', ')}
              </small>              
            </h2>
            <p style={{margin: '1em'}}>
              {show.summary}
            </p>
          </div>
        </main>
      </div>
    )
  }
}

export default Show