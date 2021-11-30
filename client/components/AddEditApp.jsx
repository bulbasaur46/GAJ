import React, { useState } from 'react';
import axios from 'axios';
import Popup from './Popup';

const AddEditApp = props => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [state, setState] = useState({
    company: '',
    position: '',
    positionType: '',
    industry: '',
    dateApplied: new Date(),
    datePosted: Date.now().toLocaleString(),
    recruiterName: '',
    recruiterEmail: '',
  });

  // const handleAddApp = () => {
  //   axios
  //     .post(`api/user/applications/${props.userId._id}`, state)
  //     .then(res => {
  //       props.setState({...props.state, needsRefresh: true});
  //     })
  //     .catch(err => console.log('ERROR:', err));
  // };
  
  
  return (

    <div>
      <h3>
        <input style={{marginTop: 10}} type='button' className='addApp' value='Add' onClick={setTogglePopup}/>
        <main>
          <Popup trigger={togglePopup} setTrigger={setTogglePopup}>
            <form>
              <br/>
              <label>Company</label>
              <input
                type="text"
                value={state.company}
                onChange={e => setState({ ...state, company: e.target.value })}
              />
              <label>Position</label>
              <input
                type="text"
                value={state.position}
                onChange={e => setState({ ...state, position: e.target.value })}
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
                value={state.dateApplied}
                onChange={e => setState({ ...state, dateApplied: e.target.value })}
              />
              <label>Date Posted</label>
              <input
                type="date"
                value={state.datePosted}
                onChange={e => setState({ ...state, datePosted: e.target.value })}
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
              {/* <input type="submit" value='Add' onClick={() => {setTogglePopup(false); handleAddApp();}}/> */}
            </form>
          </Popup>
        </main>
      </h3>
    </div>

  );
};

export default AddEditApp;