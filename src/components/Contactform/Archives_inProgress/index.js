import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-testing-library';
import firebase from 'firebase/app';

//components
// import Button from '../Buttons/Button';

const ContactForm = () => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: 'AIzaSyDjADDXIRhlKVJyLjNsY8VL-WmbzhbPFQ4',
    authDomain: 'nextbypl.firebaseapp.com',
    databaseURL: 'https://nextbypl.firebaseio.com',
    projectId: 'nextbypl',
    storageBucket: 'nextbypl.appspot.com',
    messagingSenderId: '769109645864',
    appId: '1:769109645864:web:078e498747e42f99',
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('formSubmition');

  // listen for form submit
  document.getElementById('ContactForm').addEventListener('submit', submitForm);

  // submit form
  function submitForm(event) {
    event.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // save message
    saveMessage(name, email, phone, message);

    console.log(123);
  }

  // Funciton to get form values

  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  function saveMessage(name, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  }

  return (
    <div className="mb-6 text-left nxt_body-xsmall">
      <form id="contactForm">
        <div>
          <label>Name</label>
          <input type="text" className="form-control mb-3" id="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" className="form-control mb-3" id="email" />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" className="form-control mb-3" id="phone" />
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="text"
            className="form-control mb-5"
            id="message"
            rows="3"
          />
        </div>
        <div>
          <button type="submit" onClick={submitForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
