import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const InterviewList = ({interviews, onDelete}) => {
  const rows = interviews.map(int => {
    return ({ id: int.id, company: int.company, stage: int.stage, date: int.date, notes: int.notes });
  });
  const columns = [
    {field: 'col1', header: 'Company'},
    {field: 'col2', header: 'Stage'},
    {field: 'col3', header: 'Date'},
    {field: 'col4', header: 'Notes'},
  ];

  return (
    <div>
      <DataGrid rows={rows} columns={columns} />
      {/* <ul>
        {interviews.map(interview => (
          <li key={interview.id}>
            {interview.name}
            <button onClick={() => onDelete(interview.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default InterviewList;