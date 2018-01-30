import React, { Component } from 'react'
import './App.css'

import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage.js'
import ContactForm from './ContactForm.js'

class App extends Component {
  constructor(){
    super()
    this.state={
      class:"show"
    }
    this.click = this.click.bind(this)
  }

  click(e){
    e.preventDefault()
    if (this.state.class === "show") {
    this.setState({
      class:"hide"
    })
  } else {
    this.setState({
      class:"show"
    })
  }
}

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
              <button onClick={this.click}>Hide or Show</button>
              <div className={this.state.class}>

              <iframe src="https://docs.google.com/document/d/e/2PACX-1vQh8TilXUvMpSCuQpSWlg9zi4xq_XE4h4r9Vp-2XW5VmVYWGM5uEwl0RDbBumHnuX0Fn5TlImoFqg9e/pub?embedded=true"></iframe>

              </div>
            </div>
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
