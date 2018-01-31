import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import './Header.css'

class Header extends Component {
  render(){
    return(
      <div className="header">
          <div>
            <button className="home"><Link to="/">About</Link></button>
          </div>
          <div>
            <h1 className="h1">{this.props.title}</h1>
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
