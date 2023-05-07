import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'
import axios from 'axios';
import "../../styles/ContactMe.css"
import "../../styles/Headings.css"

export default function ContactMe() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if(!name){
      setErrorMessage("Please enter in a name.")
    }
    if(!message){
      setErrorMessage('Please enter in a message before submitting.');
      return;
    }
    try{
      axios
      .post("https://getform.io/f/d4ffb79c-676d-4a60-bef5-55c16ac4e4c1", {
          name: name,
          email: email,
          message: message,
      }, 
      { headers: {'Accept': 'application/json'}})
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }catch(err){
      console.error(err);
    }
    alert(`Thank you, ${name}!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div class="contactme">
    <h1 class="contact-me-header heading">Contact Me</h1>
    {/* <p>(Currently no working backend, contact hfran7@yahoo.com or 904-404-6577 if you would like to get in touch!)</p> */}
      <form className="form">
        <label>Name: </label><br></br>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder=""
        /><br></br>
        <label>Email: </label><br></br>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder=""
          /><br></br>
        <label>Message:</label><br></br>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          cols="50"
          rows= "10"
          placeholder=""
        ></textarea><br></br>
        <button class="button" type="submit" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )
}