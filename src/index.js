import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepPurple500, deepPurple700 } from 'material-ui/styles/colors';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const theme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700
  }
})

const AppWrapper = () => (
  <MuiThemeProvider muiTheme={theme}>
    <App></App>
  </MuiThemeProvider>
)

injectTapPlugin();
ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
