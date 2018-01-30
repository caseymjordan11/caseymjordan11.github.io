import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import './HomeBody.css'
import me from './images/me.jpg'

class HomeBody extends Component {
  linked(){
    window.open('http://www.linkedin.com/in/casey-jordan')
  }

  face(){
    window.open('https://www.facebook.com/casey.m.jordan.7')
  }

  twit(){
    window.open('https://twitter.com/CaseyMJordan')
  }

  render() {
    return(
    <div>
      <div className="body">
        <img className="me" src={me} height="250px" width="250px" alt="Pic"/>
        <div className="aboutMe">
          <h1> Who am I? </h1>
          <p className="par">
          My name is Casey Jordan. I am a May 2017 graduate of Wesleyan University, where I studied Political Science and Applied Data Science. I am a January 2018 Graduate of General Assembly’s Full Stack Web Development immersive. I have 3+ years of data science and analytics experience in both academic and corporate settings, as well as 6 months of full stack web development experience. I am currently employed as a Software Engineer at Booz Allen Hamilton and located in Washington, DC.
          </p>
        </div>
      </div>
      <div className="profLinks">
        <FontAwesome
          className='linkedin'
          name='linkedin'
          size='3x'
          onClick={this.linked}
        />
        <FontAwesome
          className='linkedin'
          name='twitter'
          size='3x'
          onClick={this.twit}
        />
        <FontAwesome
          className='linkedin'
          name='facebook'
          size='3x'
          onClick={this.face}
        />
      </div>


    </div>
    )
  }
}

export default HomeBody
