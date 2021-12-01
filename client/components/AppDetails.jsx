import React from 'react';
import { useLocation } from 'react-router';
import { Grid } from '@mui/material';
import AddEditApp from './AddEditApp';

const AppDetails = props => {
  const { state } = useLocation();
  return (
    <div className="app-details">
      <span>
        <p>Company</p><p>{state.company}</p>
      </span>
      <span>
        <p>Industry</p><p>{state.industry}</p>
      </span>
      <span>
        <p>Job Title</p><p>{state.job_title}</p>
      </span>
      <span>
        <p>Date Appped</p><p>{new Date(state.date_of_application).toLocaleDateString()}</p>
      </span>
      <span>
        <p>Date Posted</p><p>{new Date(state.date_posted).toLocaleDateString()}</p>
      </span>
      <span>
        <p>URL</p><p>{state.url}</p>
      </span>
      <span>
        <p>Wage</p><p>{state.wage}</p>
      </span>
      <span>
        <p>Recruiter Name</p><p>{state.recruiter_name}</p>
      </span>
      <span>
        <p>Recruiter Email</p><p>{state.recruiter_email}</p>
      </span>
      <span>
        <p>Notes</p><p>{state.notes}</p>
      </span>
    </div>
  );
};

export default AppDetails;