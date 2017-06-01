import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Icon from './Icon';
import {api} from './config'

class Show extends Component {
  state = {
    show: {
      genres: [],
      episodes: []
    },
    loading: true,
    loadingEpisode: false,
    selectedEpisode: {
      videoLinks: []
    },
    selectedVideo: ""
  }
  componentDidMount () {
    this.fetchShow();
  }
  
  fetchShow () {
    const slug = this.props.match.params.slug;
    fetch(`${api}/show/${slug}`)
    .then(res => res.json())
    .then(json => {
      console.log("SHOW", json);
      this.setState({
        show: json,
        loading: false
      }, () => this.loadEpisode(1))
    })
  }
  loadEpisode (number) {
    if(number < 1 || number > this.state.show.episodes.length) {
      return;
    }
    const base = "https://ww1.gogoanime.io/";
    const url = this.state.show.episodes[number - 1].url;
    this.setState({
      loadingEpisode: true,
      selectedEpisode: { number: number, url, videoLinks: [] }
    })
    fetch(`${api}/episode/${url.replace(base, '')}`)
    .then(res => res.json())
    .then(json => {
      console.log("EPISODE", json);
      this.setState({
        loadingEpisode: false,
        selectedEpisode: Object.assign(json, {number})
      })
    })
  }
  render () {
    const {
      loading,
      loadingEpisode,
      show,
      selectedVideo,
      selectedEpisode
    } = this.state;
    const loader = (
      <CircularProgress
        size={100} thickness={8} color="tomato"
        style={{display: 'block', margin: '0 auto'}} />
    );
    const episodeLoader = (
      <CircularProgress
        style={{verticalAlign: 'middle', paddingRight: '.5em'}}
        color="tomato"
      />
    )
    const content = (
      <main className="show-container">
        <img className="show-image" src={show.image} alt=""/>
        <div style={{
          flex: 1, 
          minWidth: '300px',
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
          <div>
            <List className="episode-list">
              {show.episodes.map((ep, i) => (
                <ListItem 
                  key={i}
                  className="episode-list-item"
                  onTouchTap={() => this.loadEpisode(i+1)}
                  primaryText={(
                    <span style={{whiteSpace: 'nowrap'}}>
                      Cap&iacute;tulo {i+1}
                    </span>
                  )}
                  leftIcon={<Icon>play_circle_outline</Icon>} />
              ))}
            </List>
            <section className="selected-episode-container">
              {loadingEpisode && (
                <div> {episodeLoader} Cargando cap&iacute;tulo </div>
              )}
              <div className="selected-episode-header">
                <IconButton onTouchTap={() => {this.loadEpisode(selectedEpisode.number-1)}}>
                  <Icon>arrow_back</Icon>
                </IconButton>
                <h2 style={{margin: '.5em'}}>
                  Cap&iacute;tulo {selectedEpisode.number}
                </h2>  
                <div style={{flex: 1}}></div>
                <IconButton onTouchTap={() => {this.loadEpisode(selectedEpisode.number+1)}}>
                  <Icon>arrow_forward</Icon>
                </IconButton>
              </div>
              <p style={{margin: '1rem'}}>Selecciona una calidad</p>
              <div>
                {selectedEpisode.videoLinks.map((video, i) => (
                  <FlatButton
                    onTouchTap={
                      () => this.setState({ selectedVideo: video.url })
                    } key={i}
                    primary={video.url !== selectedVideo}
                    secondary={video.url === selectedVideo} >
                    {video.name}p
                  </FlatButton>
                ))}
              </div>
              <video style={{
                width: '100%',
                background: 'black'
              }} src={selectedVideo} controls></video>
            </section>
          </div>
        </div>
      </main>
    )
    return loading ? loader : content;
  }
}

export default Show