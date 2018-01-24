import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './HomeBody.css'
import me from './images/me.jpg'

class HomeBody extends Component {
  render() {
    return(
      <div className="body">
        <img className="me" src={me} height="250px" width="250px" alt="Pic"/>
        <div className="aboutMe">
          <h1> Who am I? </h1>
          <p className="par">
          My name is Casey Jordan. I am a May 2017 graduate of Wesleyan University, where I studied Political Science and Applied Data Science. I am a January 2018 Graduate of General Assembly’s Full Stack Web Development immersive. I have 3+ years of data science and analytics experience in both academic and corporate settings, as well as 6 months of full stack web development experience. I am currently employed as a Software Engineer at Booz Allen Hamilton and located in Washington, DC.
          </p>
        </div>
      </div>
    )
  }
}

export default HomeBody
