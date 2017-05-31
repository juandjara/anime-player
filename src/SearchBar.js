import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui/svg-icons/action/search'
import IconButton from 'material-ui/IconButton'
import { grey500 } from 'material-ui/styles/colors'

class SearchBar extends Component {
  state = {
    query: ''
  }
  handleChange = (ev) => {
    this.setState({ query: ev.target.value })
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSearch(this.state.query);
  }
  render () {
    const {placeholder, style} = this.props;
    return (
      <Paper style={{
        height: 48,
        display: 'flex',
        justifyContent: 'space-between',
        ...style
      }}>
        <form style={{
          width: '100%',
          margin: 'auto 16px'
        }} onSubmit={this.handleSubmit}>
          <TextField
            autoFocus
            value={this.state.query}
            onChange={this.handleChange}
            hintText={placeholder}
            underlineShow={false}
            style={{width: '100%'}}
          />
          <input type="submit" hidden />
        </form>
        <IconButton style={{cursor: 'default'}}>
          <SearchIcon color={grey500} />
        </IconButton>
      </Paper>
    )
  }
}

export default SearchBar