import React, { Component } from 'react';

import './ContactForm.css'
import Header from './Header.js'
import Footer from './Footer.js'

class ContactForm extends Component {
  render() {
    return(
    <div>
      <Header title="Contact Me"/>
        <form className="form" action="https://formspree.io/caseymjordan11@gmail.com" method="POST">
          <div className="name">
            <input className="nameText" type="name" name="name" placeholder="Your name" />
          </div>
          <div className="email">
            <input className="emailText" type="email" name="email" placeholder="Your email"/>
          </div>
          <div className="message">
            <textarea className="messageText" name="message" placeholder="Your message"></textarea>
          </div>
          <div>
            <button className="emailButton" type="submit">Send Message</button>
          </div>
        </form>
      <Footer/>
    </div>
    )
  }


}

export default ContactForm
