import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignupForm = props => {

  const email = useFormInput('');
  const password = useFormInput('');
  const password2 = useFormInput('');
  const username = useFormInput('');

  const history = useNavigate();
  
  
  // const handleSignup = e => {
  //   //check if passwords match
  //   e.preventDefault();
  //   if (password.value !== password2.value) {
  //   //axios request
  //   axios.post(/*nothing yet*/, {
  //     username: username.value,
  //     email: email.value,
  //     password: password.value
  //   }, {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*'
  //     }
  //   })
  //   .then(res => {
  //     props.history.push({
  //       pathname: '/dashboard',
  //       state: res.data.user
  //     })
  //   })
  //   .catch(err => console.log(err));
  //   } else {
  //     alert('Passwords do not match');
  //   }
  // };

  
  return (
    <div className='wrap'>
      <div className='signup-pg'>
        <center>Sign-up with your email address</center><br/><br/>
        <div>
          What is your email? <br/>
          <input type='text' placeholder='Enter your email' id='email' value={email.value} onChange={email.onChange} />
        </div>
        <div style={{marginTop: 10}}>
          Create a password: <br/>
          <input type='password' placeholder='Enter your password' id='password' value={password.value} onChange={password.onChange} />
        </div>
        <div style={{marginTop: 10}}>
          Confirm your password: <br/>
          <input type='password' placeholder='Confirm your password' id='password2' value={password2.value} onChange={password2.onChange} />
        </div>
        <div style={{marginTop: 10}}>
          What is your username? <br/>
          <input type='text' placeholder='Enter your username' id='username' value={username.value} onChange={username.onChange} />
        </div>
        <div> <br/>
          {/* <input type='submit' className='submit' id='register' onClick={handleSignup}/> */}
        </div>
      </div>
    </div>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default SignupForm;