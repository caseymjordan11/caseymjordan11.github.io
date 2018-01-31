import React, { Component } from 'react';

import './SkillPage.css'

import Header from './Header.js'
import css from './images/css.jpg'
import ex from './images/ex.jpg'
import html from './images/html.jpg'
import js from './images/js.jpg'
import mdb from './images/mdb.jpg'
import node from './images/node.jpg'
import psql from './images/psql.jpg'
import r from './images/r.jpg'
import rails from './images/rails.jpg'
import react from './images/react.jpg'
import rst from './images/rst.jpg'
import ruby from './images/ruby.jpg'
import sqlserv from './images/sqlserv.jpg'

class SkillPage extends Component {
  render() {
    return(
      <div>
        <Header title="Skills" />
        <img src={css} height="50px" width="50px" />
        <img src={ex} height="50px" width="50px" />
        <img src={html} height="50px" width="50px" />
        <img src={js} height="50px" width="50px" />
        <img src={mdb} height="50px" width="150px" />
        <img src={node} height="50px" width="70px" />
        <img src={psql} height="50px" width="50px" />
        <img src={r} height="50px" width="50px" />
        <img src={rails} height="50px" width="50px" />
        <img src={react} height="50px" width="150px" />
        <img src={rst} height="50px" width="150px" />
        <img src={ruby} height="50px" width="50px" />
        <img src={sqlserv} height="75px" width="100px" />
      </div>
    )
  }

}

export default SkillPage
