import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import './Header.css'
import image from './images/pic.jpg'

class Header extends Component {
  render(){
    return(
      <div className="header">
          <div className="pic">
              <img src={image} height='75px' width='75px' alt="Logo"/>
          </div>
          <h1>Casey Jordan</h1>
          <div className="links">
            <h3 className="skills">Skills and Interests</h3>
            <h3 className="work">Work Examples</h3>
            <h3 className="contact">Contact</h3>
          </div>
      </div>
    )
  }
}

export default Header
