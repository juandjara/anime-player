import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import Media from 'react-media';
import { Link } from 'react-router-dom';

const styles = {
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  subheader: {
    fontSize: '1em',
    fontWeigth: 'bolder'
  }
}

function getShowSlug(epSlug) {
  return epSlug.replace(/-episode-\d$/, '');
}

const AnimeGridList = ({shows}) => {
  return (
    <Media query="(min-width: 768px)">
      {matches => (
        <GridList 
          style={styles.gridList}
          cellHeight={200}
          cols={matches? 4 : 2}>
          {shows.map((ep, i) => (
            <Link 
              key={i}
              to={`/show/${getShowSlug(ep.slug)}`}
              className="link-reset">
              <GridTile 
                className="show-tile-hover"
                title={<span title={ep.name}>{ep.name}</span>}>
                <img src={ep.image} alt={ep.name} />
              </GridTile>
            </Link>
          ))}        
        </GridList>
      )}
    </Media>
  )
}

AnimeGridList.propTypes = {
  shows: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    image: React.PropTypes.string
  })).isRequired
}

export default AnimeGridList