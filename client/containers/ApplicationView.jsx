import React from 'react';
import ApplicationList from '../components/ApplicationList';
import AppDetails from '../components/AppDetails';
import AddEditApp from '../components/AddEditApp';

const ApplicationView = props => {
  return (
    <div className='outerbox'>
      <div className='innerbox'>
        <h1>Your Applications</h1>
      </div>
      <br/>
      <hr className='solid'/>
      <br/>
      <div>
        <AddEditApp/>
      </div>
      <br/>
      <hr className='solid'/>
      <br/>
      <div>
        <ApplicationList onClick={() => {<AppDetails/>;}}/>
      </div>
    </div>
  );
};

export default ApplicationView;