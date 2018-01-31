import React, { Component } from 'react'
import './App.css'

import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage.js'
import ContactForm from './ContactForm.js'
import WorkPage from './WorkPage.js'
import SkillPage from './SkillPage.js'

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
            <SkillPage />
          )}  />
          <Route exact path='/work' render ={() => (
            <WorkPage />
          )}  />
          <Route exact path='/contact' render ={() => (
            <div>
              <ContactForm />
            </div>
          )}  />
      </Switch>
      </div>
    )
  }
}

export default App;
