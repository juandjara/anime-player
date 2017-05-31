import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import SearchBar from './SearchBar';
import IconButton from 'material-ui/IconButton';
import Icon from './Icon'

class Header extends Component {
  state = {
    showSearch: false
  }
  toggleSearch() {
    this.setState(state => ({
      showSearch: !state.showSearch
    }))
  }
  render () {
    const searchIcon = (
      <Icon align="midle" style={{
        color: 'white',
        lineHeight: '64px'
      }}>search</Icon>
    );
    const searchButton = (
      <IconButton onTouchTap={() => this.toggleSearch()}>
        {searchIcon}
      </IconButton>
    );
    const searchBar = (
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <IconButton onTouchTap={() => this.toggleSearch()}>
          <Icon inverse>close</Icon>
        </IconButton>
        <SearchBar 
          style={{flex:1}}
          placeholder="Busca por nombre"
          onSearch={query => console.log("SEARCH", query)} />
      </div>
    )
    const searchElem = this.state.showSearch ? searchBar : searchButton;
    return (
      <AppBar
        title="Dibujitos"
        showMenuIconButton={false}
        titleStyle={{
          textAlign: 'left'
        }}
        iconElementRight={searchElem}
      />
    )
  }
}

export default Header