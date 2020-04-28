import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';


export default class MyAppBar extends Component {
  render() {
    return (
      <div >
        <AppBar className='myAppBarBackground' position="static">
          <Toolbar>
            
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

