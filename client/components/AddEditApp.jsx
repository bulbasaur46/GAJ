import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
// import Popup from './Popup';
import { Button } from '@mui/material';

const AddEditApp = props => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [togglePopup, setTogglePopup] = useState(false);
  let defaultState;
  if (state) {
    defaultState = {...state, mode: 'edit'};
  } else {
    defaultState = {
      mode: 'add',
      company: '',
      job_title: '',
      industry: '',
      date_of_application: new Date(),
      date_posted: Date.now().toLocaleString(),
      recruiter_name: '',
      recruiter_email: '',
      notes: '',
      url: '',
      wage: '',
    };
  }
  const [appState, setAppState] = useState(defaultState);

  const handleSave = () => {
    console.log(appState);
    if (appState.mode === 'add') {
      console.log('request in add mode');
      axios
        .post('/api/application/create', appState)
        .then(res => {
          navigate('/home');
        })
        .catch(err => console.log('ERROR:', err));
    } else if (appState.mode === 'edit') {
      console.log('request in edit mode');
      axios
        .post(`/api/application/updateApplication`, appState)
        .then(res => {
          navigate('/home');
        })
        .catch(err => console.log('ERROR:', err));
    }
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
              value={appState.company}
              className="add"
              onChange={e => setAppState({ ...appState, company: e.target.value })}
            />
            <label>Job Title</label>
            <input
              type="text"
              value={appState.job_title}
              className="add"
              onChange={e => setAppState({ ...appState, job_title: e.target.value })}
            />
            <label>Industry</label>
            <input
              type="text"
              value={appState.industry}
              className="add"
              onChange={e => setAppState({ ...appState, industry: e.target.value })}
            />
            <label>Pay</label>
            <input
              type="text"
              value={appState.wage}
              className="add"
              onChange={e => setAppState({ ...appState, wage: e.target.value })}
            />
            <label>Date Posted</label>
            <input
              type="date"
              value={appState.date_posted}
              className="add"
              onChange={e => setAppState({ ...appState, date_posted: e.target.value })}
            />
            <label>URL</label>
            <input
              type="text"
              value={appState.url}
              className="add"
              onChange={e => setAppState({ ...appState, url: e.target.value })}
            />
            <label>Date Applied</label>
            <input
              type="date"
              value={appState.date_of_application}
              className="add"
              onChange={e => setAppState({ ...appState, date_of_application: e.target.value })}
            />
            <label>Recruiter Name</label>
            <input
              type="text"
              value={appState.recruiter_name}
              className="add"
              onChange={e => setAppState({ ...appState, recruiter_name: e.target.value })}
            />
            <label>Recruiter Email</label>
            <input
              type="text"
              value={appState.recruiter_email}
              className="add"
              onChange={e => setAppState({ ...appState, recruiter_email: e.target.value })}
            />
            <label>Notes</label>
            <input
              type="text"
              value={appState.notes}
              className="add"
              onChange={e => setAppState({ ...appState, notes: e.target.value })}
            />
            <input type="button" value='Save' className='add' onClick={() => handleSave()}/>
          </form>
        </main>
      </h3>
    </div>
  );
};

export default AddEditApp;