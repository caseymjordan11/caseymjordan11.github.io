import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'

import './Header.css'
import image from './images/pic.jpg'

class Header extends Component {
  render(){
    return(
      <div className="header">
          <div className="pic">
              <img src={image} height='75px' width='75px' alt="Logo"/>
          </div>
          <div className="links">
              <div>
                <button className="skills"><Link to="/skills">Skills</Link></button>
              </div>

              <div className="work">
                <button className="work"><Link to="/work">Work</Link></button>
              </div>

              <div className="contact">
                <button className="contact"><Link to="/contact">Contact</Link></button>
              </div>
          </div>
      </div>
    )
  }
}

export default Header
