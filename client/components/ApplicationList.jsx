import React from 'react';

const ApplicationList = props => {
  return (
    <div>
      <h1>Application List</h1>
      {/* <ul>
        {props.applications.map(application => {
          return (
            <li key={application.id}>
              <h2>{application.name}</h2>
              <h2>{application.description}</h2>
              <h2>{Date.now}</h2>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default ApplicationList;