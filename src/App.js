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

                <iframe src="https://drive.google.com/file/d/144qYw5e0LwV760Pe2Dx1RNYkrbTRMiPy/preview" width="640" height="480"></iframe>

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
