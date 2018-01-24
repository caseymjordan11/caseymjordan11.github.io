import React, { Component } from 'react';

import './HomePage.css'

import Header from './Header.js'
import HomeBody from './HomeBody.js'
import Footer from './Footer.js'

class HomePage extends Component {
  render() {
    return (
    <div>
      <Header/>
      <HomeBody/>
      <Footer/>
    </div>
    )
  }
}

export default HomePage
