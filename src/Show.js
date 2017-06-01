import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import Icon from './Icon';
import {api} from './config'

class Show extends Component {
  state = {
    show: {
      genres: [],
      episodes: []
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
          <div style={{
            flex: 1, 
            minWidth: '400px',
            margin: '0 1em'
          }}>
            <h2 style={{margin: '1rem 0'}}>
              {show.name}
              <br/>
              <small style={{fontSize: '12px'}}>
                {show.genres.join(', ')}
              </small>              
            </h2>
            <p>
              {show.summary}
            </p>
            <List>
              {show.episodes.map((_, i) => (
                <ListItem 
                  key={i} 
                  primaryText={`Capítulo ${i+1}`}
                  leftIcon={<Icon>play_circle_outline</Icon>} />
              ))}
            </List>
          </div>
        </main>
      </div>
    )
  }
}

export default Show