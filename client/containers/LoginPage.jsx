import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';


const LoginPage = props => {
  return (
    <div>
      <span>
        <button style={{margin: 5}}><Link to='/login'>Log In</Link></button>
        <button><Link to='/signup'>Sign Up</Link></button>
        <Outlet />
      </span>
    </div>
  );
};

export default LoginPage;