import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Grid } from '@mui/material';
import AddEditApp from './AddEditApp';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AppDetails = props => {
  const { state } = useLocation();
  const { 
    company, 
    industry, 
    job_title, 
    wage, 
    date_posted, 
    url, 
    date_of_application, 
    recruiter_name, 
    recruiter_email, 
    notes, 
  } = state;

  const navigate = useNavigate();
  
  const handleEdit = () => {
    navigate('/app/edit', {state: state});
  }

  const handleDelete = () => {
    // console.log(state);
    
    axios.post(`/api/application/deleteApplication`, { ...state })
      .then(res => {
        navigate('/home');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="app-details">
      <span>
        <h3>Company: {state.company}</h3>
      </span>
      <span>
        <h3>Industry: {industry}</h3>
      </span>
      <span>
        <h3>Job Title: {job_title}</h3>
      </span>
      <span>
        <h3>Wage: {wage}</h3>
      </span>
      <span>
        <h3>Date Applied: {new Date(date_of_application).toLocaleDateString()}</h3>
      </span>
      <span>
        <h3>URL: {url}</h3>
      </span>
      <span>
        <h3>Date Posted: {new Date(date_posted).toLocaleDateString()}</h3>
      </span>
      <span>
        <h3>Recruiter Name: {recruiter_name}</h3>
      </span>
      <span>
        <h3>Recruiter Email: {recruiter_email}</h3>
      </span>
      <span>
        <h3>Notes: </h3><h5>{notes}</h5>
      </span>
      <br/>
      <input type="button" value='Edit' className='add' onClick={() => handleEdit()}/>
      <input type="button" value='Delete' className='delete' onClick={() => handleDelete()}/>
      <Button className="backBtn" variant="text">
        <Link to="/home">Back</Link>
      </Button>
    </div>
  );
};

export default AppDetails;