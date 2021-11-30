import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SignupForm = (props) => {

  const email = useFormInput('');
  const password = useFormInput('');
  const password2 = useFormInput('');
  const username = useFormInput('');
  
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
  
  const handleSignup = () => {
    //check if passwords match
    //axios request
  };

  
  return (
    <div>hi</div>
  );
};

export default SignupForm;