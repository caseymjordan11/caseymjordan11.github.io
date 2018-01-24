import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  render(){
    return(
      <div className="header">
          <div>
            <button className="skills2"><Link className="cj" to="/">CJ</Link></button>
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
