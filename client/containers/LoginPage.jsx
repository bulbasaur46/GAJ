import React from 'react';
import { Button } from '@mui/material'
import { Outlet, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';


const LoginPage = props => {

  return (
    <div className="login-page">
      <span>
        <Button variant='text' style={{float: 'right'}}>
          <Link to='/signup'>Sign Up</Link>
        </Button>
        <Outlet />
      </span>
    </div>
  );
};

export default LoginPage;