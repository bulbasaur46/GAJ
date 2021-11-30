import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginForm = (props) => {
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState('');
  
  const history = useNavigate();

  
  //   const handleLogin = () => {
  //     //axios request
  //     setError(null);
  //     axios
  //       .post(/*nothing yet*/, { email: email.value, password: password.value })
  //       .then((res) => {
  //         console.log('Wrong password response: ', res);'));
  //         if (res.data.error) {
  //           setError(res.data.error);
  //         } else {
  //           props.history.push({
  //             pathname: '/',
  //             state: response.data.user
  //           });
  //     };
  //   })
  //   .catch((err) => {
  //     console.log('Caught error in axios.catch');
  //     setError('Something went wrong, Please try again later');
  //   });
  // };
  
  return (
    <div className='wrap'>
      <div className='login-field'>
        <input 
          type='text'
          id='email'
          {...email}
          placeholder='Email'
          autoComplete='new-password'
          required
        />
      </div>
      <div className='login-field'>
        <input
          type='password'
          id='password'
          {...password}
          placeholder='Password'
          autoComplete='new-password'
          required
        />
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