import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import SearchBar from './SearchBar';
import IconButton from 'material-ui/IconButton';
import Icon from './Icon'
import { withRouter, Link } from 'react-router-dom'

class Header extends Component {
  state = {
    showSearch: false
  }
  toggleSearchBar() {
    this.setState(state => ({
      showSearch: !state.showSearch
    }))
  }
  handleSearch = (query) => {
    this.props.history.push(`/search?q=${query}`)
  }
  render () {
    const searchIcon = (
      <Icon align="midle" style={{
        color: 'white',
        lineHeight: '64px'
      }}>search</Icon>
    );
    const searchButton = (
      <IconButton onTouchTap={() => this.toggleSearchBar()}>
        {searchIcon}
      </IconButton>
    );
    const searchBar = (
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <IconButton onTouchTap={() => this.toggleSearchBar()}>
          <Icon inverse>close</Icon>
        </IconButton>
        <SearchBar 
          style={{flex:1}}
          placeholder="Busca por nombre"
          onSearch={this.handleSearch} />
      </div>
    )
    const searchElem = this.state.showSearch ? searchBar : searchButton;
    const title = (
      <Link
        to="/" className="link-reset"
        title="niño! que hase viendo dibujito">
        Dibujitos
      </Link>
    );
    return (
      <AppBar
        title={title}
        showMenuIconButton={false}
        titleStyle={{ textAlign: 'left' }}
        style={{ marginBottom: '2em' }}
        iconElementRight={searchElem}
      />
    )
  }
}

export default withRouter(Header)