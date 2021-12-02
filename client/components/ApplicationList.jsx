import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const ApplicationList = ({apps, setRefresh}) => {
  // const delButton = 
  const rows = apps.length ? apps.map(app => {
    return ({ id: app._id, ...app});
  }) : [];
  
  function dateFix(params) {
    return new Date(params.value).toLocaleDateString();
  }
  
  const columns = [
    {field: 'company', headerName: 'Company', flex: 1},
    {field: 'job_title', headerName: 'Job Title', flex: 1},
    {field: 'date_of_application', headerName: 'Date Applied', flex: 0.5, minWidth: 100, valueFormatter: dateFix},
    {field: 'status', headerName: 'Status', flex: 0.5, minWidth: 100}
  ];
  
  const navigate = useNavigate();
  const handleClick = (table) => {
    console.log(table.row.company);
    navigate(`/app/${table.row.id}`, {state: table.row});
  };

  return (
    <div>
      <h1>Your Applications</h1>  
      <div style={{ height: 350, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} onRowClick={handleClick} />
      </div>

    </div>
  );
};

export default ApplicationList;