import React, { Component } from 'react'

import './WorkPage.css'
import Header from './Header.js'

class WorkPage extends Component {
    constructor(){
      super()
      this.state={
        class:"hide",
        class2: "hide",
        class3: "hide"
      }
      this.click = this.click.bind(this)
      this.click2 = this.click2.bind(this)
      this.click3 = this.click3.bind(this)
    }

    click(e){
      e.preventDefault()
      if (this.state.class === "show") {
      this.setState({
        class:"hide"
      })
    } else {
      this.setState({
        class:"show",
        class2:"hide",
        class3: "hide"
      })
    }
  }

    click2(e){
      e.preventDefault()
      if (this.state.class2 === "show") {
      this.setState({
        class2:"hide"
      })
    } else {
      this.setState({
        class2:"show",
        class: "hide",
        class3: "hide"
      })
    }
  }

  click3(e){
    e.preventDefault()
    if (this.state.class3 === "show") {
    this.setState({
      class3:"hide"
    })
  } else {
    this.setState({
      class3:"show",
      class: "hide",
      class2: "hide"
    })
  }
}

  render() {
    return(
      <div>
        <Header title="My Work"/>
        <div className="container">
          <div className="buttons">
            <button className="dropdownSelect" onClick={this.click2}>2016 Election Analysis</button>
            <button className="dropdownSelect" onClick={this.click3}>NEPSA 2017 Paper</button>
          </div>

          <div className={this.state.class2}>
            <iframe src="https://drive.google.com/file/d/144qYw5e0LwV760Pe2Dx1RNYkrbTRMiPy/preview" width="800" height="800"></iframe>
          </div>

          <div className={this.state.class3}>
            <iframe src="https://drive.google.com/file/d/14bxm-XTR1UznFq9q89huxlr4BDtcBUrF/preview" width="800" height="800"></iframe>
          </div>

        </div>
      </div>
    )
  }
}

export default WorkPage
