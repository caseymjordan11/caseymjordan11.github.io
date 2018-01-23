import React, { Component } from 'react'
import './App.css'

import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage.js'

class App extends Component {
  render() {
    return (
      <div className="app">
      <Switch>
          <Route exact path='/' render ={() => (
            <div>
              <HomePage/>
            </div>
          )}  />
          <Route exact path='/skills' render ={() => (
            <div>
              <h1>Skills</h1>
            </div>
          )}  />
          <Route exact path='/work' render ={() => (
            <div>
              <h1>Work</h1>
            </div>
          )}  />
          <Route exact path='/contact' render ={() => (
            <div>
              <h1>Contact</h1>
            </div>
          )}  />
      </Switch>
      </div>
    )
  }
}

export default App;
