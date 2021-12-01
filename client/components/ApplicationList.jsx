import React from 'react';
import AddEditApp from './AddEditApp';
import { DataGrid } from '@mui/x-data-grid';

const ApplicationList = ({apps, setApps}) => {
  const rows = apps.length ? apps.map(app => {
    return ({ id: app.id, company: app.company, position: app.position });
  }) : [];
  const columns = [
    {field: 'col1', headerName: 'Company', flex: 1},
    {field: 'col2', headerName: 'Position', flex: 1},
    {field: 'col3', headerName: 'Date Applied', flex: 0.5, minWidth: 100},
    {field: 'col4', headerName: 'Status', flex: 0.5, minWidth: 100},
  ];
  
  return (
    <div>
      <h1>Your Applications</h1>
      <AddEditApp apps={apps} setApps={setApps}/>

        <div style={{ height: 350, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>

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