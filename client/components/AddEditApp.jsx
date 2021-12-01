import React, { useState } from 'react';
import axios from 'axios';
import Popup from './Popup';

const AddEditApp = props => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [state, setState] = useState({
    company: '',
    job_title: '',
    positionType: '',
    industry: '',
    date_of_application: new Date(),
    date_posted: Date.now().toLocaleString(),
    recruiterName: '',
    recruiterEmail: '',
  });

  const handleAddApp = () => {
    console.log(state);
    axios
      .post('/api/application/create', state)
      .then(res => {
        props.setApps({...props.apps, needsRefresh: true});
      })
      .catch(err => console.log('ERROR:', err));
  };
  
  
  return (

    <div>
      <h3>
        <input style={{marginTop: 10}} type='button' className='addApp' value='Add' onClick={setTogglePopup}/>
        <main>
          <Popup trigger={togglePopup} setTrigger={setTogglePopup}>
            <form className='popUp'> 
              <br/>
              <label>Company</label>
              <input
                type="text"
                value={state.company}
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
                value={state.recruiterName}
                onChange={e => setState({ ...state, recruiterName: e.target.value })}
              />
              <label>Recruiter Email</label>
              <input
                type="text"
                value={state.recruiterEmail}
                onChange={e => setState({ ...state, recruiterEmail: e.target.value })}
              />
              <input type="button" value='Add' onClick={() => {setTogglePopup(false); handleAddApp();}}/>
            </form>
          </Popup>
        </main>
      </h3>
    </div>

  );
};

export default AddEditApp;