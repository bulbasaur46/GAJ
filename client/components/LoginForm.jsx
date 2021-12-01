
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';


const LoginForm = (props) => {
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  
  const handleLogin = () => {
    //axios request
    setError(null);
    console.log('email:', email.value, 'password:', password.value);
    axios
      .post('/api/user/logIn', { 
        email: email.value, 
        password: password.value 
      })
      .then((res) => {
        console.log('Wrong password response: ', res);
        if (res.data.error) {
          setError(res.data.error);
        } else {
          navigate('/home', { state: res.data.user });
        }
      })
      .catch((err) => {
        setError('Something went wrong, Please try again later');
      });
  };

  
  return (
    <div className='wrap'>
      <center>Welcome</center><br/>
      <div className='login-field'>
        <TextField 
          className='input' 
          type='email' 
          id='email' 
          {...email} 
          placeholder='Email' 
          autoComplete='new-password' 
          required 
        />
      </div>
      <div className='login-field'>
        <TextField 
          className='input' 
          type='password' 
          id='password' 
          {...password} 
          placeholder='Password' 
          autoComplete='new-password' 
          required 
        />
      </div>
      <ErrorMessage error={error} setError={setError}/>
      <div>
        <div>{''}
          <br/>
          <button className='submit' onClick={handleLogin}>Login</button>
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


export default LoginForm;