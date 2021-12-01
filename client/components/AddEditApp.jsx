import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Popup from './Popup';
import { Button } from '@mui/material';

const AddEditApp = props => {
  const navigate = useNavigate();
  const [togglePopup, setTogglePopup] = useState(false);
  const [state, setState] = useState({
    company: '',
    job_title: '',
    positionType: '',
    industry: '',
    date_of_application: new Date(),
    date_posted: Date.now().toLocaleString(),
    recruiter_name: '',
    recruiter_email: '',
    notes: '',
    url: '',
    wage: '',
  });

  const handleAddApp = () => {
    console.log(state);
    axios
      .post('/api/application/create', state)
      .then(res => {
        navigate('/home');
      })
      .catch(err => console.log('ERROR:', err));
  };
  
  
{/* <Popup trigger={togglePopup} setTrigger={setTogglePopup}> */}

  return (
    <div className="add">
      <h3 >
        <main >
          <form className="add"> 
            <label>Company</label>
            <input
              type="text"
              value={state.company}
              className="add"
              onChange={e => setState({ ...state, company: e.target.value })}
            />
            <label>Job Title</label>
            <input
              type="text"
              value={state.job_title}
              onChange={e => setState({ ...state, job_title: e.target.value })}
            />
            <label>Position Type</label>
            <input
              type="text"
              value={state.positionType}
              onChange={e => setState({ ...state, positionType: e.target.value })}
            />
            <label>Industry</label>
            <input
              type="text"
              value={state.industry}
              onChange={e => setState({ ...state, industry: e.target.value })}
            />
            <label>Date Applied</label>
            <input
              type="date"
              value={state.date_of_application}
              onChange={e => setState({ ...state, date_of_application: e.target.value })}
            />
            <label>Date Posted</label>
            <input
              type="date"
              value={state.date_posted}
              onChange={e => setState({ ...state, date_posted: e.target.value })}
            />
            <label>Recruiter Name</label>
            <input
              type="text"
              value={state.recruiter_name}
              onChange={e => setState({ ...state, recruiter_name: e.target.value })}
            />
            <label>Recruiter Email</label>
            <input
              type="text"
              value={state.recruiter_email}
              onChange={e => setState({ ...state, recruiter_email: e.target.value })}
            />
            <label>Notes</label>
            <input
              type="text"
              value={state.notes}
              onChange={e => setState({ ...state, notes: e.target.value })}
            />
            <label>URL</label>
            <input
              type="text"
              value={state.url}
              onChange={e => setState({ ...state, url: e.target.value })}
            />
            <label>Pay</label>
            <input
              type="text"
              value={state.wage}
              onChange={e => setState({ ...state, wage: e.target.value })}
            />
            <input type="button" value='Add' onClick={() => handleAddApp()}/>
          </form>
        </main>
      </h3>
    </div>
  );
};

export default AddEditApp;