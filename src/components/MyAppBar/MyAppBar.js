import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';


export default class MyAppBar extends Component {
  render() {
    return (
      <div >
        <AppBar className='myAppBarBackground' position="static">
          <Toolbar className='toolBar'>
            <h4 className="titleText1">Space</h4>
            <h4 className="titleText2">X</h4>
            <h4 className="titleText3">Info</h4>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

